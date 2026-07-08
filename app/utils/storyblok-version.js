// Which Storyblok content version the site reads.
//
// Production (Vercel `main` deploy) serves PUBLISHED content, so editors can stage
// changes as drafts and flip them live by clicking Publish. Preview deploys and
// local dev serve DRAFT, so unpublished work is visible for review before go-live.
//
// `process` is undefined in the browser bundle; loaders run on the server where
// VERCEL_ENV is set. On the client this resolves to "draft" but is unused for
// fetching (data comes from the server loader / window.env).
export const storyblokVersion =
  typeof process !== "undefined" && process.env.VERCEL_ENV === "production"
    ? "published"
    : "draft";

// Storyblok's JS client keeps an in-memory cache keyed by the cache version (cv).
// On serverless, a warm instance holds the old cv and keeps serving stale
// published content after an editor hits publish. Passing a fresh cv on every
// request bypasses that cache so CMS changes go live immediately, no redeploy.
export const freshCv = () => Date.now();
