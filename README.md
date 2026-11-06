# Unstuck OS 1.0.0

Your PC. Uncomplicated. A third-party, offline-first Windows assistance utility. This is an unsigned development candidate, not a certified production release.

## Development

Use supported Node.js LTS and Windows 10 build 19041 or later; Windows 11 x64 is recommended.

```powershell
npm ci
npm run dev
npm run lint
npm test
npm run test:e2e
npm run package
npm run installer
```

`dev` builds and launches Electron without a development server. Re-run after edits. `lint` runs ESLint and TypeScript. `package` creates the portable executable; `installer` creates a per-user NSIS installer. Build and packaging should run sequentially.

End users need no separately installed Node runtime. Release outputs go in release/. Store packaging requires real reserved Partner Center identity values and Windows SDK tools; see docs/STORE_PUBLISHING.md and docs/BUILD.md. No upload, certification or publication has occurred.

See docs/DELIVERY.md for the eight-stage delivery record, docs/TESTING.md for actual verification, and docs/KNOWN_LIMITATIONS.md for release blockers.


Brand identity: **Your PC. Uncomplicated.** The app defaults to midnight navy and supports light mode. Raleway, Inter and JetBrains Mono are bundled locally in the required weights. See docs/BRAND.md and docs/BRAND-UPDATE.md for the official palette, source artwork, marketing drafts and actual verification.

The built-in **Help & Support** navigation includes offline articles, 19 tutorials, FAQs and local problem reporting. A five-screen introduction and ten-step live tour help new users get started. Preferences includes restarts and explanation controls; About identifies Francis Kusi and displays the package version. See [Help and onboarding implementation](docs/HELP-ONBOARDING.md).

The **Issue assistant** adds natural-language requests, read-only storage/network analysis, approved temporary-file cleanup, fixed DNS repair with before/after checks, and consent-based Microsoft Support search. Light mode now uses softer blue-gray surfaces. See [implementation and actual repair scope](docs/ISSUE-ASSISTANT.md).
