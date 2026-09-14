---
name: systim
description: A warm process-control mimic panel — hairlines carry the diagram, one signal green reports live.
colors:
  ground: "#F4F2EE"
  ground-sunken: "#EDEAE4"
  ground-elev: "#FBFAF7"
  ink: "#16150F"
  ink-body: "#46443C"
  ink-mute: "#6B6859"
  rule: "#C9C5BC"
  rule-strong: "#A29D92"
  live: "#17724A"
  live-dot: "#1B8A57"
  danger: "#A3341F"
  ground-dark: "#171614"
  ground-sunken-dark: "#121110"
  ground-elev-dark: "#1F1E1B"
  ink-dark: "#F2EFE9"
  ink-body-dark: "#BAB7AE"
  ink-mute-dark: "#8C8980"
  rule-dark: "#34322E"
  rule-strong-dark: "#55524C"
  live-dark: "#3FC47E"
  live-dot-dark: "#3FC47E"
  danger-dark: "#E8836B"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.05rem, 6.67vw, 6rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.032em"
    fontVariation: "'wdth' 94"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.75rem, 3.1vw, 2.9rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.028em"
    fontVariation: "'wdth' 96"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.25rem, 1.9vw, 1.6rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.026em"
  wordmark:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 600
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 92"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
    fontVariation: "'wdth' 100"
  prose:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1rem, 1.05vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.68
  lead:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1rem, 1.1vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.62
  label:
    fontFamily: "Chivo Mono, ui-monospace, 'SFMono-Regular', Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.1em"
  readout:
    fontFamily: "Chivo Mono, ui-monospace, 'SFMono-Regular', Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.1em"
  numeral:
    fontFamily: "Chivo Mono, ui-monospace, 'SFMono-Regular', Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.08em"
    fontFeature: "tabular-nums"
  meta:
    fontFamily: "Chivo Mono, ui-monospace, 'SFMono-Regular', Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.06em"
rounded:
  square: "0"
  micro: "2px"
  control: "3px"
  pill: "99px"
  round: "50%"
spacing:
  gutter: "clamp(20px, 4.2vw, 72px)"
  band-y: "clamp(80px, 10vw, 152px)"
  band-head: "clamp(48px, 6vw, 88px)"
  block-lead: "clamp(44px, 5vw, 76px)"
  grid-gap: "clamp(40px, 6vw, 110px)"
  grid-gap-narrow: "clamp(24px, 3vw, 44px)"
  stack-gap: "clamp(18px, 2.2vw, 30px)"
  wide-gap: "clamp(20px, 2.4vw, 34px)"
  col-gap: "clamp(24px, 4vw, 64px)"
  stage-y: "clamp(30px, 3.6vw, 46px)"
  row-y: "clamp(20px, 2.2vw, 28px)"
  cell-x: "clamp(20px, 2.4vw, 34px)"
  foot-y: "clamp(40px, 4vw, 64px)"
components:
  button-submit:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.control}"
    padding: "14px 34px"
    height: "48px"
  button-submit-hover:
    backgroundColor: "{colors.live}"
    textColor: "{colors.ground}"
  input-field:
    backgroundColor: "{colors.ground-elev}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "13px 14px"
    width: "100%"
  input-field-focus:
    backgroundColor: "{colors.ground-elev}"
    textColor: "{colors.ink}"
  link-ruled:
    textColor: "{colors.ink}"
    padding: "0 0 3px 0"
  link-ruled-hover:
    textColor: "{colors.live}"
  nav-link:
    textColor: "{colors.ink-body}"
    typography: "{typography.body}"
    height: "44px"
  nav-link-hover:
    textColor: "{colors.ink}"
  nav-link-act:
    textColor: "{colors.ink}"
  theme-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink-body}"
    rounded: "{rounded.round}"
    width: "40px"
    height: "40px"
  card-record:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink-mute}"
    rounded: "{rounded.square}"
    padding: "clamp(24px, 2.6vw, 34px) clamp(20px, 2.2vw, 30px)"
  frame-deliverable:
    backgroundColor: "{colors.ground-elev}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
  mimic-lamp:
    backgroundColor: "{colors.ground}"
    rounded: "{rounded.round}"
    size: "11px"
  mimic-lamp-lit:
    backgroundColor: "{colors.live-dot}"
    rounded: "{rounded.round}"
    size: "11px"
  record-lamp-unlit:
    backgroundColor: "transparent"
    rounded: "{rounded.round}"
    size: "7px"
