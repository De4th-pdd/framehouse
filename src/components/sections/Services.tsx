"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Terminal } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FrameContainer } from "@/components/common/FrameContainer";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function Services() {
  const [activeService, setActiveService] = useState(0);
  const current = services[activeService];

  return (
    <section
      id="services"
      className="py-24 sm:py-36 lg:py-44 bg-[#0A0A0A] text-white relative overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <SectionHeader
          eyebrow="03 / CAPABILITIES"
          title="From first frame to final product."
          description="We are intentionally broader than a traditional web design agency. We engineer full digital products, bespoke software, and intelligent automations."
          theme="dark"
        />

        {/* Interactive Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Typographic Interactive List */}
          <div className="lg:col-span-6 divide-y divide-white/10 border-t border-b border-white/10">
            {services.map((item, idx) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveService(idx)}
                onFocus={() => setActiveService(idx)}
                tabIndex={0}
                className={cn(
                  "group py-6 sm:py-8 px-4 sm:px-6 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8FF3D]",
                  activeService === idx
                    ? "bg-white/5 border-l-2 border-l-[#C8FF3D]"
                    : "hover:bg-white/[0.02]"
                )}
                role="button"
                aria-pressed={activeService === idx}
                aria-label={`Capability: ${item.title}`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span
                      className={cn(
                        "text-xs sm:text-sm font-mono tracking-widest",
                        activeService === idx ? "text-[#C8FF3D]" : "text-white/40"
                      )}
                    >
                      {item.number}
                    </span>
                    <h3
                      className={cn(
                        "text-2xl sm:text-3xl font-bold tracking-tight transition-colors",
                        activeService === idx
                          ? "text-white"
                          : "text-white/60 group-hover:text-white"
                      )}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <ArrowRight
                    className={cn(
                      "w-4 h-4 transition-all duration-200",
                      activeService === idx
                        ? "text-[#C8FF3D] translate-x-1"
                        : "text-white/20 group-hover:text-white/50"
                    )}
                  />
                </div>

                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed max-w-md transition-colors",
                    activeService === idx ? "text-white/80" : "text-white/50"
                  )}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Live Dynamic Preview Frame */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <FrameContainer
              theme="dark"
              className="p-6 sm:p-8 bg-[#111317] border-white/20 shadow-2xl space-y-6"
            >
              {/* Preview Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF3D]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>CAPABILITY FRAME // {current.number}</span>
                </div>
                <span className="text-[11px] font-mono text-white/40 uppercase">
                  DEPLOYED ARCHITECTURE
                </span>
              </div>

              {/* Preview Headline & Body */}
              <div className="space-y-4">
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {current.previewHeadline}
                </h4>
                <p className="text-sm text-white/70 leading-relaxed font-sans">
                  {current.previewSub}
                </p>
              </div>

              {/* Specific Deliverables List */}
              <div className="space-y-2.5 pt-2 border-t border-white/10">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                  CORE DELIVERABLES:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-center gap-2 text-xs font-mono text-white/80"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF3D] shrink-0" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase text-white/40 mr-1">
                  TECH:
                </span>
                {current.techFocus.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </FrameContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
