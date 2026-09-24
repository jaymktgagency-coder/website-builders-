"use client";

import { useEffect, useState } from "react";
import { MessageSquare, Phone } from "lucide-react";
import { venue, week, type DayKey } from "@/lib/venue";
import { useTonight } from "./useTonight";

const openNights = ["tue", "wed", "thu", "fri", "sat", "sun"] as const;

/** "Reserve a Table": pick a night, reach the person who books it. */
export function TableFinder() {
  const tonight = useTonight();
  const [day, setDay] = useState<DayKey>("fri");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched || !tonight) return;
    const d = tonight.state === "closed" ? tonight.next.day : tonight.night.day;
    setDay(d);
  }, [tonight, touched]);

  const night = week.find((n) => n.day === day)!;
  const phone = night.host?.phone ?? venue.phone;
  const who = night.host?.phone
    ? night.host.name
    : night.host
      ? `the Club Vault line (ask for ${night.host.name})`
      : "the Club Vault line";

  return (
    <div className="foil-edge rounded-xl p-5 [--plate:var(--color-stock)] sm:p-7">
      <p id="pick-night" className="text-[0.95rem] font-semibold text-paper">
        Which night?
      </p>
      <div role="group" aria-labelledby="pick-night" className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {openNights.map((d) => {
          const n = week.find((x) => x.day === d)!;
          const active = d === day;
          return (
            <button
              key={d}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setTouched(true);
                setDay(d);
              }}
              className={`stamp min-h-12 cursor-pointer rounded-lg text-[0.85rem] tracking-[0.08em] transition-colors duration-200 ${
                active ? "plate-gold" : "bg-stock-2 text-muted hover:text-paper"
              }`}
            >
              {n.dayName.slice(0, 3)}
            </button>
          );
        })}
      </div>

      <div className="mt-6 border-t border-line pt-6" aria-live="polite">
        <p className="text-[1.35rem] font-semibold leading-tight text-paper">
          {night.title ?? `${night.dayName} at the Vault`}
        </p>
        <p className="mt-1 text-muted">
          {night.dayName} · {night.hoursLabel}
          {night.host ? ` · Hosted by ${night.host.name}` : ""}
        </p>
        <p className="mt-4 text-paper">
          Book your table with {who}:{" "}
          <span className="font-semibold tabular-nums text-gold-bright">{phone.display}</span>
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={`tel:${phone.tel}`}
            className="plate-gold inline-flex min-h-12 flex-1 cursor-pointer items-center justify-center gap-2 rounded-[10px] px-5 font-semibold sm:flex-none"
          >
            <Phone className="size-4" aria-hidden /> Call {night.host?.phone ? night.host.name : "now"}
          </a>
          {night.host?.phone && (
            <a
              href={`sms:${phone.tel}?&body=${encodeURIComponent(
                `Hi ${night.host.name}, I'd like a table at Club Vault for ${night.title ?? night.dayName}. Party of `,
              )}`}
              className="foil-edge inline-flex min-h-12 flex-1 cursor-pointer items-center justify-center gap-2 rounded-[10px] px-5 font-semibold text-gold-bright sm:flex-none"
            >
              <MessageSquare className="size-4" aria-hidden /> Text {night.host.name}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
