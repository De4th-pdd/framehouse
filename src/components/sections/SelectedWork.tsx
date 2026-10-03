import { SectionHeader } from "@/components/common/SectionHeader";
import { NoorShowcase } from "./projects/NoorShowcase";
import { MeridianShowcase } from "./projects/MeridianShowcase";
import { VertexShowcase } from "./projects/VertexShowcase";

export function SelectedWork() {
  return (
    <section id="work" data-section="selected-work" className="scroll-mt-20 sm:scroll-mt-24 py-24 sm:py-32 lg:py-40 bg-[#F4F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#0A0A0A]/10">
          <SectionHeader
            eyebrow="02 / SELECTED WORK"
            title="Concept explorations."
            description="Polished concept directions engineered to demonstrate how Framehouse approaches domain-specific digital architecture, interaction depth, and art direction."
            theme="light"
          />

          <div className="text-xs font-mono text-[#0A0A0A]/60 uppercase tracking-widest self-start md:self-end">
            [ ALL PIECES LABELED AS CONCEPTS ]
          </div>
        </div>

        {/* Project Showcases */}
        <div className="space-y-16 sm:space-y-24">
          <NoorShowcase />
          <MeridianShowcase />
          <VertexShowcase />
        </div>
      </div>
    </section>
  );
}
