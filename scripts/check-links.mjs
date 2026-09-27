import { articles, bookCopy, guides, mediaGroups } from "../src/content.mjs";

const links = [
  ...articles.map(({ title, url }) => ({ title: title.pl, url })),
  ...Object.entries(bookCopy).filter(([, details]) => details.publisher).map(([title, details]) => ({ title: `${title} — publisher`, url: details.publisher })),
  ...guides.map((guide) => ({ title: guide.title, url: guide.url })),
  ...mediaGroups.filter(({ title }) => title !== "Dobry Tytuł").flatMap(({ items }) => items.filter(({ url }) => url).map(({ title, url }) => ({ title: title.pl, url })))
];

async function checkLink({ title, url }) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);

  try {
    let response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "Mozilla/5.0 link-check" }
    });

    if (response.status === 405) {
      response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: { "user-agent": "Mozilla/5.0 link-check" }
      });
    }

    return { title, url, status: response.status, ok: response.status < 400 };
  } catch (error) {
    return { title, url, status: error.name === "AbortError" ? "timeout" : "network error", ok: false };
  } finally {
    clearTimeout(timeout);
  }
}

const results = await Promise.all(links.map(checkLink));

for (const result of results) {
  console.log(`${result.ok ? "OK  " : "WARN"} ${String(result.status).padEnd(13)} ${result.title}`);
}

const broken = results.filter(({ status }) => status === 404 || status === 410 || status === "network error");
if (broken.length) {
  console.error(`\n${broken.length} link(s) are broken or unreachable.`);
  process.exitCode = 1;
} else {
  console.log(`\nChecked ${results.length} external links; no confirmed 404 or 410 responses.`);
}
