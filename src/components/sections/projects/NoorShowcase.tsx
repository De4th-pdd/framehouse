"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Compass, Box } from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { FrameContainer } from "@/components/common/FrameContainer";
import { Button } from "@/components/common/Button";

const MATERIALS = [
  { id: "ash", name: "Charred Ash", color: "#2B2824", hexLabel: "HEX #2B2824" },
  { id: "bronze", name: "Cast Bronze", color: "#8C6A48", hexLabel: "HEX #8C6A48" },
  { id: "alabaster", name: "Honed Alabaster", color: "#DCD8CF", hexLabel: "HEX #DCD8CF" },
];

export function NoorShowcase() {
  const [selectedMaterial, setSelectedMaterial] = useState(0);
  const activeMaterial = MATERIALS[selectedMaterial];

  return (
    <FrameContainer
      theme="light"
      className="p-6 sm:p-10 lg:p-12 bg-[#F0EDE6] border-[#0A0A0A]/20 transition-colors duration-300"
    >
      {/* Project Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#0A0A0A]/15 pb-5 mb-8">
        <div className="flex items-center gap-3">
          <Badge variant="concept">CONCEPT / 01</Badge>
          <span className="text-xs font-mono tracking-widest uppercase text-[#0A0A0A]/60">
            BRAND / E-COMMERCE / WEB
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono text-[#0A0A0A]/70">
          <span>YEAR: 2026</span>
          <span>•</span>
          <span>STATUS: CONCEPT DIRECTION</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Information Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-[0.2em] text-[#0A0A0A]/60 uppercase">
              PAKISTAN CONTEMPORARY LIFESTYLE
            </span>
            <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A]">
              NOOR
            </h3>
          </div>

          <p className="text-base text-[#0A0A0A]/80 leading-relaxed">
            A digital flagship for a contemporary furniture & lifestyle house. We crafted a
            tactile editorial storefront blending traditional craftsmanship with fluid micro-purchasing
            flows and interactive material specifications.
          </p>

          {/* Interactive Material Specification Control */}
          <div className="p-4 bg-white/70 border border-[#0A0A0A]/10 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="uppercase tracking-wider text-[#0A0A0A]/70">
                MATERIAL STUDY:
              </span>
              <span className="font-semibold text-[#0A0A0A]">
                {activeMaterial.name} ({activeMaterial.hexLabel})
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {MATERIALS.map((mat, idx) => (
                <button
                  key={mat.id}
                  onClick={() => setSelectedMaterial(idx)}
                  className={`flex-1 py-2 px-3 text-xs font-mono border transition-all text-left flex items-center justify-between ${
                    selectedMaterial === idx
                      ? "border-[#0A0A0A] bg-white font-bold shadow-xs"
                      : "border-transparent bg-black/5 hover:bg-black/10 text-[#0A0A0A]/70"
                  }`}
                  aria-label={`Select ${mat.name}`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full border border-black/20"
                      style={{ backgroundColor: mat.color }}
                    />
                    <span className="truncate">{mat.name}</span>
                  </span>
                  {selectedMaterial === idx && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["Custom E-Commerce", "Art Direction", "Material Switcher", "Dynamic Drawer"].map(
              (tag) => (
                <Badge key={tag} variant="outline" className="text-[11px]">
                  {tag}
                </Badge>
              )
            )}
          </div>
        </div>

        {/* Right Art-Directed Visual Frame */}
        <div className="lg:col-span-7">
          <div
            className="relative min-h-[360px] sm:min-h-[420px] p-6 sm:p-8 flex flex-col justify-between border border-[#0A0A0A]/15 shadow-sm transition-colors duration-500 overflow-hidden"
            style={{ backgroundColor: activeMaterial.color }}
          >
            {/* Architectural overlay marks */}
            <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-white/60 uppercase">
              <span>PLATE NO. 082</span>
              <span>SCALE 1:20</span>
            </div>

            {/* Visual Subject: Minimalist Furniture Architectural Silhouette */}
            <div className="my-auto py-8 flex flex-col items-center justify-center text-center">
              <div className="w-48 sm:w-64 h-24 border-b-4 border-white/80 relative flex items-end justify-center mb-6">
                <div className="absolute top-2 w-44 sm:w-60 h-10 border border-white/40 bg-white/10 backdrop-blur-xs flex items-center justify-center">
                  <span className="text-[9px] font-mono tracking-widest text-white/80">
                    JOINERY SPEC A-4
                  </span>
                </div>
                {/* Legs */}
                <div className="w-full flex justify-between px-4">
                  <div className="w-2 h-14 bg-white/80" />
                  <div className="w-2 h-14 bg-white/80" />
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xl sm:text-2xl font-serif text-white tracking-wide">
                  The Mizan Low Credenza
                </p>
                <p className="text-xs font-mono text-white/70">
                  Finished in {activeMaterial.name} • Solid Joinery
                </p>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex items-center justify-between text-xs font-mono text-white/60 border-t border-white/20 pt-3">
              <span>ACTIVE SPEC: {activeMaterial.name.toUpperCase()}</span>
              <span className="text-[#C8FF3D] font-bold">READY TO CONFIGURE</span>
            </div>
          </div>
        </div>
      </div>
    </FrameContainer>
  );
}
