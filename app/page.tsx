import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ArrowUpRight, Camera, Mail, MapPin, Navigation, Phone } from "lucide-react";
import {
  bottlePackages,
  gallerySlots,
  houseRules,
  menu,
  privateEvents,
  venue,
  week,
} from "@/lib/venue";
import { FoilLight } from "./_components/FoilLight";
import { InquiryForm } from "./_components/InquiryForm";
import { TableFinder } from "./_components/TableFinder";
import { TonightPlate } from "./_components/TonightPlate";
import { Week } from "./_components/Week";
import { EdgeLink, Lede, Placeholder, PlateLink, SectionTitle } from "./_components/ui";

const nav = [
  { href: "#nights", label: "Nights" },
  { href: "#tables", label: "Tables" },
  { href: "#menu", label: "Menu" },
  { href: "#private-events", label: "Private events" },
  { href: "#visit", label: "Visit" },
];

const fullAddress = `${venue.address.street}, ${venue.address.city}, ${venue.address.region} ${venue.address.postalCode}`;

export default function Home() {
  return (
    <>
      <FoilLight />
      <a
        href="#main"
        className="sr-only z-50 rounded-lg bg-gold px-4 py-3 font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="pb-24 lg:pb-0">
        <Hero />
        <Nights />
        <Tables />
        <Menu />
        <PrivateEvents />
        <Gallery />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#main" className="stamp foil text-[1.05rem] tracking-[0.02em]" aria-label="Club Vault, back to top">
          Club Vault
        </a>
        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.92rem] text-muted">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-gold-bright">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={`tel:${venue.phone.tel}`}
          className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg px-2 text-[0.92rem] font-semibold text-gold-bright transition-colors hover:text-paper"
        >
          <Phone className="size-4" aria-hidden />
          <span className="tabular-nums">{venue.phone.display}</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section aria-label="Club Vault" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:min-h-[calc(84svh-4rem)] lg:grid-cols-12 lg:items-center lg:pb-20">
        <div className="min-w-0 lg:col-span-8">
          <h1 className="stamp foil stamp-in text-[clamp(3.3rem,21.5vw,11.5rem)] leading-[0.8]">
            <span className="block">Club</span>
            <span className="block">Vault</span>
          </h1>
          <p className="mt-7 max-w-[34ch] text-balance text-[clamp(1.35rem,4.6vw,2rem)] font-medium leading-snug text-paper">
            {venue.tagline}
          </p>
          <p className="mt-3 flex items-center gap-2 text-[0.95rem] text-muted">
            <MapPin className="size-4 shrink-0 text-gold" aria-hidden />
            {venue.address.street}, {venue.address.city}, {venue.address.region}
          </p>
        </div>

        <div className="flex min-w-0 flex-col gap-4 lg:col-span-4">
          <TonightPlate />
          <div className="grid grid-cols-2 gap-3">
            <PlateLink href="#tables">Reserve a Table</PlateLink>
            <EdgeLink href={`tel:${venue.phone.tel}`}>
              <Phone className="size-4" aria-hidden /> Call
            </EdgeLink>
          </div>
          <a
            href={venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 self-start text-[0.9rem] text-muted underline-offset-4 transition-colors hover:text-gold-bright hover:underline"
          >
            <span className="font-semibold tabular-nums text-paper">{venue.google.rating.toFixed(1)}</span>
            on Google · {venue.google.reviews} reviews
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

function Nights() {
  return (
    <section aria-labelledby="nights-title" id="nights" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mb-10 grid gap-5 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionTitle id="nights-title">A different crew every night</SectionTitle>
          </div>
          <Lede className="lg:col-span-5">
            Tuesday through Saturday, a different promoter runs the room. Tickets and tables go through that
            night&apos;s host. Sundays open at noon, and we&apos;re closed Mondays.
          </Lede>
        </div>
        <Week />
      </div>
    </section>
  );
}

function Tables() {
  return (
    <section aria-labelledby="tables-title" id="tables" className="scroll-mt-16 border-t border-line bg-stock/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionTitle id="tables-title">VIP tables & bottle service</SectionTitle>
          <Lede className="mt-6">
            Every table is booked directly with that night&apos;s host. Pick your night and you&apos;ll get the
            number to call or text.
          </Lede>
          <div className="mt-8">
            <TableFinder />
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <h3 className="text-[1.25rem] font-semibold">Bottle packages</h3>
          <p className="mt-2 text-muted">
            Package and pricing details are on their way. Until then, ask your host what&apos;s on the list tonight.
          </p>
          <ul className="mt-6 grid gap-3">
            {bottlePackages.map((p, i) => (
              <li key={i} className="card-stock flex items-center justify-between gap-4 rounded-xl border border-dashed border-line-strong p-5">
                <div className="min-w-0">
                  {p.name ? (
                    <p className="stamp text-[1.5rem] text-paper">{p.name}</p>
                  ) : (
                    <p className="stamp deboss text-[1.5rem]">
                      <span aria-hidden>Package {i + 1}</span>
                      <span className="sr-only">Package {i + 1}, details to be announced</span>
                    </p>
                  )}
                  <p className="mt-2 text-[0.95rem] text-muted">{p.details ?? "What's included: to be announced"}</p>
                </div>
                {p.price ? (
                  <span className="shrink-0 text-[1.2rem] font-semibold tabular-nums text-gold-bright">{p.price}</span>
                ) : (
                  <span className="shrink-0">
                    <Placeholder>Price TBA</Placeholder>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section aria-labelledby="menu-title" id="menu" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionTitle id="menu-title">Drinks & menu</SectionTitle>
          </div>
          <Lede className="lg:col-span-5">
            The full bar and menu are coming to the site soon. For tonight&apos;s specials, call the club or
            ask your host.
          </Lede>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {menu.map((m) => (
            <div key={m.heading} className="bg-ink p-6 sm:p-8">
              <h3 className="stamp text-[1.15rem] tracking-[0.04em] text-gold">{m.heading}</h3>
              {m.items ? (
                <ul className="mt-5 grid gap-4">
                  {m.items.map((it) => (
                    <li key={it.name} className="flex items-baseline justify-between gap-4">
                      <span>
                        <span className="font-semibold">{it.name}</span>
                        {it.note && <span className="block text-[0.9rem] text-muted">{it.note}</span>}
                      </span>
                      {it.price && <span className="tabular-nums text-gold-bright">{it.price}</span>}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-5">
                  <Placeholder>Menu to be announced</Placeholder>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrivateEvents() {
  const { contact, team, types, showings } = privateEvents;
  return (
    <section aria-labelledby="events-title" id="private-events" className="scroll-mt-16 border-t border-line bg-stock/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionTitle id="events-title">Take the whole Vault</SectionTitle>
          <Lede className="mt-6">
            Club Vault has been a private event venue for South Florida since {venue.since}. Book part of the
            night or buy out the whole venue.
          </Lede>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2" aria-label="Events we host">
            {types.map((t, i) => (
              <li key={t} className="stamp text-[clamp(1.25rem,4.4vw,1.75rem)] leading-tight text-paper">
                {t}
                {i < types.length - 1 && (
                  <span aria-hidden className="ml-5 text-gold-deep">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-[0.95rem] font-semibold text-gold">Talk to the owner</h3>
              <p className="mt-2 text-[1.15rem] font-semibold">{contact.name}</p>
              <a
                href={`tel:${contact.phone.tel}`}
                className="mt-1 inline-flex min-h-11 items-center gap-2 font-semibold tabular-nums text-gold-bright underline-offset-4 hover:underline"
              >
                <Phone className="size-4" aria-hidden /> {contact.phone.display}
              </a>
              <a
                href={`mailto:${venue.email}`}
                className="flex min-h-11 items-center gap-2 text-muted underline-offset-4 hover:text-paper hover:underline"
              >
                <Mail className="size-4" aria-hidden /> {venue.email}
              </a>
            </div>
            <div>
              <h3 className="text-[0.95rem] font-semibold text-gold">Tour the venue</h3>
              <ul className="mt-2 space-y-1 text-paper">
                {showings.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="mt-2 text-[0.9rem] text-muted">Call ahead to schedule a showing.</p>
            </div>
          </div>

          <div className="mt-10 border-t border-line pt-6">
            <h3 className="text-[0.95rem] font-semibold text-gold">The team</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {[{ name: contact.name, role: contact.role }, ...team].map((p) => (
                <li key={p.name}>
                  <span className="font-semibold">{p.name}</span>
                  <span className="text-muted"> · {p.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-6">
          <h3 className="mb-4 text-[1.25rem] font-semibold">Send an inquiry</h3>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const dir = path.join(process.cwd(), "public", "gallery");
  const shape: Record<string, string> = {
    tall: "row-span-2",
    wide: "col-span-2",
    square: "",
  };

  return (
    <section aria-labelledby="gallery-title" id="gallery" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionTitle id="gallery-title">Inside the Vault</SectionTitle>
          </div>
          <Lede className="lg:col-span-5">
            New photos of the room are coming soon. Until then, follow{" "}
            <a href={venue.social[0].href} target="_blank" rel="noopener noreferrer" className="text-gold-bright underline underline-offset-4">
              {venue.social[0].handle}
            </a>{" "}
            for every weekend.
          </Lede>
        </div>
        <ul className="mt-12 grid grid-flow-dense auto-rows-[10.5rem] grid-cols-2 gap-3 sm:auto-rows-[13rem] sm:grid-cols-4">
          {gallerySlots.map((slot, i) => {
            const exists = fs.existsSync(path.join(dir, slot.file));
            return (
              <li key={slot.file} className={`relative overflow-hidden rounded-xl ${shape[slot.shape]}`}>
                {exists ? (
                  <Image
                    src={`/gallery/${slot.file}`}
                    alt={slot.hint}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="card-stock flex h-full flex-col justify-between border border-dashed border-line-strong p-4">
                    <Camera className="size-5 text-gold-deep" aria-hidden />
                    <div>
                      <p className="stamp deboss text-[2rem]" aria-hidden>
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-1 text-[0.85rem] text-muted">Photo coming soon: {slot.hint.toLowerCase()}</p>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section aria-labelledby="visit-title" id="visit" className="scroll-mt-16 border-t border-line bg-stock/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionTitle id="visit-title">Find the door</SectionTitle>
          <address className="mt-8 not-italic">
            <p className="text-[1.3rem] font-semibold leading-snug">
              {venue.address.street}
              <br />
              {venue.address.city}, {venue.address.region} {venue.address.postalCode}
            </p>
          </address>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-sm">
            <PlateLink href={venue.mapsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="size-4" aria-hidden /> Directions
            </PlateLink>
            <EdgeLink href={`tel:${venue.phone.tel}`}>
              <Phone className="size-4" aria-hidden /> Call
            </EdgeLink>
          </div>

          <h3 className="mt-12 text-[0.95rem] font-semibold text-gold">Hours</h3>
          <table className="mt-3 w-full max-w-sm text-[1rem]">
            <caption className="sr-only">Opening hours</caption>
            <tbody>
              {[...week.slice(1), week[0]].map((n) => (
                <tr key={n.day} className="border-b border-line">
                  <th scope="row" className="py-2.5 text-left font-medium text-paper">
                    {n.dayName}
                  </th>
                  <td className={`py-2.5 text-right tabular-nums ${n.open === null ? "text-muted" : "text-paper"}`}>
                    {n.hoursLabel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-[0.9rem] text-muted">
            Office: {venue.officeHours} ·{" "}
            <a href={`mailto:${venue.email}`} className="underline underline-offset-4 hover:text-paper">
              {venue.email}
            </a>
          </p>

          <h3 className="mt-12 text-[0.95rem] font-semibold text-gold">Before you come</h3>
          <dl className="mt-3 grid max-w-sm gap-3">
            {houseRules.map((r) => (
              <div key={r.label} className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
                <dt className="font-medium">{r.label}</dt>
                <dd>{r.value ?? <Placeholder />}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-7">
          <div className="foil-edge h-full min-h-[22rem] overflow-hidden rounded-xl p-px [--plate:var(--color-stock)]">
            <iframe
              title={`Map to Club Vault, ${fullAddress}`}
              src={venue.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[22rem] w-full rounded-[11px] [filter:grayscale(1)_invert(0.9)_contrast(0.9)_sepia(0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-7xl px-4 pb-32 pt-16 sm:px-6 lg:pb-16">
        <p className="stamp foil text-[clamp(3rem,15vw,9rem)] leading-[0.82]" aria-hidden>
          Club Vault
        </p>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          <div>
            <h2 className="text-[0.95rem] font-semibold text-gold">Visit</h2>
            <p className="mt-3 text-muted">
              {venue.address.street}
              <br />
              {venue.address.city}, {venue.address.region} {venue.address.postalCode}
            </p>
          </div>
          <div>
            <h2 className="text-[0.95rem] font-semibold text-gold">Contact</h2>
            <div className="mt-2">
              <a href={`tel:${venue.phone.tel}`} className="flex min-h-11 items-center tabular-nums text-paper hover:text-gold-bright">
                {venue.phone.display}
              </a>
              <a href={`mailto:${venue.email}`} className="flex min-h-11 items-center text-muted hover:text-paper">
                {venue.email}
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-[0.95rem] font-semibold text-gold">Follow</h2>
            <ul className="mt-3 space-y-1">
              {venue.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 text-paper transition-colors hover:text-gold-bright"
                  >
                    {s.label} <span className="text-muted">{s.handle}</span>
                    <ArrowUpRight className="size-3.5 text-gold-deep" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-14 border-t border-line pt-6 text-[0.85rem] text-muted">
          © {new Date().getFullYear()} Club Vault · Hollywood, Florida · Since {venue.since}
        </p>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/92 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <PlateLink href="#tables">Reserve</PlateLink>
        <EdgeLink href={`tel:${venue.phone.tel}`} aria-label={`Call Club Vault at ${venue.phone.display}`}>
          <Phone className="size-4" aria-hidden /> Call
        </EdgeLink>
      </div>
    </div>
  );
}
