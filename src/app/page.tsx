import { Header } from "@/components/navigation/Header";
import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Services } from "@/components/sections/Services";
import { WhyFramehouse } from "@/components/sections/WhyFramehouse";
import { Process } from "@/components/sections/Process";
import { ConceptTeaser } from "@/components/sections/ConceptTeaser";
import { About } from "@/components/sections/About";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F2ED] text-[#0A0A0A]">
      <Header />
      <main id="main-content" className="flex-1">
        {/* SECTION 01 — HERO */}
        <Hero />

        {/* SECTION 02 — BRAND STATEMENT */}
        <Statement />

        {/* SECTION 03 — SELECTED WORK */}
        <SelectedWork />

        {/* SECTION 04 — SERVICES */}
        <Services />

        {/* SECTION 05 — WHY FRAMEHOUSE */}
        <WhyFramehouse />

        {/* SECTION 06 — PROCESS */}
        <Process />

        {/* SECTION 07 — INTERACTIVE CTA / CONCEPT GENERATOR TEASER */}
        <ConceptTeaser />

        {/* SECTION 08 — ABOUT */}
        <About />

        {/* SECTION 09 — FINAL CTA */}
        <FinalCta />
      </main>
      {/* SECTION 10 — FOOTER */}
      <Footer />
    </div>
  );
}
