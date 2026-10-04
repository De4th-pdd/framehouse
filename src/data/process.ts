import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand the business, audience, goals and constraints.",
    deliverables: [
      "System scope & technical feasibility",
      "User flow & page architecture",
      "Milestone & delivery alignment",
    ],
  },
  {
    number: "02",
    title: "FRAME",
    description: "Define the structure, hierarchy and visual direction.",
    deliverables: [
      "Information architecture",
      "Interactive wireframe models",
      "Visual system & design tokens",
    ],
  },
  {
    number: "03",
    title: "BUILD",
    description: "Turn the approved direction into a fast, responsive digital product.",
    deliverables: [
      "Component-driven engineering",
      "Bespoke motion choreography",
      "APIs & software integrations",
    ],
  },
  {
    number: "04",
    title: "REFINE",
    description: "Test, improve and polish every important interaction.",
    deliverables: [
      "320px–1440px viewport QA",
      "Performance & accessibility audit",
      "Touch & interaction ergonomics",
    ],
  },
  {
    number: "05",
    title: "LAUNCH",
    description: "Deploy the finished product and make sure everything works properly.",
    deliverables: [
      "Production deployment & DNS setup",
      "Performance & SEO verification",
      "Client handover & project delivery",
    ],
  },
];

