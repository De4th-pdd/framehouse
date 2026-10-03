"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { FrameContainer } from "@/components/common/FrameContainer";
import { Button } from "@/components/common/Button";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS = [
  "Websites",
  "E-Commerce",
  "Web Applications",
  "Custom Software",
  "AI & Automation",
  "Concept Discovery",
];

const BUDGET_OPTIONS = [
  "< $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
];

const TIMELINE_OPTIONS = [
  "Immediate (< 1 Month)",
  "1 – 3 Months",
  "Q3 / Q4 2026",
  "Flexible / Discovery",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    links: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (srv: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(srv)
        ? prev.services.filter((s) => s !== srv)
        : [...prev.services, srv],
    }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please share a brief summary of what you are building.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate lightweight client-side submission handler structured for future API hook
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F2ED] text-[#0A0A0A]">
      <Header />

      <main className="flex-1 pt-36 sm:pt-44 lg:pt-48 pb-36 sm:pb-48">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Back link & Eyebrow */}
          <div className="flex items-center justify-between border-b border-[#0A0A0A]/10 pb-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN TO INDEX</span>
            </Link>

            <span className="text-xs font-mono tracking-widest text-[#0A0A0A]/50 uppercase">
              START A PROJECT • PROJECT INTAKE
            </span>
          </div>

          {/* Page Heading */}
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#0A0A0A]/70">
                INITIATE ENGAGEMENT
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.02]">
              Let&apos;s build something.
            </h1>

            <p className="text-base sm:text-lg text-[#0A0A0A]/80 leading-relaxed font-normal">
              Whether you are preparing a digital flagship, re-engineering core software,
              or creating a brand ready to look different, tell us about your project.
            </p>
          </div>

          {/* Form Container */}
          <FrameContainer
            theme="light"
            className="p-6 sm:p-10 lg:p-12 bg-white/80 border-[#0A0A0A]/15 shadow-xl"
          >
            {submitted ? (
              /* Success confirmation state */
              <div className="py-12 sm:py-16 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-[#0A0A0A] text-[#C8FF3D] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-3xl font-extrabold tracking-tight text-[#0A0A0A]">
                    Inquiry Received.
                  </h3>
                  <p className="text-sm text-[#0A0A0A]/80 leading-relaxed font-normal">
                    Thank you, <span className="font-bold text-[#0A0A0A]">{formData.name}</span>.
                    We review all briefs directly and will follow up with you at{" "}
                    <span className="font-mono text-[#0A0A0A]">{formData.email}</span> within 24 hours.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <Button href="/" variant="primary" icon="right">
                    BACK TO HOMEPAGE
                  </Button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        business: "",
                        email: "",
                        links: "",
                        services: [],
                        budget: "",
                        timeline: "",
                        message: "",
                      });
                    }}
                    className="py-3 px-5 border border-[#0A0A0A]/20 text-xs font-mono uppercase hover:bg-black/5 transition-colors rounded-xs cursor-pointer"
                  >
                    SUBMIT ANOTHER BRIEF
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10" noValidate>
                {/* Section 1: Contact Details */}
                <div className="space-y-6">
                  <div className="text-xs font-mono font-bold tracking-widest text-[#0A0A0A]/60 uppercase border-b border-[#0A0A0A]/10 pb-2">
                    01 • THE ESSENTIALS
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#0A0A0A]"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Tariq Malik"
                        className={cn(
                          "w-full px-4 py-3 bg-[#F4F2ED]/60 border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#0A0A0A]",
                          errors.name
                            ? "border-red-500 bg-red-50/30"
                            : "border-[#0A0A0A]/20"
                        )}
                        required
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Business */}
                    <div className="space-y-2">
                      <label
                        htmlFor="business"
                        className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#0A0A0A]"
                      >
                        Company / Business Name
                      </label>
                      <input
                        id="business"
                        type="text"
                        value={formData.business}
                        onChange={(e) =>
                          setFormData({ ...formData, business: e.target.value })
                        }
                        placeholder="e.g. Vertex Holdings"
                        className="w-full px-4 py-3 bg-[#F4F2ED]/60 border border-[#0A0A0A]/20 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#0A0A0A]"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#0A0A0A]"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@company.com"
                        className={cn(
                          "w-full px-4 py-3 bg-[#F4F2ED]/60 border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#0A0A0A]",
                          errors.email
                            ? "border-red-500 bg-red-50/30"
                            : "border-[#0A0A0A]/20"
                        )}
                        required
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Website / Instagram */}
                    <div className="space-y-2">
                      <label
                        htmlFor="links"
                        className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#0A0A0A]"
                      >
                        Website or Social Links
                      </label>
                      <input
                        id="links"
                        type="text"
                        value={formData.links}
                        onChange={(e) =>
                          setFormData({ ...formData, links: e.target.value })
                        }
                        placeholder="e.g. instagram.com/brand or domain.com"
                        className="w-full px-4 py-3 bg-[#F4F2ED]/60 border border-[#0A0A0A]/20 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#0A0A0A]"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Services Needed */}
                <div className="space-y-4">
                  <div className="text-xs font-mono font-bold tracking-widest text-[#0A0A0A]/60 uppercase border-b border-[#0A0A0A]/10 pb-2">
                    02 • WHAT DO YOU NEED? (SELECT APPLICABLE)
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {SERVICE_OPTIONS.map((srv) => {
                      const isSelected = formData.services.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() => toggleService(srv)}
                          className={cn(
                            "px-4 py-2 text-xs font-mono uppercase tracking-wider border transition-all cursor-pointer",
                            isSelected
                              ? "bg-[#0A0A0A] text-white border-[#0A0A0A] font-bold shadow-xs"
                              : "bg-[#F4F2ED]/80 text-[#0A0A0A]/80 border-[#0A0A0A]/20 hover:border-[#0A0A0A]"
                          )}
                        >
                          {isSelected ? `✓ ${srv}` : `+ ${srv}`}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Section 3: Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Budget */}
                  <div className="space-y-3">
                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-[#0A0A0A]/60">
                      ESTIMATED BUDGET
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {BUDGET_OPTIONS.map((bgt) => (
                        <button
                          key={bgt}
                          type="button"
                          aria-pressed={formData.budget === bgt}
                          onClick={() => setFormData({ ...formData, budget: bgt })}
                          className={cn(
                            "py-2.5 px-3 text-xs font-mono border transition-all text-center cursor-pointer",
                            formData.budget === bgt
                              ? "bg-[#0A0A0A] text-[#C8FF3D] border-[#0A0A0A] font-bold"
                              : "bg-[#F4F2ED]/60 text-[#0A0A0A]/80 border-[#0A0A0A]/20 hover:border-[#0A0A0A]"
                          )}
                        >
                          {bgt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-3">
                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-[#0A0A0A]/60">
                      TARGET TIMELINE
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {TIMELINE_OPTIONS.map((time) => (
                        <button
                          key={time}
                          type="button"
                          aria-pressed={formData.timeline === time}
                          onClick={() =>
                            setFormData({ ...formData, timeline: time })
                          }
                          className={cn(
                            "py-2.5 px-3 text-xs font-mono border transition-all text-center cursor-pointer",
                            formData.timeline === time
                              ? "bg-[#0A0A0A] text-[#C8FF3D] border-[#0A0A0A] font-bold"
                              : "bg-[#F4F2ED]/60 text-[#0A0A0A]/80 border-[#0A0A0A]/20 hover:border-[#0A0A0A]"
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 4: Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#0A0A0A]"
                  >
                    Project Overview / Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about the business, goals, and what you need to create or improve..."
                    className={cn(
                      "w-full px-4 py-3 bg-[#F4F2ED]/60 border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#0A0A0A]",
                      errors.message
                        ? "border-red-500 bg-red-50/30"
                        : "border-[#0A0A0A]/20"
                    )}
                    required
                  />
                  {errors.message && (
                    <p className="text-[11px] font-mono text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-[#0A0A0A]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <Button
                    type="submit"
                    variant="primary"
                    icon="right"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto text-sm py-4 px-8"
                  >
                    {isSubmitting ? "SENDING INQUIRY..." : "START THE CONVERSATION"}
                  </Button>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#0A0A0A]/60">
                    <ShieldCheck className="w-4 h-4 text-[#0A0A0A]" />
                    <span>DIRECT INTAKE • RESPONSES WITHIN 24 HOURS</span>
                  </div>
                </div>
              </form>
            )}
          </FrameContainer>
        </div>
      </main>

      <Footer />
    </div>
  );
}
