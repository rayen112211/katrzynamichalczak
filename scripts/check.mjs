import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist");
const errors = [];

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
  if (!/<html lang="pl">/.test(html)) errors.push(`${relative}: missing Polish language declaration`);
  if (!/<h1[ >]/.test(html)) errors.push(`${relative}: missing h1`);
  if (!/<meta name="description" content="[^"]+">/.test(html)) errors.push(`${relative}: missing description`);
  if (!/class="skip-link"/.test(html)) errors.push(`${relative}: missing skip link`);
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
