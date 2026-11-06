# Desktop layout refinement

Card grids now respond to available workspace width, with readable minimum card widths and content that wraps instead of clipping. Task cards align their category, title, explanation and footer consistently. Quick actions, shortcuts, help cards, system summaries and About panels use more consistent padding and spacing.

Search fields use compact padding and shorter placeholders. The issue form has a short placeholder with its example shown separately as an associated hint. Report fields, checkbox sizing, select margins, toolbars, icons and long technical values are sized to stay within their containers. The sidebar is narrower, inactive light-theme navigation is transparent, and Dashboard actions share a panel. Repeated instructions were removed from the Issue assistant so its main input and action buttons fit in the minimum-size window.

Changed source: src/renderer/style.css, main.tsx, RepairAssistant.tsx and HelpWorkspace.tsx. Added scripts/layout-smoke.cjs and docs/LAYOUT-QA.json. Screenshots are captured in store-assets/layout.

Verification: production build, ESLint and TypeScript passed. The Electron layout audit passed 66 page/content checks at 1280×850, 1024×768 and 800×600 in both themes. Checks cover horizontal overflow, clipped controls, card bounds, placeholder text width, long report content, About, onboarding bounds and visibility of the primary issue action. The existing Help/onboarding/tour/native-report regression also passed. Tests use isolated profiles; no repair or cleanup is run as part of the layout audit.
