# Blackwood Website - Maintenance Guide

## Project Overview
- **Framework:** React Router 7.10.1 (migrated from Remix 2.17.2)
- **Language:** JavaScript (.jsx)
- **CMS:** Storyblok
- **Styling:** TailwindCSS v3.4.17
- **Deployment:** Vercel (auto-deploy on push to main)

---

## Quick Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm run start

# Type check (if needed)
npm run typecheck
```

---

## Monthly Maintenance Checklist

### Before Starting
1. Pull latest from main: `git pull origin main`
2. Install deps: `npm install`
3. Run dev server: `npm run dev`
4. Verify site loads at http://localhost:5173

### Content Updates (Storyblok)
- All content is managed in Storyblok CMS
- Changes in Storyblok are reflected immediately (no code deploy needed)
- Storyblok Dashboard: https://app.storyblok.com

### Code Updates
1. Make changes locally
2. Test with `npm run dev`
3. Build test: `npm run build`
4. Commit and push to deploy

### After Updates
```bash
git add .
git commit -m "Monthly maintenance - [description]"
git push origin main
# Vercel auto-deploys
```

---

## Key Files

| File | Purpose |
|------|---------|
| `app/root.jsx` | Main app shell, Storyblok init, global loader |
| `app/routes.js` | Route configuration |
| `app/routes/$.jsx` | Catch-all route for Storyblok pages |
| `app/routes/about-us.leadership.$.jsx` | Leadership pages |
| `app/components/storyblok/` | All Storyblok components (40+) |
| `app/components/header/` | Header, navigation, menus |
| `app/components/footer/` | Footer component |
| `tailwind.config.cjs` | TailwindCSS configuration |
| `vercel.json` | Vercel deployment config, security headers |

---

## Environment Variables

### Local (.env)
```
STORYBLOK_PREVIEW_TOKEN=QRskMmVVNoT4ZFCoD3Hlggtt
```

### Vercel Dashboard
Same variable must be set in Vercel project settings.

---

## Known Issues & Fixes

### 1. react-headroom SSR Error
**Issue:** `react-headroom` is not compatible with React 19 SSR, causes "Element type is invalid" error.

**Fix Applied:** Header uses `ClientOnly` wrapper:
- `app/components/ClientOnly.jsx` - Renders children only on client
- `app/components/header/index.jsx` - Wraps Headroom with ClientOnly

**Do not remove this fix.**

### 2. Storyblok v4 (Don't Upgrade)
**Current:** @storyblok/react v4.0.0
**Latest:** v5.x

**Why not upgrade:** Storyblok v5 has React 19 compatibility issues. Wait for official fix before upgrading.

### 3. HeadlessUI v1 (Don't Upgrade)
**Current:** @headlessui/react v1.7.19
**Latest:** v2.x

**Why not upgrade:** v2 has breaking API changes. Current version works fine.

---

## Adding New Storyblok Components

1. Create component in `app/components/storyblok/YourComponent.jsx`
2. Export from `app/components/storyblok/index.jsx`
3. Register in `app/root.jsx` in the `storyblokInit` components object

Example:
```javascript
// app/components/storyblok/NewComponent.jsx
import { storyblokEditable } from "@storyblok/react";

const NewComponent = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      {/* Your content */}
    </div>
  );
};

export default NewComponent;
```

---

## Deployment

### Automatic (Recommended)
Push to `main` branch triggers Vercel deployment automatically.

### Manual
```bash
# Via Vercel CLI
vercel --prod
```

### Rollback
Use Vercel dashboard to rollback to previous deployment if issues occur.

---

## Dependencies - Do Not Upgrade

| Package | Current | Reason |
|---------|---------|--------|
| @storyblok/react | 4.0.0 | React 19 issues in v5 |
| @headlessui/react | 1.7.19 | Breaking changes in v2 |
| tailwindcss | 3.4.17 | v4 has different config format |
| react-headroom | 3.2.1 | SSR issues (wrapped with ClientOnly) |

---

## Dependencies - Safe to Update

| Package | Notes |
|---------|-------|
| framer-motion | Safe to update minor versions |
| react-icons | Safe to update |
| clsx | Safe to update |

---

## Troubleshooting

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### SSR Errors
- Check if new packages are SSR-compatible
- Use `ClientOnly` wrapper for client-only packages
- Check browser console AND terminal for errors

### Storyblok Content Not Loading
- Verify `STORYBLOK_PREVIEW_TOKEN` in `.env`
- Check Storyblok dashboard for API status
- Clear browser cache

### Styles Not Working
- Run `npm run dev` to recompile
- Check TailwindCSS classes are valid
- Verify PostCSS is processing correctly

---

## Contact & Resources

- **Storyblok Dashboard:** https://app.storyblok.com
- **Vercel Dashboard:** https://vercel.com
- **React Router Docs:** https://reactrouter.com
- **TailwindCSS Docs:** https://tailwindcss.com

---

## Migration Notes (Historical)

This site was migrated from Remix 2.17.2 to React Router 7.10.1 in December 2025.

Key API changes applied:
- `@remix-run/react` → `react-router`
- `json({ data })` → `{ data }` (direct return)
- `RemixBrowser` → `HydratedRouter`
- `RemixServer` → `ServerRouter`
- Removed `<LiveReload />` (Vite handles HMR)
