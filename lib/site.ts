// All business content lives here. Edit this file, not the components.
// Open go-live questions are listed in NEEDS.md at the repo root. Nothing on the site shows a placeholder.

export const ASK = "Ask at the counter";

const fmtHour = (h: number) => {
  const hh = Math.floor(h);
  const mm = Math.round((h - hh) * 60);
  const ap = hh < 12 ? "a.m." : "p.m.";
  const h12 = hh % 12 || 12;
  return mm ? `${h12}:${String(mm).padStart(2, "0")} ${ap}` : `${h12} ${ap}`;
};

export const site = {
  name: "Campbell's British Tearoom",
  shortName: "Campbell's",
  tagline: "A proper British tearoom in Barrie.",
  description:
    "A proper British tearoom in Barrie, Ontario. Afternoon tea, full English breakfasts and lunch, a bakery counter of scones, pies and sausage rolls, and a small shop of imported British groceries.",
  url: "https://www.campbellsbritishtearoom.com",
  domain: "campbellsbritishtearoom.com",
  phone: "(705) 722-6446",
  phoneTel: "+17057226446",
  email: "info@campbellsbritishtearoom.com",
  address: {
    street: "Unit 18, 274 Burton Ave",
    locality: "Barrie",
    region: "ON",
    postalCode: "L4N 5W4",
    country: "CA",
    plaza: "Barriegate Centre",
  },
  geo: { latitude: 44.3706832, longitude: -79.6733587 },
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=44.3706832,-79.6733587",
  visitLine: "In the Barriegate Centre plaza on Burton Ave.",
  accessibility: "Wheelchair accessible.",
  orderUrl: "https://order.online/store/campbells-british-tearoom-barrie-28371302/",
  doordashUrl: "https://www.doordash.com/store/campbells-british-tearoom-barrie-28371302/",
  owners: "Kat and Scott Sharp",
  serviceArea: ["Barrie", "Innisfil"],
  serviceAreaNote:
    "Guests come in from Innisfil, and some drive in from over an hour away. Plenty of visitors on holiday stop in too.",
  socials: {
    instagram: "https://www.instagram.com/info.campbellsbritishtearoom/",
    facebook: "https://www.facebook.com/Campbellsbritishtearoom/",
  },
  reviews: {
    rating: 4.5,
    count: 328,
    asOf: "November 2026",
    source: "Google",
  },
  booking: {
    afternoonTeaNoticeHours: 24,
    partyMax: 12,
    partyOver: "13+",
  },
};

// Hours from the public listings, Nov 2026. Index 0 is Sunday, so the week runs Sunday to Saturday.
export const schedule = [
  { day: "Monday", dow: 1, open: 9, close: 17 },
  { day: "Tuesday", dow: 2, open: 9, close: 17 },
  { day: "Wednesday", dow: 3, open: 9, close: 17 },
  { day: "Thursday", dow: 4, open: 9, close: 17 },
  { day: "Friday", dow: 5, open: 9, close: 18.5 },
  { day: "Saturday", dow: 6, open: 9, close: 17 },
  { day: "Sunday", dow: 0, open: 9, close: 16 },
];

export const hours = {
  summary: "Open 7 days from 9 a.m.",
  schedule: schedule.map((d) => ({ ...d, label: `${fmtHour(d.open)} to ${fmtHour(d.close)}` })),
  holidayNote: "Hours can change on holidays, give us a call.",
  breakfastUntil: "Breakfast is served until noon.",
  fishFridays: "Fish Fridays, every Friday.",
  dineIn: "The tearoom is dine-in. The bakery counter and the shop are for take-home.",
  weekendNote: "Book ahead for weekends and holidays.",
};

// Start times for a given weekday and booking type. Regular menu closes 30 minutes before close.
// High Tea's last start is 2 hours before close.
export function bookingTimes(dow: number, what: string): string[] {
  const d = schedule.find((s) => s.dow === dow);
  if (!d) return [];
  const last = what === "afternoon-tea" ? d.close - 2 : d.close - 0.5;
  const out: string[] = [];
  for (let t = d.open; t <= last + 1e-9; t += 0.5) {
    const h = Math.floor(t);
    const m = Math.round((t - h) * 60);
    out.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
  }
  return out;
}

export const nav = [
  { href: "/#afternoon-tea", label: "Afternoon tea" },
  { href: "/#breakfast-lunch", label: "Breakfast and lunch" },
  { href: "/#bakery", label: "Bakery and shop" },
  { href: "/#celebrations", label: "Celebrations" },
  { href: "/menu", label: "Menu" },
  { href: "/#visit", label: "Visit" },
];

export type MenuItem = {
  name: string;
  desc?: string;
  price?: string; // omitted when there is no price column for the item
};

