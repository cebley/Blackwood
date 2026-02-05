# Monthly Dependency Update

Run the monthly dependency update for this project. Follow each step in order and report results clearly.

## Step 1: Check Current State

Run `npm outdated` to see all packages with available updates.

## Step 2: Update Safe Packages Only

Update ONLY the packages that are safe to update. **DO NOT update these frozen packages under any circumstances:**

| Package | Pinned Version | Reason |
|---------|---------------|--------|
| `@storyblok/react` | 4.0.0 | React 19 issues in v5 |
| `@headlessui/react` | 1.7.19 | Breaking changes in v2 |
| `tailwindcss` | 3.4.17 | v4 has different config format |
| `react-headroom` | 3.2.1 | SSR issues (wrapped with ClientOnly) |

For each safe package that has an update available, run `npm install <package>@latest` individually. Keep exact versions (no ^ or ~ prefixes) to match the project convention, except for packages that already use ^ in package.json.

## Step 3: Verify Build

Run `npm run build` and confirm it succeeds with no errors.

## Step 4: Verify Dev Server

Run `npm run dev` in the background, wait a few seconds for it to start, then verify the server is responding on http://localhost:5173. Stop the dev server after confirming.

## Step 5: Report Summary

Provide a clear summary with:
- Which packages were updated (old version -> new version)
- Which packages were skipped (frozen) and why
- Build status (pass/fail)
- Dev server status (pass/fail)
- Any warnings or issues found

If anything fails, revert the changes by running `git checkout -- package.json package-lock.json && npm install` and report what went wrong.