---

# Design System: systim

## Overview

**Creative North Star: "The Control Room"**

This is a process-control mimic panel rendered as a webpage. Every structural line on the page is a 1px hairline the colour of a printed schematic rule; every numeral, key and state readout is set in monospace because it is a measurement, not a decoration; and a single signal green appears only where a system is reporting live. The page reads like the wall of a plant control room at rest: warm, flat, precisely ruled, and mostly empty — with one lamp line that keeps running whether or not anyone is watching.

The palette is warm, not clinical. The ground is a paper-white with a yellow cast (`#F4F2EE`), not a screen white; the ink is a warm graphite (`#16150F`), not black. Depth is achieved entirely by three tonal ground planes and a hairline vocabulary. Density is low at the top of the page and rises as the visitor descends: the hero holds one sentence across roughly half the bleed and leaves the rest empty, while the engagement stages, integration panel and handover frame compress into tight ruled rows. That gradient — spacious to instrumented — is the page's argument, and it should be preserved on any second surface.

What this world refuses is as load-bearing as what it uses. There is no box-shadow anywhere in the stylesheet; there are no filled buttons other than the single submit control; there are no icons other than the theme toggle's own sun/moon glyph; there is no decorative colour. Green never appears as branding, only as state. Both themes are first-class: light is the declared default ground because the buyer reads on a desktop mid-workday, and dark is offered rather than assumed.

**Key Characteristics:**

- Three ground planes only — sunken, default, elevated — and no fourth
- Elevation declared once, as a 1px hairline; zero `box-shadow` in the entire stylesheet
- Archivo with its `wdth` axis actually driven (94 / 96 / 92) for voice; Chivo Mono strictly for measurement
- One signal green, permitted only where a system reports live
- One self-starting motion moment on the page — the mimic sweep — and nothing else
- Browser chrome (selection, caret, scrollbar, focus ring) themed from the same palette

## Colors

A warm, low-chroma instrument palette: three grounds, three inks, two rules, one signal, one fault. Every value below ships in both a light and a dark form; the frontmatter carries the dark values under the `-dark` suffix. Light is the default ground.

### Primary

- **Signal Green** (light `#17724A` text / `#1B8A57` lamp fill; dark `#3FC47E` for both): the only chromatic colour in the system. It appears on the focus ring, the caret, the selection background, a lit mimic lamp, a hovered ruled link, a hovered nav underline, a hovered mimic label, a hovered footer link, a focused input border, the submit button's hover fill, and the success form status. It is a state report, never an identity mark. In dark the two green tokens collapse to a single value because the darker ground already carries the lamp.

### Neutral

- **Instrument Paper** (`ground`, light `#F4F2EE` / dark `#171614`): the default ground plane. Also the record card fill, the resting mimic lamp fill, the scrollbar thumb's cut-out border, and the text colour that sits on `ink` (the submit button, the skip link, selected text).
- **Recessed Panel** (`ground-sunken`, light `#EDEAE4` / dark `#121110`): the single sunken plane, used only on `.band--sunken` (the integration-surface band). It is what makes that band read as set into the wall rather than sitting on it.
- **Lit Plane** (`ground-elev`, light `#FBFAF7` / dark `#1F1E1B`): the raised plane, used only on the handover deliverable frame and on form inputs. Two places, both of them things you are meant to reach into.
- **Graphite Ink** (`ink`, light `#16150F` / dark `#F2EFE9`): headings, the wordmark and footmark, stage names, deliverable titles, integration values, ruled-link and nav-action text, input text, and the submit button's fill.
- **Reading Ink** (`ink-body`, light `#46443C` / dark `#BAB7AE`): body copy, nav links at rest, footer nav links, deliverable descriptions, and the theme toggle's glyph.
- **Instrument Grey** (`ink-mute`, light `#6B6859` / dark `#8C8980`): every monospace readout — reference numerals, panel keys, record field names and values, record titles, state labels, form labels, hints, footer meta — plus the stage note and the contact alternate line. It is the colour of printed instrument text.
- **Hairline** (`rule`, light `#C9C5BC` / dark `#34322E`): the diagram. Band tops, masthead and footer borders, stage and panel row rules, the records grid gap, the deliverable frame and its internal divisions, the theme toggle's resting border, and the unlit portion of the mimic rail.
- **Strong Hairline** (`rule-strong`, light `#A29D92` / dark `#55524C`): the second, heavier hairline — reserved for lines that indicate something rather than merely divide. Ruled-link and nav-action underlines, the stage note's left rule, the unlit mimic lamp and record lamp rings, input borders at rest, and the scrollbar thumb.

