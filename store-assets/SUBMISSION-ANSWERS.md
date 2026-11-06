# Microsoft Store submission answers — Unstuck OS

Prepared for the Windows desktop MSIX submission flow. Reviewed 6 November 2026 against Microsoft's documentation and the current source. Field names vary by account and submission type. Use these answers only for a final package that implements the documented behavior; this sheet is not evidence that the MSIX has passed acceptance or certification.

## Ready-to-use links

| Field | URL |
|---|---|
| Partner Center sign-in | https://partner.microsoft.com/dashboard |
| Product website / project page | https://github.com/brainiacweb-tech/Unstuck-OS |
| Support contact URL | https://github.com/brainiacweb-tech/Unstuck-OS/issues |
| Report an issue | https://github.com/brainiacweb-tech/Unstuck-OS/issues/new |
| Privacy policy URL | https://github.com/brainiacweb-tech/Unstuck-OS/blob/main/docs/PRIVACY.md |
| User guide | https://github.com/brainiacweb-tech/Unstuck-OS/blob/main/docs/USER_GUIDE.md |
| This submission sheet | https://github.com/brainiacweb-tech/Unstuck-OS/blob/main/store-assets/SUBMISSION-ANSWERS.md |
| Screenshot downloads | https://github.com/brainiacweb-tech/Unstuck-OS/tree/main/store-assets/submission/screenshots |
| Original app logo | https://raw.githubusercontent.com/brainiacweb-tech/Unstuck-OS/main/store-assets/brand/icon-1024.png |

The support field accepts a support webpage URL or an email address. Use the issue URL above; do not invent an email address. The optional website field can point to the project's controlled web page. If Partner Center requests your own standalone website, leave that optional field blank until one is published. Read the privacy policy before adopting it as your published policy. GitHub support issues are public and must not contain personal diagnostics or secrets.

## Product identity and general information

| Field | Answer |
|---|---|
| Product/app name | Unstuck OS — reserve this exact name if available |
| Product type | App; Windows desktop utility |
| Tagline, if offered | Your PC. Uncomplicated. |
| Developed by | Francis Kusi |
| Primary category | Utilities + tools |
| Subcategory | Leave blank if optional; do not label it as antivirus or a driver updater |
| Secondary category | Productivity, if offered |
| Default/listing language | English (United States), en-US |
| Price / base price | Free |
| In-app purchases / subscriptions / paid trial | None |
| Advertising | None |
| Audience | Public audience |
| Discoverability | Make the product available and discoverable in Microsoft Store |
| Markets | Choose the countries/regions you intend to support; review the account's eligible markets and rating requirements |
| Publishing schedule | Recommended: hold publication until you manually publish after certification; select the matching option if offered |
| Package format | MSIX |
| Architecture | x64 |
| Device family | Windows.Desktop / PC |
| Xbox / HoloLens / Mixed Reality | Not supported; do not select these families or display modes |
| App version displayed in UI | 1.0.0, for the current package metadata |
| Package version | 1.0.0.0 for the first Store package; later packages need an appropriate higher version |
| Minimum Windows version | Windows 10, build 19041 (10.0.19041.0) |
| Windows 11 | Targeted; test the final packaged app before making compatibility claims |
| Copyright | © 2026 Francis Kusi. All rights reserved. |
| Publisher display name | Exact value from your verified Partner Center product identity; use Francis Kusi only if that matches the account configuration |

Do not fabricate Package/Identity/Name, Package/Identity/Publisher or PublisherDisplayName. Copy all three from Partner Center Product identity into store-assets/identity.json. Package identity and publisher strings must match exactly. Do not enter org.unstuck.os as the Store package identity merely because it is the Electron appId.

## Short description

Paste as plain text:

```text
Find Windows settings, troubleshoot everyday PC problems, discover shortcuts, and run supported repairs with your approval—all in one privacy-first desktop app.
```

## Full description

Paste this entire block into Description. It contains no Markdown or URLs.

