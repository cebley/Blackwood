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
