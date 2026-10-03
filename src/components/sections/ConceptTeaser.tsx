"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/common/Button";
import { FrameContainer } from "@/components/common/FrameContainer";
import { Badge } from "@/components/common/Badge";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BUSINESS_MODELS = [
  { id: "ecom", label: "Luxury / E-Com", scope: "Lookbook + Cart Architecture + High-Performance Storefront", turnaround: "3-4 Weeks" },
  { id: "saas", label: "SaaS / Fintech", scope: "Command Hub + Complex Dashboards + High-Performance React Architecture", turnaround: "4-6 Weeks" },
  { id: "brand", label: "Studio / Monograph", scope: "Spatial Archive + Typography Direction + High-End Web Presence", turnaround: "2-3 Weeks" },
];

const DELIVERABLE_GOALS = [
  { id: "flagship", label: "Bespoke Flagship", badge: "FULL BUILD" },
  { id: "rebrand", label: "Design Direction", badge: "SPRINT" },
  { id: "app", label: "Web App / Portal", badge: "PRODUCT" },
];

export function ConceptTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);

  const [selectedModel, setSelectedModel] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState(0);

  const currentModel = BUSINESS_MODELS[selectedModel];
  const currentGoal = DELIVERABLE_GOALS[selectedGoal];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current || !portalRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        portalRef.current,
        { scale: 0.94, opacity: 0.9 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 35%",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="concept-teaser"
      ref={containerRef}
      data-theme="dark"
      className="py-28 sm:py-40 lg:py-48 bg-[#0A0A0A] text-white relative overflow-hidden border-t border-white/10"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"
        aria-hidden="true"
      />

      {/* Dramatic Radial Flare behind headline */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] pointer-events-none opacity-30 bg-[radial-gradient(circle_at_center,#C8FF3D_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={portalRef} className="transform-gpu">
          <FrameContainer
            theme="dark"
            withCorners={true}
            className="p-8 sm:p-14 lg:p-20 bg-[#101217] border-white/20 shadow-2xl relative overflow-hidden rounded-xs"
          >
            {/* Top Frame Green accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8FF3D]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <Badge variant="green">START A PROJECT</Badge>
                  <span className="text-xs font-mono text-white/50 tracking-wider">
                    DIRECT FOUNDER REVIEW // CLEAR SCOPE
                  </span>
                </div>

                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[0.98]">
                  Imagine what
                  <br />
                  your business
                  <br />
                  <span className="text-[#C8FF3D]">could look like.</span>
                </h2>

                <p className="text-base sm:text-xl text-white/70 max-w-xl font-normal leading-relaxed">
                  Tell us what you&apos;re building, what isn&apos;t working, and where you want to take it.
                  We evaluate your current presence, identify points of friction, and draft a structured proposal.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button href="/contact" variant="accent" icon="right" className="text-sm py-4 px-8 shadow-lg">
                    SEND PROJECT BRIEF ↗
                  </Button>
                  <span className="text-xs font-mono text-white/50 tracking-wider">
                    Usually replying within 24 hours.
                  </span>
                </div>
              </div>

              {/* Right Interactive Teaser Blueprint Engine */}
              <div className="lg:col-span-5">
                <div className="p-6 sm:p-7 bg-[#08090C] border border-white/15 space-y-5 font-mono text-xs rounded-xs shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 text-white/60">
                    <span className="text-[#C8FF3D] font-bold flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#C8FF3D]" />
                      STUDIO SCOPE ESTIMATOR
                    </span>
                    <span className="text-[11px] text-white/40">INTERACTIVE CALC</span>
                  </div>

                  {/* Sector Selector */}
                  <div className="space-y-2">
                    <label className="text-[11px] text-white/50 tracking-wider uppercase block">
                      01 / SELECT INDUSTRY
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {BUSINESS_MODELS.map((item, idx) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedModel(idx)}
                          className={cn(
                            "py-2 px-1 text-[11px] border text-center transition-all truncate rounded-xs",
                            selectedModel === idx
                              ? "bg-[#C8FF3D]/10 border-[#C8FF3D] text-[#C8FF3D] font-bold"
                              : "border-white/10 text-white/60 hover:border-white/20 hover:text-white"
                          )}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Goal Selector */}
                  <div className="space-y-2">
                    <label className="text-[11px] text-white/50 tracking-wider uppercase block">
                      02 / TARGET DELIVERABLE
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {DELIVERABLE_GOALS.map((item, idx) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedGoal(idx)}
                          className={cn(
                            "py-2 px-1 text-[11px] border text-center transition-all truncate rounded-xs",
                            selectedGoal === idx
                              ? "bg-white/10 border-white text-white font-bold"
                              : "border-white/10 text-white/60 hover:border-white/20 hover:text-white"
                          )}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Calculated Scope Output Plate */}
                  <div className="p-3.5 bg-white/[0.03] border border-white/10 space-y-2 rounded-xs">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-white/40">TYPICAL BUILD RANGE</span>
                      <span className="text-[#C8FF3D] font-bold">{currentModel.turnaround}</span>
                    </div>
                    <div className="border-t border-white/5 pt-2">
                      <div className="text-[10px] text-white/40 uppercase mb-1">RECOMMENDED SCOPE</div>
                      <p className="text-[11px] text-white/80 font-sans leading-relaxed">
                        {currentModel.scope}
                      </p>
                      <div className="text-[10px] text-white/40 pt-1">
                        *Actual timeline determined by final project scope and technical requirements.
                      </div>
                    </div>
                  </div>

                  {/* Action row */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-white/40">100% CONFIDENTIAL</span>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-[#C8FF3D] hover:underline font-bold"
                    >
                      DISCUSS SCOPE <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FrameContainer>
        </div>
      </div>
    </section>
  );
}