### Tertiary

- **Fault Red** (`danger`, light `#A3341F` / dark `#E8836B`): field error text, invalid input borders, and the error-toned form status. It exists solely for the contact form and appears nowhere else.

### Named Rules

**The Live-Only Rule.** Green is a report, not a brand colour. It is permitted only where something is genuinely reporting live: a lamp the sweep has just reached, a control the visitor is currently focused on or hovering, a caret in a field they are typing into, a status that actually succeeded. It never fills a heading, a divider, a background, or a resting button.

**The Two-Hairline Rule.** `rule` divides; `rule-strong` indicates. A line that only separates two blocks of content is `rule`. A line that says "this is a link" or "this is a field" or "this lamp is off" is `rule-strong`. Do not introduce a third hairline weight or colour.

**The Unlit Lamp Rule.** A lamp with no data behind it is a hollow ring in `rule-strong`, never a grey fill and never a green one. The three record lamps are unlit on purpose because those channels are awaiting real client data; lighting them would be the page claiming proof it does not have.

## Typography

**Display Font:** Archivo (variable, `wdth` 62–125 / `wght` 100–900, with `ui-sans-serif`, `system-ui`, `-apple-system`, `Segoe UI`, `sans-serif` fallbacks)
**Body Font:** Archivo — the same family; there is no second text face
**Label/Mono Font:** Chivo Mono (variable, `wght` 200–700, with `ui-monospace`, `SFMono-Regular`, `Menlo`, `monospace` fallbacks)

**Character:** Archivo is a grotesque with a real width axis, and this world drives it. Headings are set narrower than body text (`wdth` 94 on the hero line, 96 on section heads, 92 on the wordmark and footmark, 100 everywhere else), which gives display type an engineered compression that reads as instrument lettering rather than marketing bigness. Chivo Mono is its counterpart, used only for things that are measured: numerals, keys, state labels, field names, and the footer meta line.

### Hierarchy

- **Display** (500, `clamp(2.05rem, 6.67vw, 6rem)`, line-height 1.06, `-0.032em`, `wdth` 94): the single hero sentence. Balanced with `text-wrap: balance` and held to 54% of the bleed at 940px and above — the empty seven columns are the composition.
- **Headline** (500, `clamp(1.75rem, 3.1vw, 2.9rem)`, line-height 1.1, `-0.028em`, `wdth` 96): every section head. Balanced, and capped at 20ch (26ch in the wide band arrangement) so heads break as short instrument statements.
- **Title** (500, `clamp(1.25rem, 1.9vw, 1.6rem)`, line-height 1.2, `-0.026em`): engagement stage names.
- **Subtitle tier** (500, `-0.02em` to `-0.012em`): mimic stage labels `clamp(0.9375rem, 1.35vw, 1.1875rem)`, deliverable titles `1.0625rem`, record titles `1.125rem` (set in `ink-mute` because those records carry no data yet), integration values `clamp(0.9375rem, 1.2vw, 1.0625rem)`.
- **Body** (400, `1rem`, line-height 1.6): the document default. Prose paragraphs step up to `clamp(1rem, 1.05vw, 1.0625rem)` at line-height 1.68 and are held to 62ch; the hero lead is `clamp(1rem, 1.1vw, 1.0625rem)` at 1.62 and held to 58ch; stage bodies are held to 58ch and deliverable descriptions to 54ch.
- **Label** (Chivo Mono 500, `0.75rem`/1.6, `0.1em`, uppercase): integration panel keys and form field labels.
- **Readout** (Chivo Mono 500, `0.6875rem`/1, uppercase): record state lines and the mimic reference numerals at `0.08em`; the deliverable frame label at `0.12em`; record state labels at `0.1em`.
- **Numeral** (Chivo Mono 500, `0.75rem`/1.6, `0.08em`, `tabular-nums`): engagement stage reference numbers.
- **Meta** (Chivo Mono 400, `0.75rem`/1.6, `0.06em`): footer meta lines and record field names (the latter at line-height 1.5).

