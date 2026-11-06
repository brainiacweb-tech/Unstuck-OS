# Security review

Implemented: renderer sandboxing, context isolation, disabled Node integration, frozen minimal preload, exact application file-URL/main-frame/known-window IPC validation, bounded preferences/history schemas, no renderer networking, restrictive CSP, blocked window creation and renderer navigation. Settings are resolved from known action IDs in main; only fixed settings slugs reach shell.openExternal. Support links are resolved from three fixed Microsoft support IDs.

Media permission is considered only for the main application window; a native prompt requests approval. Media stays in renderer memory and is stopped when leaving the test. The compact palette cannot request media permission. Folder creation uses a native existing-folder picker and a separate native confirmation, and fails on collision. No file deletion, registry changes, elevation, persistent service, product-key collection or background monitoring.

Fixed Windows inspection commands are in src/main/windows.ts: Get-NetAdapter/Get-NetIPConfiguration for adapter/gateway/address evidence, Win32_Battery and Win32_OperatingSystem for optional battery/edition readings, and Get-CimInstance SoftwareLicensingProduct filtered to Windows licensing products for Name/LicenseStatus. PartialProductKey is used only as a provider-side filter and is never selected or returned. The fixed Windows PowerShell executable receives static scripts with shell:false, windowsHide:true, 8-second timeout and 16,000-byte output cap. No search text or renderer command is interpolated.

Tests cover malformed input, sender policy, URI rejection, licensing interpretation and diagnostic failure. The actual sandboxed bridge and rejection of an invalid action are exercised in Electron. The full npm audit reported zero vulnerabilities after updating minimatch in developer packaging dependencies; rerun before distribution.

Remaining release review: Electron fuse hardening, full capability/media-origin regression coverage, physical device permission behavior, Windows edition-specific URI fallback checks, keyboard/screen reader acceptance, signed/package acceptance and certification. A security review is not a security certification.

Shortcut copying accepts only a chord from the shared catalogue, awaits the native write and reads back to verify. No general clipboard read API is exposed. Errors are logged as fixed codes and operation names only; arguments, returned evidence, keys and stacks are never logged. Logs are capped at 50 and cleared/disabled with history. One app instance per user-data profile owns storage writes.