```text
Your PC. Uncomplicated.

Less searching. More doing.

Unstuck OS brings Windows settings discovery, everyday troubleshooting, keyboard shortcuts and practical computer guidance into one simple desktop application.

FIND WHAT YOU NEED
Describe a task or search for a Windows setting. Review clear instructions, save useful actions to Favorites and return to recent tasks without searching through menus again.

UNDERSTAND COMPUTER PROBLEMS
Check internet connectivity, test camera and microphone access locally, and review a snapshot of available memory, storage and system information. Diagnostic findings explain what was observed and when the evidence is inconclusive.

REVIEW AND APPROVE SUPPORTED REPAIRS
Use the Issue assistant to scan eligible older temporary files, review the exact selection and approve permanent deletion before cleanup runs. Personal folders and subfolders are excluded. A supported DNS-cache repair runs connectivity checks before and after the approved command. These tools address specific problems; they do not claim to fix every computer issue.

LEARN AT YOUR OWN PACE
Get started with a five-screen introduction and a guided tour of real app controls. Browse offline help articles, frequently asked questions and 19 step-by-step tutorials. Discover useful keyboard shortcuts and use the compact Quick Access search window.

YOU STAY IN CONTROL
Supported local tools and bundled help work offline. No account, subscription, advertising or paid AI service is required. Preferences and optional diagnostic history stay on your computer. Camera and microphone tests request permission and do not record or upload media.

Internet tests contact Microsoft endpoints. Optional online guidance asks before sending your reviewed issue text to Microsoft Support in your browser; no files or diagnostic findings are attached. Problem reports remain local unless you choose to copy, save and share them yourself.

Choose midnight navy or a softer light theme. Keyboard navigation, visible focus indicators and reduced-motion support help you work comfortably.

Unstuck OS is free. Some repairs need manual steps, Windows permission or help from a technician. Available features depend on your Windows version, hardware and device policies. Activation guidance supports legitimate Windows and Office licences only.

Developed by Francis Kusi.

Unstuck OS is an independent desktop application and is not affiliated with or endorsed by Microsoft.
```

## Product features

Enter each line as a separate feature; Partner Center adds bullets automatically.

```text
Local search for Windows settings and supported tasks
Issue assistant with read-only checks and clear next steps
Temporary-file cleanup with preview and explicit approval
DNS-cache repair with before-and-after connectivity checks
Local camera preview and microphone level test
Memory, storage, uptime and system snapshots
Searchable keyboard shortcuts and Favorites
Offline help, FAQs and 19 step-by-step tutorials
Five-screen onboarding and a guided application tour
Configurable Quick Access global shortcut
Problem-report preview with local copy and save
Dark and soft light themes with keyboard navigation
Legitimate Windows and Office activation guidance
```

## Other listing text

| Field | Answer |
|---|---|
| What's new in this version | Leave blank for the first submission, as Microsoft instructs; describe actual changes for subsequent updates |
| Short title | Unstuck OS, or leave blank if optional |
| Sort title | Unstuck OS, or leave blank if optional |
| Voice title | Leave blank for this desktop-only app |
| Keywords, if the form offers them | Windows settings; PC troubleshooting; keyboard shortcuts; disk cleanup; computer help; network diagnostics; productivity |
| Additional licence terms / EULA | Leave blank unless you supply and review a genuine terms document; do not select MIT or claim a project-wide open-source licence |
| Trailer / promotional video | Leave blank; none has been produced |
| App website | Use the project link above, or leave blank if the field requires a standalone website |

The app has no published Store product URL yet. Do not invent a Store ID or use a nonexistent releases/latest download as the package URL.

## Privacy and product declarations

