# Unstuck OS Privacy Policy

Effective date: 6 November 2026

Unstuck OS is a Windows desktop utility created by Francis Kusi. This policy describes the information accessed by the application and the choices available to you.

## Local operation

No account, subscription, advertising, analytics SDK, telemetry service, cloud database or paid AI service is required. Search, bundled help, tutorials, shortcuts and supported local checks are available without an internet connection. Fonts and branding are bundled with the application.

## Information accessed and stored

The app reads local system summaries, such as CPU model, memory, disk space, Windows information and uptime. Supported checks can read network adapter names, local IP and gateway configuration, connectivity results and Windows licensing status. Unstuck OS does not ask you to enter a Windows or Office product key, password or account credential.

Preferences, favorites, recent task identifiers and optional network diagnostic history are stored in the per-user Windows application-data folder. History is bounded to 100 diagnostic records. Recent task selections are stored instead of a history of raw search requests. Operation logs are capped at 50 records containing timestamps, operation names and fixed error codes; they do not contain raw arguments, diagnostic payloads, product keys or stack traces.

## Camera and microphone

Camera and microphone tests request permission and remain subject to Windows privacy settings. Media is processed locally for a camera preview or microphone level meter. The app does not record, save or upload these streams. Streams stop when you select Stop media, leave the test or close the application. Windows may maintain its own access and permission records.

## Storage cleanup and repairs

A storage scan examines file names, sizes and timestamps for eligible older temporary files in the supported user Temp folder. It does not read their contents or scan personal folders. Cleanup previews are held in memory, expire after ten minutes and are replaced by a new scan or discarded when the app closes.

No candidate files are selected automatically. Deletion requires your selection and native approval. Approved cleanup permanently deletes the selected eligible temporary files; it does not use the Recycle Bin. Changed, locked or inaccessible files are skipped. File age alone does not prove a file is unnecessary, so review every selection carefully.

DNS repair uses a fixed Windows command after approval and performs connectivity checks before and after the repair. It does not transmit your diagnostic history as part of the repair.

## Internet connections and external websites

Internet connectivity tests resolve and contact www.microsoft.com using DNS and HTTPS and contact www.msftconnecttest.com using HTTP. Your network resolver and the contacted services receive normal connection metadata, including your IP address. Local diagnostic history and personal files are not attached to these requests.

Find online guidance asks for approval before opening Microsoft Support search in your default browser. The approval dialog shows the issue text that will be included in the search URL. Only that reviewed text is sent; files, diagnostic findings and operation logs are not attached. Avoid including personal details, passwords or product keys. Search text may appear in your browser history and is processed under the receiving website's policies.

Other official support links and this project's GitHub links open external websites in your browser. Those websites operate under their own privacy policies. Unstuck OS does not download or execute repair instructions from web pages.

## Reports and clipboard

Problem reports are prepared locally. Diagnostic findings are included only when you select that option. You must preview the report before copying or saving it. Editing the report invalidates its preview. The app does not automatically send reports, upload logs, attach personal files or email information.

Copy actions write the selected shortcut or reviewed report to the Windows clipboard and read it back to verify the copy. Clipboard content is not uploaded or stored by Unstuck OS. Other applications or Windows clipboard synchronization features may access clipboard content under their own settings. Exported report files remain in the location you select and must be deleted separately if no longer needed.

## Your controls

- Disable saved diagnostic history in Preferences to remove saved diagnostic records and operation logs.
- Clear history to remove saved diagnostics, operation logs and recent task selections. Favorites remain until you remove or reset them.
- Use Review locally stored data in Preferences to inspect the app's saved state.
- Stop media or change Windows privacy permissions to control camera and microphone access.
- Cancel any repair, cleanup confirmation, online search or file dialog before approval.
- Delete exported reports separately and clear or manage clipboard history through Windows settings if needed.

Uninstalling may leave per-user preferences and history. Clear history before uninstalling if desired. App data and exported files are not erased remotely by the developer. Browser history, external support submissions and Windows permission records are managed separately by those services or Windows.

## Contact and changes

For application or privacy questions, use the project's support page:
https://github.com/brainiacweb-tech/Unstuck-OS/issues

GitHub issues are public. Do not post private diagnostic details, personal files, passwords or product keys. The project currently has no configured private support email. This policy will be updated when information-handling behavior changes, with an updated effective date.
