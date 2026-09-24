// Every fact on the site lives here. Sources: the Google Business listing
// (hours, phone, rating) and club-vault.com (nights, hosts, events, staff),
// both checked Sept 2026. Anything set to `null` is unknown and renders as a
// labeled "to be announced" placeholder, so fill it in here when the club
// confirms it.

export const venue = {
  name: "Club Vault",
  tagline: "Hollywood after dark, since 2010.",
  since: 2010,
  phone: { display: "(954) 546-1942", tel: "+19545461942" },
  email: "admin@megavaultinc.com",
  address: {
    street: "2801 Greene St, Bay 4",
    city: "Hollywood",
    region: "FL",
    postalCode: "33020",
    country: "US",
  },
  // Decoded from the listing's plus code 2RRP+38.
  geo: { lat: 26.040188, lng: -80.164188 },
  mapsUrl: "https://maps.app.goo.gl/j86CRvTxSg8sx3yE9",
  mapEmbed:
    "https://www.google.com/maps?q=Club+Vault,+2801+Greene+St+Bay+4,+Hollywood,+FL+33020&output=embed",
  google: { rating: 4.1, reviews: 199 },
  social: [
    { label: "Instagram", handle: "@clubvaultsfl", href: "https://www.instagram.com/clubvaultsfl/" },
    { label: "Facebook", handle: "/clubvault", href: "https://www.facebook.com/clubvault/" },
    { label: "Yelp", handle: "Club Vault Hollywood", href: "https://www.yelp.com/biz/club-vault-hollywood" },
  ],
  officeHours: "Mon – Fri · 10 AM – 6 PM",
} as const;

export type DayKey = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

export type Night = {
  day: DayKey;
  dayName: string;
  /** Open/close in minutes after midnight; close may pass 24:00. null = closed. */
  open: number | null;
  close: number | null;
  hoursLabel: string;
  title: string | null;
  host?: { name: string; phone?: { display: string; tel: string } };
  tickets?: { label: string; href: string };
  instagram?: { handle: string; href: string };
  genres: string | null;
};

const TWO_AM = 26 * 60;

// Order matches Date.getDay() (0 = Sunday).
export const week: Night[] = [
  {
    day: "sun",
    dayName: "Sunday",
    open: 12 * 60,
    close: TWO_AM,
    hoursLabel: "12 PM – 2 AM",
    title: null,
    genres: null,
  },
  {
    day: "mon",
    dayName: "Monday",
    open: null,
    close: null,
    hoursLabel: "Closed",
    title: null,
    genres: null,
  },
  {
    day: "tue",
    dayName: "Tuesday",
    open: 19 * 60,
    close: TWO_AM,
    hoursLabel: "7 PM – 2 AM",
    title: "Touch the Mic Tuesdays",
    // club-vault.com lists Chad as (754) 779-5041 here and (954) 779-5041 on
    // Thursdays; both are shown as published until the club confirms one.
    host: { name: "Chad", phone: { display: "(754) 779-5041", tel: "+17547795041" } },
    tickets: { label: "Tickets on Posh", href: "https://posh.vip/g/touch-the-mic-tuesdays" },
    instagram: { handle: "@touchthemictuesdays", href: "https://www.instagram.com/touchthemictuesdays/" },
    genres: null,
  },
  {
    day: "wed",
    dayName: "Wednesday",
    open: 21 * 60,
    close: TWO_AM,
    hoursLabel: "9 PM – 2 AM",
    title: "Rum Veranda",
    host: { name: "Sinistar", phone: { display: "(954) 701-9017", tel: "+19547019017" } },
    instagram: { handle: "@rumveranda", href: "https://www.instagram.com/rumveranda/" },
    genres: null,
  },
  {
    day: "thu",
    dayName: "Thursday",
    open: 19 * 60,
    close: TWO_AM,
    hoursLabel: "7 PM – 2 AM",
    title: "SOS Thursdays",
    host: { name: "Chad", phone: { display: "(954) 779-5041", tel: "+19547795041" } },
    tickets: { label: "Tickets & links", href: "https://linktr.ee/sosthursdays" },
    instagram: { handle: "@sosthursdays", href: "https://www.instagram.com/sosthursdays/" },
    genres: null,
  },
  {
    day: "fri",
    dayName: "Friday",
    open: 21 * 60,
    close: TWO_AM,
    hoursLabel: "9 PM – 2 AM",
    title: "Tropical Fridayz",
    host: { name: "Gallo", phone: { display: "(954) 918-0395", tel: "+19549180395" } },
    tickets: { label: "Tickets on Eventbrite", href: "https://tropicalfridayz.eventbrite.com" },
    instagram: { handle: "@tropicalfridayz", href: "https://www.instagram.com/tropicalfridayz/" },
    genres: null,
  },
  {
    day: "sat",
    dayName: "Saturday",
    open: 20 * 60,
    close: TWO_AM,
    hoursLabel: "8 PM – 2 AM",
    title: "Catch a Vibe",
    // Roger's number is cut off on club-vault.com; tables go through the main line.
    host: { name: "Roger" },
    instagram: { handle: "@catchavibefl", href: "https://www.instagram.com/catchavibefl/" },
    genres: null,
  },
];

