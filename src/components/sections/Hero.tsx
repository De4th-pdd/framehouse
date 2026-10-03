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
    id: "commerce",
    label: "01 NOOR",
    shortName: "NOOR",
    title: "ATELIER NOOR — Luxury Editorial Flagship",
    clientType: "FLAGSHIP E-COMMERCE",
    spec: "Lookbook Storytelling & Dynamic Bag Drawer",
    bgClass: "bg-[#FAF8F5] text-[#121110] border-[#121110]/15",
    accentColor: "#8C6D48",
  },
  {
    id: "software",
    label: "02 MERIDIAN",
    shortName: "MERIDIAN",
    title: "MERIDIAN — Global Treasury & Asset Engine",
    clientType: "CUSTOM B2B WEB APPLICATION",
    spec: "Command Palette (⌘K) & Sub-50ms Settlement Ledger",
    bgClass: "bg-[#090B0E] text-white border-white/15",
    accentColor: "#C8FF3D",
  },
  {
    id: "spatial",
    label: "03 VERTEX",
    shortName: "VERTEX",
    title: "VERTEX STUDIO — Spatial Architectural Monograph",
    clientType: "ARCHITECTURAL MONOGRAPH",
    spec: "Multi-Axis Project Archive & Materiality Curation",
    bgClass: "bg-[#E8EBEE] text-[#0A0A0A] border-[#0A0A0A]/20",
    accentColor: "#1E3A5F",
  },
];

const NOOR_MATERIALS = [
  {
    name: "Charred Ash & Alabaster",
    label: "CHARRED ASH",
    finish: "Quarter-Sawn Flamed Ash",
    price: "$3,650",
    swatchGradient: "radial-gradient(circle at 35% 30%, #383430 0%, #1E1C1A 50%, #0D0C0B 100%)",
    bodyGradient: "linear-gradient(175deg, #2B2724 0%, #1A1816 45%, #100F0E 100%)",
    slabTone: "linear-gradient(90deg, #F5F1E9 0%, #E8E2D5 50%, #FAF7F0 100%)",
    stone: "Honed Alabaster",
  },
  {
    name: "Honed Ivory & Maple",
    label: "IVORY STONE",
    finish: "Bleached Mountain Maple",
    price: "$4,200",
    swatchGradient: "radial-gradient(circle at 35% 30%, #FFFDF9 0%, #EFEAE1 50%, #D8D1C3 100%)",
    bodyGradient: "linear-gradient(175deg, #DDD6C8 0%, #C8BFB0 45%, #B5AB9B 100%)",
    slabTone: "linear-gradient(90deg, #FFFFFF 0%, #F5F0E6 50%, #EDE6D8 100%)",
    stone: "Greek Alabaster",
  },
  {
    name: "Aged Teak & Bronze",
    label: "AGED TEAK",
    finish: "Reclaimed River Teak",
    price: "$3,950",
    swatchGradient: "radial-gradient(circle at 35% 30%, #8A643E 0%, #5E4226 55%, #382615 100%)",
    bodyGradient: "linear-gradient(175deg, #5C4127 0%, #46301A 45%, #2F1E0F 100%)",
    slabTone: "linear-gradient(90deg, #E6DDD0 0%, #D1C5B4 50%, #DFD5C5 100%)",
    stone: "Smoked Travertine",
  },
];

const MERIDIAN_RANGES = [
  { tf: "24H", vol: "$482.9K", flow: "+$128.4K", change: "+14.2%" },
  { tf: "7D", vol: "$2.84M", flow: "+$892.1K", change: "+28.6%" },
  { tf: "30D", vol: "$12.4M", flow: "+$3.62M", change: "+41.3%" },
];

const VERTEX_PROJECT_PREVIEWS = [
  { num: "01", name: "Margalla Pavilion", typ: "Cultural", loc: "Islamabad", scale: "2,400 M²" },
  { num: "02", name: "Terrace Penthouse", typ: "Residential", loc: "Zurich", scale: "680 M²" },
  { num: "03", name: "DIFC Monolith", typ: "Commercial", loc: "Dubai", scale: "8,900 M²" },
];

