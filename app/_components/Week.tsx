"use client";

import { ArrowUpRight, MessageSquare, Phone, Ticket } from "lucide-react";
import { venue, week, type Night } from "@/lib/venue";
import { useTonight } from "./useTonight";
import { Placeholder } from "./ui";

// The club's week starts Tuesday; Sunday and Monday close the loop.
const order = ["tue", "wed", "thu", "fri", "sat", "sun", "mon"] as const;
const span: Record<string, string> = {
  tue: "lg:col-span-3",
  wed: "lg:col-span-3",
  thu: "lg:col-span-2",
  fri: "lg:col-span-2",
  sat: "lg:col-span-2",
  sun: "lg:col-span-4",
  mon: "lg:col-span-2",
};

export function Week() {
  const tonight = useTonight();
  const lit = tonight && tonight.state !== "closed" ? tonight.night.day : null;

  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
      {order.map((d) => {
        const night = week.find((n) => n.day === d)!;
        return <NightCard key={d} night={night} lit={lit === d} className={span[d]} />;
      })}
    </ol>
  );
}

function NightCard({ night, lit, className }: { night: Night; lit: boolean; className: string }) {
  const closed = night.open === null;

  if (closed) {
    return (
      <li id={night.day} className={`card-stock flex scroll-mt-24 flex-col justify-between gap-6 rounded-xl border border-line p-6 ${className}`}>
        <span className="stamp text-[0.85rem] tracking-[0.14em] text-muted">{night.dayName}</span>
        <div>
          <p className="stamp deboss text-[clamp(2.5rem,8vw,3.5rem)]" aria-hidden>
            Closed
          </p>
          <p className="mt-2 text-muted">Closed Mondays. See you Tuesday.</p>
        </div>
      </li>
    );
  }

  const phone = night.host?.phone ?? venue.phone;

  return (
    <li
      id={night.day}
      className={`relative flex scroll-mt-24 flex-col gap-6 rounded-xl p-6 transition-[background-color] duration-500 ${
        lit ? "foil-edge [--plate:var(--color-stock)]" : "card-stock border border-line"
      } ${className}`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className={`stamp text-[0.85rem] tracking-[0.14em] ${lit ? "text-gold-bright" : "text-gold"}`}>
          {night.dayName}
        </span>
        <span className="text-[0.9rem] tabular-nums text-muted">{night.hoursLabel}</span>
      </div>

      <div>
        {night.title ? (
          <h3 className={`stamp text-balance text-[clamp(1.9rem,6.5vw,2.6rem)] leading-[0.92] ${lit ? "foil" : "text-paper"}`}>
            {night.title}
          </h3>
        ) : (
          <>
            <h3 className="stamp text-[clamp(1.9rem,6.5vw,2.6rem)] leading-[0.92] text-paper">Open from noon</h3>
            <div className="mt-3">
              <Placeholder>Sunday lineup to be announced</Placeholder>
            </div>
          </>
        )}
        {lit && <p className="mt-3 text-[0.9rem] font-semibold text-gold-bright">Tonight</p>}
      </div>

      <dl className="grid gap-1 text-[0.95rem]">
        <div className="flex gap-2">
          <dt className="text-muted">Tables</dt>
          <dd className="text-paper">
            {night.host?.phone ? `${night.host.name} · ` : night.host ? `Main line, ask for ${night.host.name} · ` : "Main line · "}
            {phone.display}
          </dd>
        </div>
        <div className="flex items-center gap-2">
          <dt className="text-muted">Sound</dt>
          <dd>{night.genres ?? <Placeholder>Music lineup TBA</Placeholder>}</dd>
        </div>
      </dl>

      <div className="mt-auto flex flex-wrap gap-2">
        <a
          href={`tel:${phone.tel}`}
          className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg bg-stock-2 px-4 text-[0.9rem] font-semibold text-paper transition-colors hover:bg-deboss"
        >
          <Phone className="size-4 text-gold" aria-hidden /> Call
        </a>
        {night.host?.phone && (
          <a
            href={`sms:${phone.tel}`}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg bg-stock-2 px-4 text-[0.9rem] font-semibold text-paper transition-colors hover:bg-deboss"
          >
            <MessageSquare className="size-4 text-gold" aria-hidden /> Text
          </a>
        )}
        {night.tickets && (
          <a
            href={night.tickets.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg bg-stock-2 px-4 text-[0.9rem] font-semibold text-paper transition-colors hover:bg-deboss"
          >
            <Ticket className="size-4 text-gold" aria-hidden /> {night.tickets.label}
          </a>
        )}
        {night.instagram && (
          <a
            href={night.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-lg px-3 text-[0.9rem] text-muted underline-offset-4 transition-colors hover:text-gold-bright hover:underline"
          >
            {night.instagram.handle}
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        )}
      </div>
    </li>
  );
}
