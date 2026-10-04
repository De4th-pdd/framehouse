"use client";

import { useState } from "react";
import { Badge } from "@/components/common/Badge";
import { FrameContainer } from "@/components/common/FrameContainer";
import { LUMEN_STUDIES, LumenStudy } from "@/data/concepts/lumen";
import { ArrowUpRight, BookOpen, Layers, Eye, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function LumenShowcase() {
  const [activeStudyIndex, setActiveStudyIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"monograph" | "index">("monograph");
  const [dossierOpen, setDossierOpen] = useState(false);

  const activeStudy = LUMEN_STUDIES[activeStudyIndex];

  return (
    <div className="relative" data-section="concept-lumen">
      <FrameContainer
        theme="light"
        withCorners={true}
        className="p-6 sm:p-10 lg:p-14 bg-[#FAF8F5] border-[#121110]/15 relative overflow-hidden transition-all duration-300 shadow-md text-[#121110]"
      >
        {/* Subtle Textured Paper Grain Feel */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#12111008_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]"
          aria-hidden="true"
        />

        {/* Top Monograph Meta Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#121110]/10 pb-6 mb-8 sm:mb-10">
          <div className="flex items-center gap-3">
            <Badge variant="concept">CONCEPT / 01</Badge>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#121110]/70 font-semibold">
              LUMEN ARCHIVE // CONCEPT — INTERACTIVE EDITORIAL EXPERIENCE
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-[#121110]/70">
            <span>DIGITAL MONOGRAPH</span>
            <span className="text-[#121110]/20">•</span>
            <span className="text-[#8C6D46] font-bold">EDITORIAL FOLIO STUDY</span>
          </div>
        </div>

        {/* Brand Banner & Problem-Solution Statement */}
        <div className="relative z-10 space-y-6 sm:space-y-8 mb-8 sm:mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-mono tracking-[0.22em] text-[#8C6D46] uppercase font-semibold">
                DIGITAL EXHIBITION &amp; MONOGRAPH ARCHITECTURE
              </span>
              <h3 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#121110] leading-[1.02] font-sans">
                LUMEN ARCHIVE
              </h3>
              <p className="text-base sm:text-lg text-[#121110]/80 max-w-2xl font-normal leading-relaxed pt-1">
                A self-initiated digital monograph exploring how editorial storytelling, image composition and motion can shape a more immersive web experience.
              </p>
            </div>

            {/* View Mode Switcher + Dossier Trigger */}
            <div className="lg:col-span-4 flex flex-wrap items-center lg:justify-end gap-3">
              <div className="inline-flex p-1 bg-[#121110]/5 border border-[#121110]/10 rounded-xs">
                <button
                  type="button"
                  onClick={() => setViewMode("monograph")}
                  className={cn(
                    "px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-all rounded-xs cursor-pointer",
                    viewMode === "monograph"
                      ? "bg-[#121110] text-white font-bold shadow-xs"
                      : "text-[#121110]/60 hover:text-[#121110]"
                  )}
                >
                  Monograph
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("index")}
                  className={cn(
                    "px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-all rounded-xs cursor-pointer",
                    viewMode === "index"
                      ? "bg-[#121110] text-white font-bold shadow-xs"
                      : "text-[#121110]/60 hover:text-[#121110]"
                  )}
                >
                  Catalogue Index
                </button>
              </div>

              <button
                type="button"
                onClick={() => setDossierOpen(true)}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#121110] text-white text-xs font-mono tracking-wider uppercase hover:bg-[#282725] transition-colors rounded-xs shadow-xs cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#C8FF3D]" />
                <span>STUDY NOTES</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Monograph Interactive Stage */}
        {viewMode === "monograph" ? (
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Plate Navigation & Curated Narrative */}
            <div className="lg:col-span-5 space-y-6">
              {/* Plate Selection Pills */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono tracking-widest text-[#121110]/50 uppercase">
                  SELECT VISUAL STUDY:
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
                            : "bg-white/60 text-[#121110]/80 border-[#121110]/15 hover:bg-white hover:border-[#121110]/30"
                        )}
                      >
                        <div className="space-y-0.5">
                          <div className={cn(
                            "text-[10px] font-mono font-semibold tracking-wider",
                            isSelected ? "text-[#C8FF3D]" : "text-[#8C6D46]"
                          )}>
                            {study.number}
                          </div>
                          <div className="text-sm font-bold tracking-tight">
                            {study.title}
                          </div>
                        </div>
                        <ChevronRight className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isSelected ? "text-[#C8FF3D] translate-x-1" : "text-[#121110]/30 group-hover:translate-x-0.5"
                        )} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Study Description & Technical Spec */}
              <div className="p-5 bg-white/70 border border-[#121110]/10 rounded-xs space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#8C6D46] font-semibold">
                    CURATORIAL FOCUS
                  </span>
                  <h4 className="text-lg font-bold text-[#121110] tracking-tight">
                    {activeStudy.subtitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#121110]/75 leading-relaxed pt-1">
                    {activeStudy.description}
                  </p>
                </div>

                <div className="border-t border-[#121110]/10 pt-3 space-y-2 text-xs font-mono">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[#121110]/50">MEDIUM:</span>
                    <span className="font-semibold text-[#121110] text-right">{activeStudy.medium}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[#121110]/50">ASPECT:</span>
                    <span className="font-semibold text-[#121110] text-right">{activeStudy.aspect}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[#121110]/50">INDEX STATUS:</span>
                    <span className="font-semibold text-[#8C6D46]">{activeStudy.year}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Large Architectural Editorial Visual Viewport */}
            <div className="lg:col-span-7">
              <div className="border border-[#121110]/20 bg-[#121110] rounded-xs overflow-hidden shadow-xl text-white relative">
                {/* Visual Viewport Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-white/10 text-[10px] font-mono text-white/60">
                  <div className="flex items-center gap-2">
                    <Layers className="w-3 h-3 text-[#C8FF3D]" />
                    <span>{activeStudy.number} // EDITORIAL COMPOSITION</span>
                  </div>
                  <span className="text-[#C8FF3D] font-bold">100% SCALE STUDY</span>
                </div>

                {/* Main Editorial Canvas Composition */}
                <div
                  className="relative min-h-[360px] sm:min-h-[420px] p-6 sm:p-10 flex flex-col justify-between overflow-hidden transition-all duration-500"
                  style={{ background: activeStudy.visualComposition.gradient }}
                >
                  {/* Subtle Grid and Drafting Lines */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]"
                    aria-hidden="true"
                  />

                  {/* Asymmetric Typography Layer */}
                  <div className="relative z-10 max-w-sm space-y-2">
                    <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/50 block">
                      ARCHIVAL SPECIMEN
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-serif italic text-white tracking-tight leading-[1.05]">
                      {activeStudy.title}
                    </h2>
                  </div>

                  {/* Physical Architectural Monograph Form in Viewport */}
                  <div className="relative z-10 my-6 py-6 sm:py-8 flex items-center justify-center">
                    <div className="w-full max-w-md bg-white/5 border border-white/15 p-6 rounded-xs backdrop-blur-xs space-y-4 shadow-2xl">
                      <div className="flex justify-between items-center text-[10px] font-mono text-white/40 border-b border-white/10 pb-2">
                        <span>SERIES // 01</span>
                        <span className="text-[#C8FF3D]">FIGURE REF. {activeStudy.number}</span>
                      </div>
                      
                      <div className="h-28 sm:h-36 bg-black/50 border border-white/10 rounded-xs flex flex-col justify-between p-4 relative overflow-hidden">
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">
                            PLATE SURFACE
                          </span>
                          <span className="w-2 h-2 rounded-full bg-[#C8FF3D]/80" />
                        </div>
                        <div className="text-xs sm:text-sm font-mono text-white/80 font-medium">
                          {activeStudy.visualComposition.caption}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono pt-1 text-white/60">
                        <div className="p-1.5 bg-white/5 border border-white/10 rounded-xs">
                          <div className="text-white/30 text-[8px]">PROPORTION</div>
                          <div className="font-bold text-white">1.618</div>
                        </div>
                        <div className="p-1.5 bg-white/5 border border-white/10 rounded-xs">
                          <div className="text-white/30 text-[8px]">KERNING</div>
                          <div className="font-bold text-white">OPTICAL</div>
                        </div>
                        <div className="p-1.5 bg-white/5 border border-white/10 rounded-xs">
                          <div className="text-white/30 text-[8px]">CONTRAST</div>
                          <div className="font-bold text-[#C8FF3D]">HIGH</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Viewport Bottom Caption Bar */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-white/60 pt-4 border-t border-white/10">
                    <span className="text-[11px] text-white/80">{activeStudy.subtitle}</span>
                    <span className="text-[10px] tracking-widest text-[#C8FF3D] uppercase">
                      FRAMEHOUSE EDITORIAL LAB
                    </span>
                  </div>
                </div>

                {/* Bottom Strip */}
                <div className="px-5 py-3 bg-[#0C0D10] border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                  <span>DEMONSTRATES: EDITORIAL COMPOSITION &amp; INTERACTIVE TYPOGRAPHY</span>
                  <button
                    type="button"
                    onClick={() => setDossierOpen(true)}
                    className="text-[#C8FF3D] hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>READ ANNOTATIONS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* View Mode 2: Catalogue Index Table */
          <div className="relative z-10 bg-white/80 border border-[#121110]/15 rounded-xs p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#121110]/10 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#121110]">
                  CATALOGUE INDEX // ALL MONOGRAPH STUDIES
                </span>
                <p className="text-xs text-[#121110]/70 font-mono">
                  Curated collection of layout experiments, typesetting studies, and negative space ratios.
                </p>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 bg-[#121110]/5 text-[#121110] rounded-xs font-bold">
                {LUMEN_STUDIES.length} PLATES
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-[#121110]/10 text-[10px] text-[#121110]/50 uppercase tracking-wider">
                    <th className="py-2.5 px-3">PLATE</th>
                    <th className="py-2.5 px-3">STUDY TITLE</th>
                    <th className="py-2.5 px-3">MEDIUM</th>
                    <th className="py-2.5 px-3">ASPECT</th>
                    <th className="py-2.5 px-3 text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#121110]/5">
                  {LUMEN_STUDIES.map((study, idx) => (
                    <tr
                      key={study.id}
                      className="hover:bg-black/[0.02] transition-colors"
                    >
                      <td className="py-3 px-3 font-bold text-[#8C6D46]">{study.number}</td>
                      <td className="py-3 px-3 font-bold text-[#121110]">{study.title}</td>
                      <td className="py-3 px-3 text-[#121110]/70">{study.medium}</td>
                      <td className="py-3 px-3 text-[#121110]/70">{study.aspect}</td>
                      <td className="py-3 px-3 text-right">
                        <button
                          type="button"
                          onClick={() => {
                            setActiveStudyIndex(idx);
                            setViewMode("monograph");
                          }}
                          className="px-2.5 py-1 bg-[#121110] text-white hover:bg-[#282725] rounded-xs text-[10px] uppercase font-bold tracking-wider cursor-pointer"
                        >
                          OPEN MONOGRAPH
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Study Notes Modal / Dossier */}
        {dossierOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Lumen Archive Study Notes"
          >
            <div className="bg-[#FAF8F5] border border-[#121110]/20 rounded-xs max-w-xl w-full p-6 sm:p-8 space-y-6 text-[#121110] shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-[#121110]/15 pb-4">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#8C6D46] font-semibold">
                    {activeStudy.number} // EDITORIAL DOSSIER
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[#121110]">
                    {activeStudy.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setDossierOpen(false)}
                  className="p-1.5 text-xs font-mono hover:bg-black/5 rounded-xs transition-colors cursor-pointer"
                  aria-label="Close dossier"
                >
                  CLOSE ✕
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#121110]/80 font-sans leading-relaxed">
                <p>{activeStudy.description}</p>

                <div className="p-4 bg-white/70 border border-[#121110]/10 rounded-xs space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#121110]/50">
                    DESIGN &amp; TYPOGRAPHY NOTES:
                  </div>
                  <ul className="space-y-1.5 font-mono text-xs text-[#121110]/85 list-disc pl-4">
                    {activeStudy.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 border-t border-[#121110]/10 flex justify-between items-center text-xs font-mono text-[#121110]/60">
                <span>SELF-INITIATED EDITORIAL PROTOTYPE</span>
                <button
                  type="button"
                  onClick={() => setDossierOpen(false)}
                  className="px-4 py-2 bg-[#121110] text-white hover:bg-[#282725] rounded-xs font-bold uppercase tracking-wider text-xs cursor-pointer"
                >
                  DISMISS
                </button>
              </div>
            </div>
          </div>
        )}
      </FrameContainer>
    </div>
  );
}
