# Content to supply

Everything below is placeholder or needs your confirmation. Nothing on the site
claims a client, a metric, a logo, a testimonial or a partnership — those slots
are built and styled but deliberately empty, so the page is honest until you
fill them.

Ordered by how much each one costs you if it stays as-is.

---

## 1. Wire the contact form — `index.html`, `<form class="form">`

**Recommended, not blocking.** The form validates properly and already has a
working fallback: while `action` is `#`, submitting composes an email in the
visitor's own mail client with all four fields filled in, and tells them so.
Nothing is faked and no enquiry is lost.

A posting endpoint is still better — it works for people without a desktop mail
client configured, and it gives you a record. Set `action` and `method`:

```html
<form class="form" method="post" action="https://your-endpoint" novalidate data-form>
```

Any of these work with a static host, no backend needed:

| Option | Notes |
|---|---|
| Formspree | `action="https://formspree.io/f/XXXX"` — free tier, spam filtering |
| Netlify Forms | add `netlify` attribute, works automatically on Netlify |
| Basin / Formcarry | similar drop-in posts |
| Your own endpoint | anything accepting `POST` with `name`, `company`, `email`, `process` |

Once `action` is no longer `#`, `assets/js/site.js` stops intercepting and lets
the browser submit normally, showing a "Sending" state on the button. The
mailto fallback is bypassed automatically.

**Also:** add a thank-you page or set a redirect, so a successful submit lands
somewhere deliberate.

---

## 2. Replace the email address — 2 places

`hello@systim.example` is a reserved example domain and will bounce.

Change it in **one place only** — `index.html`, the `mailto:` link in
`<p class="contact__alt">` (and its visible text). The JavaScript reads the
address off that link, so the mailto fallback follows it automatically.

---

## 3. Selected work — three record slots

**The most valuable thing you can add.** The section currently shows three
channels reading `AWAITING DATA`, which is honest but proves nothing.

Each record needs:

| Field | What it wants | Example shape |
|---|---|---|
| Client name | Real name, or "A ⟨sector⟩ company" if under NDA | — |
| Sector | One or two words | Logistics |
| Process | The specific process automated | Supplier invoice reconciliation |
| Before | The measured starting state | 3 FTE, ~9 days/month |
| After | The measured end state | 40 min/month, 2 exceptions flagged |

Then in `index.html`, for each `<li class="record" data-state="awaiting">`:
1. change `data-state="awaiting"` to `data-state="live"`
2. replace `Client name` in `.record__title`
3. replace each `—` in the `<dd>` elements
4. delete the `<p class="record__state">…</p>` block, or change its text

The intro copy above the section currently promises "published with the
client's permission and their own numbers. Nothing here is modelled or
estimated." **Keep that true or change the sentence.**

If you would rather not show work at all yet, delete the whole
`<section class="band band--ruled" id="work">` block and the two matching nav
links (`#work` appears once in the footer nav).

---

## 4. Confirm the integration list — `<dl class="panel">`

These are written as integration targets you work with regularly. They are
**not** claimed partnerships or certifications, and no logos are used, which
keeps it defensible. But you should still confirm the list is true:

> Records — Salesforce, HubSpot, NetSuite, Dynamics, Pipedrive
> Data — Postgres, Snowflake, BigQuery, Databricks, S3
> Work — Slack, Teams, Jira, Linear, Zendesk, Intercom
> Documents — Google Workspace, SharePoint, Box, DocuSign
> Anything else — REST, GraphQL, SFTP, Webhooks, and the internal tool nobody has documented since 2019

Cut anything you have not actually integrated with. A buyer will ask.

---

## 5. Check the engagement claims — `<ol class="stages">`

The five stages describe a specific way of working. Read them as commitments,
because a prospect will:

- **Map** — "Two weeks inside the operation", "Fixed fee. You keep the map
  whether or not you continue." → confirm the duration and the fixed fee.
- **Prove** — "It runs beside your existing process until the two agree" →
  confirm you actually run parallel.
- **Hand over** — "the runbook, the test suite, the access map and a week of
  pairing" → this must match the handover package in section 6 of the page.

Change anything that is not how you work.

---

## 6. Handover package — `<div class="deliverable">`

Six items listed: Runbook, Architecture record, Test suite, Access map, Cost
model, Five days of pairing. Note "Five days of pairing" here vs "a week of
pairing" in stage 5 — make them agree.

---

## 7. Hero copy, if you want it sharper

The headline is `We build your automation, then hand it back running.` It is
deliberately short so it can carry real display scale. The specifics live in
the paragraph below it. If you change the headline, keep it under ~55
characters or it will wrap past four lines and push the process line below the
fold.

---

## 8. Optional additions

- **Pricing.** Nothing is published. You left this undecided. If you add it,
  the `.panel` row pattern is the natural home.
- **Team.** No bios, no headshots, no founding date. The contact section
  promises "a reply from the person who would run the engagement" — a short
  named section would make that concrete.
- **Legal.** No privacy policy or company registration details. Most
  jurisdictions require these once you collect form data.
- **Social preview image.** `og:title` and `og:description` are set;
  `og:image` is not. A 1200×630 image would make shared links look intentional.

---

## Things deliberately NOT on the page

Stated so nobody "fixes" them by accident:

- **No logo wall.** Client logos imply endorsement. Add only with permission.
- **No testimonials.** None exist yet.
- **No statistics in the hero.** The big-number template was refused on
  purpose; it is the category's most common empty gesture.
- **No cookie banner.** Nothing tracks anyone. If you add analytics, you will
  need one.

---

## Running it

No build step. Open `index.html`, or serve the folder:

```sh
python3 -m http.server 8000
```

Deploys as-is to Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any static
host. The only external request is the Google Fonts stylesheet; to remove that
dependency, self-host Archivo and Chivo Mono and swap the `<link>` in `<head>`.