// Placeholders: the club publishes no packages, prices or menu yet.
export const bottlePackages: { name: string | null; details: string | null; price: string | null }[] = [
  { name: null, details: null, price: null },
  { name: null, details: null, price: null },
  { name: null, details: null, price: null },
];

export const menu: { heading: string; items: { name: string; note?: string; price?: string }[] | null }[] = [
  { heading: "Signature drinks", items: null },
  { heading: "Bottle list", items: null },
  { heading: "Food & bites", items: null },
];

export const houseRules: { label: string; value: string | null }[] = [
  { label: "Age policy", value: null },
  { label: "Dress code", value: null },
  { label: "Parking", value: null },
];

export const privateEvents = {
  types: [
    "Weddings",
    "Engagement parties",
    "Bar & bat mitzvahs",
    "Quinceañeras",
    "Birthdays",
    "Corporate events",
    "Holiday parties",
    "Day parties",
  ],
  contact: {
    name: "Cobie Swissa",
    role: "Owner",
    phone: { display: "(954) 661-0081", tel: "+19546610081" },
  },
  team: [
    { name: "Ronen Zaguri", role: "General Manager" },
    { name: "Alex Passos", role: "Event Coordinator" },
    { name: "Will Palamaras", role: "Event Coordinator" },
  ],
  // club-vault.com prints Friday as "10pm–5pm"; read as 10 AM.
  showings: ["Mon – Thu · 10 AM – 7 PM", "Fri · 10 AM – 5 PM"],
};

// Drop real photos into /public/gallery using these filenames.
export const gallerySlots = [
  { file: "01.jpg", shape: "tall", hint: "The room at peak hour" },
  { file: "02.jpg", shape: "wide", hint: "Bottle service moment" },
  { file: "03.jpg", shape: "square", hint: "Bar & bartenders" },
  { file: "04.jpg", shape: "square", hint: "DJ booth" },
  { file: "05.jpg", shape: "wide", hint: "Crowd / dance floor" },
  { file: "06.jpg", shape: "tall", hint: "VIP table" },
  { file: "07.jpg", shape: "square", hint: "Entrance / exterior" },
  { file: "08.jpg", shape: "square", hint: "Private event setup" },
] as const;

/** Minutes → "7 PM" style label. */
export function clock(mins: number) {
  const m = ((mins % 1440) + 1440) % 1440;
  const h = Math.floor(m / 60);
  const mm = m % 60;
  const suffix = h < 12 ? "AM" : "PM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}${mm ? `:${String(mm).padStart(2, "0")}` : ""} ${suffix}`;
}
