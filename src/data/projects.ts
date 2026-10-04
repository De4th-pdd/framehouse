import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "lumen",
    name: "LUMEN ARCHIVE",
    eyebrow: "SELF-INITIATED CONCEPT / DIGITAL MONOGRAPH",
    conceptLabel: "CONCEPT / 01",
    category: "EDITORIAL / INTERACTIVE / ARCHIVE",
    tags: ["Digital Monograph", "Editorial Layout", "Typographic System", "Spatial Studies"],
    description:
      "A self-initiated digital monograph exploring how editorial storytelling, image composition and motion can shape a more immersive web experience.",
    year: "Concept",
    deliverables: [
      "Editorial Monograph Layout",
      "Catalogue Index & Filtering",
      "Asymmetric Grid Composition",
      "Curatorial Study Dossiers",
    ],
    palette: {
      bg: "#141312",
      text: "#FAF8F5",
      accent: "#8C6D46",
      border: "rgba(226, 221, 211, 0.15)",
    },
  },
  {
    id: "meridian",
    name: "MERIDIAN",
    eyebrow: "SELF-INITIATED CONCEPT / OPERATIONAL WEB APP",
    conceptLabel: "CONCEPT / 02",
    category: "WEB / APPLICATION / SOFTWARE",
    tags: ["High-Perf Web App", "Interactive Prototype", "Command Palette (⌘K)", "Telemetry"],
    description:
      "A self-initiated operational web application exploring high-density data architecture, Linear-style keyboard workflows (⌘K), and instant state transitions.",
    year: "Concept",
    deliverables: [
      "Command Palette (⌘K) Interaction",
      "Interactive Throughput Trajectory Chart",
      "High-Density Workstream Ledger",
      "State Filtering & Search",
    ],
    palette: {
      bg: "#090B0E",
      text: "#FFFFFF",
      accent: "#C8FF3D",
      border: "rgba(255, 255, 255, 0.15)",
    },
  },
  {
    id: "vertex",
    name: "VERTEX",
    eyebrow: "SELF-INITIATED CONCEPT / ARCHITECTURE PORTFOLIO",
    conceptLabel: "CONCEPT / 03",
    category: "WEB / INTERACTIVE / DIGITAL",
    tags: ["Spatial Monograph", "Project Archive", "Material Studies", "High-End Web"],
    description:
      "A self-initiated portfolio concept exploring how architecture practices can present projects, drawings, materials and spatial studies online.",
    year: "Concept",
    deliverables: [
      "Spatial Project Viewer",
      "Materiality Specification Matrix",
      "Multi-Axis Typology Filtering",
      "Interactive Study Dossier",
    ],
    palette: {
      bg: "#121417",
      text: "#EDF2F7",
      accent: "#90CDF4",
      border: "rgba(237, 242, 247, 0.15)",
    },
  },
];
