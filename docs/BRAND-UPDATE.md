# Brand update delivery

Implemented the supplied official brand throughout the desktop interface, onboarding, palette, executable metadata and Store assets.

- Official tagline: Your PC. Uncomplicated.
- Supporting message is used verbatim on Dashboard and onboarding.
- Less searching. More doing. is the secondary slogan in Store and LinkedIn drafts.
- Fresh/default and Reset preferences use dark navy. Existing saved theme choices remain intact.
- Flat navy/teal/blue palette, Cloud White light mode, accessible text variants, semantic status colours, 8px spacing, 16px panels, 10px controls and 180ms reduced-motion-aware transitions.
- Supplied PNG/SVG originals preserved; themed self-contained wordmarks, seven-size Windows ICO and Store PNG exports generated from them.
- Six local WOFF2 faces only: Raleway 600/700, Inter 400/500/600, JetBrains Mono 500. All font licences are copied into packaged resources/licenses. No font CDN or runtime downloads.

Verification executed:

- ESLint / TypeScript: passed.
- Existing unit suite: 43 tests passed.
- Production build: passed; output contains six WOFF2 faces and no unused weights or WOFF fallbacks.
- Brand integration: fresh dark profile, exact navy/teal/Cloud White roles, real computed font families, all required fonts loaded with the renderer offline, light theme and wordmark selection, and light persistence across restart passed. Details: BRAND-QA.json.
- Full Electron integration/smoke: passed, including palette, settings dispatch (mock shell), native folder action/collision, real clipboard, network cancellation, actual persistence and media-denial/late-grant safeguards.
- Latest runtime dependency audit: zero reported vulnerabilities.

Actual screenshots: ../store-assets/dashboard-dark.png, dashboard-light.png, welcome-dark.png, troubleshooting.png and quick-access.png. Marketing copy: ../store-assets/LISTING.md and LINKEDIN.md. Regeneration: npm run brand:assets; verification: node scripts/brand-smoke.cjs.

The Store identity, MSIX/SDK certification, physical hardware and installer lifecycle release blockers from the original delivery remain. This branding update does not imply Store certification or publication.

The branded packaged x64 runtime also launched successfully. All six required font faces loaded from the packaged app, and all three font OFL notices were present in resources/licenses. PACKAGED-LAUNCH.json records the actual check; the automated launch-and-font-ready sample was 2,038 ms, including automation overhead while packaging was active. No performance target is asserted.
