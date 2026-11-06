# Architecture

Electron main owns filesystem access, settings navigation, global shortcut registration and network diagnostics. The sandboxed React renderer communicates only through a frozen preload API. Search runs locally using Fuse.js. Shared action records include risk, level, handler, minimum Windows build, guidance and verification.

Preferences and optional diagnostic history are stored in app.getPath('userData')/preferences.json. Writes are serialized through a temporary file and rename. History is bounded to 100 records and recent tasks to 20. Preference controls update optimistically in the renderer; native saves are queued to prevent rapid changes overwriting one another.

Diagnostics use Node network interfaces, DNS lookup and bounded HTTP and HTTPS requests. Media uses browser getUserMedia with a native permission dialog. Fixed, read-only Windows PowerShell inspections are allowlisted in windows.ts and run with time/output limits and shell execution disabled. Approved DNS repair uses a fixed ipconfig /flushdns command; cleanup uses bounded native-owned plans and revalidates selected temporary files before deletion. No user-supplied command or script is executed.