| Question or field | Answer for the current behavior |
|---|---|
| Does the app access, collect or transmit personal information? | Yes. Camera/microphone access, local diagnostic information and normal network metadata mean a blanket No is inaccurate. Provide the policy URL. |
| Privacy policy URL | https://github.com/brainiacweb-tech/Unstuck-OS/blob/main/docs/PRIVACY.md |
| Account/sign-in required | No |
| Advertisements | No |
| In-app purchases / subscriptions | No |
| App-native chat, social feed or user-to-user messaging | No. External support opens GitHub in the user's browser. |
| Location access | No location feature is implemented; network services still see normal IP metadata. |
| Camera / microphone | Optional, user-initiated local tests; permission required; no recording or uploading by the app |
| Automatic diagnostic upload / telemetry | No |
| Online services | Connectivity requests to Microsoft endpoints; optional reviewed issue-text search in the browser |
| Data sharing | Do not claim that no information ever leaves the device. Disclose network metadata and approved issue-text searches. The app does not attach personal files or diagnostic history. |
| Unrestricted internet browser | The app is not a general-purpose browser; online help opens an external browser. Read any questionnaire wording carefully. |
| Security/antivirus/driver updater claims | Do not select or claim them; these are not implemented capabilities. |

If the form presents encryption/export-control or legal declarations, do not copy a generic No. The app uses standard HTTPS/TLS. Complete such declarations using the actual package, account details and applicable requirements.

## Age ratings

Select the non-game/software-utility classification if offered. For the current bundled content:

| Content question | Answer |
|---|---|
| Violence, blood or gore | No |
| Sexual content or nudity | No |
| Strong language | No |
| Drugs, alcohol or tobacco promotion | No |
| Gambling, simulated gambling or real-money gambling | No |
| Horror / intentionally frightening content | No |
| App-native user-generated public content or messaging | No |
| In-app purchases / paid random items | No |

These describe the current bundled app; they are not a substitute for the actual questionnaire. Answer access/privacy and external-web questions using their exact wording and the behavior described above. Let IARC generate the regional ratings; do not manually promise PEGI 3, ESRB Everyone or another certificate before the questionnaire produces it. Use your own monitored email if IARC requests contact information.

## System requirements

Minimum hardware requirement text:

```text
Windows 10 build 19041 or later, or Windows 11; x64 processor.
```

Additional requirement text:

```text
Camera and microphone are needed only for their respective tests. Internet access is needed for connectivity checks and online help. Windows permissions, administrator rights or device policy may restrict some actions.
```

Do not mark camera, microphone or an internet connection as required for every feature. Do not invent minimum RAM, storage size, GPU or measured startup/resource specifications. Leave optional numeric requirements unset until validated against the final package.

## Restricted capability: runFullTrust

Use the following explanation for the runFullTrust declaration in the final manifest:

```text
Unstuck OS is an Electron-based Win32 desktop utility. The runFullTrust capability is needed to launch its desktop executable and perform bounded native Windows operations: read local system and network information, inspect Windows licensing status, open approved Windows settings links, register an optional global shortcut, use native file dialogs, export reviewed local reports and create an empty folder after confirmation.

Supported repair actions are limited to selected older temporary-file deletion after a scan, user review and native confirmation, and a fixed Windows ipconfig /flushdns command after approval with connectivity checks before and after it. User issue text and online content are never executed as commands. The app does not auto-elevate, install a persistent service, disable security protections, reset network adapters or terminate other applications.

Camera and microphone tests are user-initiated, remain subject to Windows and application permissions, and process media locally without recording or uploading it. Preferences and optional diagnostic history are stored locally. No paid AI, account, advertising or analytics service is required.
```

Review all capabilities in the final MSIX and explain any additional declarations separately. Do not add unused capabilities just to match this sheet. Verify camera/microphone behavior inside the actual package.

## Notes for certification

Paste this in Notes for certification after confirming it matches the tested MSIX:

