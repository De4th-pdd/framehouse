"use client";

import { SectionHeader } from "@/components/common/SectionHeader";
import { FrameContainer } from "@/components/common/FrameContainer";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-36 lg:py-44 bg-[#F4F2ED] border-t border-[#0A0A0A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        <SectionHeader
          eyebrow="04 / PROCESS"
          title="A better way to build."
          description="A structured five-phase delivery methodology that removes guesswork and guarantees structural polish from Day 1 to post-launch."
          theme="light"
        />

        {/* Process Steps */}
        {/* Desktop Horizontal Connected Timeline (Hidden on small screens) */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4 relative">
          {/* Subtle connecting horizontal line */}
          <div
            className="absolute top-10 left-6 right-6 h-[1px] bg-[#0A0A0A]/15 z-0 pointer-events-none"
            aria-hidden="true"
          />

          {processSteps.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col justify-between">
              <FrameContainer
                theme="light"
                className="p-6 bg-white/70 hover:bg-white h-full flex flex-col justify-between space-y-6 transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Step Header Indicator */}
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center font-mono text-xs font-bold">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-mono text-[#0A0A0A]/40 uppercase tracking-widest">
                      STAGE
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[#0A0A0A]">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#0A0A0A]/80 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-4 border-t border-[#0A0A0A]/10 space-y-1.5">
                  <div className="text-[9px] font-mono uppercase text-[#0A0A0A]/50 tracking-wider">
                    OUTPUTS:
                  </div>
                  {step.deliverables.map((item) => (
                    <div
                      key={item}
                      className="text-[11px] font-mono text-[#0A0A0A]/70 leading-snug"
                    >
                      • {item}
                    </div>
                  ))}
                </div>
              </FrameContainer>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Vertical Connected Timeline */}
        <div className="lg:hidden space-y-6 relative pl-6 sm:pl-8 border-l-2 border-[#0A0A0A]/15 ml-3 sm:ml-4">
          {processSteps.map((step) => (
            <div key={step.number} className="relative">
              {/* Dot on the vertical line */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-[#0A0A0A] border-2 border-[#F4F2ED]" />

              <FrameContainer
                theme="light"
                className="p-6 bg-white/80 space-y-4"
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono font-bold text-[#0A0A0A]/50 uppercase">
                    STAGE // {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-[#0A0A0A]">
                    {step.title}
                  </h3>
                </div>

                <p className="text-sm text-[#0A0A0A]/80 leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-3 border-t border-[#0A0A0A]/10 space-y-1">
                  <div className="text-[10px] font-mono uppercase text-[#0A0A0A]/50 tracking-wider">
                    OUTPUTS:
                  </div>
                  {step.deliverables.map((item) => (
                    <div
                      key={item}
                      className="text-xs font-mono text-[#0A0A0A]/70"
                    >
                      • {item}
                    </div>
                  ))}
                </div>
              </FrameContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
