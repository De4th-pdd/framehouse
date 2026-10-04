"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How much does a project cost?",
    answer:
      "Projects typically start from PKR 75,000 for focused launches. Our flagship Signature website build is PKR 175,000, while custom digital experiences and bespoke software start from PKR 300,000. Every project receives a fixed, transparent scope before we begin.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Typical delivery windows range from 2 to 4 weeks for focused business websites, and 4 to 8 weeks for larger brand flagships, e-commerce storefronts, or custom web applications. Actual timing depends on scope, asset readiness, and review speed.",
  },
  {
    question: "Do you use templates?",
    answer:
      "No. FRAMEHOUSE projects are designed and engineered from the ground up around your specific business, market advantage, and users. We do not use WordPress themes, Webflow templates, or off-the-shelf page builders.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We regularly audit underperforming websites, re-architect their user flows, modernize their art direction, and rebuild them from scratch with clean, production-grade code.",
  },
  {
    question: "Do you work with businesses outside Pakistan?",
    answer:
      "Yes. FRAMEHOUSE is based in Pakistan and collaborates with ambitious businesses and founders worldwide. We communicate directly via clear asynchronous updates, scheduled milestones, and direct messaging.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes, through our optional FrameCare ongoing support (starting from PKR 8,000/month). It is completely optional—you own your code and are never locked into an ongoing contract unless you want dedicated engineering support.",
  },
  {
    question: "Do you build e-commerce websites?",
    answer:
      "Yes. We build bespoke e-commerce experiences that combine brand storytelling with rapid, friction-free checkout flows, typically integrated with headless Shopify or custom commerce infrastructure.",
  },
  {
    question: "Do you build web apps and software?",
    answer:
      "Yes. We engineer responsive web applications, operational dashboards, client portals, and bespoke internal tools with production TypeScript, React, and modern fullstack architecture.",
  },
  {
    question: "How does payment work?",
    answer:
      "Standard engagements are structured around clear project milestones—typically a 50% deposit to commence work and secure schedule capacity, and 50% upon final QA, staging signoff, and production deployment.",
  },
  {
    question: "What do you need from me to start?",
    answer:
      "An overview of what your business does, what isn't working with your current setup, and where you want to take it. We guide you through everything else during our initial Discover phase.",
  },
];

export function Faq() {
  const [openIndices, setOpenIndices] = useState<Record<number, boolean>>({ 0: true });

  const toggleItem = (idx: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section id="faq" data-section="faq" className="scroll-mt-20 sm:scroll-mt-24 py-24 sm:py-36 lg:py-44 bg-[#F4F2ED] border-t border-[#0A0A0A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#0A0A0A]/10">
          <SectionHeader
            eyebrow="08 / FREQUENTLY ASKED"
            title="Questions, answered."
            description="Clear, honest answers about our pricing, timelines, technology, and delivery model."
            theme="light"
          />

          <span className="text-xs font-mono text-[#0A0A0A]/50 uppercase tracking-widest self-start md:self-end">
            TRANSPARENCY FIRST
          </span>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto divide-y divide-[#0A0A0A]/15 border-t border-b border-[#0A0A0A]/15">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = !!openIndices[idx];
            return (
              <div key={item.question} className="py-6 sm:py-8 transition-colors">
                <button
                  type="button"
                  id={`faq-question-${idx}`}
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between text-left gap-6 group cursor-pointer focus-visible:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="text-lg sm:text-xl font-bold text-[#0A0A0A] group-hover:text-[#0A0A0A]/70 transition-colors">
                    {item.question}
                  </span>
                  <span className={cn(
                    "w-8 h-8 rounded-full border border-[#0A0A0A]/20 flex items-center justify-center shrink-0 transition-colors duration-200",
                    isOpen ? "bg-[#0A0A0A] text-white" : "bg-white text-[#0A0A0A] group-hover:border-[#0A0A0A]"
                  )}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="pr-12 text-sm sm:text-base text-[#0A0A0A]/75 leading-relaxed font-normal">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
