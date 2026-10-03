import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand the business, audience and goals.",
    deliverables: [
      "System scope & technical feasibility",
      "User flow & page architecture",
      "Milestone & delivery alignment",
    ],
  },
  {
    number: "02",
    title: "FRAME",
    description: "Shape the structure, visual direction and experience.",
    deliverables: [
      "Information architecture",
      "Interactive wireframe models",
      "Visual system & design tokens",
    ],
  },
  {
    number: "03",
    title: "BUILD",
    description: "Turn the design into a responsive, production-ready product.",
    deliverables: [
      "Component-driven engineering",
      "Bespoke motion choreography",
      "APIs & software integrations",
    ],
  },
  {
    number: "04",
    title: "REFINE",
    description: "Test, optimize and polish across real devices.",
    deliverables: [
      "320px–1440px viewport QA",
      "Performance & accessibility audit",
      "Touch & interaction ergonomics",
    ],
  },
  {
    number: "05",
    title: "LAUNCH",
    description: "Deploy, test and hand over the finished product cleanly.",
    deliverables: [
      "Production deployment & DNS setup",
      "Performance & SEO verification",
      "Client handover & project delivery",
    ],
  },
];

