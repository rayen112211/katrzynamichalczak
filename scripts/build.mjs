import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { renderPages, routeDefinitions } from "../src/site.mjs";
import { siteUrl } from "../src/site-config.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist");
const sourceFiles = ["src/site.mjs", "src/content.mjs", "src/contact.mjs", "public/styles.css", "public/main.js"];
const version = createHash("sha256").update((await Promise.all(sourceFiles.map((file) => readFile(path.join(root, file), "utf8")))).join("\n").replaceAll("\r\n", "\n")).digest("hex").slice(0, 12);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, "public"), output, { recursive: true });

for (const [relativePath, html] of renderPages(siteUrl)) {
  const target = path.join(output, relativePath);
  await mkdir(path.dirname(target), { recursive: true });
  const versionedHtml = html.replace("/styles.css", `/styles.css?v=${version}`).replace("/main.js", `/main.js?v=${version}`).replace("</head>", `<meta name="build-version" content="${version}">\n</head>`);
  await writeFile(target, versionedHtml, "utf8");
}

const robots = siteUrl
  ? `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
  : "User-agent: *\nAllow: /\n";
await writeFile(path.join(output, "robots.txt"), robots, "utf8");

if (siteUrl) {
  const urls = routeDefinitions.filter((route) => !route.redirectTo).flatMap((route) => ["pl", "en", "es"].map((locale) => {
    const alternates = ["pl", "en", "es"].map((language) => `<xhtml:link rel="alternate" hreflang="${language}" href="${siteUrl}${route[language].path}"/>`).join("");
    return `  <url><loc>${siteUrl}${route[locale].path}</loc>${alternates}<xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${route.pl.path}"/></url>`;
  })).join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
  await writeFile(path.join(output, "sitemap.xml"), sitemap, "utf8");
}

console.log(`Built ${renderPages(siteUrl).size} pages${siteUrl ? ` for ${siteUrl}` : ""}.`);
