"use client";

import { useState, type FormEvent } from "react";
import { venue, privateEvents } from "@/lib/venue";

type Errors = Partial<Record<"name" | "contact" | "type", string>>;

const field =
  "mt-2 block min-h-12 w-full rounded-lg border border-line bg-ink px-4 text-[1rem] text-paper placeholder:text-muted/70 transition-colors focus:border-gold focus:outline-none aria-[invalid=true]:border-[#e08a6a]";

/**
 * No booking backend exists yet, so the inquiry is composed into an email to
 * the club's inbox. Swap `mailto` for a form endpoint when one is available.
 */
export function InquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const v = (k: string) => String(data.get(k) ?? "").trim();

    const next: Errors = {};
    if (!v("name")) next.name = "Add your name so the team knows who to reply to.";
    if (!v("phone") && !v("email")) next.contact = "Add a phone number or email so we can reach you.";
    if (!v("type")) next.type = "Choose the kind of event you're planning.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = e.currentTarget.querySelector<HTMLElement>("[aria-invalid=true]");
      first?.focus();
      return;
    }

    const body = [
      `Name: ${v("name")}`,
      `Phone: ${v("phone") || "-"}`,
      `Email: ${v("email") || "-"}`,
      `Event: ${v("type")}`,
      `Date: ${v("date") || "Flexible"}`,
      `Guests: ${v("guests") || "Not sure yet"}`,
      "",
      v("details"),
    ].join("\n");
    const subject = `Private event inquiry: ${v("type")}${v("date") ? ` on ${v("date")}` : ""}`;
    window.location.href = `mailto:${venue.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card-stock rounded-xl border border-line p-5 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="text-[0.95rem] font-semibold">Your name</span>
          <input name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby="err-name" />
          {errors.name && <span id="err-name" className="mt-2 block text-[0.9rem] text-[#f0a58a]">{errors.name}</span>}
        </label>
        <label className="block">
          <span className="text-[0.95rem] font-semibold">Phone</span>
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" className={field} aria-invalid={!!errors.contact} aria-describedby="err-contact" />
        </label>
        <label className="block">
          <span className="text-[0.95rem] font-semibold">Email</span>
          <input name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.contact} aria-describedby="err-contact" />
        </label>
        {errors.contact && <span id="err-contact" className="-mt-2 block text-[0.9rem] text-[#f0a58a] sm:col-span-2">{errors.contact}</span>}
        <label className="block sm:col-span-2">
          <span className="text-[0.95rem] font-semibold">Type of event</span>
          <select name="type" defaultValue="" className={`${field} cursor-pointer`} aria-invalid={!!errors.type} aria-describedby="err-type">
            <option value="" disabled>
              Choose one
            </option>
            {privateEvents.types.map((t) => (
              <option key={t}>{t}</option>
            ))}
            <option>Full venue buyout</option>
            <option>Something else</option>
          </select>
          {errors.type && <span id="err-type" className="mt-2 block text-[0.9rem] text-[#f0a58a]">{errors.type}</span>}
        </label>
        <label className="block">
          <span className="text-[0.95rem] font-semibold">Date</span>
          <input name="date" type="date" className={`${field} [color-scheme:dark]`} />
        </label>
        <label className="block">
          <span className="text-[0.95rem] font-semibold">Guest count</span>
          <input name="guests" type="number" min={1} inputMode="numeric" placeholder="e.g. 80" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-[0.95rem] font-semibold">Anything else?</span>
          <textarea
            name="details"
            rows={4}
            placeholder="Timing, bottle service, DJ, decor…"
            className={`${field} py-3 leading-relaxed`}
          />
        </label>
      </div>
      <button
        type="submit"
        className="plate-gold mt-6 inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-[10px] px-6 font-semibold transition-[filter] hover:brightness-110 sm:w-auto"
      >
        Send inquiry
      </button>
      <p className="mt-3 text-[0.88rem] text-muted" aria-live="polite">
        {sent
          ? `Your email app should now be open with the details filled in. If it didn't open, call ${privateEvents.contact.name} at ${privateEvents.contact.phone.display}.`
          : `Opens your email app, addressed to ${venue.email}.`}
      </p>
    </form>
  );
}
