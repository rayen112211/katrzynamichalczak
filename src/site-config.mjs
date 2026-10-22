const configuredUrl = process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://katrzynamichalczak.vercel.app");
const parsedUrl = new URL(configuredUrl);
if (!["http:", "https:"].includes(parsedUrl.protocol) || parsedUrl.username || parsedUrl.password || parsedUrl.pathname !== "/" || parsedUrl.search || parsedUrl.hash) {
  throw new Error("SITE_URL must be an HTTP(S) origin without a path, query, or credentials.");
}

export const siteUrl = parsedUrl.origin;
