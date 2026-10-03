"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "@/components/common/SectionHeader";
import { principles } from "@/data/principles";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function WhyFramehouse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current || !itemsRef.current) return;

    const ctx = gsap.context(() => {
      const items = itemsRef.current?.querySelectorAll(".principle-item");
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: itemsRef.current,
              start: "top 75%",
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
      id="principles"
      ref={containerRef}
      className="py-24 sm:py-36 lg:py-44 bg-[#F4F2ED] border-t border-[#0A0A0A]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        <SectionHeader
          eyebrow="04 / PRINCIPLES"
          title="Principles over compromises."
          description="We built Framehouse around four strict engineering and design boundaries. This is how we protect quality."
          theme="light"
        />

        <div
          ref={itemsRef}
          className="divide-y divide-[#0A0A0A]/15 border-t border-b border-[#0A0A0A]/15"
        >
          {principles.map((item) => (
            <div
              key={item.number}
              className="principle-item group py-10 sm:py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline transition-all duration-300 hover:bg-black/[0.03] hover:translate-x-1 px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 rounded-xs"
            >
              <div className="lg:col-span-5 space-y-2.5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#0A0A0A]/50 uppercase">
                    RULE {"//"} {item.number}
                  </span>
                  <span className="h-[1px] w-6 bg-[#0A0A0A]/20" />
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A0A0A]">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg font-bold text-[#0A0A0A]/90 leading-snug">
                  {item.description}
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <p className="text-base sm:text-lg text-[#0A0A0A]/75 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


