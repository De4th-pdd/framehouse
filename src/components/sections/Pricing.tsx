"use client";

import { SectionHeader } from "@/components/common/SectionHeader";
import { FrameContainer } from "@/components/common/FrameContainer";
import { Button } from "@/components/common/Button";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WebPackage {
  id: string;
  name: string;
  price: string;
  pricePrefix?: string;
  badge?: string;
  isPopular?: boolean;
  purpose: string;
  deliverables: string[];
}

const PRIMARY_PACKAGES: WebPackage[] = [
  {
    id: "frame",
    name: "FRAME",
    price: "PKR 75,000",
    purpose: "For focused business websites, product launches, and clean portfolio sites.",
    deliverables: [
      "Custom page layout designed from scratch (no templates)",
      "Bespoke responsive design for mobile, tablet & desktop",
      "Fast page load speed & clean interaction states",
      "Structured inquiry form & contact flow",
      "Search visibility (SEO) foundation & domain launch",
      "Full code ownership with zero monthly platform lock-in",
    ],
  },
  {
    id: "signature",
    name: "SIGNATURE",
    price: "PKR 175,000",
    badge: "MOST REQUESTED",
    isPopular: true,
    purpose: "Our flagship website package for businesses establishing a distinct, premium digital presence.",
    deliverables: [
      "Tailored multi-page digital architecture & layout",
      "Distinctive art direction aligned with your brand advantage",
      "Richer component interactions & smooth page transitions",
      "Strategic content hierarchy & conversion-focused copywriting flow",
      "Cross-device mobile ergonomic tuning & speed optimization",
      "Search engine readiness & Google indexing setup",
      "Structured launch handover & 14-day post-launch warranty",
    ],
  },
  {
    id: "experience",
    name: "EXPERIENCE",
    price: "PKR 300,000",
    pricePrefix: "FROM ",
    purpose: "For custom editorial showcases, immersive brand platforms, and high-impact digital experiences.",
    deliverables: [
      "Experimental layout, digital monograph, or bespoke vitrine",
      "Fluid interactive storytelling & custom motion choreography",
      "High-touch visual presentation for luxury, fashion, or architecture",
      "Custom product filter systems & media vitrines",
      "Rapid media delivery & asset optimization",
      "Comprehensive cross-device stress testing & white-glove launch",
    ],
  },
];

const SPECIALIZED_BUILDS = [
  {
    title: "E-COMMERCE",
    price: "FROM PKR 180,000",
    description: "Custom storefronts and considered commerce flows built around product storytelling and smooth checkout velocity.",
  },
  {
    title: "CUSTOM SOFTWARE",
    price: "FROM PKR 300,000",
    description: "Dashboards, internal portals, and bespoke operational tools engineered around how your company actually operates.",
  },
  {
    title: "AUTOMATION",
    price: "FROM PKR 30,000",
    description: "Targeted workflow automation and practical AI-assisted processes that connect existing tools and reduce manual overhead.",
  },
];

const FRAMECARE_TIERS = [
  {
    name: "FRAMECARE",
    price: "PKR 8,000",
    cadence: "/ MONTH",
    description: "Dependable ongoing maintenance, technical updates, security patches, and smaller content improvements.",
  },
  {
    name: "FRAMECARE PRO",
    price: "PKR 20,000",
    cadence: "/ MONTH",
    description: "Active ongoing support, feature iterations, continuous speed monitoring, and dedicated engineering time each month.",
  },
];

