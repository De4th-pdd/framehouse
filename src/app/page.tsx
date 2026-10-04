import { Header } from "@/components/navigation/Header";
import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { WhyFramehouse } from "@/components/sections/WhyFramehouse";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { ProjectBrief } from "@/components/sections/ProjectBrief";
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

        {/* SECTION 05 — PRICING & PACKAGES */}
        <Pricing />

        {/* SECTION 06 — PRINCIPLES */}
        <WhyFramehouse />

        {/* SECTION 07 — PROCESS */}
        <Process />

        {/* SECTION 08 — ABOUT */}
        <About />

        {/* SECTION 09 — FREQUENTLY ASKED QUESTIONS */}
        <Faq />

        {/* SECTION 10 — PROJECT INTAKE / BRIEF */}
        <ProjectBrief />

        {/* SECTION 11 — FINAL CALL TO ACTION */}
        <FinalCta />
      </main>
      {/* SECTION 12 — FOOTER */}
      <Footer />
    </div>
  );
}
