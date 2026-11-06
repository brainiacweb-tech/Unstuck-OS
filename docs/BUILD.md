# Production build and packaging

Use Node.js LTS and Windows x64 for ongoing development. The executed build environment used Node 25.4.0; Vitest 4.1.12 supports it. Dependencies are pinned in package.json (Vitest has a compatible major range) and package-lock.json records exact resolutions. Use npm ci for repeatable installs.

```powershell
npm ci
npm test
npm run lint
npm run build
npm run test:e2e
npm run package
```

Run build and packaging sequentially because Vite replaces its output directory. The portable executable is release/Unstuck OS 1.0.0.exe; release/win-unpacked contains the packaged runtime. The end user needs no Node runtime. The portable artifact is unsigned and is for evaluation; Windows reputation/security prompts may apply.

`npm run lint` runs ESLint followed by TypeScript static checking. `npm run test:e2e` launches real Electron using a fresh temporary profile; native Settings navigation and picker/media-denial branches use explicit mocks. Other checks use actual system/network IPC. Close the test window only after automation completes.

Original icons: store-assets/icon.svg, icon.ico and exports/*.png. Regenerate PNG assets with scripts/assets.ps1; regenerate ICO when changing its PNG source. Store screenshots come from the actual application smoke test.

## MSIX

The installed stable electron-builder 26.18.0 does not expose the beta MSIX target described in next/v27 documentation. This project uses Microsoft Windows SDK MakeAppx instead.

1. Install the Windows SDK including x64 MakeAppx and Windows App Certification Kit.
2. Fill store-assets/identity.json with exact reserved Partner Center Name, Publisher and PublisherDisplayName. Placeholders cause an intentional error.
3. Run npm run msix. It builds portable/unpacked output, copies the unpacked app/assets into a staging folder, writes a desktop full-trust AppxManifest.xml and invokes MakeAppx pack to create release/UnstuckOS-1.0.0-x64.msix.
4. Validate the package, run WACK and test installation/update/uninstall on clean Windows profiles. Use Store signing for submission; local sideload testing needs your own appropriately trusted development certificate. No certificate is fabricated or requested in chat.

The MSIX script's guard was executed and correctly rejected placeholder identity values. Package construction beyond that point is unverified until prerequisites are supplied. Do not submit an untested manifest or claim a Store release from the portable build.

Run npm run installer for the per-user NSIS installer (Unstuck OS Setup 1.0.0.exe). It does not request installation elevation. Preferences are retained on removal; users can clear records in the app before uninstalling. Validate installer/upgrade/uninstall on a clean VM before distribution.


Brand assets: run npm run brand:assets to export icons from the supplied PNG, generate self-contained themed SVG wordmarks, refresh required font CSS and copy OFL notices. npm ci installs the developer font packages; Vite bundles only the six required WOFF2 faces. Electron-builder extraResources includes the font/software licence notices. The supplied originals are preserved in store-assets/brand/.
