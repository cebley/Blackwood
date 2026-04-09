import DOMPurify from "dompurify";

const isClient = typeof window !== "undefined";

export const sanitize = (html) => ({
  __html: isClient ? DOMPurify.sanitize(html ?? "") : (html ?? ""),
});