### Named Rules

**The Measurement-Only Rule.** Chivo Mono is permitted for numerals, reference marks, keys, state labels, field names, and the footer meta line. It is never used for a heading, a sentence, a button, a link in running text, or anything chosen for texture. If it is not being read as a value, it is Archivo.

**The Driven-Width Rule.** Display type narrows. The `wdth` axis is a structural part of the voice, not a nicety: 94 on the hero line, 96 on section heads, 92 on the wordmark and footmark, 100 on everything else. A new heading that ships at default width will look foreign even at the correct size and weight.

**The Measure Rule.** Text is always capped: 62ch for prose, 58ch for the hero lead and stage bodies, 54ch for deliverable descriptions, 48ch for the lead in a wide band, 26ch or 20ch for heads. Nothing on this page runs the full bleed as text.

## Layout

The page is a single centred bleed: `max-width: 1360px`, auto side margins, side padding of `clamp(20px, 4.2vw, 72px)`. Every section is a `.band` with vertical padding of `clamp(80px, 10vw, 152px)`; bands that need separating carry a 1px `rule` top border rather than a gap.

**Four band arrangements exist deliberately.** They are a set, not one pattern with exceptions, and a new surface should choose among them rather than invent a fifth:

1. **Head-left / prose-right** (default `.band__grid`): two equal columns above 900px with a `clamp(40px, 6vw, 110px)` gap; one column below, gap `clamp(24px, 3vw, 44px)`. Used by the objection band and the handover intro.
2. **Full-width head** (`.band__head`): the head runs the full bleed with `clamp(48px, 6vw, 88px)` beneath it, and the content below is a ruled list rather than a second column. Used by the engagement stages.
3. **Head over lead, one narrow column** (`.band__grid--stack`): a single `62ch` column above 900px with a tight `clamp(18px, 2.2vw, 30px)` gap, so the head and its lead read as one paragraph-block. Used by the integration-surface band.
4. **Head at full measure, lead settled right** (`.band__grid--wide`): one full-width column above 900px, head capped at 26ch, lead `justify-self: end` and capped at 48ch. Used by the selected-work band.

The contact section is its own split: one column below 940px with a `clamp(48px, 6vw, 96px)` gap, and `1fr` / `30rem` above it with `clamp(56px, 8vw, 130px)`.

**Ruled row layouts.** Three components share the same spatial idea — a list of rows separated by hairlines, with a narrow fixed left column carrying the key and a fluid right column carrying the value. Engagement stages: `3.5rem / 13rem / 1fr` above 900px. Integration panel rows: `11rem / 1fr` above 760px, baseline-aligned. Deliverable rows: `14rem / 1fr` above 800px, baseline-aligned. All three collapse to a single column with a 10px (stages, panel) or `6px 18px` (deliverable) gap below their breakpoint.

**Breakpoints observed:** 385px (nav tightens), 739/740px (the mimic rail turns vertical), 759/760px (the masthead stops sticking, the nav moves inline, panel rows split), 800px (deliverable rows split), 840px (the records grid becomes three columns), 900px (band grids and stages become multi-column), 940px (the hero line is capped at 54%, the contact split opens).

**Rhythm.** A repeated `clamp(44px, 5vw, 76px)` sets the gap between a band's head block and the instrument block beneath it — the mimic line, the integration panel, the records grid, and the deliverable frame all use it. Row padding is `clamp(20px, 2.2vw, 28px)` for dense rows and `clamp(30px, 3.6vw, 46px)` for engagement stages.

**Touch sizing.** Below 760px or on a coarse pointer, standalone controls grow to 44px: the theme toggle, mimic labels, footer nav links, and the hero's ruled link all become 44px-high inline-flex targets, and the skip link's padding grows to `16px 20px`. Links set inside a sentence keep their line rhythm.

### Named Rules

**The Hairline-Not-Gap Rule.** Sections are separated by a 1px `rule` border, not by extra whitespace or a coloured band. The only tonal band break in the system is the single sunken plane.

**The Empty-Right Rule.** The hero sentence stops at 54% of the bleed above 940px. The remaining space is not available for a graphic, a form, a stat block or a screenshot. The emptiness is the claim.

## Elevation & Depth

