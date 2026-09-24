# Club Vault website

Single-page site for Club Vault, the nightclub and private event venue at 2801 Greene St, Bay 4, Hollywood, FL 33020. It's built with Next.js (App Router) and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

All venue facts live in **`lib/venue.ts`**: hours, weekly nights, hosts, packages, menu, house rules, private-event info and gallery slots.

Anything set to `null` shows on the site as a labeled "to be announced" placeholder. Fill in the real value and the placeholder disappears.

| What | Where in `lib/venue.ts` |
|---|---|
| Bottle / table packages & prices | `bottlePackages` |
| Drinks & food menu | `menu[].items` |
| Age policy, dress code, parking | `houseRules[].value` |
| Music genres per night | `week[].genres` |
| Sunday event name | `week[0].title` |
| Saturday host phone (Roger) | `week[6].host.phone` |

### Photos

Put images in `public/gallery/` named `01.jpg` … `08.jpg`. Each slot's intended subject is listed in `gallerySlots`. A slot shows the photo automatically once its file exists (the next build picks it up).

## Before launch: facts to confirm with the club

- Chad's number: club-vault.com lists **(754)** 779-5041 on Tuesdays and **(954)** 779-5041 on Thursdays. The site shows each as published.
- Saturday (Catch a Vibe): Roger's number is cut off on the old site, so Saturday tables go to the main line.
- Venue showing hours: the old site says "Fri 10pm–5pm". The site shows 10 AM – 5 PM.
- The Google listing's hours are used here. The old club-vault.com footer shows different hours (Mon–Fri 12pm–12am).

## Private event form

There is no backend. The inquiry form opens the visitor's email app, pre-filled and addressed to `admin@megavaultinc.com`. To receive submissions directly, point `InquiryForm.tsx` at a form service (Formspree, Resend, etc.).

## SEO

- `app/layout.tsx`: title, description, Open Graph, and `NightClub` JSON-LD (address, geo, phone, opening hours, social profiles).
- `app/opengraph-image.tsx`: the share image.
- `app/robots.ts` and `app/sitemap.ts`.
- The canonical URL comes from Vercel's `VERCEL_PROJECT_PRODUCTION_URL`. When a custom domain is added, it's picked up automatically.

## Deploy

Import this repo in Vercel (framework preset: Next.js; no settings needed), or run:

```bash
npx vercel deploy --prod --token "$VERCEL_TOKEN"
```
