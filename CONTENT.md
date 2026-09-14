# Content to supply

Everything below is placeholder or needs your confirmation. Nothing on the site
claims a client, a metric, a logo, a testimonial or a partnership — those slots
are built and styled but deliberately empty, so the page is honest until you
fill them.

Ordered by how much each one costs you if it stays as-is. Item 2 is done;
item 1 is the only thing standing between this and a live site.

---

## 1. Add your Formspree form ID — the only thing blocking launch

**Blocking.** Everything else about the form is finished and tested: it
validates, posts in the background, resets on success, and keeps what the
visitor typed if the send fails. The one missing piece is the form ID, which
only you can create.

1. Go to [formspree.io](https://formspree.io), sign in, and create a new form.
   Point it at **jaymktgagency@gmail.com**.
2. Formspree gives you an endpoint like `https://formspree.io/f/mqazwxyz`.
3. Copy the 8-character ID and paste it over `YOUR_FORMSPREE_ID` in
   `index.html`:

```html
<form class="form" method="post" action="https://formspree.io/f/YOUR_FORMSPREE_ID" novalidate data-form>
```

That is the whole change. Nothing else needs editing.

**Until you do that**, the form deliberately does not send. It shows
"This form is not connected yet. Please email us directly at
jaymktgagency@gmail.com." and fires no network request at all — it will never
POST to a URL that does not exist, and never shows a success state that did
not happen. Verified in a browser.

**Verified working end to end** against a live test endpoint:

| Situation | What the visitor gets |
|---|---|
| Placeholder still in place | Honest "not connected" notice, their input kept, no request sent |
| Submit succeeds | All four fields delivered, form clears, thank-you message |
| Server returns an error | Error notice, their input kept so they can retry |
| Network unreachable | Same as above — nothing is silently lost |
| Empty or invalid fields | Each field flagged at the field, no request sent |

**Set a redirect too** (optional): Formspree can bounce visitors to a
thank-you page. Not needed — the page shows its own confirmation without
navigating away, which is better.

**Don't want to sign up?** [FormSubmit.co](https://formsubmit.co) needs no
account at all — the action becomes
`https://formsubmit.co/jaymktgagency@gmail.com` and it emails you directly
after one confirmation click. The code works with it unchanged. Say the word
and I'll switch it.

---

## 2. Contact email — done

`jaymktgagency@gmail.com` is live in `index.html`, in the
`<p class="contact__alt">` link.

It lives in **exactly one place**. The JavaScript reads the address out of
that link, so the form's error messages always quote whatever is there. If you
ever change it, change it there and nothing else.

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

The intro copy above the section reads "Three engagement records **will be**
published here, with the client's permission and their own numbers. Nothing
here **will be** modelled or estimated." It is future tense on purpose. When
you fill the slots, switch it to present tense — and keep it true.

If you would rather not show work at all yet, delete the whole
`<section class="band band--ruled" id="work">` block and the two matching nav
links (`#work` appears once in the footer nav).

---

## 4. Integration list — claim corrected, accuracy still yours to confirm

**What changed.** The copy used to read "Integration targets we work with
**regularly**" — which asserts a track record you do not have evidence for
yet. That was an overclaim and it is gone. It now reads:

> These are the systems the work usually has to reach. Integration is built
> against each vendor's public API, the same way your own engineers would do
> it.

and the panel carries an explicit line beneath it:

> Product names above are the trademarks of their respective owners. systim is
> not affiliated with, endorsed by, or a certified partner of any of them.

No logos are used anywhere, which is the other half of not implying
endorsement. Between the two, the section now reads as capability and
positioning, and cannot reasonably be read as claiming a partnership,
certification, or reseller status.

**Still yours to confirm:** whether you can actually build against each of
these. Naming a system is a capability claim even without a partnership claim,
and a technical buyer will ask. Cut anything you have not worked with:

> Records — Salesforce, HubSpot, NetSuite, Dynamics, Pipedrive
> Data — Postgres, Snowflake, BigQuery, Databricks, S3
> Work — Slack, Teams, Jira, Linear, Zendesk, Intercom
> Documents — Google Workspace, SharePoint, Box, DocuSign
> Anything else — REST, GraphQL, SFTP, Webhooks, and the internal tool nobody has documented since 2019

If some are aspirational rather than done, the honest framing is a narrower
list. A short true list reads stronger than a long unverifiable one.

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
- **Legal.** No privacy policy or company registration details. You now
  collect personal data through a third-party processor (Formspree, whose
  servers are in the US), so under UK GDPR / GDPR you need a privacy notice
  saying what you collect, why, where it goes, and how long you keep it. A
  short page linked from the footer is enough. This matters more now that the
  form actually sends.
- **Address harvesting.** `jaymktgagency@gmail.com` sits in the page source as
  a plain `mailto:`, so scrapers will find it. That is the trade for making it
  one-click for real buyers, and it is usually the right trade — but expect
  some spam, and consider a dedicated address rather than a personal one.
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
