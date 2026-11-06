# Issue assistant, approved repairs and soft light theme

The Issue assistant accepts a free-text request, classifies common Windows problem categories locally, and automatically gathers supported read-only evidence. It is accessible through main navigation, the Dashboard’s Describe an issue button, or Analyze this issue under task-search results. Unknown requests remain available for online guidance instead of receiving a fabricated repair.

## Implemented automation

### Storage

Typing “My storage is full” starts a read-only scan of the Windows user Temp folder derived from the native Windows application-data path. Only top-level regular .tmp and .temp files with modification and creation timestamps at least seven days old qualify for review. The scan does not recurse, inspect file contents, scan personal folders, choose files automatically, empty the Recycle Bin or uninstall software. It is limited to 4,000 examined directory entries, 200 candidates and a five-second enumeration budget, and reports partial scans.

Nothing is preselected. The user chooses exact candidates, then receives a native confirmation listing the selected files and explaining permanent deletion. Age alone cannot establish that a file is unnecessary. Users should close applications and retain anything they are unsure about. Windows Storage settings remains available for a broader manual review.

Plans are native-owned, expire after ten minutes, and are replaced by a new scan. The renderer supplies opaque plan/file IDs, never paths. Before each deletion, the service checks the root’s canonical location and rejects redirected roots, checks that the selected path is a direct child, and rechecks regular-file type, identity, size and modification time. Changed, locked and inaccessible files are skipped. A completed plan cannot be replayed. Actual counts, removed file sizes, skipped files and a new free-space measurement are returned. Space can change independently because other programs are running.

### Network

After approval, DNS repair runs connectivity checks, executes the fixed Windows ipconfig /flushdns command without a shell, then runs connectivity checks again. No issue text is inserted into a command. The app does not reset adapters, change DNS-server settings, restart Windows, disable security tools or elevate itself. Windows may require administrator permission or device-policy changes; a failure is reported rather than bypassed. Cancellation uses the existing network cancellation channel.

Command completion is reported separately from before/after findings. A cache clear is not proof that a router, ISP, website or every network issue was repaired. Microsoft documents the command in [ipconfig](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig).

## Online guidance and privacy

Find online guidance opens the official Microsoft Support search in the default browser after a native consent dialog shows the exact issue text. Only that reviewed text is sent; no files, diagnostics, reports or operation logs are attached. The query is bounded and URL-encoded, and the host/path is fixed in the main process. Cancellation opens no page. No web instructions or downloaded scripts are executed. The official search endpoint returned HTTP 200 during implementation verification. Broader storage guidance is available in [Microsoft’s drive-space documentation](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/free-up-drive-space-in-windows).

This is not a universal repair engine or a self-training AI model. Unrecognized, hardware-related, security-sensitive and unsupported issues can still need official guidance or a technician.

## Softer light theme

Light backgrounds are muted blue-gray (#E8EDF2), panels are #F0F3F6 and sidebar/header surfaces are #E3E9EF. Pure-white panels are removed. Body and secondary text retain at least 4.5:1 contrast against panels in automated verification. Dark mode and the saved theme preference remain supported. This user-requested variant supersedes the earlier Cloud White background specification for light mode.

## Changed files and validation

- src/shared/repairs.ts: shared contracts, issue classification and online query bounds.
- src/main/cleanup.ts: bounded native plans and revalidated selected-file deletion.
- src/main/repairs.ts: fixed, timed, hidden Windows DNS command.
- src/renderer/RepairAssistant.tsx: issue form, automatic checks, review, repair and online consent flows.
- src/main/main.ts, src/preload/preload.ts, src/shared/types.ts: narrow trusted-frame-checked IPC.
- src/data/actions.ts, src/data/help.ts, src/renderer/main.tsx, src/renderer/HelpWorkspace.tsx: catalogue, navigation and privacy/help integration.
- src/renderer/style.css and scripts/brand-smoke.cjs: softer light palette and matching expectations.
- tests/repairs.test.ts, scripts/repair-smoke.cjs and package.json: fixture safety tests and test:repairs command.

All 77 unit tests passed, including cleanup execution on isolated generated fixtures, preservation of personal file types and nested files, changed-file skipping, junction rejection, expiry, invalid IDs and plan replay rejection. Lint, TypeScript and production compilation passed. Electron results are recorded in REPAIR-QA.json after completion. The Electron test uses the real read-only Temp scan and real network diagnostics; it substitutes native online dialogs/browser dispatch and intercepts the DNS command so the test cannot change the machine’s DNS cache. No user files are deleted by these checks.

Verification completed: the repair Electron workflow, existing Help/onboarding/tour regression, and updated offline brand/theme regression all passed. See REPAIR-QA.json, HELP-QA.json and BRAND-QA.json. Unit tests: 77 passed. No user files were deleted during verification, and the DNS command was intercepted in the Electron test.