**This system has no shadows.** There is not a single `box-shadow`, `text-shadow` or `drop-shadow` declaration in the stylesheet, and that is a rule of the world rather than an omission. Depth is carried by exactly two devices.

First, **three tonal ground planes**: `ground-sunken` (`#EDEAE4` / `#121110`) reads as set into the wall and appears on one band only; `ground` (`#F4F2EE` / `#171614`) is the default plane; `ground-elev` (`#FBFAF7` / `#1F1E1B`) reads as lit and appears on exactly two things — the handover deliverable frame and form inputs. There is no fourth plane and no gradient fill anywhere except the mimic sweep itself.

Second, **the hairline**: a 1px `rule` border is the only way a container is declared. The deliverable frame is a 1px box; the records grid is a 1px-gap grid whose background is `rule` showing through between cards; stages and panel rows are separated by a single top border with a closing bottom border on the last item.

The masthead is the one place the system uses a translucent layer: a `color-mix(in srgb, var(--ground) 86%, transparent)` background with `saturate(180%) blur(14px)` backdrop-filter, with a solid `ground` fallback under `@supports not (backdrop-filter: blur(1px))`. It is still bounded by a 1px `rule` bottom border rather than a shadow.

### Named Rules

**The No-Shadow Rule.** Zero `box-shadow` in the stylesheet. If something must separate from its surroundings, it gets a 1px hairline or a tonal plane change. A shadow anywhere on a future surface breaks the world, not just the page.

**The Three-Plane Rule.** Sunken, default, elevated. Exactly three. Sunken is for a band that recedes; elevated is for a surface you reach into. Do not add a fourth tone to signal a fourth level of importance.

## Shapes

The form language is square. Every structural container — bands, the deliverable frame, record cards, panel rows, stages — has `border-radius: 0`, unstated and inherited from the reset. Only four radii exist, and each is justified by what it is:

- **Control radius (3px)**: form inputs, textareas, and the submit button. Just enough to read as an operable control rather than a drawn box.
- **Focus radius (2px)**: the `:focus-visible` outline's corner, so the ring hugs square elements without looking like a mistake.
- **Round (50%)**: the theme toggle, the mimic lamps (11px), and the record lamps (7px). Circles in this world are lamps and lamp-shaped controls; nothing else is round.
- **Pill (99px)**: the webkit scrollbar thumb only. Browser furniture, not page geometry.

Borders are 1px everywhere except the mimic lamp ring, which is 1.5px so an 11px circle still reads as a bezelled indicator, and the scrollbar thumb, which carries a 3px `ground` border to inset it from the track.

### Named Rules

**The Square-Container Rule.** Containers are square. Radius is reserved for controls (3px) and lamps (50%). A rounded card in this world reads as borrowed from a different one.

## Components

### Buttons

The system has exactly one filled button.

- **Shape:** Slightly softened corners (3px radius), minimum height 48px, padding `14px 34px`.
- **Submit:** Graphite ink fill (`ink`) with paper text (`ground`) and a 1px `ink` border, Archivo 500 at `0.9375rem`/1, `-0.01em`.
- **Hover:** fill and border both become the signal green (`live`), text stays `ground` — the button reports that it is about to act. Transitions run `240ms cubic-bezier(0.22, 1, 0.36, 1)`.
- **Disabled/in-flight:** `opacity: 0.55` with `cursor: progress`; the script rewrites the label to "Sending".
- **There is no secondary or ghost button.** Every other action on the page is a ruled link.

### Links

- **Ruled link** (`.ruled`): the panel's one link vocabulary. Graphite ink, 500 weight, no underline, 3px of padding-bottom over a 1px `rule-strong` bottom border. On hover both the text and the rule turn `live`. Used for the hero's primary action and the direct email address.
- **Nav link:** `ink-body`, `0.875rem` under 760px and `0.9375rem` above, 44px minimum height, `ink` on hover.
- **Nav action** (`.nav__act`, the "Start" link): `ink`, 500 weight, 2px padding-bottom over a 1px `rule-strong` border; the border turns `live` on hover.
- **Footer link:** `0.9375rem` in `ink-body`, turning `live` on hover.
- **In-flow anchors** inherit colour and carry `text-decoration-thickness: 1px` with `text-underline-offset: 0.22em`.

### Cards / Containers

