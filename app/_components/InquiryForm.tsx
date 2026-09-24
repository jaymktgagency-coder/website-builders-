"use client";

import { useState, type FormEvent } from "react";
import { venue, privateEvents } from "@/lib/venue";

type Errors = Partial<Record<"name" | "contact" | "type", string>>;

const field =
  "mt-2 block min-h-12 w-full rounded-lg border border-line bg-ink px-4 text-[1rem] text-paper placeholder:text-muted/70 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold aria-[invalid=true]:border-[#e08a6a]";

// FormSubmit relays the inquiry to the club's inbox. The first submission
// sends an activation email to this address; the link in it must be clicked
// once before inquiries are delivered.
const ENDPOINT = `https://formsubmit.co/ajax/${venue.email}`;

type Status = "idle" | "sending" | "sent" | "error";

export function InquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const v = (k: string) => String(data.get(k) ?? "").trim();

    const next: Errors = {};
    if (!v("name")) next.name = "Add your name so the team knows who to reply to.";
    if (!v("phone") && !v("email")) next.contact = "Add a phone number or email so we can reach you.";
    if (!v("type")) next.type = "Choose the kind of event you're planning.";
    setErrors(next);
    if (Object.keys(next).length) {
      const k = Object.keys(next)[0];
      (form.elements.namedItem(k === "contact" ? "phone" : k) as HTMLElement | null)?.focus();
      return;
    }

    const subject = `Private event inquiry: ${v("type")}${v("date") ? ` on ${v("date")}` : ""}`;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name: v("name"),
          Phone: v("phone") || "-",
          Email: v("email") || "-",
          Event: v("type"),
          Date: v("date") || "Flexible",
          Guests: v("guests") || "Not sure yet",
          Details: v("details") || "-",
          _subject: subject,
          _replyto: v("email") || undefined,
          _template: "table",
          _honey: v("_honey"),
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { success?: boolean | string };
      if (!res.ok || String(json.success) === "false") throw new Error("Send failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="foil-edge rounded-xl p-6 [--plate:var(--color-stock)] sm:p-8">
        <p className="stamp foil text-[clamp(1.8rem,6vw,2.4rem)] leading-[0.95]">Thank you</p>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-paper">
          Your inquiry is on its way to the Club Vault events team. We&apos;ll get back to you soon. If it&apos;s
          urgent, call {privateEvents.contact.name} at{" "}
          <a href={`tel:${privateEvents.contact.phone.tel}`} className="font-semibold text-gold-bright underline underline-offset-4">
            {privateEvents.contact.phone.display}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex min-h-11 cursor-pointer items-center text-[0.95rem] text-muted underline underline-offset-4 hover:text-paper"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card-stock rounded-xl border border-line p-5 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="text-[0.95rem] font-semibold">Your name</span>
          <input name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "err-name" : undefined} />
          {errors.name && <span id="err-name" className="mt-2 block text-[0.9rem] text-[#f0a58a]">{errors.name}</span>}
        </label>
        <label className="block">
          <span className="text-[0.95rem] font-semibold">Phone</span>
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" className={field} aria-invalid={!!errors.contact} aria-describedby={errors.contact ? "err-contact" : undefined} />
        </label>
        <label className="block">
          <span className="text-[0.95rem] font-semibold">Email</span>
          <input name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.contact} aria-describedby={errors.contact ? "err-contact" : undefined} />
        </label>
        {errors.contact && <span id="err-contact" className="-mt-2 block text-[0.9rem] text-[#f0a58a] sm:col-span-2">{errors.contact}</span>}
        <label className="block sm:col-span-2">
          <span className="text-[0.95rem] font-semibold">Type of event</span>
          <select name="type" defaultValue="" className={`${field} cursor-pointer`} aria-invalid={!!errors.type} aria-describedby={errors.type ? "err-type" : undefined}>
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
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="plate-gold mt-6 disabled:cursor-wait disabled:opacity-70 inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-[10px] px-6 font-semibold transition-[filter] hover:brightness-110 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send inquiry"}
      </button>
      <p className={`mt-3 text-[0.88rem] ${status === "error" ? "text-[#f0a58a]" : "text-muted"}`} role="status">
        {status === "error"
          ? `That didn't go through. Check your connection and try again, or call ${privateEvents.contact.name} at ${privateEvents.contact.phone.display}.`
          : `Goes straight to the events team at ${venue.email}.`}
      </p>
    </form>
  );
}