export function Hero() {
  const [activeMode, setActiveMode] = useState(0);
  const [noorMat, setNoorMat] = useState(0);
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
  const activeNoorMaterial = NOOR_MATERIALS[noorMat];
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
              Websites, software &amp; digital experiences for businesses ready to look different.
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
                  {activeMode === 0 ? "FLAGSHIP E-COMMERCE" : activeMode === 1 ? "TREASURY & SETTLEMENT" : "SPATIAL MONOGRAPH"}
                </div>
              </div>

              {/* ART-DIRECTED DIGITAL PRODUCT PREVIEW CANVAS */}
              <div className="relative z-10 my-4 sm:my-6">
                {/* 01 COMMERCE: NOOR Luxury Furniture Editorial Showcase (Warm Paper & Craft) */}
                {activeMode === 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center text-[#121110]">
                    {/* Left: Product Monograph & Macro Swatches */}
                    <div className="md:col-span-5 space-y-5">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-[#8C6D48] tracking-[0.22em] uppercase font-semibold">
                        <span>NOOR MONOGRAPH // COLLECTION 04</span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal tracking-tight text-[#121110] leading-[1.08]">
                          The Mizan Low Credenza
                        </h3>
                        <p className="text-xs sm:text-sm text-[#121110]/75 font-sans leading-relaxed pt-1">
                          Hand-planed solid timber sideboard with precision mortise joinery, unlacquered cast bronze
                          hardware, and a continuous honed stone slab surface.
                        </p>
                      </div>

                      {/* Material Swatch Interaction (Circular Macro Textures) */}
                      <div className="space-y-2.5 pt-1">
                        <div className="flex justify-between text-[11px] font-mono text-[#121110]/70">
                          <span className="uppercase tracking-widest text-[10px]">MATERIAL FINISH:</span>
                          <span className="text-[#8C6D48] font-bold">{activeNoorMaterial.name}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {NOOR_MATERIALS.map((mat, idx) => (
                            <button
                              key={mat.label}
                              type="button"
                              onClick={() => setNoorMat(idx)}
                              className={cn(
                                "p-2 border text-[10px] font-mono tracking-wider transition-all duration-200 rounded-xs flex flex-col justify-between gap-2 cursor-pointer text-left",
                                noorMat === idx
                                  ? "border-[#121110] bg-white shadow-xs ring-1 ring-[#121110]/20"
                                  : "border-[#121110]/15 bg-white/40 hover:bg-white text-[#121110]/70 hover:border-[#121110]/30"
                              )}
                              aria-label={`Select ${mat.name}`}
                            >
                              <div className="flex items-center justify-between">
                                <div
                                  className="w-5 h-5 rounded-full border border-black/20 shadow-xs relative overflow-hidden"
                                  style={{ background: mat.swatchGradient }}
                                />
                                {noorMat === idx && <Check className="w-3 h-3 text-[#121110]" />}
                              </div>
                              <span className="font-bold truncate text-[10px] text-[#121110]">
                                {mat.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-xs font-mono border-t border-[#121110]/10">
                        <span className="text-[#121110]/60">VALUATION: <strong className="text-[#121110]">{activeNoorMaterial.price}</strong></span>
                        <a href="#work" className="text-[#8C6D46] font-bold hover:underline">
                          INQUIRE FOR COMMISSION →
                        </a>
                      </div>
                    </div>

                    {/* Right: Dedicated Editorial Product Viewport (Photographic & Layered CSS) */}
                    <div className="md:col-span-7 rounded-xs overflow-hidden border border-[#121110]/15 bg-[#EBE7DF] shadow-md transition-all duration-500">
                      {/* Top Plate Bar */}
                      <div className="flex justify-between items-center px-4 py-2.5 border-b border-[#121110]/10 text-[9px] font-mono tracking-widest uppercase text-[#121110]/60 bg-[#FAF8F5]/80">
                        <span>PLATE 042 // CAMERA STUDY</span>
                        <span className="text-[#8C6D46] font-bold">{activeNoorMaterial.name.toUpperCase()}</span>
                        <span>SCALE 1:1</span>
                      </div>

                      {/* Editorial Stage with Natural Sunlight Wash */}
                      <div className="relative p-6 sm:p-8 min-h-[260px] sm:min-h-[290px] flex flex-col justify-center items-center overflow-hidden">
                        <div
                          className="absolute inset-0 pointer-events-none opacity-60"
                          style={{
                            background:
                              "radial-gradient(circle at 18% 15%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 65%), linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)",
                          }}
                        />

                        {/* Monograph Watermark in background */}
                        <div className="absolute right-4 bottom-4 pointer-events-none select-none text-[64px] sm:text-[80px] font-serif font-light text-[#121110]/[0.04] leading-none">
                          NOOR
                        </div>

                        {/* Layered Editorial Credenza Visual */}
                        <div className="relative w-full max-w-md transition-all duration-500 my-2">
                          {/* Diffuse Soft Ambient Floor Shadow */}
                          <div
                            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-8 rounded-full pointer-events-none blur-md"
                            style={{
                              background:
                                "radial-gradient(ellipse at center, rgba(18,17,16,0.35) 0%, rgba(18,17,16,0) 75%)",
                            }}
                          />
                          <div
                            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[80%] h-3 rounded-full pointer-events-none blur-xs"
                            style={{
                              background:
                                "radial-gradient(ellipse at center, rgba(18,17,16,0.5) 0%, rgba(18,17,16,0) 70%)",
                            }}
                          />

                          {/* Top Honed Stone Slab */}
                          <div className="relative z-20 mx-auto w-[98%] shadow-sm">
                            <div className="h-0.5 w-full bg-white/70 rounded-t-xs" />
                            <div
                              className="h-3.5 sm:h-4 w-full border-x border-b border-[#121110]/20 rounded-xs flex items-center justify-between px-3 transition-all duration-500"
                              style={{
                                background: activeNoorMaterial.slabTone,
                                boxShadow:
                                  "inset 0 1px 2px rgba(255,255,255,0.6), 0 2px 4px rgba(0,0,0,0.1)",
                              }}
                            >
                              <span className="text-[7px] font-mono tracking-widest text-black/40 uppercase">
                                HONED {activeNoorMaterial.stone.toUpperCase()}
                              </span>
                              <span className="text-[7px] font-mono tracking-widest text-black/30">
                                32MM
                              </span>
                            </div>
                            <div className="h-1 w-full bg-gradient-to-b from-black/40 to-transparent" />
                          </div>

                          {/* Main Credenza Timber Body */}
                          <div
                            className="relative z-10 w-[94%] mx-auto h-28 sm:h-34 border border-[#121110]/30 rounded-xs overflow-hidden shadow-lg transition-all duration-500"
                            style={{
                              background: activeNoorMaterial.bodyGradient,
                            }}
                          >
                            {/* Wood Grain Overlay Lines */}
                            <div
                              className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
                              style={{
                                backgroundImage:
                                  "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 6px), repeating-linear-gradient(0deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 4px)",
                              }}
                            />

                            {/* 4 Cabinet Door Panels with Recessed Seams & Bronze Stud Pulls */}
                            <div className="absolute inset-0 grid grid-cols-4 divide-x divide-black/70">
                              {[0, 1, 2, 3].map((bay) => (
                                <div
                                  key={bay}
                                  className="relative h-full flex flex-col justify-center items-center"
                                >
                                  <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-white/10" />
                                  <div
                                    className={cn(
                                      "relative w-3 h-3 rounded-full border border-black/40 shadow-xs",
                                      bay === 0 || bay === 1 ? "self-end mr-2.5" : "self-start ml-2.5"
                                    )}
                                    style={{
                                      background:
                                        "radial-gradient(circle at 35% 30%, #F5DEB3 0%, #C49E65 40%, #7D5D3B 80%, #3D2D1B 100%)",
                                      boxShadow:
                                        "0 2px 4px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.6)",
                                    }}
                                  >
                                    <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 rounded-full bg-white/60 blur-[0.2px]" />
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                          </div>

                          {/* Slender Bronze Base & Legs */}
                          <div className="relative z-0 w-[84%] mx-auto h-7 sm:h-9">
                            <div
                              className="absolute top-1.5 left-4 right-4 h-0.5 rounded-full border border-black/30"
                              style={{
                                background:
                                  "linear-gradient(180deg, #9C7A4A 0%, #523F23 100%)",
                              }}
                            />
                            <div
                              className="absolute top-0 left-6 w-1.5 h-full rounded-b-xs shadow-sm"
                              style={{
                                background:
                                  "linear-gradient(90deg, #7A5C33 0%, #3A2B18 100%)",
                              }}
                            />
                            <div
                              className="absolute top-0 right-6 w-1.5 h-full rounded-b-xs shadow-sm"
                              style={{
                                background:
                                  "linear-gradient(90deg, #7A5C33 0%, #3A2B18 100%)",
                              }}
                            />
                          </div>
                        </div>

                        {/* Viewport Caption */}
                        <div className="relative z-10 text-center pt-2">
                          <p className="text-[11px] font-mono text-[#121110]/70">
                            {activeNoorMaterial.finish} • Honed {activeNoorMaterial.stone}
                          </p>
                        </div>
                      </div>

                      {/* Viewport Bottom Bar */}
                      <div className="flex justify-between items-center px-4 py-2 border-t border-[#121110]/10 bg-[#FAF8F5]/80 text-[10px] font-mono text-[#121110]/60">
                        <span>EDITION OF 12 // COMMISSION ONLY</span>
                        <span className="text-[#8C6D48] font-bold">CHINIOT &amp; LAHORE ATELIER</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 02 SOFTWARE: MERIDIAN High-Performance B2B Web Application */}
                {activeMode === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#0D1016] border border-white/10 p-5 sm:p-6 rounded-xs text-white relative overflow-hidden">
                    <div className="md:col-span-6 space-y-4">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-[#C8FF3D] tracking-widest uppercase font-bold">
                        <span>MERIDIAN // TREASURY &amp; ASSET ENGINE</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
                        Sub-50ms Settlement Platform
                      </h3>

                      <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                        A high-density operational web application engineered for cross-border treasury desks. Linear-grade keyboard navigation with instant data filtering.
                      </p>

                      {/* Timeframe Selector */}
                      <div className="space-y-2 pt-1 font-mono">
                        <div className="flex justify-between text-[11px] text-white/60 uppercase">
                          <span>AGGREGATE LIQUIDITY:</span>
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
                        <span>NET INFLOW: <strong className="text-white">{activeMeridian.flow}</strong></span>
                        <a href="#work" className="text-[#C8FF3D] font-bold hover:underline">
                          TEST LIVE COMMAND PALETTE →
                        </a>
                      </div>
                    </div>

                    <div className="md:col-span-6 bg-[#080A0D] border border-white/10 p-5 rounded-xs space-y-3 relative z-10">
                      <div className="flex justify-between text-[9px] font-mono text-white/50 border-b border-white/10 pb-2">
                        <span className="text-[#C8FF3D] font-bold">REAL-TIME TRAJECTORY</span>
                        <span>LATENCY: 42MS SLA</span>
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
                        <span className="text-white/80 font-bold truncate">TX-9042 // ATELIER NOOR</span>
                        <span className="px-2 py-0.5 bg-[#C8FF3D]/10 text-[#C8FF3D] text-[10px] font-bold rounded-xs">
                          SETTLED
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
                        A digital monograph engineered for progressive architecture practices and spatial developers to command eight-figure private commissions.
                      </p>

                      <div className="space-y-2 pt-1 font-mono">
                        <div className="text-[11px] text-[#0A0A0A]/60 uppercase">
                          FEATURED COMMISSION:
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
                        <span>DELIVERY: 2026</span>
                        <span className="text-[#1E3A5F] font-bold">COMMISSIONED WORK</span>
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
                    {activeMode === 0 ? "EXPLORE ATELIER NOOR BELOW" : activeMode === 1 ? "EXPLORE MERIDIAN TREASURY OS BELOW" : "EXPLORE VERTEX STUDIO BELOW"}
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