- **Record card:** square, `ground` fill, padding `clamp(24px, 2.6vw, 34px) clamp(20px, 2.2vw, 30px)`, no border of its own — separation comes from the parent grid's 1px gap over a `rule` background, plus `border-block: 1px solid rule` on the grid.
- **Deliverable frame:** square, `ground-elev` fill, 1px `rule` border, a monospace uppercase label bar at `16px clamp(20px, 2.4vw, 34px)` with a 1px `rule` bottom border, then rows each divided by 1px `rule` with the last divider removed.
- **Shadow strategy:** none. See Elevation & Depth.

### Inputs / Fields

- **Style:** full width, `ground-elev` fill, 1px `rule-strong` border, 3px radius, `13px 14px` padding, Archivo 400 at `1rem`/1.5, `ink` text, `ink-mute` placeholder. Textareas resize vertically only with a 120px minimum height.
- **Label:** Chivo Mono 500, `0.75rem`/1, `0.1em`, uppercase, `ink-mute`, 7px above its control.
- **Focus:** the border turns `live` and the caret is already `live` via `caret-color`; `outline-offset` tightens to 1px so the global focus ring sits close to the 3px corner.
- **Error:** the field wrapper takes `data-invalid`, the border turns `danger`, and a `0.8125rem`/1.4 Archivo message in `danger` appears beneath. The hint line is `0.8125rem` in `ink-mute`.
- **Status line:** a left-ruled block — 14px padding-left over a 1px border-left — in `live`, switching to `danger` on `data-tone="error"`, hidden entirely when empty.

### Navigation

- **Masthead:** sticky at the top above 760px with a translucent blurred `ground`, a 1px `rule` bottom border, and a 68px minimum inner height; static below 760px so two rows never eat a small viewport. Order is wordmark, nav, toggle on desktop; on narrow panels the nav drops to its own full-width row beneath, gaining a 1px `rule` top border, and distributes its links with `space-between`.
- **Wordmark:** lowercase "systim", Archivo 600, `1.1875rem`, `-0.035em`, `wdth` 92, `ink`.
- **Theme toggle:** a 40px circle (44px on touch) with a 1px `rule` border and no fill, carrying an 18px sun/moon SVG stroked at 1.4px in `currentColor`. Border goes `rule-strong` and the glyph goes `ink` on hover. It ships `hidden` in the markup and is revealed by script, so a no-JS visitor is never handed a dead control.
- **Footer:** a full-width link row above a 1px `rule` divider, then the footmark (Archivo 600, `1.0625rem`, `-0.035em`, `wdth` 92) pushed left of two monospace meta lines.

### The Mimic Relay (signature)

The page's one authored motion moment, and the thing that must survive any future edit. Five stages in a `repeat(5, 1fr)` grid, each carrying a monospace reference numeral, an 11px lamp, and a text label linked to its explanation further down the page.

- **The rail:** a 1px line positioned at `calc(var(--rail-y) + (var(--dot) - 1px) / 2)` — 30px from the top of each stage, aligned to the lamps' centres. It is painted as two stacked background layers: a moving `linear-gradient(90deg, transparent 0%, var(--live) 50%, transparent 100%)` sized `18%` of the rail width, over a static `rule` fill at `100%`.
- **The sweep:** `background-position` animates from `-20%` to `120%` over a **7s linear infinite** cycle (`--cycle: 7s`). The sweep's centre therefore crosses one fifth of the rail every 1.22s.
- **The lamps:** each lamp runs the same 7s linear infinite cycle with a staggered delay — **0.45s, 1.67s, 2.89s, 4.11s, 5.33s** — spaced exactly 1.22s apart so each lamp fires as the sweep's centre reaches its dot. The lamp keyframes: at 0% the lamp is `ground` fill with a `rule-strong` ring at `scale(1)`; at 2% it snaps to `live-dot` fill and ring at `scale(1.3)`; it holds through 9%; and from 22% to 100% it is back at rest. The lamp is lit for roughly 7% of the cycle — 0.49s — and dark for the rest.
- **Narrow panels (≤739px):** the rail rotates to vertical. It becomes a 1px column inset 4px from the left with 6px of clearance top and bottom, the gradient swaps to `linear-gradient(180deg, …)` at `100% 18%`, and the animation switches to `mimic-sweep-y` running `0 -20%` to `0 120%`. Lamps move to `left: -30px` and the stage stacks the reference above the label.
- **Reduced motion:** the sweep stops completely. `.mimic::before` is repainted as a flat `rule` line at full size, and every lamp is pinned to its resting state with `transform: none`. The rail still reads as a diagram; it simply is not running.

