import { SectionHeader } from "@/components/common/SectionHeader";
import { FrameContainer } from "@/components/common/FrameContainer";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-36 lg:py-44 bg-[#F4F2ED] border-t border-[#0A0A0A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeader
          eyebrow="ABOUT FRAMEHOUSE"
          title="Independent by design."
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <p className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A] leading-[1.16]">
              Framehouse is an independent digital studio building websites, software
              and digital experiences for ambitious businesses.
            </p>
          </div>

          <div className="lg:col-span-4 lg:pt-2 space-y-6">
            <FrameContainer
              theme="light"
              className="p-6 bg-white/60 space-y-4"
            >
              <div className="text-xs font-mono tracking-widest text-[#0A0A0A]/50 uppercase">
                STUDIO PRESENCE
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#0A0A0A] tracking-wider">
                PAKISTAN → WORLDWIDE
              </div>
              <p className="text-xs text-[#0A0A0A]/70 leading-relaxed font-mono">
                Rooted in deep technical execution and deliberate design principles. Operating across global timezones.
              </p>
            </FrameContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
