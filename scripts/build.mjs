import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { navItems, renderPages } from "../src/site.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist");
const rawSiteUrl = process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "");
const siteUrl = rawSiteUrl.replace(/\/$/, "");

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, "public"), output, { recursive: true });

for (const [relativePath, html] of renderPages(siteUrl)) {
  const target = path.join(output, relativePath);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, html, "utf8");
}

const robots = siteUrl
  ? `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
  : "User-agent: *\nAllow: /\n";
await writeFile(path.join(output, "robots.txt"), robots, "utf8");

if (siteUrl) {
  const urls = navItems.map(([route]) => `  <url><loc>${siteUrl}${route}</loc></url>`).join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  await writeFile(path.join(output, "sitemap.xml"), sitemap, "utf8");
}

console.log(`Built ${renderPages(siteUrl).size} pages${siteUrl ? ` for ${siteUrl}` : ""}.`);
