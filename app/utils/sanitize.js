import DOMPurify from "isomorphic-dompurify";

export const sanitize = (html) => ({
  __html: DOMPurify.sanitize(html ?? ""),
});
