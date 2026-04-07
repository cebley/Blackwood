# Blackwood Remix - Security Fixes

> Code review 2026-04-04 — 3 critical, 3 important, 1 minor

## URGENT - Do tomorrow (2026-04-05)

### 1. Rotate Storyblok token

The preview token `QRskMmVVNoT4ZFCoD3Hlggtt` is exposed in `CLAUDE.md` (committed to git).

**Steps:**

1. Go to Storyblok dashboard → Settings → Access Tokens
2. Delete or regenerate the current preview token
3. Copy the new token
4. Update on Vercel: `vercel env rm STORYBLOK_PREVIEW_TOKEN` then `vercel env add STORYBLOK_PREVIEW_TOKEN`
5. Update local `.env` with the new token
6. Remove the token value from `CLAUDE.md` line 84 — replace with `<set in .env>`
7. Redeploy: `vercel --prod`
8. Verify the site still loads correctly

---

## Fix later (with Claude)

### 2. Fix `window.env` serialization (Critical)

- **File:** `app/root.jsx:152`
- **Bug:** Serializes a string instead of an object — Storyblok visual editor broken client-side
- **Fix:** Change `JSON.stringify(accessToken)` to `JSON.stringify(env)` using the loader data

### 3. Add DOMPurify to CMS content (Critical)

- **Files:** Leadership.jsx:31, Contracts.jsx:22, TitleText.jsx:27, HomeHero.jsx:52, FooterContact.jsx:49
- **Bug:** `dangerouslySetInnerHTML` with raw CMS content — XSS risk if editor account compromised
- **Fix:** `npm install dompurify` and sanitize before injection

### 4. Pass props to PaymentForm (Important)

- **File:** `forms/index.jsx:68`
- **Bug:** `<PaymentForm />` rendered with no props — sector/agency/company/state never sent to Formspree
- **Fix:** Pass `sector={sector} agency={agency} company={company} state={state}`

### 5. Add error handling to root loader (Important)

- **File:** `app/root.jsx:85`
- **Bug:** No try/catch on Storyblok fetch — 500 if CMS is down
- **Fix:** Wrap in try/catch, return fallback or throw Response with message

### 6. Add error handling to leadership second API call (Important)

- **File:** `about-us.leadership.$.jsx:26`
- **Fix:** Add `.catch()` consistent with the first call

### 7. Add key to Breadcrumbs Fragment (Minor)

- **File:** `Breadcrumbs.jsx:24`
- **Fix:** `<React.Fragment key={i}>` instead of `<>...</>`
