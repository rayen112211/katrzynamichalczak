const assert = require("node:assert/strict");
const path = require("node:path");
const { mkdir, writeFile } = require("node:fs/promises");
const { pathToFileURL } = require("node:url");
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");

async function main() {
  const { allRoutes } = await import(pathToFileURL(path.resolve(__dirname, "../src/site.mjs")));
  const base = process.env.QA_BASE || "http://127.0.0.1:4173";
  const output = path.resolve(__dirname, "../worktmp/browser");
  await mkdir(output, { recursive: true });
  const browser = await chromium.launch({ headless: true, channel: process.env.QA_CHANNEL || "chrome" });
  const context = await browser.newContext({ reducedMotion: "no-preference" });
  const page = await context.newPage();
  const errors = [];
  const issues = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("response", (response) => {
    if (response.url().startsWith(base) && response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
  });
  const viewports = [
    { width: 2560, height: 1290 }, { width: 1440, height: 900 },
    { width: 1024, height: 768 }, { width: 768, height: 1024 },
    { width: 390, height: 844 }, { width: 320, height: 740 },
    { width: 844, height: 390 }
  ];
  try {
    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      for (const route of allRoutes) {
        assert.equal((await page.goto(base + route)).status(), 200, route);
        await page.evaluate(async () => {
          for (let offset = 0; offset < document.documentElement.scrollHeight; offset += innerHeight * .8) {
            window.scrollTo({ top: offset, behavior: "instant" });
            await new Promise(requestAnimationFrame);
          }
          await Promise.all([...document.images].map((image) => {
            image.loading = "eager";
            return image.decode().catch(() => {});
          }));
          window.scrollTo({ top: 0, behavior: "instant" });
        });
        const state = await page.evaluate(() => {
          const clipped = [];
          const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
          while (walker.nextNode()) {
            const node = walker.currentNode;
            const parent = node.parentElement;
            if (!node.textContent.trim() || parent.closest("script, .sr-only, .skip-link, .marquee, .book-ribbon, [hidden]")) continue;
            if (!parent.checkVisibility()) continue;
            const range = document.createRange();
            range.selectNodeContents(node);
            if ([...range.getClientRects()].some((rect) => rect.left < -3 || rect.right > innerWidth + 3)) {
              clipped.push(node.textContent.trim().slice(0, 90));
            }
          }
          return {
            clipped,
            overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
            oversizedIcons: [...document.querySelectorAll("svg")].filter((icon) => icon.getBoundingClientRect().height > 32).length,
            narrowCopy: [...document.querySelectorAll(".children-card p")].filter((paragraph) => paragraph.getBoundingClientRect().width < 180).length,
            broken: [...document.images].filter((image) => !image.naturalWidth).map((image) => image.src),
            hidden: [...document.querySelectorAll(".reveal")].filter((element) => getComputedStyle(element).opacity === "0").length,
            headingCount: document.querySelectorAll("h1").length
          };
        });
        if (state.clipped.length || state.broken.length || state.hidden || state.overflow || state.oversizedIcons || state.narrowCopy || state.headingCount !== 1) issues.push({ viewport, route, ...state });
        if (["/", "/en/", "/es/"].includes(route) && viewport.width > 760) {
          const layout = await page.locator(".about").evaluate((section) => {
            const copy = section.querySelector(".about-content").getBoundingClientRect();
            const photo = section.querySelector(".about-photo").getBoundingClientRect();
            return Math.min(copy.bottom, photo.bottom) - Math.max(copy.top, photo.top) > Math.min(copy.height, photo.height) * .8;
          });
          assert.ok(layout, `${route}: portrait must sit beside the biography, not on an empty second row`);
        }
        if ([1440, 390].includes(viewport.width)) {
          await page.screenshot({ path: path.join(output, `${viewport.width}-${route.replaceAll("/", "_")}.png`), fullPage: true, animations: "disabled" });
        }
      }
      console.log(`Checked ${allRoutes.length} pages at ${viewport.width} × ${viewport.height}`);
    }
    await writeFile(path.join(output, "report.json"), JSON.stringify({ pages: allRoutes.length, viewports, issues, errors }, null, 2));
    for (const route of ["/", "/en/", "/es/"]) {
      await page.setViewportSize({ width: 320, height: 740 });
      await page.goto(base + route);
      assert.ok(await page.getByRole("button", { name: /men[uú]/i }).count());
      await page.locator(".menu-button").click();
      await page.locator(".book-nav summary").click();
      await page.keyboard.press("Escape");
      assert.equal(await page.locator(".book-nav").getAttribute("open"), null);
      await page.keyboard.press("Escape");
      assert.equal(await page.locator(".menu-button").getAttribute("aria-expanded"), "false");
      await page.locator(".menu-button").click();
      await page.locator(".hero-photo").click();
      assert.equal(await page.locator(".menu-button").getAttribute("aria-expanded"), "false");
      await page.setViewportSize({ width: 844, height: 390 });
      await page.locator(".menu-button").click();
      await page.locator(".language-switch a").last().scrollIntoViewIfNeeded();
      const language = await page.locator(".language-switch a").last().boundingBox();
      assert.ok(language.y >= 0 && language.y + language.height <= 390);
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.waitForFunction(() => document.querySelector(".menu-button").getAttribute("aria-expanded") === "false");
      assert.equal(await page.locator(".menu-button").getAttribute("aria-expanded"), "false");
      await page.locator(".book-nav summary").click();
      await page.keyboard.press("Escape");
      assert.equal(await page.locator(".book-nav").getAttribute("open"), null);
      await page.locator("[data-quote-next]").click();
      assert.ok((await page.locator("[data-quote-count]").innerText()).startsWith("02"));
      await page.locator("[data-quote-prev]").click();
      assert.ok((await page.locator("[data-quote-count]").innerText()).startsWith("01"));
      await page.locator(".mini-book").last().focus();
      await page.locator(".mini-book").last().scrollIntoViewIfNeeded();
      const lastBook = await page.locator(".mini-book").last().boundingBox();
      assert.ok(lastBook.x >= 0 && lastBook.x + lastBook.width <= 1440);
    }
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(base);
    assert.equal(await page.locator(".marquee div").evaluate((element) => getComputedStyle(element).animationName), "none");
    const noScript = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
    const plainPage = await noScript.newPage();
    await plainPage.goto(base + "/kontakt/");
    assert.equal(await plainPage.locator(".site-nav").isVisible(), true);
    assert.equal(await plainPage.locator(".contact-email").getAttribute("href"), "mailto:kasia.michalczak@gmail.com");
    assert.equal(await plainPage.locator("form").isVisible(), false);
    await writeFile(path.join(output, "report.json"), JSON.stringify({ pages: allRoutes.length, viewports, issues, errors }, null, 2));
    assert.deepEqual(issues, []);
    assert.deepEqual(errors, []);
    console.log("Responsive layouts, images, visible text, navigation, quotes, reduced motion and no-JavaScript fallback passed.");
  } finally {
    await browser.close();
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
