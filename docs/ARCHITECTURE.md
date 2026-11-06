# Architecture

Electron main owns filesystem access, settings navigation, global shortcut registration and network diagnostics. The sandboxed React renderer communicates only through a frozen preload API. Search runs locally using Fuse.js. Shared action records include risk, level, handler, minimum Windows build, guidance and verification.

Preferences and optional diagnostic history are stored in app.getPath('userData')/preferences.json. Writes are serialized through a temporary file and rename. History is bounded to 100 records and recent tasks to 20. Renderer state is updated only after main process persistence succeeds.

Diagnostics use Node network interfaces, DNS lookup and a bounded HTTPS request. Media uses browser getUserMedia with a native permission dialog. Fixed, read-only Windows PowerShell inspections are allowlisted in windows.ts and run with time/output limits and shell execution disabled. No user-supplied command or script is executed.

