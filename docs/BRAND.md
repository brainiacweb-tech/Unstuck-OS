# Unstuck OS brand guide

Official tagline: **Your PC. Uncomplicated.**

Supporting message: Find settings, solve everyday Windows problems, discover shortcuts, and take control of your computer—all in one place.

Secondary slogan for LinkedIn and Microsoft Store marketing: **Less searching. More doing.**

## Colour roles

| Role | Colour |
|---|---|
| Midnight Navy / default dark background | #0D1728 |
| Signature Teal / primary buttons and brand | #12B8A6 |
| Action Blue / selection, secondary actions, focus | #397BFA |
| Cloud White / light background | #F6F8FC |
| Light text / dark text | #F6F8FC / #172033 |
| Slate / light secondary text | #64748B |
| Light panels / borders | #FFFFFF / #E2E8F0 |
| Success / warning / error | #16A34A / #F59E0B / #EF4444 |

Flat fills only. Dark panels and accessible dark-mode secondary text use navy/slate tints. Small teal/blue text uses darker accessible tones in light mode; primary buttons retain exact Signature Teal and use Midnight Navy text for contrast. Blue is reserved for interactive focus/selection/links.

## Type and layout

- Raleway 600/700: headings and identity.
- Inter 400/500/600: interface, controls and explanations.
- JetBrains Mono 500: shortcuts, diagnostic codes, commands and technical identifiers.
- Only these six Latin WOFF2 faces are bundled. No font CDN or runtime download. Unsupported-script glyphs use system fallback.
- Font OFL notices are included in packaged resources/licenses and source store-assets/licenses.
- 8px spacing rhythm; 16px panels/cards, 10px controls; 180ms transitions with reduced-motion support.
- Lucide icons. No emojis or gradients.

Dark navy is the default for fresh profiles and Reset preferences. Existing saved light/dark preferences are respected.

## Supplied artwork

The supplied PNG and wordmark SVG are preserved in store-assets/brand/. Windows icon sizes are derived from the supplied PNG. The Windows ICO contains 16, 24, 32, 48, 64, 128 and 256px images. Store PNG exports include 44, 50, 150, 512 and 1024px variants. The SVG icon derives from the supplied wordmark's original vector mark.

The app's light/dark wordmarks embed Raleway 700 and Inter 500 so their typography remains stable when rendered as SVG images offline. The dark wordmark changes only text colours for contrast.

Regenerate with `npm run brand:assets`. Verify with `node scripts/brand-smoke.cjs` after `npm run build`. Screenshots: dashboard-dark.png, dashboard-light.png, welcome-dark.png, quick-access.png.

## Soft light mode revision

The user requested less glare from light mode. The active light palette now uses #E8EDF2 backgrounds, #F0F3F6 panels and #E3E9EF sidebar/header surfaces. This supersedes the earlier Cloud White background requirement for light-mode UI surfaces. Primary teal actions, typography, icon assets, dark mode and readable text contrast remain in place.
