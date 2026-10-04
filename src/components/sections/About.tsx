"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "@/components/common/SectionHeader";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!containerRef.current || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headlineRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (cardsRef.current) {
        const columns = cardsRef.current.children;
        gsap.fromTo(
          columns,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 sm:py-36 lg:py-44 bg-[#F4F2ED] border-t border-[#0A0A0A]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        <SectionHeader
          eyebrow="07 / STUDIO PROFILE"
          title="Independent by design."
          description="Direct founder involvement. Small by design. No agency bloat."
          theme="light"
        />

        {/* Primary Manifesto Statement */}
        <div className="max-w-5xl space-y-4">
          <p
            ref={headlineRef}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.18]"
          >
            FRAMEHOUSE is an independent digital studio based in Pakistan, building custom websites,
            software and digital experiences for businesses worldwide.
          </p>
          <p className="text-lg sm:text-2xl text-[#0A0A0A]/70 font-medium leading-relaxed">
            Every project stays close to the person building it. No account managers, no junior handoffs, and no layers of agency overhead.
          </p>
        </div>

        {/* Dual Column Ethos & Perspective */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 border-t border-[#0A0A0A]/15 pt-12 sm:pt-16"
        >
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0A0A0A]/50 uppercase">
              {"// HOW WE WORK"}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A0A0A]">
              You work directly with the person building your product.
            </h3>
            <p className="text-base text-[#0A0A0A]/75 leading-relaxed font-normal">
              When you work with Framehouse, you talk directly with the designer and developer who actually shapes the visuals and writes the code. Decisions get made in hours instead of days, feedback is implemented immediately, and nothing gets lost between a sales rep and a remote team.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0A0A0A]/50 uppercase">
              {"// OUR STANDARD"}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A0A0A]">
              Direct communication. Serious taste. Modern development.
            </h3>
            <p className="text-base text-[#0A0A0A]/75 leading-relaxed font-normal">
              Most business websites look identical because they start from generic templates or bloated page builders. We start from disciplined typography, clean spacing, and fast, modern code. We deliberately take on fewer projects so each one receives genuine focus, craft, and care.
            </p>
          </div>
        </div>

        {/* Studio Telemetry Metadata Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-[#0A0A0A]/15 font-mono text-xs">
          <div className="space-y-1">
            <div className="text-[#0A0A0A]/40 uppercase tracking-wider text-[10px]">
              OPERATING MODEL
            </div>
            <div className="font-bold text-[#0A0A0A]">
              Independent Studio
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-[#0A0A0A]/40 uppercase tracking-wider text-[10px]">
              STUDIO BASE
            </div>
            <div className="font-bold text-[#0A0A0A]">
              Pakistan → Worldwide
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-[#0A0A0A]/40 uppercase tracking-wider text-[10px]">
              CLIENT ACCESS
            </div>
            <div className="font-bold text-[#0A0A0A]">
              Direct Practitioner
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-[#0A0A0A]/40 uppercase tracking-wider text-[10px]">
              CODE OWNERSHIP
            </div>
            <div className="font-bold text-[#0A0A0A]">
              100% Client-Owned
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


