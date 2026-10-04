"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FrameContainer } from "@/components/common/FrameContainer";
import { Button } from "@/components/common/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = [
  "Website",
  "E-commerce",
  "Web App",
  "Software",
  "Automation",
  "Redesign",
  "Not sure yet",
];

const BUDGET_RANGES = [
  "Under PKR 100k",
  "PKR 100k – 200k",
  "PKR 200k – 300k",
  "PKR 300k+",
  "Not sure yet",
];

const TIMELINE_OPTIONS = [
  "Flexible",
  "1 – 2 months",
  "2 – 3 months",
  "Specific deadline",
];

export function ProjectBrief() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    projectType: "Website",
    budgetRange: "PKR 100k – 200k",
    timeline: "Flexible",
    details: "",
    websiteUrl: "",
    hp_title: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [inquiryId, setInquiryId] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.details.trim()) {
      errs.details = "Please share a brief summary of what you want to build.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "homepage_brief",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit project brief.");
      }

      setInquiryId(data.inquiryId || null);
      setSubmitted(true);
    } catch (err: any) {
      console.error("[ProjectBrief] Submission failed:", err);
      setSubmissionError(
        err.message || "Network error. Please click below to email your brief directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" data-section="contact" className="scroll-mt-20 sm:scroll-mt-24 py-24 sm:py-36 lg:py-44 bg-[#F4F2ED] border-t border-[#0A0A0A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#0A0A0A]/10">
          <SectionHeader
            eyebrow="09 / PROJECT INTAKE"
            title="Have something worth building?"
            description="Tell us what you're building, what isn't working, and where you want to take it. We review all briefs directly."
            theme="light"
          />

          <div className="space-y-1 font-mono text-xs self-start md:self-end">
            <span className="text-[#0A0A0A]/50 uppercase tracking-widest block text-[10px]">
              RESPONSE WINDOW
            </span>
            <span className="font-bold text-[#0A0A0A]">
              Usually replying within 24 hours.
            </span>
          </div>
        </div>

        {/* Structured Form Container */}
        <div className="max-w-4xl mx-auto">
          <FrameContainer
            theme="light"
            withCorners={true}
            className="p-8 sm:p-12 lg:p-14 bg-white/90 border-[#0A0A0A]/15 shadow-xl rounded-xs text-[#0A0A0A]"
          >
            {submitted ? (
              <div className="py-12 sm:py-16 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-[#0A0A0A] text-[#C8FF3D] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-3xl font-extrabold tracking-tight text-[#0A0A0A]">
                    Project Brief Received.
                  </h3>
                  <p className="text-sm text-[#0A0A0A]/80 leading-relaxed font-normal">
                    Thank you, <span className="font-bold text-[#0A0A0A]">{formData.name}</span>. We will review your project requirements and follow up directly at{" "}
                    <span className="font-mono text-[#0A0A0A] font-semibold">{formData.email}</span> within 24 hours.
                  </p>
                  {inquiryId && (
                    <div className="pt-2">
                      <span className="px-3 py-1 bg-[#0A0A0A]/5 border border-[#0A0A0A]/10 rounded-xs text-[11px] font-mono text-[#0A0A0A]/70 uppercase tracking-wider">
                        REFERENCE ID: {inquiryId}
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setInquiryId(null);
                      setFormData({
                        name: "",
                        email: "",
                        business: "",
                        projectType: "Website",
                        budgetRange: "PKR 100k – 200k",
                        timeline: "Flexible",
                        details: "",
                        websiteUrl: "",
                        hp_title: "",
                      });
                    }}
                    className="py-3 px-6 border border-[#0A0A0A]/20 text-xs font-mono uppercase font-bold hover:bg-black/5 transition-colors rounded-xs cursor-pointer"
                  >
                    SUBMIT ANOTHER BRIEF
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 font-mono text-xs">
                {/* Anti-spam honeypot (invisible to humans) */}
                <input
                  type="text"
                  name="hp_title"
                  value={formData.hp_title}
                  onChange={(e) => setFormData({ ...formData, hp_title: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                {/* 01: Contact Information */}
                <div className="space-y-4">
                  <span className="text-[10px] tracking-widest uppercase text-[#0A0A0A]/40 block">
                    01 // CONTACT DETAILS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-[#0A0A0A] uppercase block">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alex Jensen"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={cn(
                          "w-full px-3.5 py-3 bg-[#FAF8F5] border text-xs text-[#0A0A0A] rounded-xs focus:outline-none transition-colors",
                          errors.name
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#0A0A0A]/15 focus:border-[#0A0A0A]"
                        )}
                      />
                      {errors.name && (
                        <p className="text-[10px] text-red-600 font-sans">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-[#0A0A0A] uppercase block">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={cn(
                          "w-full px-3.5 py-3 bg-[#FAF8F5] border text-xs text-[#0A0A0A] rounded-xs focus:outline-none transition-colors",
                          errors.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#0A0A0A]/15 focus:border-[#0A0A0A]"
                        )}
                      />
                      {errors.email && (
                        <p className="text-[10px] text-red-600 font-sans">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-[#0A0A0A] uppercase block">
                        BUSINESS / BRAND NAME
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Studio"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#0A0A0A]/15 text-xs text-[#0A0A0A] rounded-xs focus:outline-none focus:border-[#0A0A0A] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-[#0A0A0A] uppercase block">
                        CURRENT WEBSITE (OPTIONAL)
                      </label>
                      <input
                        type="text"
                        placeholder="https://yourwebsite.com"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#0A0A0A]/15 text-xs text-[#0A0A0A] rounded-xs focus:outline-none focus:border-[#0A0A0A] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* 02: What are you building? */}
                <div className="space-y-3 pt-4 border-t border-[#0A0A0A]/10">
                  <span className="text-[10px] tracking-widest uppercase text-[#0A0A0A]/40 block">
                    02 // WHAT ARE YOU BUILDING?
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={cn(
                          "px-3.5 py-2 border text-xs tracking-wider uppercase transition-all rounded-xs cursor-pointer",
                          formData.projectType === type
                            ? "bg-[#0A0A0A] text-white border-[#0A0A0A] font-bold shadow-xs"
                            : "bg-[#FAF8F5] text-[#0A0A0A]/70 border-[#0A0A0A]/15 hover:border-[#0A0A0A]/40"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 03: Expected Budget Range (Aligned with public packages) */}
                <div className="space-y-3 pt-4 border-t border-[#0A0A0A]/10">
                  <span className="text-[10px] tracking-widest uppercase text-[#0A0A0A]/40 block">
                    03 // INVESTMENT RANGE
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {BUDGET_RANGES.map((range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => setFormData({ ...formData, budgetRange: range })}
                        className={cn(
                          "px-3.5 py-2 border text-xs tracking-wider uppercase transition-all rounded-xs cursor-pointer",
                          formData.budgetRange === range
                            ? "bg-[#0A0A0A] text-white border-[#0A0A0A] font-bold shadow-xs"
                            : "bg-[#FAF8F5] text-[#0A0A0A]/70 border-[#0A0A0A]/15 hover:border-[#0A0A0A]/40"
                        )}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 04: Timeline */}
                <div className="space-y-3 pt-4 border-t border-[#0A0A0A]/10">
                  <span className="text-[10px] tracking-widest uppercase text-[#0A0A0A]/40 block">
                    04 // TIMELINE
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {TIMELINE_OPTIONS.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: time })}
                        className={cn(
                          "px-3.5 py-2 border text-xs tracking-wider uppercase transition-all rounded-xs cursor-pointer",
                          formData.timeline === time
                            ? "bg-[#0A0A0A] text-white border-[#0A0A0A] font-bold shadow-xs"
                            : "bg-[#FAF8F5] text-[#0A0A0A]/70 border-[#0A0A0A]/15 hover:border-[#0A0A0A]/40"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 05: Project Details */}
                <div className="space-y-2 pt-4 border-t border-[#0A0A0A]/10">
                  <label className="text-[11px] font-bold text-[#0A0A0A] uppercase block">
                    05 // PROJECT DETAILS *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the project goals, current challenges, required features, and any inspiration..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className={cn(
                      "w-full px-3.5 py-3 bg-[#FAF8F5] border text-xs text-[#0A0A0A] rounded-xs focus:outline-none transition-colors font-sans",
                      errors.details
                        ? "border-red-500 focus:border-red-500"
                        : "border-[#0A0A0A]/15 focus:border-[#0A0A0A]"
                    )}
                  />
                  {errors.details && (
                    <p className="text-[10px] text-red-600 font-sans">{errors.details}</p>
                  )}
                </div>

                {/* Submission Error Banner with Direct Mailto Fallback */}
                {submissionError && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-900 rounded-xs space-y-2">
                    <div className="flex items-center gap-2 font-bold text-xs">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span>{submissionError}</span>
                    </div>
                    <p className="text-[11px] font-sans text-red-700">
                      Your inquiry will not be lost. Click below to open an email draft with your brief pre-filled:
                    </p>
                    <a
                      href={`mailto:hello@framehouse.com?subject=Project Brief: ${encodeURIComponent(formData.name || "Inquiry")}&body=${encodeURIComponent(
                        `Hi Framehouse,\n\nName: ${formData.name}\nEmail: ${formData.email}\nBusiness: ${formData.business}\nProject Type: ${formData.projectType}\nBudget Range: ${formData.budgetRange}\nTimeline: ${formData.timeline}\nWebsite: ${formData.websiteUrl}\n\nProject Details:\n${formData.details}\n`
                      )}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold underline hover:text-red-950 pt-1"
                    >
                      <span>OPEN EMAIL CLIENT DIRECTLY (hello@framehouse.com) →</span>
                    </a>
                  </div>
                )}

                {/* Submit Row */}
                <div className="pt-4 border-t border-[#0A0A0A]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-[11px] font-mono text-[#0A0A0A]/60">
                    Direct founder review • Usually replying within 24 hours.
                  </p>

                  <Button
                    type="submit"
                    variant="primary"
                    icon="up-right"
                    disabled={isSubmitting}
                    className="py-4 px-8 text-xs font-bold"
                  >
                    {isSubmitting ? "SENDING BRIEF..." : "SEND PROJECT BRIEF"}
                  </Button>
                </div>
              </form>
            )}
          </FrameContainer>
        </div>
      </div>
    </section>
  );
}
