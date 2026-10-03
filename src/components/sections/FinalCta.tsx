import { Button } from "@/components/common/Button";

export function FinalCta() {
  return (
    <section id="final-cta" className="py-28 sm:py-40 lg:py-48 bg-[#F4F2ED] border-t border-[#0A0A0A]/10 text-center relative overflow-hidden">
      {/* Background architectural frame lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#0a0a0a08_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a08_1px,transparent_1px)] bg-[size:5rem_5rem]"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A0A0A]/5 border border-[#0A0A0A]/10 text-xs font-mono tracking-widest uppercase text-[#0A0A0A]/70">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF3D] border border-[#0A0A0A]" aria-hidden="true" />
          <span>COMMISSIONS OPEN FOR Q4 2026</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-[-0.03em] text-[#0A0A0A] leading-[0.96] break-words">
          Ready to build
          <br className="hidden sm:inline" />{" "}
          <span className="italic font-light">something better?</span>
        </h2>

        <div className="pt-4 flex flex-col items-center gap-4">
          <Button
            href="/contact"
            variant="primary"
            icon="up-right"
            className="text-sm sm:text-base py-5 px-10 shadow-lg"
          >
            START A PROJECT
          </Button>

          <p className="text-xs sm:text-sm font-mono text-[#0A0A0A]/60 tracking-wider">
            Usually replying within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
