// All business content lives here. Edit this file, not the components.
// Anything marked [[NEED: ...]] is missing from the brief and must be filled before going live.

export const NEED = (what: string) => `[[NEED: ${what}]]`;

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
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Campbell%27s+British+Tearoom+Unit+18+274+Burton+Ave+Barrie+ON+L4N+5W4",
  owners: "Kat and Scott Sharp",
  serviceArea: ["Barrie", "Innisfil"],
  serviceAreaNote:
    "Guests come in from Innisfil, and some drive in from over an hour away. Plenty of visitors on holiday stop in too.",
  socials: {
    instagram: "https://www.instagram.com/info.campbellsbritishtearoom/",
    facebook: "https://www.facebook.com/Campbellsbritishtearoom/",
  },
  doordashUrl: NEED("exact DoorDash store link"),
  reviews: {
    rating: 4.5,
    count: 328,
    asOf: "November 2026",
    source: "Google",
    note: "A local favourite in Barrie for two decades, according to the owners.",
  },
  // Booking is by request. Afternoon tea needs 24 hours' notice.
  booking: {
    afternoonTeaNoticeHours: 24,
    partyMax: 12,
    times: [
      "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",



    ],
    lastTimeNote: NEED("last seating time for afternoon tea"),
  },
};

export const hours = {
  summary: "Open 7 days a week, 9 a.m. to 5 p.m.",
  rows: [
    { days: "Monday to Sunday", open: "9 a.m.", close: "5 p.m." },
  ],
  daysNote: NEED("confirm hours for each day"),
  breakfastUntil: "Breakfast is served until noon.",
  fishFridays: "Fish Fridays, every Friday.",
  dineIn: "The tearoom is dine-in. The bakery counter and the shop are for take-home.",
  weekendNote: "Book ahead for weekends and holidays.",
};

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
  price: string; // "$14.45" or NEED(...)
  note?: string;
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
    intro: "Served until noon. A proper breakfast with fried bread, potato scone and black pudding. Swap the link sausage for Lorne (square) sausage at no extra fuss.",
    items: [
      { name: "Full English", desc: "Fried bread, potato scone, black pudding, Lorne sausage swap available.", price: NEED("breakfast price") },
      { name: "Vegetarian breakfast", desc: "The full breakfast with the vegetarian sides.", price: NEED("vegetarian breakfast price") },
      { name: "Side: fried bread", price: NEED("price") },
      { name: "Side: potato scone", price: NEED("price") },
      { name: "Side: black pudding", price: NEED("price") },
      { name: "Side: Lorne (square) sausage", price: NEED("price") },
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
      { name: "Afternoon tea (three tiers)", desc: "Sandwiches, scones with clotted cream and jam, and sweets. Three fingers each of egg mayo, cream cheese and cucumber, and coronation chicken per guest.", price: NEED("afternoon tea price per guest") },
      { name: "Cream Tea", desc: "A scone, jam, clotted cream and a pot of tea.", price: NEED("cream tea price") },
      { name: "Royal High Tea", desc: "Guests say it is worth every penny.", price: NEED("Royal High Tea price") },
      { name: "High Tea Dinner Platter for Two", desc: "A platter to share, built for two.", price: NEED("High Tea Dinner Platter price") },
    ],
  },
  {
    id: "fish-friday",
    title: "Fish Friday",
    intro: "Fish Fridays, every Friday. Beer batter and chunky fries cut fresh.",
    items: [
      { name: "Cod and Chips", desc: "Beer batter, chunky fries cut fresh in house.", price: "$20.95" },
      { name: "Fish Friday specials", desc: NEED("Fish Friday menu beyond cod and chips"), price: NEED("price") },
    ],
  },
  {
    id: "bakery",
    title: "Bakery",
    intro: "Eat in or take home from the bakery counter. Everything made in house.",
    items: [
      { name: "Scones", desc: "Plain, plus seasonal flavours such as pumpkin spice and cranberry orange.", price: NEED("scone price") },
      { name: "Sausage rolls", price: NEED("price") },
      { name: "Pasties", price: NEED("price") },
      { name: "Meat pies", desc: "Steak and onion, steak and kidney, chicken and leek, curry chicken, mince and onion, Melton Mowbray pork pie.", price: NEED("pie prices") },
      { name: "Empire cookies", price: NEED("price") },
      { name: "Millionaire shortbread", price: NEED("price") },
      { name: "Eclairs", price: NEED("price") },
      { name: "Turkey cranberry stuffing bakes", price: NEED("price") },
      { name: "Breakfast bakes", price: NEED("price") },
      { name: "Apple crumble", price: NEED("price") },
    ],
  },
];

export const seasonal = {
  label: "This season",
  updated: NEED("date these specials were last confirmed"),
  intro: "Seasonal specials change often. This panel is the one place to update them.",
  items: [
    { name: "Pumpkin spice scones", note: "Bakery counter" },
    { name: "Cranberry orange scones", note: "Bakery counter" },
    { name: "Turkey cranberry stuffing bakes", note: "Bakery counter" },
  ],
};

export const shop = {
  title: "Shop",
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

export const dietary = {
  vegetarian: "There is a vegetarian breakfast on the menu.",
  glutenFree: NEED("gluten-free options"),
  note: "Tell us about allergies and dietary needs when you book, so the kitchen knows before you arrive.",
};

export const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need a booking?",
    a: "Book ahead for weekends and holidays. They fill up. Afternoon tea needs 24 hours' notice, so use the booking form or call us.",
  },
  {
    q: "Is there a vegetarian breakfast?",
    a: "Yes. There is a vegetarian breakfast on the menu.",
  },
  {
    q: "Do you have gluten-free options?",
    a: NEED("gluten-free options"),
  },
  {
    q: "Can I order takeout?",
    a: `The bakery counter and the shop are for take-home. You can also order on DoorDash: ${NEED("exact DoorDash store link")}.`,
  },
  {
    q: "Where are you?",
    a: "Unit 18, 274 Burton Ave, inside the Barriegate Centre plaza in Barrie. We serve Barrie and Innisfil, and plenty of guests drive in from further away.",
  },
  {
    q: "Is there parking?",
    a: NEED("parking details"),
  },
];

export const concept = {
  on: true,
  credit: "Concept by Kooht Studio for Campbell's British Tearoom",
  notConnected: "Concept preview: this form isn't connected yet.",
};
