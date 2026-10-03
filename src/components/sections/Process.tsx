"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FrameContainer } from "@/components/common/FrameContainer";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const mobileProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const mm = gsap.matchMedia();

    // Desktop: Horizontal progression on scroll
    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 40%",
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const stepIndex = Math.min(
            processSteps.length - 1,
            Math.floor(progress * processSteps.length)
          );
          setActiveStep(stepIndex);
        },
      });
    });

    // Mobile: Vertical progress line draw on scroll
    mm.add("(max-width: 1023px)", () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 80%",
        scrub: 0.3,
        onUpdate: (self) => {
          if (mobileProgressRef.current) {
            mobileProgressRef.current.style.height = `${self.progress * 100}%`;
          }
        },
      });
    });

    return () => mm.revert();
  }, []);

  const current = processSteps[activeStep];

  return (
    <section id="process" className="py-24 sm:py-36 lg:py-44 bg-[#F4F2ED] border-t border-[#0A0A0A]/10">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <SectionHeader
          eyebrow="05 / PROCESS"
          title="A better way to build."
          description="A structured five-phase delivery methodology that removes guesswork and guarantees structural polish from Day 1 to post-launch."
          theme="light"
        />

        {/* DESKTOP CONNECTED HORIZONTAL PROGRESSION (01 ───── 02 ───── 03 ───── 04 ───── 05) */}
        <div className="hidden lg:block space-y-10">
          {/* Connected Timeline Track */}
          <div className="relative pt-6 pb-2">
            {/* Background continuous track line */}
            <div className="absolute top-10 left-10 right-10 h-0.5 bg-[#0A0A0A]/15 z-0" />

            {/* Filled progress line driven by scroll */}
            <div
              ref={progressBarRef}
              className="absolute top-10 left-10 h-0.5 bg-[#0A0A0A] z-0 transition-all duration-75 max-w-[calc(100%-5rem)]"
              style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
            />

            {/* 5 Milestone Nodes along the line */}
            <div className="relative z-10 grid grid-cols-5 gap-4">
              {processSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPast = activeStep > idx;

                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center text-center group cursor-pointer select-none focus:outline-none"
                    aria-label={`Jump to stage ${step.number}: ${step.title}`}
                  >
                    {/* Circle Node */}
                    <div
                      className={cn(
                        "w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 border-2",
                        isActive
                          ? "bg-[#0A0A0A] text-[#C8FF3D] border-[#0A0A0A] shadow-md scale-110"
                          : isPast
                          ? "bg-[#0A0A0A] text-white border-[#0A0A0A]"
                          : "bg-white text-[#0A0A0A]/40 border-[#0A0A0A]/20 group-hover:border-[#0A0A0A]/50"
                      )}
                    >
                      {isPast ? <Check className="w-3.5 h-3.5" /> : step.number}
                    </div>

                    {/* Step Title Below Node */}
                    <span
                      className={cn(
                        "mt-3 text-xs font-mono tracking-wider uppercase transition-colors duration-200",
                        isActive
                          ? "text-[#0A0A0A] font-bold"
                          : isPast
                          ? "text-[#0A0A0A]/80 font-medium"
                          : "text-[#0A0A0A]/40 group-hover:text-[#0A0A0A]/70"
                      )}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Active Stage Architectural Card */}
          <FrameContainer
            theme="light"
            className="p-8 sm:p-12 bg-white/90 border-[#0A0A0A]/20 shadow-xl rounded-xs transition-all duration-500"
          >
            <div className="grid grid-cols-12 gap-8 items-start">
              {/* Left Column: Big Typographic Stage Identity */}
              <div className="col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 bg-[#0A0A0A] text-[#C8FF3D] text-[10px] font-mono font-bold tracking-widest uppercase rounded-xs">
                    PHASE // {current.number}
                  </span>
                  <span className="text-xs font-mono text-[#0A0A0A]/50 uppercase tracking-wider">
                    DELIVERY STAGE
                  </span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-black text-[#0A0A0A] tracking-tight">
                  {current.title}
                </h3>

                <p className="text-base sm:text-lg text-[#0A0A0A]/80 leading-relaxed font-normal max-w-xl">
                  {current.description}
                </p>
              </div>

              {/* Right Column: Output Deliverables & Methodology */}
              <div className="col-span-5 bg-[#F4F2ED] border border-[#0A0A0A]/15 p-6 rounded-xs space-y-4">
                <div className="flex justify-between items-center border-b border-[#0A0A0A]/10 pb-3 text-xs font-mono">
                  <span className="text-[#0A0A0A]/60 uppercase tracking-wider">CORE DELIVERABLES</span>
                  <span className="text-[#0A0A0A] font-bold">STAGE {current.number}</span>
                </div>

                <div className="space-y-2.5">
                  {current.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-xs font-mono text-[#0A0A0A]/85"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#0A0A0A]/10 text-[11px] font-mono text-[#0A0A0A]/60 flex justify-between">
                  <span>SCROLL TO ADVANCE</span>
                  <span className="text-[#0A0A0A] font-bold">0{activeStep + 1} / 05</span>
                </div>
              </div>
            </div>
          </FrameContainer>
        </div>

        {/* MOBILE & TABLET VERTICAL SEQUENCE (01 │ 02 │ 03 │ 04 │ 05) */}
        <div className="lg:hidden relative pl-6 sm:pl-8 space-y-8 sm:space-y-12">
          {/* Vertical continuous track line */}
          <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-[#0A0A0A]/15" />

          {/* Filled vertical progress line drawn on scroll */}
          <div
            ref={mobileProgressRef}
            className="absolute left-2.5 top-3 w-0.5 bg-[#0A0A0A] transition-all duration-100"
            style={{ height: "0%" }}
          />

          {processSteps.map((step) => (
            <div
              key={step.number}
              className="relative space-y-3 bg-white/70 p-5 sm:p-6 border border-[#0A0A0A]/15 rounded-xs shadow-xs"
            >
              {/* Milestone Node on the vertical line */}
              <div className="absolute -left-[27px] sm:-left-[35px] top-6 w-6 h-6 rounded-full bg-[#0A0A0A] text-[#C8FF3D] flex items-center justify-center font-mono text-[10px] font-bold border-2 border-white shadow-xs">
                {step.number}
              </div>

              <div className="flex items-baseline justify-between gap-2 border-b border-[#0A0A0A]/10 pb-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#0A0A0A]/50 uppercase">
                  PHASE // {step.number}
                </span>
                <span className="text-[10px] font-mono text-[#0A0A0A]/40 uppercase">ACTIVE SPRINT</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-black text-[#0A0A0A] tracking-tight">
                {step.title}
              </h4>

              <p className="text-sm text-[#0A0A0A]/80 leading-relaxed font-normal">
                {step.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {step.deliverables.map((item) => (
                  <span
                    key={item}
                    className="text-[10px] font-mono px-2 py-0.5 bg-[#F4F2ED] border border-[#0A0A0A]/10 text-[#0A0A0A]/80 rounded-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