export function Pricing() {
  return (
    <section id="pricing" data-section="pricing" className="scroll-mt-20 sm:scroll-mt-24 py-24 sm:py-36 lg:py-44 bg-[#F4F2ED] border-t border-[#0A0A0A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#0A0A0A]/10">
          <SectionHeader
            eyebrow="04 / PRICING & PACKAGES"
            title="Clear starting points."
            description="Every project is scoped around what you're actually building. These packages provide a transparent starting point, not a template."
            theme="light"
          />

          <div className="space-y-1 font-mono text-xs self-start md:self-end">
            <span className="text-[#0A0A0A]/50 uppercase tracking-widest block text-[10px]">
              PROJECT BASELINE
            </span>
            <span className="px-3 py-1.5 bg-[#0A0A0A] text-[#C8FF3D] font-bold tracking-wider uppercase rounded-xs inline-block">
              Projects typically start from PKR 60,000
            </span>
          </div>
        </div>

        {/* Primary Website Packages (3-column Editorial Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRIMARY_PACKAGES.map((pkg) => (
            <div key={pkg.id} className="relative flex">
              <FrameContainer
                theme={pkg.isPopular ? "dark" : "light"}
                withCorners={true}
                className={cn(
                  "p-8 sm:p-10 flex flex-col justify-between w-full rounded-xs transition-all duration-300 shadow-md",
                  pkg.isPopular
                    ? "bg-[#0A0A0A] border-white/20 text-white"
                    : "bg-white/80 border-[#0A0A0A]/15 text-[#0A0A0A]"
                )}
              >
                {/* Card Top */}
                <div className="space-y-6">
                  {/* Badge & Name */}
                  <div className="flex items-center justify-between">
                    <span className={cn(
                      "text-xs font-mono font-bold tracking-[0.2em] uppercase",
                      pkg.isPopular ? "text-[#C8FF3D]" : "text-[#0A0A0A]/60"
                    )}>
                      PACKAGE // {pkg.name}
                    </span>

                    {pkg.badge && (
                      <span className="px-2.5 py-0.5 bg-[#C8FF3D] text-[#0A0A0A] text-[10px] font-mono font-bold uppercase tracking-wider rounded-xs">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      {pkg.pricePrefix && (
                        <span className={cn(
                          "text-xs font-mono tracking-wider uppercase",
                          pkg.isPopular ? "text-white/60" : "text-[#0A0A0A]/60"
                        )}>
                          {pkg.pricePrefix}
                        </span>
                      )}
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
                        {pkg.price}
                      </span>
                    </div>
                    <p className={cn(
                      "text-xs sm:text-sm leading-relaxed font-normal pt-1",
                      pkg.isPopular ? "text-white/70" : "text-[#0A0A0A]/70"
                    )}>
                      {pkg.purpose}
                    </p>
                  </div>

                  {/* Scope Checklist */}
                  <div className={cn(
                    "pt-6 border-t space-y-3 font-mono text-xs",
                    pkg.isPopular ? "border-white/10" : "border-[#0A0A0A]/10"
                  )}>
                    <div className={cn(
                      "text-[10px] tracking-widest uppercase",
                      pkg.isPopular ? "text-white/40" : "text-[#0A0A0A]/40"
                    )}>
                      SCOPE INCLUDES:
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check className={cn(
                            "w-3.5 h-3.5 shrink-0 mt-0.5",
                            pkg.isPopular ? "text-[#C8FF3D]" : "text-[#0A0A0A]"
                          )} />
                          <span className={pkg.isPopular ? "text-white/85" : "text-[#0A0A0A]/85"}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-8 mt-8 border-t border-current/10">
                  <Button
                    href="#contact"
                    variant={pkg.isPopular ? "accent" : "primary"}
                    icon="up-right"
                    className="w-full justify-center py-3.5 text-xs font-bold"
                  >
                    START WITH {pkg.name}
                  </Button>
                </div>
              </FrameContainer>
            </div>
          ))}
        </div>

        {/* Specialized Builds Section ("For larger builds") */}
        <div className="space-y-6">
          <div className="border-b border-[#0A0A0A]/10 pb-4">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0A0A0A]/60 uppercase">
              SPECIALIZED CAPABILITIES // FOR LARGER BUILDS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPECIALIZED_BUILDS.map((spec) => (
              <div
                key={spec.title}
                className="p-6 sm:p-7 bg-white/70 border border-[#0A0A0A]/15 rounded-xs space-y-3 transition-colors hover:bg-white"
              >
                <div className="flex items-baseline justify-between gap-2 border-b border-[#0A0A0A]/10 pb-2.5 font-mono">
                  <span className="text-xs font-bold text-[#0A0A0A]">{spec.title}</span>
                  <span className="text-xs text-[#0A0A0A] font-extrabold">{spec.price}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#0A0A0A]/75 leading-relaxed font-normal">
                  {spec.description}
                </p>
                <div className="pt-1">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#0A0A0A] font-bold hover:underline"
                  >
                    <span>DISCUSS SCOPE</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FrameCare Section (Optional Ongoing Support) */}
        <div className="p-8 sm:p-10 bg-[#0A0A0A] text-white rounded-xs border border-white/15 space-y-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C8FF3D]">
                OPTIONAL ONGOING SUPPORT
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
                FRAMECARE // Maintenance &amp; Evolution
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans max-w-xl">
                We stay involved through launch. FrameCare is completely optional ongoing care—no forced retainers or locked contracts.
              </p>
            </div>
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
              DIRECT PRACTITIONER SUPPORT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FRAMECARE_TIERS.map((tier) => (
              <div
                key={tier.name}
                className="p-6 bg-white/5 border border-white/10 rounded-xs space-y-3"
              >
                <div className="flex items-baseline justify-between font-mono">
                  <span className="text-sm font-bold text-[#C8FF3D]">{tier.name}</span>
                  <div className="text-base font-bold text-white">
                    {tier.price}{" "}
                    <span className="text-[10px] font-normal text-white/50">{tier.cadence}</span>
                  </div>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-normal">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-white/50">
            <span>* Ongoing maintenance is optional and can be started or paused anytime after project delivery.</span>
            <a href="#contact" className="text-[#C8FF3D] font-bold hover:underline inline-flex items-center gap-1 shrink-0">
              INQUIRE ABOUT CARE <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Engineering Foundation & Pricing Disclaimer */}
        <div className="text-center font-mono text-xs text-[#0A0A0A]/60 pt-4 space-y-1.5 max-w-3xl mx-auto">
          <p className="text-[#0A0A0A]/80 font-medium">
            Engineering standard: Every Framehouse build is written from scratch using modern web standards (React / Next.js / TypeScript). Clean, fast, and 100% owned by your business.
          </p>
          <p>
            * Final pricing is agreed upfront based on project scope, pages, integrations, and technical requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
