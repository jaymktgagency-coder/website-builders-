"use client";

import { useTonight } from "./useTonight";

export function TonightPlate() {
  const tonight = useTonight();

  if (!tonight) {
    return (
      <div className="card-stock min-h-[7.5rem] rounded-xl border border-line p-5" aria-hidden />
    );
  }

  const { night } = tonight;
  const isOpen = tonight.state === "open";
  const isClosed = tonight.state === "closed";
  const name = night.title ?? (isClosed ? null : "Open to the public");

  return (
    <a
      href={`#${night.day}`}
      aria-live="polite"
      className={`group block rounded-xl p-5 transition-[background-color] duration-300 ${
        isClosed ? "card-stock border border-line" : "foil-edge hover:[--plate:var(--color-stock-2)]"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="stamp text-[0.8rem] tracking-[0.12em] text-gold">
          Tonight · {night.dayName}
        </span>
        <span
          className={`inline-flex items-center gap-2 text-[0.8rem] font-semibold ${
            isOpen ? "text-gold-bright" : "text-muted"
          }`}
        >
          <span
            aria-hidden
            className={`size-2 rounded-full ${
              isOpen ? "bg-gold-bright shadow-[0_0_10px_2px_rgb(243_220_166/0.55)]" : "bg-deboss"
            }`}
          />
          {isOpen ? `Open until ${tonight.until}` : tonight.state === "later" ? `Doors at ${tonight.doors}` : "Closed"}
        </span>
      </div>
      {isClosed ? (
        <p className="mt-3 text-[1.35rem] font-semibold leading-tight">
          <span className="stamp deboss mr-2 text-[1.6rem]">Closed</span>
          <span className="text-paper">
            Back {tonight.next.dayName} at {tonight.next.hoursLabel.split(" – ")[0]}
            {tonight.next.title ? ` · ${tonight.next.title}` : ""}
          </span>
        </p>
      ) : (
        <p className="mt-3 text-[1.5rem] font-semibold leading-tight text-paper">
          {name}
          <span className="mt-1 block text-[0.95rem] font-normal text-muted">
            {night.hoursLabel}
            {night.host ? ` · Tables with ${night.host.name}` : ""}
          </span>
        </p>
      )}
    </a>
  );
}
