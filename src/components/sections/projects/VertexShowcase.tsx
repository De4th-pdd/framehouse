"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Building2,
  X,
  FileText,
} from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { FrameContainer } from "@/components/common/FrameContainer";
import { VERTEX_PROJECTS, ArchProject } from "@/data/concepts/vertex";
import { cn } from "@/lib/utils";

export function VertexShowcase() {
  const [activeTypology, setActiveTypology] = useState<"ALL" | "Cultural" | "Residential" | "Commercial">("ALL");
  const [viewMode, setViewMode] = useState<"gallery" | "index">("gallery");
  const [activeProject, setActiveProject] = useState<ArchProject>(VERTEX_PROJECTS[0]);
  const [dossierOpen, setDossierOpen] = useState(false);
  const [dossierNotice, setDossierNotice] = useState(false);

  // Synchronize typology selection with active project
  const handleTypologyChange = (typ: "ALL" | "Cultural" | "Residential" | "Commercial") => {
    setActiveTypology(typ);
    const filtered = VERTEX_PROJECTS.filter((proj) => typ === "ALL" || proj.typology === typ);
    if (filtered.length > 0 && !filtered.some((p) => p.id === activeProject.id)) {
      setActiveProject(filtered[0]);
    }
  };

  // Lock body scroll and handle Escape key when dossier is open
  useEffect(() => {
    if (!dossierOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDossierOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dossierOpen]);

  const filteredProjects = VERTEX_PROJECTS.filter((proj) => {
    return activeTypology === "ALL" || proj.typology === activeTypology;
  });

  return (
    <div className="relative">
      <FrameContainer
        theme="light"
        withCorners={true}
        className="p-6 sm:p-10 lg:p-14 bg-[#E8EBEE] border-[#0A0A0A]/20 relative overflow-hidden transition-all duration-300 shadow-md"
      >
        {/* Subtle Architectural Drafting Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25 bg-[linear-gradient(to_right,#0a0a0a18_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a18_1px,transparent_1px)] bg-[size:3rem_3rem]"
          aria-hidden="true"
        />

        {/* Top Monograph Meta Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#0A0A0A]/15 pb-6 mb-8 sm:mb-10">
          <div className="flex items-center gap-3">
            <Badge variant="concept">CONCEPT / 03</Badge>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#0A0A0A]/70">
              VERTEX STUDIO // CONCEPT — ARCHITECTURE PORTFOLIO
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-[#0A0A0A]/70">
            <span>SPATIAL PRACTICE MONOGRAPH</span>
            <span className="text-[#0A0A0A]/20">•</span>
            <span>PORTFOLIO CONCEPT DEMO</span>
          </div>
        </div>

        {/* Brand Banner & Problem-Solution Statement */}
        <div className="relative z-10 space-y-6 sm:space-y-8 mb-8 sm:mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-mono tracking-[0.22em] text-[#1E3A5F] uppercase font-semibold">
                CONTEMPORARY ARCHITECTURE PORTFOLIO CONCEPT
              </span>
              <h3 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.02] font-sans">
                VERTEX STUDIO
              </h3>
              <p className="text-base sm:text-lg text-[#0A0A0A]/80 max-w-2xl font-normal leading-relaxed pt-1">
                A self-initiated portfolio concept exploring how architecture practices can present projects, drawings, materials and spatial studies online.
              </p>
            </div>

            {/* View Mode Switcher + Typology Filter */}
            <div className="lg:col-span-4 flex flex-wrap items-center lg:justify-end gap-3">
              <div className="inline-flex p-1 bg-white/70 border border-[#0A0A0A]/15 rounded-xs">
                <button
                  onClick={() => setViewMode("gallery")}
                  className={cn(
                    "px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-all rounded-xs",
                    viewMode === "gallery"
                      ? "bg-[#0A0A0A] text-white font-bold shadow-xs"
                      : "text-[#0A0A0A]/70 hover:text-[#0A0A0A]"
                  )}
                >
                  Gallery View
                </button>
                <button
                  onClick={() => setViewMode("index")}
                  className={cn(
                    "px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-all rounded-xs",
                    viewMode === "index"
                      ? "bg-[#0A0A0A] text-white font-bold shadow-xs"
                      : "text-[#0A0A0A]/70 hover:text-[#0A0A0A]"
                  )}
                >
                  Archive Index
                </button>
              </div>

              {/* Dossier Button */}
              <button
                onClick={() => setDossierOpen(true)}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#0A0A0A] text-white text-xs font-mono tracking-wider uppercase hover:bg-[#2A2A2A] transition-colors rounded-xs shadow-xs cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>VIEW CONCEPT</span>
              </button>
            </div>
          </div>

          {/* Typology Multi-Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#0A0A0A]/10">
            <span className="text-[10px] font-mono text-[#0A0A0A]/50 uppercase tracking-widest mr-2">
              TYPOLOGY FILTER:
            </span>
            {(["ALL", "Cultural", "Residential", "Commercial"] as const).map((typ) => (
              <button
                key={typ}
                onClick={() => handleTypologyChange(typ)}
                className={cn(
                  "px-3 py-1 text-xs font-mono rounded-xs border transition-all cursor-pointer",
                  activeTypology === typ
                    ? "bg-[#0A0A0A] text-white border-[#0A0A0A] font-bold shadow-xs"
                    : "bg-white/60 text-[#0A0A0A]/70 border-[#0A0A0A]/15 hover:bg-white"
                )}
              >
                {typ}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Stage: Spatial Gallery vs Archive Index */}
        <div className="relative z-10 bg-white/80 border border-[#0A0A0A]/15 rounded-xs p-6 sm:p-8 lg:p-10 shadow-xs">
          {viewMode === "gallery" ? (
            /* MODE A: SPATIAL GALLERY VIEW */
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Project Selector Stepper */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#0A0A0A]/15 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#1E3A5F] font-bold">
                    SELECTED CONCEPT WORK:
                  </span>
                  <div className="flex gap-1.5">
                    {filteredProjects.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setActiveProject(p)}
                        className={cn(
                          "px-2.5 py-1 text-xs font-mono border rounded-xs transition-all",
                          activeProject.id === p.id
                            ? "bg-[#0A0A0A] text-white border-[#0A0A0A] font-bold"
                            : "bg-white text-[#0A0A0A]/70 border-[#0A0A0A]/15 hover:bg-[#EAECEF]"
                        )}
                      >
                        {p.number} // {p.name.split(" ")[0]}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-xs font-mono text-[#0A0A0A]/60">
                  {activeProject.location} • {activeProject.scale}
                </div>
              </div>

              {/* Spatial Layout Plate */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Spatial Composition Plate */}
                <div className="lg:col-span-7 bg-[#DFE2E6] border border-[#0A0A0A]/15 p-8 rounded-xs min-h-[380px] flex flex-col justify-between relative overflow-hidden group">
                  <div className="flex justify-between items-start text-[10px] font-mono uppercase tracking-widest text-[#0A0A0A]/60 z-10">
                    <span>PLATE {activeProject.number} — SPATIAL STUDY</span>
                    <span>STATUS: {activeProject.year.toUpperCase()}</span>
                  </div>

                  {/* Architectural Elevation & Spatial Vector Drawing */}
                  <div className="my-6 relative z-10">
                    <div className="w-full max-w-lg mx-auto bg-[#F4F6F8] border border-[#0A0A0A]/20 rounded-xs p-5 shadow-lg space-y-4">
                      <div className="flex justify-between items-center text-[9px] font-mono text-[#0A0A0A]/60 border-b border-[#0A0A0A]/10 pb-2">
                        <span>ELEVATION SECTION // 1:200 DATUM</span>
                        <span className="px-2 py-0.5 bg-[#0A0A0A] text-white font-bold rounded-xs">
                          {activeProject.typology}
                        </span>
                      </div>

                      {/* Precise Vector Architectural Linework */}
                      <div className="py-2">
                        <svg viewBox="0 0 460 160" className="w-full h-auto drop-shadow-xs" aria-label={`Architectural drawing of ${activeProject.name}`}>
                          {/* Ground Datum Line */}
                          <line x1="20" y1="140" x2="440" y2="140" stroke="#0A0A0A" strokeWidth="2" />
                          <line x1="20" y1="144" x2="440" y2="144" stroke="#0A0A0A" strokeWidth="0.75" strokeDasharray="4 4" />

                          {/* Grid Axes & Dimension Markers */}
                          <line x1="60" y1="15" x2="60" y2="140" stroke="#0A0A0A" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
                          <line x1="180" y1="15" x2="180" y2="140" stroke="#0A0A0A" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
                          <line x1="300" y1="15" x2="300" y2="140" stroke="#0A0A0A" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
                          <line x1="400" y1="15" x2="400" y2="140" stroke="#0A0A0A" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />

                          {/* Volumetric Massing based on active project */}
                          {activeProject.number === "01" && (
                            <g>
                              {/* Hillside terracing sanctuary */}
                              <polygon points="50,140 120,95 240,95 320,60 420,60 420,140" fill="#E2E6EA" stroke="#0A0A0A" strokeWidth="1.2" />
                              <rect x="130" y="55" width="140" height="40" fill="#CBD1D8" stroke="#0A0A0A" strokeWidth="1.5" />
                              <rect x="280" y="35" width="120" height="25" fill="#BCC3CC" stroke="#0A0A0A" strokeWidth="1.5" />
                              <rect x="150" y="65" width="30" height="25" fill="#FFFFFF" stroke="#1E3A5F" strokeWidth="1" />
                              <rect x="190" y="65" width="60" height="25" fill="#FFFFFF" stroke="#1E3A5F" strokeWidth="1" />
                              <rect x="300" y="42" width="75" height="15" fill="#FFFFFF" stroke="#1E3A5F" strokeWidth="1" />
                            </g>
                          )}
                          {activeProject.number === "02" && (
                            <g>
                              {/* Cantilevered lake residence */}
                              <rect x="90" y="90" width="14" height="50" fill="#0A0A0A" />
                              <rect x="350" y="90" width="14" height="50" fill="#0A0A0A" />
                              <rect x="60" y="45" width="340" height="45" fill="#E2E6EA" stroke="#0A0A0A" strokeWidth="1.5" />
                              <rect x="70" y="52" width="320" height="28" fill="#FFFFFF" stroke="#1E3A5F" strokeWidth="1" />
                              <line x1="150" y1="52" x2="150" y2="80" stroke="#1E3A5F" strokeWidth="0.75" />
                              <line x1="230" y1="52" x2="230" y2="80" stroke="#1E3A5F" strokeWidth="0.75" />
                              <line x1="310" y1="52" x2="310" y2="80" stroke="#1E3A5F" strokeWidth="0.75" />
                            </g>
                          )}
                          {activeProject.number === "03" && (
                            <g>
                              {/* Corporate monolith campus */}
                              <rect x="70" y="25" width="100" height="115" fill="#BCC3CC" stroke="#0A0A0A" strokeWidth="1.5" />
                              <rect x="190" y="15" width="140" height="125" fill="#CBD1D8" stroke="#0A0A0A" strokeWidth="1.5" />
                              <rect x="350" y="45" width="70" height="95" fill="#E2E6EA" stroke="#0A0A0A" strokeWidth="1.5" />
                              {[85, 105, 125, 145, 205, 225, 245, 265, 285, 305, 365, 385, 405].map((fx) => (
                                <line key={fx} x1={fx} y1="30" x2={fx} y2="135" stroke="#1E3A5F" strokeWidth="1" opacity="0.6" />
                              ))}
                            </g>
                          )}

                          {/* Architectural Level Dimensions */}
                          <text x="25" y="135" fontSize="8" fontFamily="monospace" fill="#0A0A0A" opacity="0.7">±0.00</text>
                          <text x="25" y="40" fontSize="8" fontFamily="monospace" fill="#1E3A5F" fontWeight="bold">+14.50m</text>
                        </svg>
                      </div>

                      <div className="flex justify-between items-end text-[9px] font-mono text-[#0A0A0A]/60 pt-2 border-t border-[#0A0A0A]/10">
                        <span>{activeProject.name} — {activeProject.location.toUpperCase()}</span>
                        <span>SCALE: {activeProject.scale}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs font-mono text-[#0A0A0A]/80 z-10 pt-4 border-t border-[#0A0A0A]/15">
                    <span>CONCEPT STUDY // ARCHITECTURAL PORTFOLIO</span>
                    <button
                      onClick={() => setDossierOpen(true)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1E3A5F] hover:underline cursor-pointer"
                    >
                      <span>VIEW CONCEPT DOSSIER</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Spatial Architectural Specs & Materials */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#1E3A5F] font-bold">
                      ARCHITECTURAL STATEMENT
                    </span>
                    <h5 className="text-2xl font-bold text-[#0A0A0A] font-sans tracking-tight">
                      {activeProject.name}
                    </h5>
                    <p className="text-sm text-[#0A0A0A]/80 leading-relaxed font-sans">
                      {activeProject.statement}
                    </p>
                  </div>

                  {/* Materiality Palette Swatches */}
                  <div className="space-y-3 pt-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#0A0A0A]/60 uppercase">MATERIAL PALETTE:</span>
                      <span className="font-bold text-[#0A0A0A]">
                        {activeProject.materials.length} PRIMARY SURFACES
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {activeProject.palette.map((mat) => (
                        <div
                          key={mat.name}
                          className="p-2.5 bg-white border border-[#0A0A0A]/15 rounded-xs space-y-1.5 shadow-2xs"
                        >
                          <div
                            className="w-full h-8 rounded-xs border border-black/10"
                            style={{ backgroundColor: mat.hex }}
                          />
                          <div className="text-[10px] font-mono font-bold text-[#0A0A0A] truncate">
                            {mat.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quantitative Spatial Metrics */}
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 bg-white border border-[#0A0A0A]/15 rounded-xs">
                      <div className="text-[#0A0A0A]/50 text-[9px] uppercase">GROSS FOOTPRINT</div>
                      <div className="text-[#0A0A0A] font-bold text-sm">{activeProject.scale}</div>
                    </div>
                    <div className="p-3 bg-white border border-[#0A0A0A]/15 rounded-xs">
                      <div className="text-[#0A0A0A]/50 text-[9px] uppercase">STATUS</div>
                      <div className="text-[#0A0A0A] font-bold text-sm">{activeProject.year}</div>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-2">
                    <button
                      onClick={() => setDossierOpen(true)}
                      className="w-full py-3.5 px-6 bg-[#0A0A0A] text-white text-xs font-mono font-bold tracking-widest uppercase hover:bg-[#282828] transition-colors rounded-xs shadow-md flex items-center justify-center gap-2"
                    >
                      <Building2 className="w-4 h-4" />
                      <span>VIEW CONCEPT DOSSIER</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* MODE B: ARCHIVE INDEX VIEW */
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#0A0A0A]/15 pb-4 text-xs font-mono">
                <span className="text-[#0A0A0A]/60 uppercase tracking-widest">
                  CONCEPT ARCHIVE // COMPLETE MONOGRAPH INDEX
                </span>
                <span className="text-[#1E3A5F] font-bold">
                  {filteredProjects.length} PROJECTS CATALOGUED
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs">
                  <thead>
                    <tr className="text-[#0A0A0A]/50 border-b border-[#0A0A0A]/15 text-[10px] uppercase tracking-wider">
                      <th scope="col" className="py-2.5 px-3">NO.</th>
                      <th scope="col" className="py-2.5 px-3">PROJECT TITLE</th>
                      <th scope="col" className="py-2.5 px-3">TYPOLOGY</th>
                      <th scope="col" className="py-2.5 px-3">LOCATION</th>
                      <th scope="col" className="py-2.5 px-3">SCALE</th>
                      <th scope="col" className="py-2.5 px-3">STATUS</th>
                      <th scope="col" className="py-2.5 px-3 text-right">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0A0A0A]/10">
                    {filteredProjects.map((p) => (
                      <tr
                        key={p.id}
                        tabIndex={0}
                        role="button"
                        aria-label={`View architectural plate for ${p.name}`}
                        className="hover:bg-black/5 transition-colors cursor-pointer group focus-visible:outline-2 focus-visible:outline-[#1E3A5F]"
                        onClick={() => {
                          setActiveProject(p);
                          setViewMode("gallery");
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setActiveProject(p);
                            setViewMode("gallery");
                          }
                        }}
                      >
                        <td className="py-3 px-3 text-[#1E3A5F] font-bold">{p.number}</td>
                        <td className="py-3 px-3 font-bold text-[#0A0A0A] group-hover:text-[#1E3A5F] transition-colors">
                          {p.name}
                        </td>
                        <td className="py-3 px-3 text-[#0A0A0A]/70">{p.typology}</td>
                        <td className="py-3 px-3 text-[#0A0A0A]/70">{p.location}</td>
                        <td className="py-3 px-3 text-[#0A0A0A]/80">{p.scale}</td>
                        <td className="py-3 px-3 text-[#0A0A0A]/60">{p.year}</td>
                        <td className="py-3 px-3 text-right">
                          <span className="text-xs font-mono font-bold text-[#1E3A5F] group-hover:underline">
                            View Plate →
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </FrameContainer>

      {/* Interactive Project Dossier Modal */}
      {dossierOpen && (
        <div
          onClick={() => setDossierOpen(false)}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Study Dossier"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-[#FAF8F5] text-[#0A0A0A] border border-[#0A0A0A]/20 rounded-xs shadow-2xl p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
          >
            <div className="flex items-center justify-between border-b border-[#0A0A0A]/15 pb-4">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-[#1E3A5F] font-bold uppercase tracking-wider">
                  STUDY DOSSIER // {activeProject.number}
                </span>
                <h4 className="text-xl font-bold font-sans text-[#0A0A0A]">
                  {activeProject.name}
                </h4>
              </div>
              <button
                onClick={() => setDossierOpen(false)}
                className="text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors cursor-pointer"
                aria-label="Close dossier"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <p className="text-[#0A0A0A]/80 leading-relaxed font-sans text-sm">
                {activeProject.statement}
              </p>
              <div className="p-3 bg-white border border-[#0A0A0A]/10 rounded-xs space-y-1">
                <div className="text-[10px] text-[#0A0A0A]/50 uppercase">SPECIFIED MATERIALS</div>
                <div className="font-bold text-[#0A0A0A]">{activeProject.materials.join(" • ")}</div>
              </div>
            </div>

            {dossierNotice && (
              <div className="p-3 bg-[#1E3A5F]/10 border border-[#1E3A5F]/30 rounded-xs space-y-1 font-mono text-xs text-[#0A0A0A]">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#1E3A5F]">INQUIRY FLOW SIMULATED</span>
                  <button
                    onClick={() => setDossierNotice(false)}
                    className="text-[10px] text-[#0A0A0A]/60 hover:text-[#0A0A0A] cursor-pointer"
                  >
                    DISMISS ✕
                  </button>
                </div>
                <p className="text-[10px] text-[#0A0A0A]/80">
                  Concept simulation: In production, this routes the project inquiry directly to the studio partner team.
                </p>
              </div>
            )}

            <div className="pt-2 border-t border-[#0A0A0A]/15 flex gap-3">
              <button
                onClick={() => setDossierNotice(true)}
                className="flex-1 py-3 px-4 bg-[#0A0A0A] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#282828] transition-colors rounded-xs shadow-md cursor-pointer"
              >
                TEST INQUIRY FLOW
              </button>
              <button
                onClick={() => setDossierOpen(false)}
                className="py-3 px-4 border border-[#0A0A0A]/20 text-xs font-mono uppercase hover:bg-white transition-colors rounded-xs cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
