# Onboarding, Help & Support and About

The existing Electron/React application now includes a five-screen first-launch introduction, a ten-step spotlight tour, a local Help Center with 35 articles and 19 tutorials, an FAQ view, About, privacy, release notes, licence credits, and private problem reporting.

## Use

- First launch shows the introduction. Skip Introduction always opens the workspace. Explore Unstuck OS completes it; Take an Interactive Tour completes it and starts the tour.
- Preferences > General restarts either experience and persists help-tip and beginner-explanation switches. Existing profiles remain compatible. Preference updates render immediately and native saves are queued to prevent rapid changes overwriting one another.
- Help & Support is permanent in navigation. Search is local, keyword-aware and typo tolerant. Tutorials open actual catalogue tasks or feature pages; no action runs automatically.
- The tour blocks interaction with underlying actions. Next/Previous and arrow keys navigate; Escape or Skip Tour closes it. It measures live targets on scroll/resize, observes target availability and provides a continuation message when a target is missing.
- About is available through Preferences, the Help Center and the native Help menu. Application and runtime versions come from Electron, not a UI constant. Developer and version entries in Preferences open the corresponding About section.
- Report a Problem is available from Help, Preferences and the native Help menu. Choose a category, describe the issue and optionally include the current or latest saved diagnostic findings. Preview the exact text, then copy it or save through a native text-file dialog. Editing invalidates the preview. Nothing is sent automatically. Clipboard writing is awaited and verified.
- Bundled licence notices open through a fixed native folder action. No arbitrary file path or arbitrary IPC channel is exposed.

## Implementation

- src/data/help.ts: local articles, tutorials and Fuse search.
- src/data/supportLinks.ts: intentionally empty verified-destination catalogue. Add a destination only after verifying ownership and its final HTTPS URL; supply its verification date. Unconfigured/unverified entries are hidden. There is no invented email or social URL.
- src/renderer/Onboarding.tsx: reusable introduction, focus handling and spotlight tour.
- src/renderer/HelpWorkspace.tsx: articles, tutorials, FAQ, developer/About content, privacy, release notes, credits, reporting and Preferences groups.
- src/shared/report.ts: bounded report validation and common preview/export formatting.
- src/shared/types.ts and policy.ts: narrow API and backward-compatible preference validation.
- src/main/main.ts and src/preload/preload.ts: trusted-frame-checked metadata/report/licence/support IPC and native Help menu.
- src/renderer/main.tsx and style.css: routes, real tour targets, contextual help, queued preferences and responsive branded themes.

## Verification

Run npm run lint, npm test, npm run build, npm run test:help, node scripts/smoke.cjs and node scripts/brand-smoke.cjs. Electron tests launch isolated temporary user profiles; they do not modify the normal user profile. Help tests disable renderer networking. Native file dialogs are substituted by automation to exercise an actual temporary file export without user interaction. Report copy uses the real Windows clipboard. QA evidence is written to docs/HELP-QA.json after the complete workflow passes.

## Limits

- There is no automatic updater, configured support email or automatic report delivery. Updates use the original trusted distribution source; Store installs can use Store Library.
- No approved screenshots were supplied for tutorials; they use honest numbered instructions and icon diagrams.
- Existing installers are not repackaged by this change. Compile and launch checks use the current source build.
- Actual camera/microphone hardware, licensing repairs and accessibility with third-party screen readers still require manual Windows testing. The app does not claim to repair every issue.

## Recorded verification

- ESLint and TypeScript checks passed.
- All 60 unit tests passed (including 17 new help/report/preference tests).
- Production compilation passed.
- The assistance Electron workflow passed: introduction skip/full progression/restart; all ten tour steps; keyboard navigation; missing and returning targets; resized tooltips; offline help search; FAQ; real task navigation; dynamic version/developer content; light/dark themes; privacy/help preference persistence; report preview, edit invalidation, actual clipboard copy, actual temporary text-file export and cancellation; malformed IPC and unverified-link rejection; real relaunch.
- Existing Electron regression passed: task search, favorites/history persistence, Quick Access, Settings dispatch with a substituted shell, real temporary folder creation with approval/cancel/collision checks, real network/system IPC, media-denial and late-grant cleanup with substituted media, clipboard and request validation.
- Existing brand verification passed: navy default, six bundled font faces offline, teal primary actions, theme persistence and matching wordmarks.

See HELP-QA.json, QA-RESULTS.json and BRAND-QA.json for captured results. Internet checks produced passed, warning and inconclusive findings; these are reported as evidence, not a claim that every connection test succeeded.

Additional changed files: tests/help.test.ts; scripts/help-smoke.cjs; existing smoke/brand/packaged-smoke introduction selectors; package.json (developer attribution and test:help command); README.md and USER_GUIDE.md. Compilation updates dist, and the Electron checks capture real application screenshots in store-assets. Existing release installers remain unchanged.
