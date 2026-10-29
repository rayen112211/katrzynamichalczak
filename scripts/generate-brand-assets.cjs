const { readFile, writeFile } = require("node:fs/promises");
const path = require("node:path");
const assert = require("node:assert/strict");
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");

const root = path.resolve(__dirname, "..");

async function renderSvg(browser, svg, width, height) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  try {
    await page.setContent(`<html><head><style>html,body{margin:0;padding:0}svg{display:block;width:${width}px;height:${height}px}</style></head><body>${svg}</body></html>`);
    await page.evaluate(() => document.fonts.ready);
    const png = await page.locator("svg").screenshot({ omitBackground: false });
    assert.equal(png.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    return png;
  } finally {
    await page.close();
  }
}

function icoFromPng(png) {
  const header = Buffer.alloc(22);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header.writeUInt8(32, 6);
  header.writeUInt8(32, 7);
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png.length, 14);
  header.writeUInt32LE(22, 18);
  return Buffer.concat([header, png]);
}

async function main() {
  const icon = await readFile(path.join(root, "public", "favicon.svg"), "utf8");
  const social = await readFile(path.join(root, "assets", "social-preview.svg"), "utf8");
  const browser = await chromium.launch({ headless: true, channel: process.env.QA_CHANNEL || "chrome" });
  try {
    const icon32 = await renderSvg(browser, icon, 32, 32);
    await writeFile(path.join(root, "public", "favicon-32.png"), icon32);
    await writeFile(path.join(root, "public", "favicon.ico"), icoFromPng(icon32));
    for (const [size, name] of [[180, "apple-touch-icon.png"], [192, "icon-192.png"], [512, "icon-512.png"]]) {
      await writeFile(path.join(root, "public", name), await renderSvg(browser, icon, size, size));
    }
    for (const [suffix, role, genres] of [
      ["", "POETKA · PISARKA", "POEZJA  ·  PROZA  ·  OPOWIADANIA"],
      ["-en", "POET · WRITER", "POETRY  ·  PROSE  ·  STORIES"],
      ["-es", "POETA · ESCRITORA", "POESÍA  ·  PROSA  ·  RELATOS"]
    ]) {
      const localized = social.replace("POETKA · PISARKA", role).replace("POEZJA  ·  PROZA  ·  OPOWIADANIA", genres);
      await writeFile(path.join(root, "public", `social-preview${suffix}.png`), await renderSvg(browser, localized, 1200, 630));
    }
    console.log("Generated favicon, touch icons and three 1200×630 social previews.");
  } finally {
    await browser.close();
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
