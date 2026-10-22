import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { allRoutes, redirects, routeDefinitions } from "../src/site.mjs";
import { siteUrl } from "../src/site-config.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist");
const errors = [];
const knownRoutes = new Set(allRoutes);
const versions = new Set();
const pageCache = new Map();
for (const route of allRoutes) {
  const file = path.join(output, route.slice(1), "index.html");
  try { pageCache.set(route, await readFile(file, "utf8")); }
  catch { errors.push(`${route}: generated page missing`); }
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else files.push(fullPath);
  }
  return files;
}

for (const file of (await walk(output)).filter((item) => item.endsWith(".html"))) {
  const html = await readFile(file, "utf8");
  const relative = path.relative(output, file);
  const expectedLanguage = relative.startsWith(`en${path.sep}`) ? "en" : relative.startsWith(`es${path.sep}`) ? "es" : "pl";
  if (!new RegExp(`<html lang="${expectedLanguage}">`).test(html)) errors.push(`${relative}: incorrect language declaration`);
  if (!/<h1[ >]/.test(html)) errors.push(`${relative}: missing h1`);
  if (!/<meta name="description" content="[^"]+">/.test(html)) errors.push(`${relative}: missing description`);
  if (!/class="skip-link"/.test(html)) errors.push(`${relative}: missing skip link`);
  if (!/class="language-switch"/.test(html)) errors.push(`${relative}: missing language switch`);
  const definition = routeDefinitions.find((route) => path.join(route[expectedLanguage].path.slice(1), "index.html") === relative);
  if (!definition) errors.push(`${relative}: unexpected generated page`);
  else {
    for (const language of ["pl", "en", "es", "x-default"]) {
      const alternate = definition[language === "x-default" ? "pl" : language].path;
      if (!html.includes(`hreflang="${language}" href="${siteUrl}${alternate}"`)) errors.push(`${relative}: missing or wrong ${language} alternate`);
    }
    const canonical = `${siteUrl}${definition[expectedLanguage].path}`;
    if (!html.includes(`rel="canonical" href="${canonical}"`) || !html.includes(`property="og:url" content="${canonical}"`)) errors.push(`${relative}: incorrect canonical or Open Graph URL`);
  }
  if (!/<title>[^<]*Katarzyna Klau Michalczak/.test(html)) errors.push(`${relative}: inconsistent author name in title`);
  if (!/class="nav-cta"/.test(html) || !/class="photo-credits"/.test(html)) errors.push(`${relative}: missing shared navigation or photo credits`);
  if (!html.includes('href="mailto:kasia.michalczak@gmail.com"')) errors.push(`${relative}: missing working email link`);
  if (!/property="og:image:alt" content="[^"]+"/.test(html)) errors.push(`${relative}: missing social image description`);
  const version = html.match(/name="build-version" content="([^"]+)"/)?.[1];
  if (!version) errors.push(`${relative}: missing build version`);
  else versions.add(version);
  if (expectedLanguage === "es" && /Open in a new tab|Black-and-white portrait|Katarzyna Klau Michalczak laughing|A conversation about the book|A live conversation|An interview published|„/.test(html)) errors.push(`${relative}: untranslated Spanish interface or inconsistent quotes`);
  if (expectedLanguage === "en" && /Otwórz w nowej karcie/.test(html)) errors.push(`${relative}: Polish interface in English page`);
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(json); } catch { errors.push(`${relative}: invalid JSON-LD`); }
  }
  if (!/<script type="application\/ld\+json">/.test(html) || !/"@type":"Person"/.test(html)) errors.push(`${relative}: missing Person structured data`);
  if (/\bundefined\b/.test(html)) errors.push(`${relative}: contains undefined output`);
  if (/Wkrótce|Krótki film|book-cover-placeholder/.test(html)) errors.push(`${relative}: contains unfinished placeholder content`);
  for (const [, attributes] of html.matchAll(/<img\b([^>]*)>/g)) {
    if (!/\balt="[^"]*"/.test(attributes)) errors.push(`${relative}: image missing alt text`);
    if (!/\bwidth="\d+"/.test(attributes) || !/\bheight="\d+"/.test(attributes)) errors.push(`${relative}: image missing dimensions`);
  }
  for (const [, localPath] of html.matchAll(/href="(\/(?!\/)[^"#?]*)/g)) {
    if (/\.[a-z0-9]+$/i.test(localPath)) continue;
    if (knownRoutes.has(localPath)) continue;
    try { await access(path.join(output, localPath.replace(/^\//, ""), "index.html")); }
    catch { errors.push(`${relative}: missing local route ${localPath}`); }
  }
  const currentRoute = definition?.[expectedLanguage].path;
  for (const [, href] of html.matchAll(/href="((?:\/(?!\/)|#)[^"]*#[^"]+|#[^"]+)"/g)) {
    const target = new URL(href.replaceAll("&amp;", "&"), siteUrl + currentRoute);
    const destination = pageCache.get(target.pathname);
    const fragment = decodeURIComponent(target.hash.slice(1));
    if (!destination || !destination.includes(`id="${fragment}"`)) errors.push(`${relative}: missing anchor ${href}`);
  }
  const assetMatches = [...html.matchAll(/(?:src|href)="(\/(?:images\/[^"?]+|styles\.css|main\.js|favicon\.svg|site\.webmanifest))"/g)];
  for (const [, asset] of assetMatches) {
    try { await access(path.join(output, asset.slice(1))); }
    catch { errors.push(`${relative}: missing asset ${asset}`); }
  }
}

if (versions.size !== 1) errors.push("Generated pages do not share one build version");
const sitemap = await readFile(path.join(output, "sitemap.xml"), "utf8");
for (const route of allRoutes) {
  if (!sitemap.includes(`<loc>${siteUrl}${route}</loc>`)) errors.push(`Sitemap missing ${route}`);
}
const vercel = JSON.parse(await readFile(path.join(root, "vercel.json"), "utf8"));
for (const redirect of redirects) {
  if (!vercel.redirects.some((rule) => rule.source === redirect.source && rule.destination === redirect.destination && rule.permanent)) errors.push(`Missing production redirect for ${redirect.source}`);
  if (sitemap.includes(`<loc>${siteUrl}${redirect.source}</loc>`)) errors.push(`Redirect included in sitemap: ${redirect.source}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("All generated pages and local assets passed checks.");
