# Design: Club Vault

The site is a black card with foil-stamped type. Gold reads as a **material** that catches light; it is never used as a flat accent color. Anything the club hasn't confirmed is **blind-debossed**: pressed into the stock, with no foil.

## Tokens (`app/globals.css` → `@theme`)

| Token | Value | Role |
|---|---|---|
| `ink` | `#0b0a08` | Page ground (card stock) |
| `stock` / `stock-2` | `#14120e` / `#1c1914` | Laminated panels, control fills |
| `deboss` | `#2c2821` | Blind-deboss text, unlit states |
| `line` / `line-strong` | gold at 16% / 42% | Hairlines, dashed placeholder edges |
| `gold` / `gold-bright` / `gold-deep` | `#d6b268` / `#f3dca6` / `#8f6d31` | Labels, live values, icons |
| `paper` / `muted` | `#f2ebdd` / `#aaa190` | Body text / secondary text (AA on ink) |

## Type

- **Stamp**, `.stamp`: Archivo at width 125%, weight 800, uppercase, tracking −0.02em, leading 0.86. Used for the wordmark, section titles, day names and night names.
- **Reading**: Hanken Grotesk, 1.05rem body, `text-muted` for ledes, `tabular-nums` for phone numbers and hours.
- Section titles are set with `clamp(2.4rem, 9vw, 5.25rem)`. The hero wordmark uses `clamp(3.3rem, 21.5vw, 11.5rem)` so it nearly spans a phone's width.

## Materials

- `.foil`: a metallic ramp clipped to text. The highlight position is `--sx` (0–100).
- `.foil-edge`: a 1px foil border. It marks plates, the lit (tonight) card and the table finder.
- `.plate-gold`: the solid foil plate, used only for primary actions.
- `.deboss`: tone-on-tone with a 1px light/dark emboss shadow. It's decorative, so readable text always sits beside it.
- `.card-stock`: the panel fill, with a faint corner lamination.

## Motion

- **Signature**: `FoilLight` moves `--sx` with the pointer (fine pointers) or with scroll (touch screens), so every foil surface catches the same light.
- **Entrance**: `.stamp-in` runs once on the wordmark.
- **Reduced motion**: both are disabled.

## Components

- **Plates**: `PlateLink` (primary) and `EdgeLink` (secondary). Minimum height 48px, radius 10px.
- **Cards**: radius 12px (`rounded-xl`) with a hairline border. Tonight's card switches to `foil-edge` plus a foil title.
- **`Placeholder` pill**: a dashed gold-deep edge, a dot and muted text. It is the only way unknown facts appear.
- **Mobile bar**: fixed at the bottom with Reserve and Call, respecting the safe area. Hidden at `lg`.

## Browser surfaces

- Selection is gold on ink.
- The caret is `gold-bright`.
- Focus is a 2px `gold-bright` outline; inputs add a gold ring.
- The scrollbar is `gold-deep` on ink.
- `color-scheme: dark`.
