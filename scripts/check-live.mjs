import { allRoutes, redirects } from "../src/site.mjs";

const origin = process.env.QA_BASE || "https://www.katarzynaklaumichalczak.pl";
const base = new URL(origin);
if (base.pathname !== "/" || base.search || base.hash) throw new Error("QA_BASE must be an origin.");

const errors = [];
const pages = new Map();
const fetched = new Map();
let linkCount = 0;

async function get(path) {
  if (!fetched.has(path)) {
    fetched.set(path, fetch(new URL(path, base), { redirect: "manual" }).catch((error) => ({ status: 0, error })));
  }
  return fetched.get(path);
}

for (const route of allRoutes) {
  const response = await get(route);
  if (response.status !== 200) {
    errors.push(`${route}: HTTP ${response.status}`);
    continue;
  }
  const html = await response.text();
  pages.set(route, html);
  if (!html.includes(`rel="canonical" href="${base.origin}${route}"`)) errors.push(`${route}: wrong canonical URL`);
  if (!html.includes(`property="og:url" content="${base.origin}${route}"`)) errors.push(`${route}: wrong social URL`);
  const suffix = route.startsWith("/en/") ? "-en" : route.startsWith("/es/") ? "-es" : "";
  for (const tag of [`property="og:image" content="${base.origin}/social-preview${suffix}.png"`, `name="twitter:image" content="${base.origin}/social-preview${suffix}.png"`, `name="twitter:card" content="summary_large_image"`]) {
    if (!html.includes(tag)) errors.push(`${route}: missing social preview tag ${tag}`);
  }
  for (const language of ["pl", "en", "es", "x-default"]) {
    if (!html.includes(`hreflang="${language}"`)) errors.push(`${route}: missing ${language} alternate`);
  }
}

for (const [route, html] of pages) {
  for (const [, rawHref] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const href = rawHref.replaceAll("&amp;", "&");
    if (/^(?:mailto:|tel:|javascript:)/i.test(href)) continue;
    const destination = new URL(href, new URL(route, base));
    if (destination.origin !== base.origin) continue;
    linkCount++;
    const target = pages.get(destination.pathname);
    if (!target) {
      const response = await get(destination.pathname);
      if (response.status !== 200) errors.push(`${route}: ${href} returned HTTP ${response.status}`);
    } else if (destination.hash && !target.includes(`id="${decodeURIComponent(destination.hash.slice(1))}"`)) {
      errors.push(`${route}: ${href} points to a missing section`);
    }
  }
  for (const [, asset] of html.matchAll(/\b(?:src|href)="(\/(?:images\/[^"?]+|styles\.css(?:\?[^\"]*)?|main\.js(?:\?[^\"]*)?|favicon-k\.svg|site\.webmanifest))"/g)) {
    const response = await get(asset);
    if (response.status !== 200) errors.push(`${route}: asset ${asset} returned HTTP ${response.status}`);
  }
}

for (const asset of ["/social-preview.png", "/social-preview-en.png", "/social-preview-es.png", "/favicon-k.svg", "/favicon-32.png", "/favicon-96.png", "/favicon.ico", "/apple-touch-icon.png", "/icon-192.png", "/icon-512.png", "/site.webmanifest"]) {
  const response = await get(asset);
  if (response.status !== 200) errors.push(`${asset}: HTTP ${response.status}`);
}

for (const { source, destination } of redirects) {
  const response = await get(source);
  const expected = new URL(destination, base).href;
  const location = response.headers?.get("location");
  if (response.status !== 308 || !location || new URL(location, base).href !== expected) {
    errors.push(`${source}: expected 308 to ${expected}, got ${response.status} ${response.headers?.get("location")}`);
  }
}

const sitemapResponse = await get("/sitemap.xml");
const sitemap = sitemapResponse.status === 200 ? await sitemapResponse.text() : "";
if (sitemapResponse.status !== 200 || allRoutes.some((route) => !sitemap.includes(`<loc>${base.origin}${route}</loc>`))) errors.push("Sitemap missing or incomplete");
const robotsResponse = await get("/robots.txt");
const robots = robotsResponse.status === 200 ? await robotsResponse.text() : "";
if (robotsResponse.status !== 200 || !robots.includes(`Sitemap: ${base.origin}/sitemap.xml`)) errors.push("robots.txt missing or incorrect");

for (const pending of fetched.values()) {
  const response = await pending;
  if (response.body && !response.bodyUsed) await response.body.cancel();
}

console.log(`Checked ${pages.size}/${allRoutes.length} live pages, ${linkCount} internal links, ${fetched.size - allRoutes.length} additional URLs.`);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log("All direct pages, sub-links, anchors, assets, redirects, and search files passed.");
}
