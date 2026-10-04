export interface LumenStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  aspect: string;
  description: string;
  highlights: string[];
  gradient: string;
}

export const LUMEN_STUDIES: LumenStudy[] = [
  {
    id: "study-01",
    number: "PLATE 01",
    title: "Light & Monolith",
    subtitle: "Editorial typography & asymmetrical layout",
    aspect: "16:9 Landscape",
    description: "Demonstrates high-contrast typography, generous negative space, and editorial pacing suitable for luxury, fashion, or cultural publishing.",
    highlights: [
      "Custom responsive grid system",
      "Serif display typography & hierarchy",
      "Asymmetric white space management",
    ],
    gradient: "linear-gradient(135deg, #242220 0%, #151413 55%, #0D0C0B 100%)",
  },
  {
    id: "study-02",
    number: "PLATE 02",
    title: "Tactile Topography",
    subtitle: "Material presentation & visual rhythm",
    aspect: "4:5 Portrait",
    description: "Explores rich image framing, considered texture transitions, and modular storytelling for design studios, architecture, and monographs.",
    highlights: [
      "Subtle surface lighting & depth",
      "Modular editorial image vitrines",
      "Balanced reading typography",
    ],
    gradient: "linear-gradient(145deg, #302C27 0%, #1E1C19 60%, #12110F 100%)",
  },
  {
    id: "study-03",
    number: "PLATE 03",
    title: "The Silent Archive",
    subtitle: "Minimalist catalogue & collection indexing",
    aspect: "1:1 Square",
    description: "Demonstrates clean metadata hierarchy, collection indexing, and understated transitions that keep focus squarely on the work.",
    highlights: [
      "Clean collection metadata structure",
      "Friction-free filtering & indexing",
      "Restrained, purposeful motion",
    ],
    gradient: "linear-gradient(160deg, #222326 0%, #131417 50%, #0A0A0C 100%)",
  },
];
