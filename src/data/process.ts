import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Deconstruct the business model, commercial objectives, and technical constraints.",
    deliverables: [
      "System scope & technical feasibility",
      "User flow & page architecture",
      "Milestone & delivery alignment",
    ],
  },
  {
    number: "02",
    title: "FRAME",
    description: "Establish the structural hierarchy, typographic discipline, and bespoke art direction.",
    deliverables: [
      "Information architecture",
      "Interactive wireframe models",
      "Visual system & design tokens",
    ],
  },
  {
    number: "03",
    title: "BUILD",
    description: "Engineer modern, clean-coded digital surfaces with production TypeScript and Next.js.",
    deliverables: [
      "Component-driven engineering",
      "Bespoke motion choreography",
      "APIs & software integrations",
    ],
  },
  {
    number: "04",
    title: "REFINE",
    description: "Stress-test across 8 responsive viewports, eliminate layout shifts, and tune latency.",
    deliverables: [
      "320px–1440px viewport QA",
      "Performance & accessibility audit",
      "Touch & interaction ergonomics",
    ],
  },
  {
    number: "05",
    title: "LAUNCH",
    description: "Deploy to global edge infrastructure with continuous monitoring and stewardship.",
    deliverables: [
      "Edge CDN production deploy",
      "Uptime & telemetry monitoring",
      "Ongoing product stewardship",
    ],
  },
];

