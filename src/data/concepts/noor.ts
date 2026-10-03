export interface NoorProduct {
  id: string;
  name: string;
  category: string;
  price: string;
  priceNum: number;
  edition: string;
  material: string;
  description: string;
  swatches: { name: string; hex: string; texture: string }[];
  tag: string;
}

export interface LookbookStory {
  id: string;
  title: string;
  subtitle: string;
  season: string;
  quote: string;
  featuredProduct: string;
  aestheticNotes: string[];
}

export const NOOR_PRODUCTS: NoorProduct[] = [
  {
    id: "prod-01",
    name: "Raw Mulberry Silk Overshirt",
    category: "TEXTILE // CONCEPT SPEC",
    price: "$480 USD",
    priceNum: 480,
    edition: "SERIES SPECIFICATION",
    material: "Hand-Spun Raw Mulberry Silk",
    description: "Relaxed silhouette tailored with unbleached organic mulberry silk, hand-carved buffalo horn buttons, and french seams.",
    swatches: [
      { name: "Raw Ivory", hex: "#F3EDE2", texture: "Matte organic slub" },
      { name: "Charcoal Sumi", hex: "#222120", texture: "Botanical charcoal wash" },
      { name: "Peshawar Indigo", hex: "#1C2430", texture: "Natural vat-dyed indigo" },
    ],
    tag: "STUDY LOOK",
  },
  {
    id: "prod-02",
    name: "Mizan Low Credenza",
    category: "CONCEPT PRODUCT // ATELIER JOINERY",
    price: "$3,650 USD",
    priceNum: 3650,
    edition: "STUDIO ARCHIVE SPEC",
    material: "Charred Ash & Honed Alabaster",
    description: "Solid flamed ash credenza framed with unlacquered cast bronze hardware and a solid honed stone slab top.",
    swatches: [
      { name: "Charred Ash", hex: "#1A1A1A", texture: "Hand-planed charred grain" },
      { name: "Aged Teak", hex: "#5C4632", texture: "Waxed reclaimed river wood" },
      { name: "Raw Alabaster", hex: "#EBE5D8", texture: "Translucent honed mineral" },
    ],
    tag: "ARCHITECTURAL STUDY",
  },
  {
    id: "prod-03",
    name: "Cast Bronze Vessel 04",
    category: "VESSEL // LOST-WAX CASTING",
    price: "$720 USD",
    priceNum: 720,
    edition: "FOUNDRY SERIES SPEC",
    material: "Heavy Cast Bronze",
    description: "Monolithic weighted centerpiece cast via traditional lost-wax technique with hand-patinated exterior and mirror-polished interior rim.",
    swatches: [
      { name: "Living Bronze", hex: "#7D5D3B", texture: "Oxidized natural patina" },
      { name: "Mirror Polished", hex: "#C49E65", texture: "High-specular brass luster" },
      { name: "Gunmetal Smoke", hex: "#2D2F33", texture: "Sulfur flame blackened" },
    ],
    tag: "GALLERY SPEC",
  },
];

export const NOOR_LOOKBOOK: LookbookStory = {
  id: "story-01",
  title: "The Tactile Monograph",
  subtitle: "Collection 04 — Modern Heritage Meets Brutalist Restraint",
  season: "AUTUMN / WINTER 2026",
  quote: "Garments and objects engineered with weight, patience, and unyielding material integrity.",
  featuredProduct: "Raw Mulberry Silk Overshirt",
  aestheticNotes: [
    "Zero synthetic blends or chemical stabilizers",
    "Material explorations rendered for bespoke storefronts",
    "Sample e-commerce flow with responsive bag interaction",
  ],
};
