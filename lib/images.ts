// Concept-mode photos (free Unsplash). Each entry has a role on the site and alt text that matches what the photo shows.
const q = "?auto=format&fit=crop&q=70";
const u = (id: string) => `https://images.unsplash.com/${id}${q}`;

export const photos = {
  // Hero: tea set beside a three-tier stand on a round white table, in a bright room.
  hero: { src: u("photo-1518225197792-0b2ec38b3212"), alt: "A pot of tea and glass cups on a round white table beside a three-tier stand of sandwiches and cakes" },
  // Afternoon tea: a full table laid for tea on floral china.
  teaSpread: { src: u("photo-1576831438461-6d0e6a13b0ce"), alt: "A table laid for afternoon tea with a three-tier stand, sandwiches, floral china and two glasses of sparkling wine" },
  // Afternoon tea: scone with clotted cream and jam.
  sconeCream: { src: u("photo-1589114471223-dec0d8d572c6"), alt: "A split scone with clotted cream and jam on a white cake stand" },
  // Celebrations: gold-rimmed china with small rose sprigs.
  teacup: { src: u("photo-1560228083-e0fd2410ce25"), alt: "A white china teacup and saucer with a gold rim and small red rose sprigs" },
  // Breakfast: a cooked breakfast on blue and white china.
  blueBreakfast: { src: u("photo-1714678760534-e983cc0496c0"), alt: "A cooked breakfast of eggs, bacon, black pudding and roast potatoes on a blue and white plate" },
  // Fish Friday: fish and chips with a cup of tea.
  fishChips: { src: u("photo-1772372043852-4a33ae5c8987"), alt: "Battered fish and chips with peas, and a blue cup of tea" },
  // Bakery: three golden pies on a dark background.
  piesDark: { src: u("photo-1778449470133-5ce3092a6c09"), alt: "Three golden pies on a dark background" },
  // Bakery: a pastry to take home.
  pasty: { src: u("photo-1636405388572-6fb172986d5f"), alt: "A hand holding a flaky pastry in a paper wrapper" },
  // Booking page: a cup of tea on a floral cloth with a flower.
  teaNapkin: { src: u("photo-1623193893878-656ec0391ea1"), alt: "A cup of tea with a lemon slice on a floral tablecloth beside a pink flower" },
};
