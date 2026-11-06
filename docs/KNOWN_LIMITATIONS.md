# Known limitations / release blockers

This is a functional development candidate, not a production-ready or Store-certified release.

- Physical microphone/camera/input selection, complete accessibility and actual Windows settings across supported editions require manual acceptance. Mocked permission tests are not hardware results.
- Documented Settings URIs have a broad build floor and visible fallback instructions. An accepted launch request does not prove the exact page opened, and some unavailable pages redirect to Settings home.
- Gateway/adapter Windows inspection was inconclusive in this environment. Failures and timeouts are reported honestly. Network tests use Microsoft HTTP and HTTPS endpoints; they do not measure speed or establish that every website works. Proxy/captive-portal interpretation remains guided.
- No automatic network reset, privileged repair, process termination or file cleanup. Restricted tasks provide explicit guidance. Users make Windows changes themselves before retesting.
- Media observations remain in-session; optional persisted diagnostic history contains network tests. Device names appear after media permission. OS-level DNS work already submitted may finish after the workflow is cancelled.
- Battery/edition data is unavailable when hardware/providers/policy prevent inspection. Battery health and live CPU-load interpretation remain guided; CPU, RAM, disk and uptime snapshots are real.
- Shortcut favorites are available through the library Favorites filter. Dashboard cards display action favorites. Related tasks/shortcuts are primarily found through categories. Recent action selections are stored instead of raw query text.
- Folder creation uses the fixed name Unstuck Folder and fails on collision. Desktop shortcut creation remains guided.
- Local error logs contain only operation names, timestamps and a fixed code, are capped at 50, and obey history controls. Logs contain no raw arguments, device data, keys or stacks.
- Startup/resource measurements from automation are not complete cold-start/idle benchmarks. See PACKAGED-LAUNCH.json when available.
- Partner Center identity, publisher contact/privacy URL and Windows SDK packaging tools are still required for MSIX. WACK, clean Store install/update/uninstall and ARM64 evaluation remain outstanding. Windows test binaries are unsigned.
