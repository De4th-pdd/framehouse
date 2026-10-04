"use client";

import { useState } from "react";
import { Badge } from "@/components/common/Badge";
import { FrameContainer } from "@/components/common/FrameContainer";
import { LUMEN_STUDIES } from "@/data/concepts/lumen";
import { BookOpen, ChevronRight, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function LumenShowcase() {
  const [activeStudyIndex, setActiveStudyIndex] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);

  const activeStudy = LUMEN_STUDIES[activeStudyIndex];

  return (
    <div className="relative" data-section="concept-lumen">
      <FrameContainer
        theme="light"
        withCorners={true}
        className="p-6 sm:p-10 lg:p-14 bg-[#FAF8F5] border-[#121110]/15 relative overflow-hidden transition-all duration-300 shadow-md text-[#121110]"
      >
        {/* Subtle Textured Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#12111008_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]"
          aria-hidden="true"
        />

        {/* Top Concept Meta Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#121110]/10 pb-6 mb-8 sm:mb-10">
          <div className="flex items-center gap-3">
            <Badge variant="concept">CONCEPT / 01</Badge>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#121110]/70 font-semibold">
              LUMEN ARCHIVE // SELF-INITIATED DIGITAL MONOGRAPH
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-[#121110]/70">
            <span>EDITORIAL PUBLISHING</span>
            <span className="text-[#121110]/20">•</span>
            <span className="text-[#8C6D46] font-bold">DIGITAL MONOGRAPH</span>
          </div>
        </div>

        {/* Title & Concept Intent */}
        <div className="relative z-10 space-y-4 mb-8 sm:mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-mono tracking-[0.22em] text-[#8C6D46] uppercase font-semibold">
                EDITORIAL DESIGN &amp; PUBLICATION ARCHITECTURE
              </span>
              <h3 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#121110] leading-[1.02] font-sans">
                LUMEN ARCHIVE
              </h3>
              <p className="text-base sm:text-lg text-[#121110]/80 max-w-2xl font-normal leading-relaxed pt-1">
                A self-initiated digital monograph demonstrating how editorial typography, asymmetric layout, and considered motion can create an immersive web presence for cultural, fashion, and luxury brands.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                type="button"
                onClick={() => setNotesOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#121110] text-white text-xs font-mono tracking-wider uppercase hover:bg-[#282725] transition-colors rounded-xs shadow-xs cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#C8FF3D]" />
                <span>CONCEPT NOTES</span>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Monograph Stage */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Plate Tabs & Curatorial Summary */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <div className="text-[10px] font-mono tracking-widest text-[#121110]/50 uppercase">
                STUDY SELECTION:
              </div>
              <div className="flex flex-col gap-2">
                {LUMEN_STUDIES.map((study, idx) => {
                  const isSelected = activeStudyIndex === idx;
                  return (
                    <button
                      key={study.id}
                      type="button"
                      onClick={() => setActiveStudyIndex(idx)}
                      className={cn(
                        "w-full text-left p-3.5 border transition-all duration-200 rounded-xs flex items-center justify-between group cursor-pointer",
                        isSelected
                          ? "bg-[#121110] text-white border-[#121110] shadow-sm"
                          : "bg-white/70 text-[#121110]/80 border-[#121110]/15 hover:bg-white hover:border-[#121110]/30"
                      )}
                    >
                      <div className="space-y-0.5">
                        <div
                          className={cn(
                            "text-[10px] font-mono font-semibold tracking-wider",
                            isSelected ? "text-[#C8FF3D]" : "text-[#8C6D46]"
                          )}
                        >
                          {study.number}
                        </div>
                        <div className="text-sm font-bold tracking-tight">
                          {study.title}
                        </div>
                      </div>
                      <ChevronRight
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isSelected
                            ? "text-[#C8FF3D] translate-x-1"
                            : "text-[#121110]/30 group-hover:translate-x-0.5"
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Concise Description Card */}
            <div className="p-5 bg-white/80 border border-[#121110]/10 rounded-xs space-y-4 shadow-2xs">
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#8C6D46] font-semibold">
                  DEMONSTRATION FOCUS
                </span>
                <h4 className="text-base font-bold text-[#121110] tracking-tight">
                  {activeStudy.subtitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#121110]/75 leading-relaxed pt-1">
                  {activeStudy.description}
                </p>
              </div>

              <div className="border-t border-[#121110]/10 pt-3 space-y-2">
                <div className="text-[10px] font-mono text-[#121110]/50 uppercase tracking-wider">
                  DESIGN HIGHLIGHTS
                </div>
                <div className="space-y-1.5 text-xs font-mono text-[#121110]/80">
                  {activeStudy.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D46]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Spacious Editorial Monograph Canvas */}
          <div className="lg:col-span-7">
            <div className="border border-[#121110]/20 bg-[#121110] rounded-xs overflow-hidden shadow-xl text-white relative">
              {/* Top Viewport Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-white/10 text-[10px] font-mono text-white/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C8FF3D]" />
                  <span>{activeStudy.number} // EDITORIAL CANVAS</span>
                </div>
                <span className="text-[#C8FF3D] font-bold">{activeStudy.aspect}</span>
              </div>

              {/* Main Viewport Stage */}
              <div
                className="relative min-h-[340px] sm:min-h-[400px] p-8 sm:p-12 flex flex-col justify-between overflow-hidden transition-all duration-500"
                style={{ background: activeStudy.gradient }}
              >
                {/* Subtle Framing Guides */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem]"
                  aria-hidden="true"
                />

                {/* Big Editorial Typographic Heading */}
                <div className="relative z-10 space-y-3 max-w-md">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/50 block">
                    EDITORIAL MONOGRAPH
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-serif italic text-white tracking-tight leading-[1.08]">
                    {activeStudy.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed pt-1">
                    {activeStudy.subtitle}
                  </p>
                </div>

                {/* Clean Composition Frame (Simplified from 4 nested boxes) */}
                <div className="relative z-10 my-6 py-6 border-t border-b border-white/15 flex items-center justify-between text-xs font-mono text-white/70">
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-widest text-white/40 block">
                      TYPOGRAPHIC SPEC
                    </span>
                    <span className="text-white font-semibold">Editorial Serif &amp; Monospace Accents</span>
                  </div>
                  <div className="text-right space-y-1">
                    <span className="text-[9px] uppercase tracking-widest text-white/40 block">
                      LAYOUT ENGINE
                    </span>
                    <span className="text-[#C8FF3D] font-semibold">Asymmetric Fluid Grid</span>
                  </div>
                </div>

                {/* Bottom Canvas Metadata */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-white/60 pt-2">
                  <span className="text-[11px] text-white/80">Lumen Archive — Folio Edition</span>
                  <span className="text-[10px] tracking-widest text-[#C8FF3D] uppercase">
                    FRAMEHOUSE STUDIO
                  </span>
                </div>
              </div>

              {/* Viewport Bottom Strip */}
              <div className="px-5 py-3 bg-[#0C0D10] border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span>DEMONSTRATES: EDITORIAL COMPOSITION &amp; TYPOGRAPHY</span>
                <button
                  type="button"
                  onClick={() => setNotesOpen(true)}
                  className="text-[#C8FF3D] hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>CONCEPT NOTES</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </FrameContainer>

      {/* Concise Concept Notes Modal */}
      {notesOpen && (
        <div
          onClick={() => setNotesOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Lumen Archive Concept Notes"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-[#FAF8F5] text-[#121110] border border-[#121110]/20 rounded-xs shadow-2xl p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
          >
            <div className="flex items-center justify-between border-b border-[#121110]/15 pb-4">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-[#8C6D46] font-bold uppercase tracking-wider">
                  STUDIO CONCEPT STUDY // 01
                </span>
                <h4 className="text-xl font-bold font-sans text-[#121110]">
                  Lumen Archive — Monograph Concept
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setNotesOpen(false)}
                className="text-[#121110]/60 hover:text-[#121110] transition-colors cursor-pointer"
                aria-label="Close concept notes"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#121110]/80 leading-relaxed font-sans">
              <p>
                <strong>What this concept is:</strong> A self-initiated digital monograph created by Framehouse to demonstrate how editorial pacing, high-contrast serif typography, and asymmetrical layouts can translate the feel of physical monographs into high-speed digital web experiences.
              </p>
              <div className="p-4 bg-white border border-[#121110]/10 rounded-xs space-y-2 font-mono text-xs">
                <div className="text-[10px] text-[#121110]/50 uppercase tracking-widest font-bold">
                  BEST SUITED FOR
                </div>
                <div className="text-[#121110] font-medium space-y-1">
                  <div>• Architecture and interior design studios</div>
                  <div>• Fashion lookbooks and cultural publications</div>
                  <div>• High-end craft, furniture, and product monographs</div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#121110]/10 flex justify-end">
              <button
                type="button"
                onClick={() => setNotesOpen(false)}
                className="px-4 py-2 bg-[#121110] text-white text-xs font-mono uppercase tracking-wider rounded-xs hover:bg-[#282725] cursor-pointer"
              >
                CLOSE NOTES
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
