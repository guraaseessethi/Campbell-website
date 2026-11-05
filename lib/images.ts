// Concept-mode photos (free Unsplash). Each entry has a role on the site and real alt text.
const q = "?auto=format&fit=crop&q=70";
const u = (id: string) => `https://images.unsplash.com/${id}${q}`;

export const photos = {
  // Hero: tea set beside a three-tier stand on a round white table.
  hero: { src: u("photo-1518225197792-0b2ec38b3212"), alt: "A tea set beside a three-tier cake stand on a round white table" },
  // Afternoon tea: one pot of tea, served in china.
  teapot: { src: u("photo-1584799187619-6473f62c2a9f"), alt: "A white and green floral china teapot on a table" },
  // Middle tier of the stand.
  scones: { src: u("photo-1611337854278-d50f443c3a03"), alt: "A scone on a plate beside a small bowl" },
  // Top tier of the stand: sweets in a tiered rack.
  sweets: { src: u("photo-1532509334149-d2130d74253c"), alt: "Pastries displayed on a tiered rack" },
  // Breakfast: a fried breakfast with egg, beans, bread and tomato.
  fryUp: { src: u("photo-1525473233136-080cdd8b7cb2"), alt: "A fried breakfast with egg, beans, fried bread and tomato" },
  // Bakery: full-bleed pies on a dark background.
  piesDark: { src: u("photo-1778449470133-5ce3092a6c09"), alt: "Three golden pies on a dark background" },
  // Booking page: a cup of tea beside a napkin and a flower.
  teaNapkin: { src: u("photo-1623193893878-656ec0391ea1"), alt: "A cup of tea beside a napkin and a flower" },
  // Visit or menu header: fish and chips with a cup of tea.
  fishChips: { src: u("photo-1772372043852-4a33ae5c8987"), alt: "Fish and chips with peas and a cup of tea" },
};
