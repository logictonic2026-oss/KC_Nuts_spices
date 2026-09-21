// ============================================================
// All site copy lives here — edit text in one place.
// Content & story preserved from the original brief.
// ============================================================

export const BRAND = {
  name: "KC Nuts & Spices",
  tagline: "Every pack, handpicked like mom would do.",
  promise: "Precision Nutrition, Personally Delivered.",
  location: "Hosur",
  est: "2024",
  whatsapp:
    "https://wa.me/917904001514?text=Hi%2C%20I%27ve%20seen%20your%20products%20on%20the%20website.%20Can%20I%20get%20more%20details%20on%20that%3F",
  instagram:
    "https://www.instagram.com/kc_nuts_spices?igsh=MWFmYXA0bXFtdDRmNw%3D%3D&utm_source=qr",
};

export const HERO_STATS = [
  { num: "3", label: "Curated Product Tiers" },
  { num: "100%", label: "Natural, No Additives" },
  { num: "Hosur", label: "Locally Rooted" },
];

export const MARQUEE = [
  "California Almonds",
  "Mangalore Cashews",
  "Heritage Selection",
  "Daily Vitality Range",
  "Premium Dates",
  "Culinary Blends",
  "Seeds Collection",
  "Corporate Gifting",
];

export const STORY = {
  tag: "Brand Intelligence",
  title: "Built for households that buy with intention.",
  paragraphs: [
    "KC is designed for high-performance professionals and quality-conscious households that treat food as a measurable investment, not a random grocery decision.",
    "We think in terms of household rhythm, repeat-use habits, and practical pantry needs. That is why KC is built as a premium system that supports low-friction reordering, clearer product choices, and better everyday wellness.",
    "Our job is to anticipate what the household will need next and make premium pantry buying feel effortless, transparent, and dependable.",
  ],
  points: [
    "Built around household rhythm, not random buying",
    "Supports smarter reordering before products run out",
    "Designed for premium pantry use on the counter and shelf",
    "Premium pantry systems, not just product transactions",
  ],
};

export const PREDICTIVE = {
  tag: "Predictive Personalization",
  title: "We aim to know the box before it runs out.",
  paragraphs: [
    "The KC experience is meant to move beyond static ordering. Over time, the brand should feel like it understands household consumption patterns and can guide the next reorder with very little effort from the customer.",
    "That is the real promise behind our precision mindset: less guesswork, less decision fatigue, and more confidence that the right product will be there when the household needs it again.",
  ],
  points: [
    "Predictive thinking around consumption and replenishment",
    "Low-friction reorder support for repeat customers",
    "Done-for-you combinations that reduce decision fatigue",
    "Transparent, premium, and easy to trust",
  ],
};

export const PILLARS = [
  {
    kicker: "Who We Are",
    title: "Premium brand for quality-conscious buyers",
    desc: "A trusted choice for homes, professionals, retailers, and corporate customers who want premium pantry essentials.",
  },
  {
    kicker: "What We Do",
    title: "Curate nuts, dry fruits, seeds, spices, combos & gifting",
    desc: "We bring a precision mindset to product curation, packaging, and presentation across the range.",
  },
  {
    kicker: "Why Choose Us",
    title: "Quality, structure, freshness, and convenience",
    desc: "KC combines premium standards with a more intentional way to buy and use pantry staples.",
  },
  {
    kicker: "How You Benefit",
    title: "Better choices and easier reordering",
    desc: "Get products that fit how real homes consume, with premium quality and lower friction.",
  },
];

export const TIERS = [
  {
    no: "01",
    name: "The Heritage Selection",
    tier: "Tier 1",
    desc: "Gifting, festive boxes, flawless whole goods, and premium presentation for special occasions.",
  },
  {
    no: "02",
    name: "The Daily Vitality Range",
    tier: "Tier 2",
    desc: "Routine pantry essentials designed for consistent household use and repeat purchase.",
  },
  {
    no: "03",
    name: "The Culinary Blend",
    tier: "Tier 3",
    desc: "Kitchen utility products with uncompromised freshness and practical everyday use.",
  },
];

export const COMBOS = [
  {
    kicker: "Morning Vitality Combo",
    title: "Start the day with balance",
    desc: "A balanced mix for morning routines and repeat pantry use.",
  },
  {
    kicker: "Family Wellness Combo",
    title: "Built for shared pantry use",
    desc: "A practical assortment for families who want premium staples in one easy choice.",
  },
  {
    kicker: "Smart Snack Combo",
    title: "Convenient, premium, repeatable",
    desc: "A premium snack mix designed for office, travel, and quick wellness-friendly bites.",
  },
];

export type Product = {
  id: string;
  name: string;
  origin: string;
  desc: string;
  badge?: string;
  seed: string;
  price: number;
};

export const PRODUCTS: Product[] = [
  {
    id: "almonds-california",
    name: "California Almonds",
    origin: "California, USA",
    desc: "Large, crunchy, and naturally rich. Premium grade with no skin treatments or bleaching.",
    badge: "Bestseller",
    seed: "almonds-kc",
    price: 899,
  },
  {
    id: "cashews-mangalore",
    name: "Mangalore Cashews",
    origin: "Mangalore, India",
    desc: "Creamy, buttery whole cashews. W240 grade — the larger, meatier variety we insist on.",
    seed: "cashews-kc",
    price: 1049,
  },
  {
    id: "pistachios-california",
    name: "California Pistachios",
    origin: "California, USA",
    desc: "Naturally split, vibrant green, and full of that characteristic earthy sweetness.",
    badge: "New",
    seed: "pistachio-kc",
    price: 1199,
  },
  {
    id: "seeds-collection",
    name: "Seeds Collection",
    origin: "Multi-Origin",
    desc: "Pumpkin, sunflower, flax, and chia. Nutritionally dense. Geometrically beautiful.",
    seed: "seeds-kc",
    price: 499,
  },
  {
    id: "dates-medjool",
    name: "Premium Dates",
    origin: "Middle East",
    desc: "Soft, caramel-sweet Medjool dates. A natural energy source that genuinely tastes like indulgence.",
    seed: "dates-kc",
    price: 849,
  },
  {
    id: "trail-mix-signature",
    name: "Premium Trail Mix",
    origin: "KC Blend",
    desc: "Our signature blend — almonds, cashews, raisins, and seeds. Balanced for nutrition and crunch.",
    badge: "Popular",
    seed: "trailmix-kc",
    price: 699,
  },
];

export const GIFTING = {
  tag: "Corporate Gifting",
  title: "Premium gifting, presented with credibility.",
  body: "Corporate gifting is a major part of the KC experience because the brand needs to feel sophisticated before a buyer ever places an order. We present KC as polished, premium, and capable of custom gift solutions.",
  points: [
    "Premium presentation for festive and business gifting",
    "Heritage Selection showcase for premium perception",
    "Custom order options for businesses and events",
    "Enquiry-first flow through WhatsApp",
  ],
};

export const REVIEWS = [
  {
    name: "Deepa K.",
    quote:
      "Great quality and very thoughtful packaging. Easy to order on WhatsApp too.",
  },
  {
    name: "Ravi S.",
    quote:
      "The products feel premium and consistent. Perfect for regular home use.",
  },
  {
    name: "Ananya P.",
    quote: "Loved the presentation and the quick response. Feels trustworthy.",
  },
];