### Engagement Stage (signature)

A ruled row carrying a monospace tabular reference numeral, a stage name, and a body block — `3.5rem / 13rem / 1fr` above 900px, top-aligned, with a 1px `rule` top border and a closing bottom border on the last row. Some stages carry a note: 14px above, 14px of left padding over a 1px `rule-strong` left rule, `0.9375rem` in `ink-mute`. The numerals tie back to the mimic line's reference marks — that correspondence is the page's internal wiring and should be preserved if stages are added.

### Browser Surfaces

The parts of the page the system did not draw are still themed from the palette, deliberately:

- `::selection` — `live` background with `ground` text
- `caret-color: var(--live)` on inputs and textareas
- Scrollbar — `scrollbar-color: rule-strong transparent` with `scrollbar-width: thin`; the webkit thumb is `rule-strong` at 11px with a 3px `ground` border and a 99px radius, going `ink-mute` on hover, over a transparent track
- `:focus-visible` — `2px solid live` outline at `3px` offset with a 2px radius; `:focus:not(:focus-visible)` clears the outline
- `text-underline-offset: 0.22em` and `text-decoration-thickness: 1px` on anchors
- `font-variant-numeric: tabular-nums` on every numeric readout — mimic references, stage references, record values, the footer year
- `color-scheme` declared per theme so form controls and scrollbars match the ground

### Theme System

Light is the default and is declared on bare `:root` with `color-scheme: light`. Dark is declared twice: under `@media (prefers-color-scheme: dark)` guarded as `:root:not([data-theme="light"])`, and again under `:root[data-theme="dark"]`, so an explicit toggle wins in both directions. A blocking script in `<head>` reads `localStorage['systim-theme']` and stamps `data-theme` before first paint, wrapped in `try/catch` so private mode falls through to the media query. `<meta name="theme-color">` is declared twice, per media query, matching `ground` in each theme. The body transitions `background-color` and `color` over `240ms cubic-bezier(0.22, 1, 0.36, 1)` on theme change.

## Do's and Don'ts

### Do:

- **Do** declare elevation with a 1px hairline or a tonal plane change. `rule` divides, `rule-strong` indicates.
- **Do** drive Archivo's width axis on display type — 94 on a hero line, 96 on a section head, 92 on a mark. Default width reads as a foreign typeface here.
- **Do** reserve Chivo Mono for numerals, keys, reference marks, state labels and field names — things being read as values.
- **Do** cap every text block: 62ch prose, 58ch leads and stage bodies, 54ch deliverable descriptions, 48ch wide-band leads, 20–26ch heads.
- **Do** choose one of the four established band arrangements when adding a section rather than inventing a fifth.
- **Do** use the repeated `clamp(44px, 5vw, 76px)` step between a band's head block and its instrument block.
- **Do** theme browser surfaces from the palette — selection, caret, scrollbar, focus ring — on any new surface.
- **Do** keep every new colour value in both themes; the dark form is not an afterthought.
- **Do** halt any motion entirely under `prefers-reduced-motion` and render the affected element in its resting state, as the mimic rail does.
- **Do** grow standalone controls to 44px below 760px or on a coarse pointer.

### Don't:

- **Don't** add a `box-shadow` anywhere. The stylesheet has zero, and that is the rule.
- **Don't** add a fourth ground plane. Sunken, default, elevated — three.
- **Don't** use green as decoration, branding, a fill, or a heading colour. It reports live state only.
- **Don't** light a lamp for a channel that has no data. Unlit is a hollow `rule-strong` ring, and it is honest.
- **Don't** add a second self-starting animation. The mimic sweep is the page's only unbidden motion; everything else responds to the visitor.
- **Don't** round a container. Radius belongs to controls (3px) and lamps (50%).
- **Don't** introduce a second filled button. Secondary actions are ruled links.
- **Don't** set body copy, headings, buttons or in-sentence links in Chivo Mono.
- **Don't** fill the empty right side of the hero. The stop at 54% is the composition.
- **Don't** add a gradient. The only one in the system is the mimic sweep itself, and it is a moving light, not a surface.
