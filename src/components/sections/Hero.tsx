"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Check } from "lucide-react";
import { Button } from "@/components/common/Button";
import { FrameContainer } from "@/components/common/FrameContainer";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SHOWCASE_MODES = [
  {
    id: "lumen",
    label: "01 LUMEN",
    shortName: "LUMEN",
    title: "LUMEN ARCHIVE — Digital Monograph Concept",
    clientType: "SELF-INITIATED CONCEPT",
    spec: "Editorial Storytelling & Curated Monograph Layout",
    bgClass: "bg-[#FAF8F5] text-[#121110] border-[#121110]/15",
    accentColor: "#8C6D48",
  },
  {
    id: "software",
    label: "02 MERIDIAN",
    shortName: "MERIDIAN",
    title: "MERIDIAN — Concept Operational Web App",
    clientType: "SELF-INITIATED CONCEPT",
    spec: "Command Palette (⌘K) & High-Density Workstream Ledger",
    bgClass: "bg-[#090B0E] text-white border-white/15",
    accentColor: "#C8FF3D",
  },
  {
    id: "spatial",
    label: "03 VERTEX",
    shortName: "VERTEX",
    title: "VERTEX STUDIO — Concept Architecture Monograph",
    clientType: "SELF-INITIATED CONCEPT",
    spec: "Multi-Axis Project Archive & Materiality Studies",
    bgClass: "bg-[#E8EBEE] text-[#0A0A0A] border-[#0A0A0A]/20",
    accentColor: "#1E3A5F",
  },
];

const LUMEN_PLATES = [
  {
    num: "01",
    name: "Light & Monolith",
    label: "PLATE 01",
    aspect: "16:9 Landscape",
    medium: "Photographic Monograph",
    gradient: "linear-gradient(135deg, #2A2724 0%, #151413 55%, #0D0C0B 100%)",
    caption: "Study I — Editorial Typography & Asymmetrical Grid",
    ratio: "16:9",
  },
  {
    num: "02",
    name: "Tactile Topography",
    label: "PLATE 02",
    aspect: "4:5 Portrait",
    medium: "Materiality & Texture Archive",
    gradient: "linear-gradient(145deg, #35312C 0%, #1E1C19 60%, #12110F 100%)",
    caption: "Study II — Material Presentation & Visual Rhythm",
    ratio: "4:5",
  },
  {
    num: "03",
    name: "The Silent Archive",
    label: "PLATE 03",
    aspect: "1:1 Square",
    medium: "Digital Exhibition Architecture",
    gradient: "linear-gradient(160deg, #222326 0%, #131417 50%, #0A0A0C 100%)",
    caption: "Study III — Minimalist Catalogue & Collection Index",
    ratio: "1:1",
  },
];

const MERIDIAN_RANGES = [
  { tf: "24H", vol: "142 Orders", flow: "24 Projects", change: "+12.4% today" },
  { tf: "7D", vol: "984 Orders", flow: "18 Open Tasks", change: "+18.6% this week" },
  { tf: "30D", vol: "4,120 Orders", flow: "28 Active", change: "+24.2% this month" },
];

const VERTEX_PROJECT_PREVIEWS = [
  { num: "01", name: "Margalla Pavilion", typ: "Cultural", loc: "Islamabad", scale: "2,400 M²" },
  { num: "02", name: "Terrace Penthouse", typ: "Residential", loc: "Zurich", scale: "680 M²" },
  { num: "03", name: "DIFC Monolith", typ: "Commercial", loc: "Dubai", scale: "8,900 M²" },
];

