import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "noor",
    name: "NOOR",
    eyebrow: "PAKISTAN CRAFTSMANSHIP / CONTEMPORARY EDITORIAL",
    conceptLabel: "CONCEPT / 01",
    category: "BRAND / E-COMMERCE / WEB",
    tags: ["E-Commerce", "Art Direction", "Tactile UI", "Custom Catalog"],
    description:
      "A digital flagship for a contemporary furniture & lifestyle house. Grounded in raw timber, cast bronze, and architectural silhouettes, balanced with micro-fluid purchasing interactions and tactile material storytelling.",
    year: "2026",
    deliverables: [
      "Custom E-Commerce Architecture",
      "Material Spec Switcher",
      "Editorial Layout Engine",
      "Dynamic Cart Drawer",
    ],
    palette: {
      bg: "#1C1A17",
      text: "#E8E4DC",
      accent: "#D4A373",
      border: "rgba(232, 228, 220, 0.15)",
    },
  },
  {
    id: "meridian",
    name: "MERIDIAN",
    eyebrow: "GLOBAL TREASURY & ASSET ENGINE",
    conceptLabel: "CONCEPT / 02",
    category: "WEB / APPLICATION / SOFTWARE",
    tags: ["High-Perf Web App", "Settlement Engine", "Command Palette (⌘K)", "Telemetry"],
    description:
      "A high-performance institutional liquidity platform and treasury management engine. Engineered for instant cross-border settlement visibility with sub-50ms interaction latency, keyboard-first navigation, and real-time ledger auditing.",
    year: "2026",
    deliverables: [
      "Command Palette (⌘K) Interaction",
      "Interactive Liquidity Trajectory Chart",
      "Multi-Currency Audit Ledger",
      "Real-time Settlement Feed",
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
    eyebrow: "MONOLITHIC ARCHITECTURE & URBAN DEVELOPMENT",
    conceptLabel: "CONCEPT / 03",
    category: "WEB / INTERACTIVE / DIGITAL",
    tags: ["Real Estate", "Interactive Floorplans", "Elevation Viewer", "High-End Web"],
    description:
      "A digital showcase for a progressive real estate developer crafting brutalist-inspired residential towers. Featuring coordinate-driven blueprint framing, spatial elevation views, and bespoke property inquiry flows.",
    year: "2026",
    deliverables: [
      "Spatial Elevation Viewer",
      "Coordinate Blueprint Grid",
      "Unit Spec Comparison Matrix",
      "Private Investor Portal",
    ],
    palette: {
      bg: "#121417",
      text: "#EDF2F7",
      accent: "#90CDF4",
      border: "rgba(237, 242, 247, 0.15)",
    },
  },
];
