"use client";

import { useState } from "react";
import { ArrowDown, ArrowRight, Layers, Sliders, Maximize2, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/common/Button";
import { FrameContainer } from "@/components/common/FrameContainer";
import { Badge } from "@/components/common/Badge";
import { cn } from "@/lib/utils";

const SHOWCASE_MODES = [
  {
    id: "commerce",
    label: "01 COMMERCE",
    title: "Tactile Digital Flagship",
    clientType: "NOOR — Luxury Furniture",
    spec: "Fluid Catalog Engine / Bespoke Spatial Layout",
    previewAspect: "Editorial Grid",
  },
  {
    id: "experience",
    label: "02 EXPERIENCE",
    title: "Sensory Dining Architecture",
    clientType: "KŌRA — Culinary Lab",
    spec: "Low-Light Atmosphere / Reservation Flow",
    previewAspect: "Cinematic Dark",
  },
  {
    id: "software",
    label: "03 SOFTWARE",
    title: "Monolithic Real Estate Platform",
    clientType: "VERTEX — Architectural Towers",
    spec: "Elevation Coordinate System / Investor Suite",
    previewAspect: "Blueprint Frame",
  },
];

export function Hero() {
  const [activeMode, setActiveMode] = useState(0);
  const current = SHOWCASE_MODES[activeMode];

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-36 overflow-hidden">
      {/* Background architectural grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#0a0a0a08_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a08_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow & Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#0A0A0A]/10 pb-4 mb-10 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8FF3D] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0A0A0A]" />
            </span>
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.14em] sm:tracking-[0.22em] uppercase text-[#0A0A0A]/80 leading-normal">
              INDEPENDENT DIGITAL STUDIO — PAKISTAN / WORLDWIDE
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[10px] tracking-[0.18em] font-mono text-[#0A0A0A]/60">
            <span>ISB / 33.6844° N</span>
            <span className="text-[#0A0A0A]/20">/</span>
            <span>PROD V1.0</span>
          </div>
        </div>

        {/* Hero Title and Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-[-0.035em] text-[#0A0A0A] leading-[0.96] break-words">
              Digital products,
              <br className="hidden sm:inline" />{" "}
              <span className="italic font-light">built beautifully.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pl-6 space-y-6">
            <p className="text-base sm:text-lg text-[#0A0A0A]/80 leading-relaxed font-normal">
              We design and build websites, software and digital experiences that make
              businesses impossible to ignore.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/contact" variant="primary" icon="right">
                START A PROJECT
              </Button>
              <Button href="#work" variant="secondary" icon="down">
                SEE OUR WORK
              </Button>
            </div>
          </div>
        </div>

        {/* SECTION 01 INTERACTIVE SHOWCASE FRAME */}
        <div className="mt-8 sm:mt-12">
          <FrameContainer
            theme="dark"
            className="p-4 sm:p-8 lg:p-10 shadow-2xl rounded-xs overflow-hidden"
          >
            {/* Frame Top Meta Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <Badge variant="green">STUDIO FRAME</Badge>
                <span className="text-xs font-mono text-white/50 tracking-wider">
                  SYSTEM / INTERACTIVE PREVIEW
                </span>
              </div>

              {/* Mode switchers */}
              <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto max-w-full pb-1">
                {SHOWCASE_MODES.map((mode, idx) => (
                  <button
                    key={mode.id}
                    onClick={() => setActiveMode(idx)}
                    className={cn(
                      "px-3 py-1.5 text-[11px] font-mono tracking-wider uppercase transition-all duration-200 border",
                      activeMode === idx
                        ? "bg-[#C8FF3D] text-[#0A0A0A] border-[#C8FF3D] font-bold"
                        : "bg-transparent text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                    )}
                    aria-label={`Select ${mode.label} preview`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Inner Interactive Visual Canvas */}
            <div className="relative min-h-[340px] sm:min-h-[440px] lg:min-h-[480px] bg-[#121417] border border-white/10 p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
              {/* Architectural Grid within the frame */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem]"
                aria-hidden="true"
              />

              {/* Dynamic Content based on active mode */}
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <span className="text-xs font-mono text-[#C8FF3D] tracking-[0.2em] uppercase">
                    {current.clientType}
                  </span>
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 font-mono">
                    {current.spec}
                  </p>
                </div>

                <div className="flex sm:flex-col items-end gap-2 text-right">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    RENDER LAYER
                  </span>
                  <span className="text-xs font-mono px-2 py-1 bg-white/5 border border-white/10 text-white/80">
                    {current.previewAspect}
                  </span>
                </div>
              </div>

              {/* Bespoke Interactive Interface Representation */}
              <div className="relative z-10 my-8 py-4">
                {activeMode === 0 && (
                  /* NOOR: Editorial Commerce Frame UI Representation */
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-[#1A1815]/90 border border-[#D4A373]/30 p-4 sm:p-6 backdrop-blur-xs">
                    <div className="md:col-span-5 space-y-3">
                      <div className="text-[10px] font-mono text-[#D4A373] tracking-widest uppercase">
                        COLLECTION 2026 / NOOR
                      </div>
                      <div className="text-xl sm:text-2xl font-serif text-[#E8E4DC]">
                        Alabaster & Charred Ash Credenza
                      </div>
                      <div className="text-xs text-[#E8E4DC]/60 font-mono">
                        Handcrafted solid joinery. Custom cast brass pulls.
                      </div>
                      <div className="pt-2 flex items-center gap-3">
                        <span className="text-xs font-mono px-2 py-1 bg-[#D4A373]/20 text-[#D4A373] border border-[#D4A373]/40">
                          RAW FINISH
                        </span>
                        <span className="text-xs font-mono text-white/50">
                          LIMITED RUN
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-7 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                      <div className="h-32 sm:h-36 rounded-xs bg-[#24211D] border border-white/10 flex items-center justify-around p-4 relative overflow-hidden">
                        <div className="w-16 h-20 bg-[#35302A] border border-[#D4A373]/40 flex flex-col justify-end p-2">
                          <span className="text-[8px] font-mono text-white/60">FIG. A</span>
                        </div>
                        <div className="w-24 h-24 bg-[#3E3832] border border-[#D4A373]/60 flex flex-col justify-end p-2 shadow-lg">
                          <span className="text-[8px] font-mono text-[#D4A373]">ELEVATION</span>
                        </div>
                        <div className="w-16 h-16 bg-[#2B2722] border border-white/20 flex flex-col justify-end p-2">
                          <span className="text-[8px] font-mono text-white/40">DETAIL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeMode === 1 && (
                  /* KŌRA: Sensory Culinary Lab UI Representation */
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-[#090A0E]/90 border border-[#C8FF3D]/30 p-4 sm:p-6 backdrop-blur-xs">
                    <div className="md:col-span-6 space-y-3">
                      <div className="text-[10px] font-mono text-[#C8FF3D] tracking-widest uppercase">
                        KŌRA / TASTING EXPERIMENT
                      </div>
                      <div className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                        Twelve Movements. Zero Compromises.
                      </div>
                      <div className="text-xs text-white/60 font-mono">
                        Seating limited to 14 guests per evening. Micro-coursed pairings.
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="h-2 w-2 rounded-full bg-[#C8FF3D]" />
                        <span className="text-xs font-mono text-[#C8FF3D]">
                          CURRENT CYCLE: AUTUMN HARVEST
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-6 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs font-mono border-b border-white/10 pb-1.5 text-white/80">
                          <span>01. SMOKED MOREL ESSENCE</span>
                          <span className="text-[#C8FF3D]">19:30</span>
                        </div>
                        <div className="flex justify-between items-center text-xs font-mono border-b border-white/10 pb-1.5 text-white/80">
                          <span>02. FERMENTED JUNIPER GLAZE</span>
                          <span className="text-[#C8FF3D]">20:00</span>
                        </div>
                        <div className="flex justify-between items-center text-xs font-mono text-white/40">
                          <span>03. WILD QUINCE INFUSION</span>
                          <span>20:45</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeMode === 2 && (
                  /* VERTEX: Monolithic Architecture Platform UI Representation */
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-[#0F1216]/90 border border-[#90CDF4]/30 p-4 sm:p-6 backdrop-blur-xs">
                    <div className="md:col-span-6 space-y-3">
                      <div className="text-[10px] font-mono text-[#90CDF4] tracking-widest uppercase">
                        VERTEX / SECTOR 07 TOWER
                      </div>
                      <div className="text-xl sm:text-2xl font-mono font-bold tracking-tight text-white">
                        ELEVATION 440M // LEVEL 42 PENTHOUSE
                      </div>
                      <div className="text-xs text-white/60 font-mono">
                        Cantilevered glass balconies. Structural post-tension concrete core.
                      </div>
                      <div className="flex items-center gap-3 pt-2 font-mono text-xs text-[#90CDF4]">
                        <span>4,800 SQ FT</span>
                        <span>•</span>
                        <span>360° SKYLINE EXPOSURE</span>
                      </div>
                    </div>

                    <div className="md:col-span-6 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                      <div className="h-32 bg-[#090B0E] border border-[#90CDF4]/20 p-3 font-mono text-[10px] text-white/60 flex flex-col justify-between">
                        <div className="flex justify-between">
                          <span>GRID: X=104.2 Y=88.7</span>
                          <span className="text-[#90CDF4]">UNIT SPEC: READY</span>
                        </div>
                        <div className="h-12 border border-dashed border-[#90CDF4]/30 flex items-center justify-center text-[#90CDF4]/80">
                          [ SPATIAL BLUEPRINT ACTIVE ]
                        </div>
                        <div className="flex justify-between text-white/40 text-[9px]">
                          <span>LOAD: CALCULATED</span>
                          <span>VIEW: NORTH/WEST</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Frame Bar */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs font-mono text-white/50">
                <div className="flex items-center gap-4">
                  <span>SCALE: 1:1 CUSTOM</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline text-[#C8FF3D]">ZERO TEMPLATES</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>EXPAND CONCEPT IN WORK SECTION</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#C8FF3D]" />
                </div>
              </div>
            </div>
          </FrameContainer>
        </div>
      </div>
    </section>
  );
}