export function Hero() {
  const [activeMode, setActiveMode] = useState(0);
  const [lumenPlate, setLumenPlate] = useState(0);
  const [meridianTf, setMeridianTf] = useState(1);
  const [vertexProj, setVertexProj] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current || !showcaseRef.current) return;

    const mm = gsap.matchMedia();

    // Desktop: Pinned 100vh scroll sequence that physically expands the showcase frame
    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100vh",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // 1. Hero text and actions move upward and recede
      if (heroTextRef.current) {
        tl.to(
          heroTextRef.current,
          {
            y: -80,
            opacity: 0,
            ease: "power1.inOut",
            duration: 0.35,
          },
          0
        );
      }

      // 2. Showcase container translates up, scales to near full-bleed, and frame expands
      tl.to(
        showcaseRef.current,
        {
          y: -110,
          scale: 1.05,
          ease: "power2.inOut",
          duration: 0.65,
        },
        0.15
      );
    });

    // Mobile / Tablet: Smooth unpinned scroll scrub without trapping
    mm.add("(max-width: 1023px)", () => {
      if (heroTextRef.current) {
        gsap.to(heroTextRef.current, {
          y: -30,
          opacity: 0.4,
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom 70%",
            scrub: 1,
          },
        });
      }

      gsap.fromTo(
        showcaseRef.current,
        { scale: 0.98 },
        {
          scale: 1.01,
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  const current = SHOWCASE_MODES[activeMode];
  const activeLumen = LUMEN_PLATES[lumenPlate];
  const activeMeridian = MERIDIAN_RANGES[meridianTf];
  const activeVertex = VERTEX_PROJECT_PREVIEWS[vertexProj];

  return (
    <section ref={sectionRef} className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-[#F4F2ED]">
      {/* Background architectural grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(to_right,#0a0a0a08_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a08_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow & Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#0A0A0A]/10 pb-3 mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8FF3D] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0A0A0A]" />
            </span>
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.22em] uppercase text-[#0A0A0A]/80 leading-normal">
              INDEPENDENT DIGITAL STUDIO — PAKISTAN / WORLDWIDE
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[10px] tracking-[0.16em] font-mono text-[#0A0A0A]/60">
            <span>ISLAMABAD // 33.6844° N</span>
            <span className="text-[#0A0A0A]/20">•</span>
            <span className="text-[#0A0A0A] font-semibold">DIRECT FOUNDER INVOLVEMENT</span>
          </div>
        </div>

        {/* Hero Title and Description Grid */}
        <div ref={heroTextRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-8 sm:mb-10">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-[-0.035em] text-[#0A0A0A] leading-[0.95] break-words">
              Digital products,
              <br className="hidden sm:inline" />{" "}
              <span className="italic font-light">built beautifully.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pl-4 space-y-5">
            <p className="text-sm sm:text-base lg:text-lg text-[#0A0A0A]/80 leading-relaxed font-normal">
              Custom websites, software and digital experiences built around your business.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button href="/contact" variant="primary" icon="right" className="text-xs py-3 px-5">
                START A PROJECT
              </Button>
              <Button href="#work" variant="secondary" icon="down" className="text-xs py-3 px-5">
                SEE OUR WORK
              </Button>
            </div>
          </div>
        </div>

        {/* SECTION 01 INTERACTIVE SHOWCASE FRAME (Substantial portion visible above fold) */}
        <div ref={showcaseRef} data-theme="dark" className="mt-4 sm:mt-6 transition-transform">
          <FrameContainer
            theme="dark"
            withCorners={true}
            className="p-4 sm:p-6 lg:p-8 shadow-2xl rounded-xs overflow-hidden bg-[#0A0A0A] border-white/20"
          >
            {/* Frame Top Meta Header - Editorial Chapter Navigation */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/50">
                  STUDIO CHAPTERS:
                </span>
              </div>

              {/* Editorial concept switcher: 01 / NOOR, 02 / MERIDIAN, 03 / VERTEX */}
              <div role="tablist" aria-label="Studio Chapters" className="flex items-center gap-4 sm:gap-8">
                {SHOWCASE_MODES.map((mode, idx) => {
                  const isActive = activeMode === idx;
                  return (
                    <button
                      key={mode.id}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveMode(idx)}
                      className={cn(
                        "group relative py-1 text-xs sm:text-sm font-mono tracking-wider transition-all duration-300 text-left whitespace-nowrap",
                        isActive ? "text-white font-bold" : "text-white/40 hover:text-white/80"
                      )}
                      aria-label={`Select chapter: ${mode.shortName}`}
                    >
                      <span className="flex items-baseline gap-1.5 whitespace-nowrap">
                        <span className={cn(
                          "text-[10px] transition-colors whitespace-nowrap",
                          isActive ? "text-[#C8FF3D]" : "text-white/30"
                        )}>
                          0{idx + 1} /
                        </span>
                        <span className="tracking-[0.16em] uppercase whitespace-nowrap">{mode.shortName}</span>
                      </span>
                      {/* Clean typographic underline */}
                      <span
                        className={cn(
                          "absolute -bottom-1 left-0 right-0 h-[1.5px] transition-all duration-300",
                          isActive ? "bg-[#C8FF3D] opacity-100" : "bg-white/20 opacity-0 group-hover:opacity-100"
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inner Interactive Visual Canvas - Transforms completely with active visual world */}
            <div
              className={cn(
                "relative min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] p-5 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 border rounded-xs",
                current.bgClass
              )}
            >
              {/* Dynamic Header tailored to active concept */}
              <div className={cn(
                "relative z-10 flex flex-wrap items-baseline justify-between gap-3 border-b pb-4",
                activeMode === 0 ? "border-[#121110]/15" : activeMode === 1 ? "border-white/10" : "border-[#0A0A0A]/15"
              )}>
                <div className="space-y-1">
                  <span
                    className="text-[11px] font-mono tracking-[0.2em] uppercase font-semibold"
                    style={{ color: current.accentColor }}
                  >
                    {current.clientType} {" // "} {current.title}
                  </span>
                  <p className={cn(
                    "text-xs font-mono",
                    activeMode === 0 ? "text-[#121110]/70" : activeMode === 1 ? "text-white/60" : "text-[#0A0A0A]/70"
                  )}>
                    {current.spec}
                  </p>
                </div>
                <div className={cn(
                  "text-[10px] font-mono tracking-widest uppercase",
                  activeMode === 0 ? "text-[#121110]/50" : activeMode === 1 ? "text-white/40" : "text-[#0A0A0A]/50"
                )}>
                  {activeMode === 0 ? "INTERACTIVE EDITORIAL" : activeMode === 1 ? "BUSINESS OPERATIONS APP" : "SPATIAL MONOGRAPH"}
                </div>
              </div>

              {/* ART-DIRECTED DIGITAL PRODUCT PREVIEW CANVAS */}
              <div className="relative z-10 my-4 sm:my-6">
                {/* 01 EDITORIAL: LUMEN ARCHIVE Digital Monograph Showcase */}
                {activeMode === 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center text-[#121110]">
                    {/* Left: What is it & Why it matters */}
                    <div className="md:col-span-5 space-y-5">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono text-[#8C6D48] tracking-[0.2em] uppercase font-bold">
                          EDITORIAL &amp; LUXURY MONOGRAPHS
                        </span>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic font-normal tracking-tight text-[#121110] leading-tight">
                          Lumen Archive
                        </h3>
                        <p className="text-xs sm:text-sm text-[#121110]/80 font-sans leading-relaxed">
                          A self-initiated editorial website concept demonstrating how typography, spacious layout, and fluid transitions create a luxurious brand presence for architecture, fashion, and cultural brands.
                        </p>
                      </div>

                      {/* Direction Switcher */}
                      <div className="space-y-2 pt-1 font-mono">
                        <div className="text-[10px] text-[#121110]/50 uppercase tracking-widest font-semibold">
                          VISUAL DIRECTION:
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {LUMEN_PLATES.map((plate, idx) => (
                            <button
                              key={plate.num}
                              type="button"
                              onClick={() => setLumenPlate(idx)}
                              className={cn(
                                "p-2 border text-[10px] transition-all duration-200 rounded-xs flex flex-col justify-between gap-1 text-left cursor-pointer",
                                lumenPlate === idx
                                  ? "border-[#121110] bg-white shadow-xs ring-1 ring-[#121110]/20 font-bold"
                                  : "border-[#121110]/15 bg-white/40 hover:bg-white text-[#121110]/70 hover:border-[#121110]/30"
                              )}
                              aria-label={`Select ${plate.name}`}
                            >
                              <span className={cn(
                                "text-[9px]",
                                lumenPlate === idx ? "text-[#8C6D48]" : "text-[#121110]/50"
                              )}>
                                {plate.label}
                              </span>
                              <span className="truncate text-[10px] text-[#121110]">
                                {plate.name}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-xs font-mono border-t border-[#121110]/10">
                        <span className="text-[#121110]/60">Design standard: Bespoke Typography</span>
                        <a href="#work" className="text-[#8C6D46] font-bold hover:underline">
                          VIEW IN PORTFOLIO ↓
                        </a>
                      </div>
                    </div>

                    {/* Right: Pure, Uncluttered Editorial Canvas */}
                    <div className="md:col-span-7 rounded-xs overflow-hidden border border-[#121110]/15 bg-[#121110] shadow-md transition-all duration-500 text-white">
                      {/* Top Plate Bar */}
                      <div className="flex justify-between items-center px-4 py-2.5 border-b border-white/10 text-[10px] font-mono tracking-wider text-white/60 bg-black/40">
                        <span className="text-[#C8FF3D] font-bold">{activeLumen.label}</span>
                        <span>{activeLumen.name.toUpperCase()}</span>
                      </div>

                      {/* Editorial Canvas Stage */}
                      <div
                        className="relative p-8 sm:p-10 min-h-[260px] sm:min-h-[290px] flex flex-col justify-between overflow-hidden transition-all duration-500"
                        style={{ background: activeLumen.gradient }}
                      >
                        {/* Drafting Grid */}
                        <div
                          className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem]"
                          aria-hidden="true"
                        />

                        {/* Monograph Watermark */}
                        <div className="absolute right-4 bottom-4 pointer-events-none select-none text-[64px] sm:text-[80px] font-serif font-light text-white/[0.04] leading-none">
                          LUMEN
                        </div>

                        <div className="relative z-10 space-y-2 max-w-sm">
                          <span className="text-[10px] font-mono tracking-widest uppercase text-white/40 block">
                            EDITORIAL MONOGRAPH
                          </span>
                          <h4 className="text-3xl sm:text-4xl font-serif italic text-white tracking-tight leading-tight">
                            {activeLumen.name}
                          </h4>
                          <p className="text-xs text-white/70 font-sans leading-relaxed pt-1">
                            {activeLumen.caption}
                          </p>
                        </div>

                        {/* Minimalist Bottom Canvas Indicator */}
                        <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-white/50 pt-4 border-t border-white/10">
                          <span>CONCEPT ARCHIVE</span>
                          <span className="text-[#C8FF3D]">FRAMEHOUSE STUDIO</span>
                        </div>
                      </div>

                      {/* Viewport Bottom Bar */}
                      <div className="flex justify-between items-center px-4 py-2 border-t border-white/10 bg-[#0C0D10] text-[10px] font-mono text-white/60">
                        <span>WHAT WE DEMONSTRATED: BESPOKE EDITORIAL LAYOUT</span>
                        <a href="#work" className="text-[#C8FF3D] font-bold hover:underline">
                          SEE CASE STUDY →
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* 02 SOFTWARE: MERIDIAN High-Performance B2B Web Application */}
                {activeMode === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#0D1016] border border-white/10 p-5 sm:p-6 rounded-xs text-white relative overflow-hidden">
                    <div className="md:col-span-6 space-y-4">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-[#C8FF3D] tracking-widest uppercase font-bold">
                        <span>MERIDIAN // OPERATIONS &amp; WORKFLOW ENGINE</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
                        Operational Workstream Platform
                      </h3>

                      <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                        A high-density operational web application engineered for complex teams. Linear-grade keyboard navigation with instant state filtering and reactive state.
                      </p>

                      {/* Timeframe Selector */}
                      <div className="space-y-2 pt-1 font-mono">
                        <div className="flex justify-between text-[11px] text-white/60 uppercase">
                          <span>ACTIVITY METRIC:</span>
                          <span className="text-[#C8FF3D] font-bold">{activeMeridian.change}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {MERIDIAN_RANGES.map((r, idx) => (
                            <button
                              key={r.tf}
                              onClick={() => setMeridianTf(idx)}
                              className={cn(
                                "py-2 px-2 text-center border font-mono text-[10px] transition-all rounded-xs",
                                meridianTf === idx
                                  ? "border-[#C8FF3D] bg-[#C8FF3D]/10 text-white font-bold"
                                  : "border-white/10 text-white/50 hover:border-white/20"
                              )}
                            >
                              <div className="text-[#C8FF3D] font-bold">{r.tf}</div>
                              <div className="truncate text-[9px]">{r.vol}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-xs font-mono border-t border-white/10 text-white/60">
                        <span>SCOPE: <strong className="text-white">{activeMeridian.flow}</strong></span>
                        <a href="#work" className="text-[#C8FF3D] font-bold hover:underline">
                          TEST LIVE COMMAND PALETTE →
                        </a>
                      </div>
                    </div>

                    <div className="md:col-span-6 bg-[#080A0D] border border-white/10 p-5 rounded-xs space-y-3 relative z-10">
                      <div className="flex justify-between text-[9px] font-mono text-white/50 border-b border-white/10 pb-2">
                        <span className="text-[#C8FF3D] font-bold">ACTIVITY TRAJECTORY</span>
                        <span>LIVE DASHBOARD PREVIEW</span>
                      </div>

                      {/* Mini Live Curve */}
                      <div className="h-28 flex items-end">
                        <svg viewBox="0 0 300 80" className="w-full h-full text-[#C8FF3D]">
                          <polyline
                            fill="none"
                            stroke="#C8FF3D"
                            strokeWidth="2.5"
                            points="0,65 40,55 80,60 120,40 160,45 200,25 240,30 280,10 300,8"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      <div className="p-2.5 bg-white/5 border border-white/10 rounded-xs flex justify-between items-center text-xs font-mono">
                        <span className="text-white/80 font-bold truncate">WF-1042 // INVENTORY SYNC</span>
                        <span className="px-2 py-0.5 bg-[#C8FF3D]/10 text-[#C8FF3D] text-[10px] font-bold rounded-xs">
                          COMPLETED
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 03 MONOGRAPH: VERTEX Architectural Studio Platform */}
                {activeMode === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#E0E4E8] border border-[#0A0A0A]/20 p-5 sm:p-6 rounded-xs text-[#0A0A0A]">
                    <div className="md:col-span-6 space-y-4">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-[#1E3A5F] tracking-widest uppercase font-bold">
                        <span>VERTEX STUDIO // SPATIAL ARCHITECTURE</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A] font-sans">
                        Monograph &amp; Spatial Archive
                      </h3>

                      <p className="text-xs sm:text-sm text-[#0A0A0A]/75 font-sans leading-relaxed">
                        A digital monograph concept exploring how progressive architecture practices present spatial scale, materiality, and project archives online.
                      </p>

                      <div className="space-y-2 pt-1 font-mono">
                        <div className="text-[11px] text-[#0A0A0A]/60 uppercase">
                          CONCEPT STUDY:
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {VERTEX_PROJECT_PREVIEWS.map((item, idx) => (
                            <button
                              key={item.num}
                              onClick={() => setVertexProj(idx)}
                              className={cn(
                                "py-2 px-2 text-left border text-[10px] transition-all rounded-xs",
                                vertexProj === idx
                                  ? "border-[#0A0A0A] bg-[#0A0A0A] text-white font-bold"
                                  : "border-[#0A0A0A]/20 bg-white text-[#0A0A0A]/70 hover:bg-[#D5D9DE]"
                              )}
                            >
                              <div className="text-[#1E3A5F] font-bold">{item.num} {" // "} {item.typ}</div>
                              <div className="truncate text-[9px]">{item.loc}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-xs font-mono border-t border-[#0A0A0A]/15 text-[#0A0A0A]/60">
                        <span>SCALE: <strong className="text-[#0A0A0A]">{activeVertex.scale}</strong></span>
                        <a href="#work" className="text-[#1E3A5F] font-bold hover:underline">
                          INSPECT MONOGRAPH ARCHIVE →
                        </a>
                      </div>
                    </div>

                    <div className="md:col-span-6 bg-[#CBD1D8] border border-[#0A0A0A]/20 p-5 rounded-xs space-y-3 font-mono">
                      <div className="flex justify-between text-[9px] text-[#0A0A0A]/60 uppercase border-b border-[#0A0A0A]/15 pb-2">
                        <span className="text-[#1E3A5F] font-bold">PLATE {activeVertex.num} {" // "} {activeVertex.name}</span>
                        <span>{activeVertex.loc.toUpperCase()}</span>
                      </div>

                      <div className="py-6 text-center space-y-2">
                        <div className="text-xl sm:text-2xl font-bold font-sans text-[#0A0A0A]">
                          {activeVertex.name}
                        </div>
                        <p className="text-xs text-[#0A0A0A]/70 font-sans">
                          Rammed Earth • Raw Cast Bronze • Honed White Terrazzo
                        </p>
                      </div>

                      <div className="flex justify-between items-center text-[10px] text-[#0A0A0A]/60 pt-2 border-t border-[#0A0A0A]/15">
                        <span>STATUS: CONCEPT</span>
                        <span className="text-[#1E3A5F] font-bold">CONCEPT STUDY</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Frame Bar */}
              <div className={cn(
                "relative z-10 flex flex-wrap items-center justify-between gap-3 pt-3 border-t text-xs font-mono",
                activeMode === 0 ? "border-[#121110]/15 text-[#121110]/60" : activeMode === 1 ? "border-white/10 text-white/50" : "border-[#0A0A0A]/15 text-[#0A0A0A]/60"
              )}>
                <div className="flex items-center gap-3">
                  <span className="font-bold">
                    {activeMode === 0 ? "DISCIPLINE: FLAGSHIP EDITORIAL COMMERCE" : activeMode === 1 ? "DISCIPLINE: CUSTOM B2B WEB APPLICATION" : "DISCIPLINE: ARCHITECTURAL SPATIAL MONOGRAPH"}
                  </span>
                </div>
                <a
                  href="#work"
                  className={cn(
                    "flex items-center gap-1.5 transition-colors font-semibold",
                    activeMode === 0 ? "text-[#121110] hover:text-[#8C6D48]" : activeMode === 1 ? "text-[#C8FF3D] hover:text-white" : "text-[#1E3A5F] hover:text-[#0A0A0A]"
                  )}
                >
                  <span>
                    {activeMode === 0 ? "EXPLORE LUMEN ARCHIVE BELOW" : activeMode === 1 ? "EXPLORE MERIDIAN WEB APP BELOW" : "EXPLORE VERTEX STUDIO BELOW"}
                  </span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </FrameContainer>
        </div>
      </div>
    </section>
  );
}
