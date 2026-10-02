import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand the business, audience and goals.",
    deliverables: [
      "Competitive Landscape Audit",
      "User Journey & Architecture Mapping",
      "Technical Feasibility Review",
      "Project Scope & Milestone Alignment",
    ],
  },
  {
    number: "02",
    title: "FRAME",
    description: "Define the structure, visual direction and experience.",
    deliverables: [
      "Information Architecture",
      "Visual Framing & Art Direction",
      "Interactive Wireframes",
      "Component & Typography System",
    ],
  },
  {
    number: "03",
    title: "BUILD",
    description: "Design and develop the product.",
    deliverables: [
      "Fullstack Next.js Engineering",
      "Responsive Layout Implementation",
      "Motion Choreography",
      "API & Service Integrations",
    ],
  },
  {
    number: "04",
    title: "REFINE",
    description: "Responsive testing, performance, accessibility and motion refinement.",
    deliverables: [
      "Cross-Device & Viewport QA",
      "Lighthouse Performance Tuning",
      "WCAG AA Accessibility Audit",
      "Touch & Micro-interaction Polish",
    ],
  },
  {
    number: "05",
    title: "LAUNCH",
    description: "Deploy, monitor and continue improving.",
    deliverables: [
      "Production Cloud Deployment",
      "Domain & SSL Configuration",
      "Uptime & Error Telemetry",
      "Iterative Post-Launch Optimization",
    ],
  },
];
