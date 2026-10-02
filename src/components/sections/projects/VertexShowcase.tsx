"use client";

import { useState } from "react";
import { Building2, Compass, Layers, Check } from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { FrameContainer } from "@/components/common/FrameContainer";

const LEVELS = [
  {
    level: "LVL 24",
    title: "Terrace Residence A",
    area: "3,250 SQ FT",
    elevation: "180M",
    aspect: "SOUTH-EAST (MOUNTAIN RIDGE)",
    features: "Cantilevered stone terrace, double-height living void",
  },
  {
    level: "LVL 38",
    title: "Sky Penthouse Horizon",
    area: "4,600 SQ FT",
    elevation: "290M",
    aspect: "360° SKYLINE PANORAMA",
    features: "Private elevator access, thermal glass conservatory",
  },
  {
    level: "LVL 48",
    title: "The Vertex Crown",
    area: "6,800 SQ FT",
    elevation: "370M",
    aspect: "OBSERVATORY PINNACLE",
    features: "Infinity sky pool, structural steel atrium canopy",
  },
];

export function VertexShowcase() {
  const [activeLevel, setActiveLevel] = useState(1);
  const selected = LEVELS[activeLevel];

  return (
    <FrameContainer
      theme="dark"
      className="p-6 sm:p-10 lg:p-12 bg-[#0C0F14] border-[#90CDF4]/20 transition-all duration-300"
    >
      {/* Project Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 mb-8">
        <div className="flex items-center gap-3">
          <Badge variant="concept">CONCEPT / 03</Badge>
          <span className="text-xs font-mono tracking-widest uppercase text-white/60">
            WEB / INTERACTIVE / DIGITAL
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono text-white/60">
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
            <span className="text-xs font-mono tracking-[0.2em] text-[#90CDF4] uppercase">
              MONOLITHIC URBAN DEVELOPMENT
            </span>
            <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              VERTEX
            </h3>
          </div>

          <p className="text-base text-white/70 leading-relaxed">
            A digital platform for an ultra-luxury real estate developer. Built with blueprint-style
            coordinate framing, spatial unit selectors, and an interactive elevation engine that gives
            high-net-worth investors deep spatial clarity before ground is broken.
          </p>

          {/* Interactive Elevation Selector */}
          <div className="space-y-2 pt-2">
            <div className="text-xs font-mono tracking-wider text-white/50 uppercase">
              SELECT TOWER ELEVATION:
            </div>
            <div className="grid grid-cols-3 gap-2">
              {LEVELS.map((item, idx) => (
                <button
                  key={item.level}
                  onClick={() => setActiveLevel(idx)}
                  className={`py-2 px-2 text-center border font-mono text-xs transition-all ${
                    activeLevel === idx
                      ? "border-[#90CDF4] bg-[#90CDF4]/15 text-[#90CDF4] font-bold"
                      : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                  }`}
                  aria-label={`Select ${item.level}`}
                >
                  {item.level}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["Real Estate", "Interactive Floorplans", "Elevation Engine", "High-End Web"].map(
              (tag) => (
                <Badge key={tag} variant="outline" className="text-[11px] border-white/20 text-white/80">
                  {tag}
                </Badge>
              )
            )}
          </div>
        </div>

        {/* Right Art-Directed Visual Frame */}
        <div className="lg:col-span-7">
          <div className="relative min-h-[360px] sm:min-h-[420px] p-6 sm:p-8 bg-[#07090C] border border-[#90CDF4]/25 flex flex-col justify-between overflow-hidden shadow-2xl font-mono">
            {/* Architectural Blueprint Grid Pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-15 bg-[linear-gradient(to_right,#90cdf440_1px,transparent_1px),linear-gradient(to_bottom,#90cdf440_1px,transparent_1px)] bg-[size:2rem_2rem]"
              aria-hidden="true"
            />

            {/* Top Blueprint Coordinates Header */}
            <div className="relative z-10 flex justify-between items-center text-xs border-b border-[#90CDF4]/20 pb-3 text-white/70">
              <span className="text-[#90CDF4] font-bold">
                SPATIAL SPEC // {selected.level}
              </span>
              <span>ELEV: +{selected.elevation}</span>
            </div>

            {/* Blueprint Elevation Specs Display */}
            <div className="relative z-10 my-auto py-6 space-y-4">
              <div className="text-[10px] tracking-widest text-[#90CDF4] uppercase">
                COORDINATE MATRIX: X:42.94 | Y:108.62 | Z:{selected.elevation}
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                {selected.title}
              </h4>
              <p className="text-xs text-white/70 leading-relaxed font-sans max-w-md">
                {selected.features}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-2.5 bg-white/5 border border-white/10">
                  <div className="text-white/40 text-[10px] uppercase">LIVING AREA</div>
                  <div className="text-white font-bold">{selected.area}</div>
                </div>
                <div className="p-2.5 bg-white/5 border border-white/10">
                  <div className="text-white/40 text-[10px] uppercase">ORIENTATION</div>
                  <div className="text-white font-bold">{selected.aspect}</div>
                </div>
              </div>
            </div>

            {/* Bottom Blueprint Footer Bar */}
            <div className="relative z-10 pt-3 border-t border-[#90CDF4]/20 flex justify-between items-center text-[10px] text-white/50 uppercase">
              <span>BIM DATA LOADED</span>
              <span className="text-[#90CDF4]">CONFIDENTIAL INVESTOR PREVIEW</span>
            </div>
          </div>
        </div>
      </div>
    </FrameContainer>
  );
}
