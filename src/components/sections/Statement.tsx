import { SectionHeader } from "@/components/common/SectionHeader";

export function Statement() {
  return (
    <section className="py-24 sm:py-36 lg:py-44 border-t border-[#0A0A0A]/10 bg-[#F4F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 sm:space-y-16">
          <SectionHeader
            eyebrow="01 / WHAT WE DO"
            theme="light"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.04] break-words">
                Your website shouldn&apos;t
                <br className="hidden sm:inline" />{" "}
                look like everyone else&apos;s.
              </h2>
            </div>

            <div className="lg:col-span-4 lg:pt-3 space-y-6">
              <p className="text-lg sm:text-xl text-[#0A0A0A]/80 leading-relaxed font-normal">
                Most agencies start with pre-made templates, swap out the logo, and call it a day.
                We engineer bespoke digital experiences from the ground up—grounded in your actual
                business model, product depth, and distinct market edge.
              </p>

              <div className="pt-4 border-t border-[#0A0A0A]/15 flex items-center justify-between text-xs font-mono tracking-wider uppercase text-[#0A0A0A]/60">
                <span>BESPOKE ARCHITECTURE</span>
                <span>ZERO COMPROMISES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
