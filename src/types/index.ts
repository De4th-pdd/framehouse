export interface Project {
  id: string;
  name: string;
  eyebrow: string;
  conceptLabel: string;
  category: string;
  tags: string[];
  description: string;
  year: string;
  deliverables: string[];
  palette: {
    bg: string;
    text: string;
    accent: string;
    border: string;
  };
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  previewHeadline: string;
  previewSub: string;
  techFocus: string[];
}

export interface Principle {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface InquiryFormData {
  name: string;
  business: string;
  email: string;
  links: string;
  services: string[];
  budget: string;
  timeline: string;
  message: string;
}