export type MenuSection = {
  id: string;
  title: string;
  intro: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    intro: "Served until noon. A proper breakfast with fried bread, potato scone and black pudding. Swap the link sausage for Lorne (square) sausage.",
    items: [
      { name: "Full English", desc: "Fried bread, potato scone, black pudding, Lorne sausage swap available.", price: ASK },
      { name: "Vegetarian breakfast", desc: "The full breakfast with the vegetarian sides.", price: ASK },
      { name: "Side: fried bread", price: ASK },
      { name: "Side: potato scone", price: ASK },
      { name: "Side: black pudding", price: ASK },
      { name: "Side: Lorne (square) sausage", price: ASK },
    ],
  },
  {
    id: "lunch",
    title: "Lunch",
    intro: "Sandwiches on white, brown or multigrain bread. Hot plates come with the mash or chips shown.",
    items: [
      { name: "Cream Cheese and Cucumber", desc: "Sandwich. White, brown or multigrain.", price: "$14.45" },
      { name: "Egg Mayo and Spring Onion", desc: "Sandwich. White, brown or multigrain.", price: "$14.45" },
      { name: "Cheddar Cheese and Pickle", desc: "Sandwich. White, brown or multigrain.", price: "$14.45" },
      { name: "Tuna Mayo", desc: "Sandwich. White, brown or multigrain.", price: "$14.45" },
      { name: "Salmon Mayo (sockeye)", desc: "Sandwich. White, brown or multigrain.", price: "$16.45" },
      { name: "Smoked Salmon with Dill Mayo", desc: "Sandwich. White, brown or multigrain.", price: "$16.95" },
      { name: "Coronation Chicken", desc: "Curried chicken with mayo and raisins. Sandwich. White, brown or multigrain.", price: "$16.95" },
      { name: "Bangers and Mash", price: "$22.95" },
      { name: "Cod and Chips", price: "$20.95" },
      { name: "Chicken Pot Pie and Mash", desc: "Served with potato and parsnip mash.", price: "$21.95" },
      { name: "Steak Pie and Mash", price: "$21.95" },
    ],
  },
  {
    id: "afternoon-tea",
    title: "Afternoon tea",
    intro: "Book at least 24 hours ahead. Each guest picks a loose-leaf tea and gets their own pot, served in china. Real clotted cream.",
    items: [
      { name: "High Tea", desc: "Three tiers: sandwiches, scones with clotted cream and jam, and sweets. About 2 hours. Book at least 24 hours ahead.", price: "$39.50" },
      { name: "Cream Tea", desc: "A scone, jam, clotted cream and a pot of tea.", price: ASK },
      { name: "Royal High Tea", desc: "Guests say it is worth every penny.", price: ASK },
      { name: "High Tea Dinner Platter for Two", desc: "A platter to share, built for two.", price: ASK },
    ],
  },
  {
    id: "fish-friday",
    title: "Fish Friday",
    intro: "Fish Fridays, every Friday. Beer batter and chunky fries cut fresh in house.",
    items: [
      { name: "Cod and Chips", desc: "Beer batter, chunky fries cut fresh in house.", price: "$20.95" },
    ],
  },
  {
    id: "bakery",
    title: "Bakery",
    intro: "Eat in or take home from the bakery counter. Everything made in house. Baked goods from $2.",
    items: [
      { name: "Scones", desc: "Plain, plus seasonal flavours such as pumpkin spice and cranberry orange." },
      { name: "Sausage rolls" },
      { name: "Pasties" },
      { name: "Meat pies", desc: "Steak and onion, steak and kidney, chicken and leek, curry chicken, mince and onion, Melton Mowbray pork pie." },
      { name: "Empire cookies" },
      { name: "Millionaire shortbread" },
      { name: "Eclairs" },
      { name: "Turkey cranberry stuffing bakes" },
      { name: "Breakfast bakes" },
      { name: "Apple crumble" },
    ],
  },
];

export const seasonal = {
  label: "This season",
  text: "Autumn at Campbell's: pumpkin spice scones, pumpkin pie and apple crumble while they last.",
};

export const shop = {
  intro: "Imported British groceries under the same roof as the bakery. Some local Canadian products too.",
  items: ["Tayto crisps", "British sweets", "Frozen sausages", "Gifts", "Some local Canadian products"],
};

export const reviews = [
  { quote: "Truly the best English breakfast I've ever had. Really generous portions and converted me into a black pudding fan.", name: "Elaine H." },
  { quote: "I've checked out a few tea rooms in the area, and so far, Campbell's is definitely my favorite. I really enjoy their food, those scones are top-notch! And they serve real clotted cream.", name: "Carley F." },
  { quote: "Hands down, the best fish and chips around!", name: "Renee B." },
  { quote: "The Royal High Tea is worth every penny.", name: "Margaret A." },
  { quote: "Pies - Excellent, best my husband and I have had all over the world.", name: "Sherrilyn H." },
  { quote: "The chunky fries are fresh cut and awesome, the beer batter was one of the best in town.", name: "Jodey C." },
  { quote: "Can't beat a solid, proper breakfast. Insider tip, sub out the link sausage for square (Lorne) sausage and you're golden.", name: "David K." },
  { quote: "On Saturday May 25th 2024 they hosted a surprise party for my 75th birthday. It could not have gone any better.", name: "Harvey L." },
  { quote: "The scones were really magnificent, and the amount of food exceeded expectations.", name: "Kaylee D." },
];

export const occasions = [
  "Kids' birthdays",
  "A 70th and a 75th birthday",
  "Bridal showers",
  "Mother's Day",
  "Mother-in-law birthdays",
  "A Halloween paint and sip",
  "Family dinners and small private parties",
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need a booking?",
    a: "Book ahead for weekends and holidays. High Tea needs 24 hours' notice. Use the booking form or call us.",
  },
  {
    q: "Gluten-free?",
    a: "Yes, just tell us when you book so we can have it ready.",
  },
  {
    q: "Vegetarian?",
    a: "Yes, including a vegetarian breakfast.",
  },
  {
    q: "Can I order takeout?",
    a: "Yes. Order pickup online, or delivery on DoorDash. The bakery counter and the shop are for take-home.",
  },
  {
    q: "Is it wheelchair accessible?",
    a: "Yes. Wheelchair accessible.",
  },
  {
    q: "Where are you?",
    a: "Unit 18, 274 Burton Ave, in the Barriegate Centre plaza on Burton Ave, Barrie. We serve Barrie and Innisfil, and plenty of guests drive in from further away.",
  },
];

export const concept = {
  on: true,
  credit: "Concept by Kooht Studio for Campbell's British Tearoom",
  notConnected: "Concept preview: this form isn't connected yet.",
};
