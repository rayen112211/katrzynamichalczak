const assert = require("node:assert/strict");
const { webkit, chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");

const base = process.env.QA_BASE || "http://127.0.0.1:4173";

async function main() {
  for (const [name, engine, launchOptions] of [["webkit", webkit, {}], ["chrome", chromium, { channel: process.env.QA_CHANNEL || "chrome" }]]) {
    const browser = await engine.launch({ headless: true, ...launchOptions });
    try {
      for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844, isMobile: true, deviceScaleFactor: 3 }]) {
      const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, isMobile: !!viewport.isMobile, deviceScaleFactor: viewport.deviceScaleFactor || 1, reducedMotion: "no-preference" });
      const page = await context.newPage();
      for (const route of ["/", "/en/", "/es/"]) {
        const response = await page.goto(base + route);
        assert.equal(response.status(), 200);
        const photo = await page.locator(".hero-photo img").evaluate(async (image) => {
          await image.decode();
          const imageRect = image.getBoundingClientRect();
          const frameRect = image.parentElement.getBoundingClientRect();
          return {
            naturalWidth: image.naturalWidth,
            naturalHeight: image.naturalHeight,
            imageWidth: imageRect.width,
            imageHeight: imageRect.height,
            frameWidth: frameRect.width,
            frameHeight: frameRect.height,
            visible: getComputedStyle(image).visibility,
            opacity: getComputedStyle(image).opacity
          };
        });
        assert.ok(photo.naturalWidth > 0 && photo.naturalHeight > 0, `${route}: image did not decode`);
        assert.ok(photo.imageWidth > 100 && photo.imageHeight > 100, `${route}: image has no rendered dimensions`);
        assert.ok(photo.frameWidth > 100 && photo.frameHeight > 100, `${route}: frame collapsed`);
        assert.ok(photo.frameWidth < viewport.width, `${route}: frame overflows the viewport`);
        assert.equal(photo.visible, "visible");
        assert.equal(photo.opacity, "1");
        console.log(`${name} ${viewport.width}px ${route}: ${JSON.stringify(photo)}`);
        if (route === "/") await page.locator(".hero-photo").screenshot({ path: `worktmp/hero-${name}-${viewport.width}.png`, animations: "disabled" });
      }
      await context.close();
      }
    } finally {
      await browser.close();
    }
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
