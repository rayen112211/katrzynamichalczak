import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { allRoutes } from "../src/site.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist");
const errors = [];
const knownRoutes = new Set(allRoutes);

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
  const assetMatches = [...html.matchAll(/(?:src|href)="(\/(?:images\/[^"?]+|styles\.css|main\.js|favicon\.svg|site\.webmanifest))"/g)];
  for (const [, asset] of assetMatches) {
    try { await access(path.join(output, asset.slice(1))); }
    catch { errors.push(`${relative}: missing asset ${asset}`); }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("All generated pages and local assets passed checks.");
