import { ArrowRight, Sparkles, Terminal, Compass } from "lucide-react";
import { Button } from "@/components/common/Button";
import { FrameContainer } from "@/components/common/FrameContainer";
import { Badge } from "@/components/common/Badge";

export function ConceptTeaser() {
  return (
    <section className="py-24 sm:py-36 lg:py-44 bg-[#0A0A0A] text-white relative overflow-hidden border-t border-white/10">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FrameContainer
          theme="dark"
          className="p-8 sm:p-12 lg:p-16 bg-[#111317] border-white/20 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Frame Green accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8FF3D]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="green">DISCOVERY LAB</Badge>
                <span className="text-xs font-mono text-white/50 tracking-wider">
                  BESPOKE STUDIO AUDIT
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
                Tell us what you&apos;re building. We&apos;ll show you where it could go.
                We evaluate your current presence, identify points of friction, and draft a high-fidelity visual direction.
              </p>

              <div className="pt-2">
                <Button href="/contact" variant="accent" icon="right" className="text-sm py-4 px-8">
                  GET A FREE CONCEPT
                </Button>
              </div>
            </div>

            {/* Right Interactive Teaser Blueprint */}
            <div className="lg:col-span-5">
              <div className="p-6 bg-[#090A0C] border border-white/15 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-white/60">
                  <span className="text-[#C8FF3D] font-bold">CONCEPT ENGINE // V1</span>
                  <span>INITIATE FLOW</span>
                </div>

                <div className="space-y-3 py-2 text-white/70">
                  <div className="p-3 bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-white/40">01 / BRAND</span>
                    <span className="text-white">Your Business Name</span>
                  </div>

                  <div className="p-3 bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-white/40">02 / DOMAIN</span>
                    <span className="text-white">Website or Instagram</span>
                  </div>

                  <div className="p-3 bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-white/40">03 / AMBITION</span>
                    <span className="text-[#C8FF3D]">Custom Product / Flagship</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 text-[11px] text-white/40 flex justify-between">
                  <span>TURNAROUND: ~48 HOURS</span>
                  <span>ZERO COMMITMENT</span>
                </div>
              </div>
            </div>
          </div>
        </FrameContainer>
      </div>
    </section>
  );
}
