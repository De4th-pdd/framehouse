export interface LumenStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  medium: string;
  year: string;
  aspect: string;
  description: string;
  notes: string[];
  tone: {
    bg: string;
    accent: string;
    border: string;
  };
  visualComposition: {
    type: "monolith" | "topography" | "void";
    primaryColor: string;
    secondaryColor: string;
    gradient: string;
    caption: string;
  };
}

export interface LumenSection {
  id: string;
  title: string;
  tag: string;
}

export const LUMEN_SECTIONS: LumenSection[] = [
  { id: "monograph", title: "01 / Monograph", tag: "EDITORIAL ESSAY" },
  { id: "studies", title: "02 / Visual Studies", tag: "SPATIAL ARCHIVE" },
  { id: "index", title: "03 / Catalogue Index", tag: "FOLIO 2026" },
];

export const LUMEN_STUDIES: LumenStudy[] = [
  {
    id: "study-01",
    number: "PLATE 01",
    title: "Light & Monolith",
    subtitle: "Raking sunlight across compressed volcanic tuff",
    medium: "Photographic & Material Monograph",
    year: "Concept Folio",
    aspect: "16:9 Landscape Composition",
    description: "An inquiry into how digital editorial surfaces can evoke physical print monographs. Tension between dense typography, asymmetrical margins, and heavy monolithic silhouettes.",
    notes: [
      "Natural raking light captured at 18° solar altitude",
      "Typeset in Manrope at 44pt with optical kerning",
      "Strict 12-column asymmetric grid alignment",
    ],
    tone: {
      bg: "#141312",
      accent: "#E2DDD3",
      border: "rgba(226, 221, 211, 0.14)",
    },
    visualComposition: {
      type: "monolith",
      primaryColor: "#2A2724",
      secondaryColor: "#121110",
      gradient: "linear-gradient(135deg, #242220 0%, #151413 55%, #0D0C0B 100%)",
      caption: "STUDY I — MONOLITHIC MASS & NEGATIVE MARGINS",
    },
  },
  {
    id: "study-02",
    number: "PLATE 02",
    title: "Tactile Topography",
    subtitle: "Surface grain, fibrous paper and unprimed raw canvas",
    medium: "Materiality & Texture Archive",
    year: "Concept Folio",
    aspect: "4:5 Portrait Monograph",
    description: "Exploring tactile friction on glassy digital screens. Micro-textures, muted mineral washes, and structural line overlays that give weight to long-form reading.",
    notes: [
      "High-specular mineral contrast on matte paper tone",
      "Dynamic cropping reveals substrate under magnification",
      "Balanced whitespace allowing typography to breathe",
    ],
    tone: {
      bg: "#1A1918",
      accent: "#D6CEBF",
      border: "rgba(214, 206, 191, 0.14)",
    },
    visualComposition: {
      type: "topography",
      primaryColor: "#35312C",
      secondaryColor: "#1B1917",
      gradient: "linear-gradient(145deg, #302C27 0%, #1E1C19 60%, #12110F 100%)",
      caption: "STUDY II — TEXTURAL STRATA & FIBROUS SUBSTRATE",
    },
  },
  {
    id: "study-03",
    number: "PLATE 03",
    title: "The Silent Archive",
    subtitle: "Typographic discipline across sparse catalogue indices",
    medium: "Digital Exhibition Architecture",
    year: "Concept Folio",
    aspect: "1:1 Square Study",
    description: "Catalogue index design demonstrating dense metadata hierarchy, archival indexing, and understated transition choreographies that guide focus without distraction.",
    notes: [
      "Monospaced metadata paired with editorial headers",
      "Multi-axis index filtering with zero page reload",
      "Framed viewport acting as an architectural vitrine",
    ],
    tone: {
      bg: "#101011",
      accent: "#CFCAC2",
      border: "rgba(207, 202, 194, 0.12)",
    },
    visualComposition: {
      type: "void",
      primaryColor: "#222326",
      secondaryColor: "#0D0E10",
      gradient: "linear-gradient(160deg, #1F2024 0%, #131417 50%, #0A0A0C 100%)",
      caption: "STUDY III — MINIMALIST ARCHIVAL VITRINE",
    },
  },
];
