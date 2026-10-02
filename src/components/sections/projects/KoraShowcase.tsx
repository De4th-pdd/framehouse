"use client";

import { useState } from "react";
import { Utensils, Clock, Users, Calendar } from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { FrameContainer } from "@/components/common/FrameContainer";

const COURSES = [
  {
    step: "01",
    name: "Wild Foraged Morel Broth",
    notes: "Charred scallion oil, fermented wild garlic, cold-extracted infusion",
    pairing: "Infused Juniper Tonic",
    temp: "Warm / 62°C",
  },
  {
    step: "02",
    name: "Cured Indus River Trout",
    notes: "Compressed green apple, wood sorrel, toasted coriander salt",
    pairing: "Citrus Mineral Decant",
    temp: "Chilled / 8°C",
  },
  {
    step: "03",
    name: "Aged Wagyu in Smoked Hay",
    notes: "Black shallot emulsion, braised mountain thistle, marrow jus",
    pairing: "Aged Plum Reduction",
    temp: "Resting / 58°C",
  },
  {
    step: "04",
    name: "Smoked Quince & Roasted Whey",
    notes: "Wild honey crisp, burnt butter cream, frozen spruce needle snow",
    pairing: "Roasted Barley Tea",
    temp: "Frozen / -2°C",
  },
];

export function KoraShowcase() {
  const [activeCourse, setActiveCourse] = useState(0);
  const course = COURSES[activeCourse];

  return (
    <FrameContainer
      theme="dark"
      className="p-6 sm:p-10 lg:p-12 bg-[#090A0D] border-white/15 transition-all duration-300"
    >
      {/* Project Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 mb-8">
        <div className="flex items-center gap-3">
          <Badge variant="concept">CONCEPT / 02</Badge>
          <span className="text-xs font-mono tracking-widest uppercase text-white/60">
            WEB / EXPERIENCE / BRAND
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
            <span className="text-xs font-mono tracking-[0.2em] text-[#C8FF3D] uppercase">
              EXPERIMENTAL CULINARY LAB
            </span>
            <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              KŌRA
            </h3>
          </div>

          <p className="text-base text-white/70 leading-relaxed">
            An atmospheric sensory digital experience for an avant-garde restaurant.
            Engineered around seasonal culinary movements, soundscape pacing, and an intimate
            reservation flow built to cultivate anticipation before arrival.
          </p>

          {/* Interactive Course Navigator */}
          <div className="space-y-2 pt-2">
            <div className="text-xs font-mono tracking-wider text-white/50 uppercase">
              INTERACTIVE TASTING SEQUENCE:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {COURSES.map((item, idx) => (
                <button
                  key={item.step}
                  onClick={() => setActiveCourse(idx)}
                  className={`py-2 px-1 text-center border font-mono text-xs transition-all ${
                    activeCourse === idx
                      ? "border-[#C8FF3D] bg-[#C8FF3D]/10 text-[#C8FF3D] font-bold"
                      : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                  }`}
                  aria-label={`Select course ${item.step}`}
                >
                  COURSE {item.step}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["Atmospheric Web", "Interactive Menu", "Sensory UI", "Booking Flow"].map(
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
          <div className="relative min-h-[360px] sm:min-h-[420px] p-6 sm:p-8 bg-[#111318] border border-white/15 flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Top Atmospheric Meta */}
            <div className="flex justify-between items-center text-xs font-mono border-b border-white/10 pb-4 text-white/60">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#C8FF3D] animate-pulse" />
                <span className="text-[#C8FF3D]">MOVEMENT {course.step} OF 04</span>
              </div>
              <span>TEMP SPEC: {course.temp}</span>
            </div>

            {/* Course Content Detail */}
            <div className="my-auto py-6 space-y-4">
              <div className="text-[11px] font-mono tracking-[0.2em] text-[#C8FF3D] uppercase">
                TASTING NOTES / AUTUMN CYCLE
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {course.name}
              </h4>
              <p className="text-sm font-mono text-white/70 max-w-lg leading-relaxed">
                {course.notes}
              </p>
              <div className="p-3 bg-white/5 border border-white/10 inline-block font-mono text-xs text-white/90">
                <span className="text-white/40 uppercase mr-2">PAIRING:</span>
                {course.pairing}
              </div>
            </div>

            {/* Bottom Reservation Preview Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/50">
              <div className="flex items-center gap-3">
                <Clock className="w-3.5 h-3.5 text-[#C8FF3D]" />
                <span>SERVICE: 19:00 & 21:30</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-3.5 h-3.5 text-[#C8FF3D]" />
                <span>MAX 14 SEATS PER SITTING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FrameContainer>
  );
}
