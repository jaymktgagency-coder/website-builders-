import { week, clock, type Night } from "./venue";

export type Tonight =
  | { state: "open"; night: Night; until: string }
  | { state: "later"; night: Night; doors: string }
  | { state: "closed"; night: Night; next: Night };

/** Current weekday (0 = Sun) and minutes after midnight in Hollywood, FL. */
function nowInHollywood(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "0";
  const dow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { dow, mins: Number(get("hour")) * 60 + Number(get("minute")) };
}

export function getTonight(date = new Date()): Tonight {
  const { dow, mins } = nowInHollywood(date);

  // Past midnight, last night's party may still be going.
  const prev = week[(dow + 6) % 7];
  if (prev.open !== null && prev.close !== null && mins + 1440 < prev.close) {
    return { state: "open", night: prev, until: clock(prev.close) };
  }

  const today = week[dow];
  if (today.open !== null && today.close !== null) {
    if (mins < today.open) return { state: "later", night: today, doors: clock(today.open) };
    if (mins < today.close) return { state: "open", night: today, until: clock(today.close) };
  }

  for (let i = 1; i <= 7; i++) {
    const next = week[(dow + i) % 7];
    if (next.open !== null) return { state: "closed", night: today, next };
  }
  return { state: "closed", night: today, next: today };
}
