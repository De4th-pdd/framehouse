"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "@/components/common/SectionHeader";
import { processSteps } from "@/data/process";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      const items = cardsRef.current?.children;
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="py-24 sm:py-36 lg:py-44 bg-[#F4F2ED] border-t border-[#0A0A0A]/10">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#0A0A0A]/10">
          <SectionHeader
            eyebrow="06 / PROCESS"
            title="A clear path from idea to launch."
            description="A structured five-phase delivery methodology. Predictable timelines, direct communication, and zero unnecessary handoffs."
            theme="light"
          />

          <span className="text-xs font-mono text-[#0A0A0A]/50 uppercase tracking-widest self-start md:self-end">
            STRUCTURED DELIVERY
          </span>
        </div>

        {/* Unified 5-Phase Sequence Grid (Zero DOM duplication) */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4"
        >
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white/80 border border-[#0A0A0A]/15 rounded-xs p-6 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-[#0A0A0A]/40 hover:shadow-md group"
            >
              <div className="space-y-4">
                {/* Step Header */}
                <div className="flex items-center justify-between border-b border-[#0A0A0A]/10 pb-3">
                  <span className="w-8 h-8 rounded-full bg-[#0A0A0A] text-[#C8FF3D] flex items-center justify-center font-mono text-xs font-bold transition-transform group-hover:scale-110">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-[#0A0A0A]/40 uppercase tracking-widest">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-[#0A0A0A] tracking-tight font-sans">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#0A0A0A]/75 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Deliverable Tags */}
              <div className="space-y-2 pt-2 border-t border-[#0A0A0A]/10">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#0A0A0A]/40 block">
                  KEY OUTPUTS
                </span>
                <div className="space-y-1 text-[11px] font-mono text-[#0A0A0A]/80">
                  {step.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-1.5 leading-snug">
                      <span className="text-[#0A0A0A]/40 shrink-0">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Meta Bottom Bar */}
        <div className="pt-6 border-t border-[#0A0A0A]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#0A0A0A]/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
            <span>AVERAGE DELIVERY: 2 TO 6 WEEKS DEPENDING ON SCOPE</span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-bold text-[#0A0A0A] hover:underline uppercase tracking-wider"
          >
            <span>DISCUSS YOUR TIMELINE</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0A0A0A]" />
          </a>
        </div>
      </div>
    </section>
  );
}
