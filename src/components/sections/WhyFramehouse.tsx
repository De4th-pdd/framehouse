import { SectionHeader } from "@/components/common/SectionHeader";
import { FrameContainer } from "@/components/common/FrameContainer";
import { principles } from "@/data/principles";

export function WhyFramehouse() {
  return (
    <section className="py-24 sm:py-36 lg:py-44 bg-[#F4F2ED] border-t border-[#0A0A0A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        <SectionHeader
          eyebrow="WHY FRAMEHOUSE"
          title="Principles over compromises."
          description="We built Framehouse around four strict engineering and design boundaries. This is how we protect quality."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {principles.map((item) => (
            <FrameContainer
              key={item.number}
              theme="light"
              className="p-8 sm:p-10 bg-white/60 hover:bg-white transition-colors duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#0A0A0A]/40 uppercase">
                  RULE // {item.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0A0A0A]">
                  {item.title}
                </h3>
                <p className="text-base font-semibold text-[#0A0A0A]/90">
                  {item.description}
                </p>
              </div>

              <p className="text-sm text-[#0A0A0A]/70 leading-relaxed border-t border-[#0A0A0A]/10 pt-4">
                {item.detail}
              </p>
            </FrameContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