```text
Unstuck OS is a Windows desktop utility created by Francis Kusi. No account, subscription, paid service or test credentials are required.

On first launch, use Get Started to review the introduction or Skip Introduction to enter the workspace. The app defaults to dark mode; the header theme button switches to light mode.

Suggested review steps:
1. Search for Date and time, open the task and approve opening the corresponding Windows settings page. Navigation does not change settings.
2. Open Help & Support to search bundled articles, view tutorials or start the guided tour. The tour does not execute repairs.
3. Open Issue assistant and enter My storage is full. Analysis is read-only. Review only eligible older temporary files. Nothing is preselected; permanent deletion requires exact selection and native confirmation. Cancel the confirmation to verify that no files are removed.
4. Open Troubleshooting to run an internet check or optional camera/microphone test. Internet checks contact Microsoft endpoints; media tests require suitable hardware and permission and never record or upload media. Stop media ends access.
5. The DNS repair requires approval before its fixed command runs; connectivity checks run before and after. Windows permissions or device policies may prevent the command. Failed or inconclusive checks are not reported as successful repairs.
6. Report a Problem prepares a local report. Diagnostic findings are optional. Preview is required before Copy report or Save report locally; nothing is sent automatically.

The app opens online help in the user's default browser. Online issue search requires consent showing the text to be shared and does not attach diagnostic history or files. Supported local help and task discovery work offline. Some features depend on Windows version, hardware and policy. No blanket automatic repair, antivirus protection, performance improvement or Microsoft affiliation is claimed.
```

Do not state that WACK, clean installation, upgrade, uninstall, hardware acceptance or accessibility certification has passed until those checks have actually been performed on the final MSIX.

## Screenshots and captions

These are real application captures, not simulated results. Each is at least 1366×768 PNG and below the 50 MB limit. Download the files and upload them in Store listings; image URLs do not replace the upload field.

| Order | File | Caption |
|---|---|---|
| 1 | 01-issue-assistant-dark.png | Describe a PC problem, start supported checks and review your next step in the Issue assistant. |
| 2 | 02-issue-assistant-light.png | Work with softer light-theme surfaces and clear controls for analysis and online guidance. |
| 3 | 03-help-center.png | Search offline help, explore tutorials and FAQs, or restart the guided application tour. |
| 4 | 04-keyboard-shortcuts.png | Discover useful Windows keyboard shortcuts and save the ones you use most. |

Direct PNG download links:

- https://raw.githubusercontent.com/brainiacweb-tech/Unstuck-OS/main/store-assets/submission/screenshots/01-issue-assistant-dark.png
- https://raw.githubusercontent.com/brainiacweb-tech/Unstuck-OS/main/store-assets/submission/screenshots/02-issue-assistant-light.png
- https://raw.githubusercontent.com/brainiacweb-tech/Unstuck-OS/main/store-assets/submission/screenshots/03-help-center.png
- https://raw.githubusercontent.com/brainiacweb-tech/Unstuck-OS/main/store-assets/submission/screenshots/04-keyboard-shortcuts.png

Use the logo assets already included in the package. For the optional Store listing app-tile field, Microsoft recommends a 300×300 image; leave it to use the package icon until an exact-size optional tile is exported. Do not upload an arbitrary 1024×1024 file into a field requiring 300×300. Trailers and hero art are optional for this desktop app and have not been fabricated.

## Information only you can provide

- Reserved Partner Center package name, publisher identity and publisher display name.
- Your verified account/legal identity, country, address and telephone details wherever the account requires them.
- Your own monitored email for account, rating or private-support fields that specifically require email.
- Any required account verification, tax/payment information, trader/business declarations or agreements. Free pricing does not justify entering made-up account details.
- Your chosen markets, publication date and acceptance of the developer agreements.

The MSIX upload file is not ready yet: store-assets/identity.json still contains placeholders. Do not upload a portable EXE into the MSIX package field. The package needs the exact Store identity, a final build, validation, installation/update/uninstall testing and the required acceptance work before you submit it for certification.

## Official references

- Submission steps: https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/msix/create-app-submission
- Listing fields and text limits: https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/msix/add-and-edit-store-listing-info
- Category options: https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/msix/categories-and-subcategories
- Privacy and support fields: https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/msix/support-info
- Screenshot and logo requirements: https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/msix/screenshots-and-images
- Package requirements: https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/msix/app-package-requirements
