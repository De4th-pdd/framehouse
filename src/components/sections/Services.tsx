"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Globe,
  ShoppingBag,
  Cpu,
  Workflow,
  Sparkles,
  Laptop,
  Smartphone,
  Check,
  Play,
  RotateCw,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FrameContainer } from "@/components/common/FrameContainer";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function Services() {
  const [activeService, setActiveService] = useState(0);
  const current = services[activeService];

  // Interactive states for the preview playgrounds
  const [websiteView, setWebsiteView] = useState<"desktop" | "mobile">("desktop");
  const [ecomVariant, setEcomVariant] = useState(0);
  const [ecomInCart, setEcomInCart] = useState(false);
  const [appRange, setAppRange] = useState<"24h" | "7d" | "30d">("7d");
  const [aiStep, setAiStep] = useState(2);
  const [aiRunning, setAiRunning] = useState(false);

  const triggerAiPipeline = () => {
    if (aiRunning) return;
    setAiRunning(true);
    setAiStep(0);
    setTimeout(() => setAiStep(1), 500);
    setTimeout(() => setAiStep(2), 1100);
    setTimeout(() => {
      setAiStep(3);
      setAiRunning(false);
    }, 1700);
  };

  return (
    <section
      id="services"
      data-theme="dark"
      className="py-24 sm:py-36 lg:py-44 bg-[#0A0A0A] text-white relative overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <SectionHeader
          eyebrow="03 / CAPABILITIES"
          title="From first frame to final product."
          description="We are intentionally broader than a traditional web design agency. We engineer full digital products, bespoke software, and intelligent automations."
          theme="dark"
        />

        {/* Interactive Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Typographic Interactive Editorial List */}
          <div className="lg:col-span-5 divide-y divide-white/10 border-t border-b border-white/10">
            {services.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveService(idx)}
                onMouseEnter={() => setActiveService(idx)}
                onFocus={() => setActiveService(idx)}
                tabIndex={0}
                className={cn(
                  "group py-6 sm:py-8 px-4 sm:px-6 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8FF3D] rounded-xs select-none",
                  activeService === idx
                    ? "bg-white/[0.04] border-l-2 border-l-[#C8FF3D] pl-5"
                    : "hover:bg-white/[0.015]"
                )}
                role="button"
                aria-pressed={activeService === idx}
                aria-label={`Capability: ${item.title}`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span
                      className={cn(
                        "text-xs sm:text-sm font-mono tracking-widest transition-colors",
                        activeService === idx ? "text-[#C8FF3D] font-bold" : "text-white/30"
                      )}
                    >
                      {item.number}
                    </span>
                    <h3
                      className={cn(
                        "text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors",
                        activeService === idx
                          ? "text-white"
                          : "text-white/50 group-hover:text-white/90"
                      )}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <ArrowRight
                    className={cn(
                      "w-4 h-4 transition-all duration-300",
                      activeService === idx
                        ? "text-[#C8FF3D] translate-x-1"
                        : "text-white/20 group-hover:text-white/50"
                    )}
                  />
                </div>

                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed max-w-md transition-colors",
                    activeService === idx ? "text-white/80" : "text-white/40"
                  )}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Live Art-Directed Dynamic Preview Stage */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <FrameContainer
              theme="dark"
              className="p-6 sm:p-8 bg-[#111317] border-white/20 shadow-2xl space-y-6"
            >
              {/* Preview Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF3D]">
                  <Layers className="w-3.5 h-3.5" />
                  <span>STUDIO SCOPE // {current.number}</span>
                </div>
                <span className="text-[11px] font-mono text-white/40 uppercase">
                  SCOPE OF ENGAGEMENT
                </span>
              </div>

              {/* Dynamic Headline & Subtext */}
              <div className="space-y-2">
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {current.previewHeadline}
                </h4>
                <p className="text-sm text-white/70 leading-relaxed font-sans">
                  {current.previewSub}
                </p>
              </div>

              {/* BESPOKE INTERACTIVE VISUAL PLAYGROUND PER SERVICE (NEVER AN EMPTY RECTANGLE) */}
              <div className="p-4 sm:p-5 bg-[#090A0D] border border-white/10 rounded-xs relative overflow-hidden min-h-[240px]">
                {/* 01 WEBSITES: Responsive Editorial Page Preview */}
                {activeService === 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-xs font-mono text-white/50">
                      <div className="flex items-center gap-2">
                        <Globe className="w-3.5 h-3.5 text-[#C8FF3D]" />
                        <span className="truncate">PREVIEW // EDITORIAL SHOWCASE</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/5 p-0.5 rounded-xs border border-white/10">
                        <button
                          onClick={() => setWebsiteView("desktop")}
                          className={cn(
                            "px-2 py-0.5 text-[10px] rounded-xs flex items-center gap-1 transition-colors",
                            websiteView === "desktop" ? "bg-white/20 text-white font-bold" : "text-white/40 hover:text-white"
                          )}
                        >
                          <Laptop className="w-3 h-3" />
                          <span>1440</span>
                        </button>
                        <button
                          onClick={() => setWebsiteView("mobile")}
                          className={cn(
                            "px-2 py-0.5 text-[10px] rounded-xs flex items-center gap-1 transition-colors",
                            websiteView === "mobile" ? "bg-white/20 text-white font-bold" : "text-white/40 hover:text-white"
                          )}
                        >
                          <Smartphone className="w-3 h-3" />
                          <span>390</span>
                        </button>
                      </div>
                    </div>

                    {/* Responsive Simulated Content Frame */}
                    <div
                      className={cn(
                        "mx-auto border border-white/15 bg-[#12141A] p-4 rounded-xs transition-all duration-500 overflow-hidden",
                        websiteView === "desktop" ? "w-full" : "max-w-[280px]"
                      )}
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-[9px] font-mono text-white/40 border-b border-white/10 pb-1.5">
                          <span>EDITION 01</span>
                          <span className="text-[#C8FF3D]">RESPONSIVE GRID</span>
                        </div>
                        <h5 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          Form &amp; Digital Architecture
                        </h5>
                        <p className="text-[11px] text-white/70 leading-relaxed font-sans line-clamp-2">
                          Engineered layouts that seamlessly adapt from 320px mobile displays to 4K studio monitors.
                        </p>
                        <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-[#C8FF3D]">
                          <span>PERFORMANCE FIRST</span>
                          <span>FRAME: FULL-BLEED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 02 E-COMMERCE: Product Detail & Interaction */}
                {activeService === 1 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-xs font-mono text-white/50">
                      <div className="flex items-center gap-2">
                        <ShoppingBag className="w-3.5 h-3.5 text-[#C8FF3D]" />
                        <span>FLAGSHIP COMMERCE ENGINE</span>
                      </div>
                      <span className="text-[10px] text-[#C8FF3D]">0% CHECKOUT FRICTION</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                      {/* Left: Product Miniature */}
                      <div className="sm:col-span-5 bg-white/5 p-3 rounded-xs border border-white/10 text-center space-y-2">
                        <div className="h-20 bg-[#16181F] rounded-xs flex items-center justify-center relative overflow-hidden">
                          <div
                            className="w-12 h-12 rounded-xs border transition-all duration-300"
                            style={{
                              backgroundColor: ecomVariant === 0 ? "#1C1B1A" : ecomVariant === 1 ? "#4A3E31" : "#D4A373",
                              borderColor: "#ffffff30",
                            }}
                          />
                        </div>
                        <div className="text-[10px] font-mono text-white/60">ONYX MONOLITH TABLE</div>
                        <div className="text-xs font-mono font-bold text-white">$1,850 USD</div>
                      </div>

                      {/* Right: Variant selection and Add to Cart */}
                      <div className="sm:col-span-7 space-y-3 font-mono">
                        <div className="text-[10px] text-white/50 uppercase">FINISH SELECTION:</div>
                        <div className="flex gap-2">
                          {["Obsidian", "Smoked Ash", "Raw Bronze"].map((name, idx) => (
                            <button
                              key={name}
                              onClick={() => setEcomVariant(idx)}
                              className={cn(
                                "flex-1 py-1.5 px-2 border text-[10px] transition-all rounded-xs",
                                ecomVariant === idx
                                  ? "border-[#C8FF3D] bg-[#C8FF3D]/10 text-white font-bold"
                                  : "border-white/10 text-white/50 hover:border-white/20"
                              )}
                            >
                              {name}
                            </button>
                          ))}
                        </div>

                        <button
                          onClick={() => setEcomInCart(!ecomInCart)}
                          className={cn(
                            "w-full py-2.5 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 rounded-xs flex items-center justify-center gap-2",
                            ecomInCart
                              ? "bg-[#C8FF3D] text-[#0A0A0A]"
                              : "bg-white text-[#0A0A0A] hover:bg-[#C8FF3D]"
                          )}
                        >
                          {ecomInCart ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>IN BAG (1 ITEM)</span>
                            </>
                          ) : (
                            <span>ADD TO BAG // $1,850</span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 03 WEB APPS: High-Performance Data Interface */}
                {activeService === 2 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-xs font-mono text-white/50">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-[#C8FF3D]" />
                        <span>APP WORKSPACE // CLUSTER 01</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF3D] animate-ping" />
                        <span className="text-[10px] text-white/70">99.98% SLA</span>
                      </div>
                    </div>

                    {/* Operational App Cards */}
                    <div className="grid grid-cols-3 gap-2 text-center font-mono">
                      <div className="p-2.5 bg-white/5 border border-white/10 rounded-xs">
                        <div className="text-[9px] text-white/40 uppercase">AVG LATENCY</div>
                        <div className="text-sm font-bold text-[#C8FF3D]">12ms</div>
                      </div>
                      <div className="p-2.5 bg-white/5 border border-white/10 rounded-xs">
                        <div className="text-[9px] text-white/40 uppercase">THROUGHPUT</div>
                        <div className="text-sm font-bold text-white">4.2k req/s</div>
                      </div>
                      <div className="p-2.5 bg-white/5 border border-white/10 rounded-xs">
                        <div className="text-[9px] text-white/40 uppercase">UPTIME</div>
                        <div className="text-sm font-bold text-white">100.0%</div>
                      </div>
                    </div>

                    {/* Chart Bar Visualization */}
                    <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xs space-y-2">
                      <div className="flex justify-between text-[10px] font-mono text-white/50">
                        <span>REAL-TIME TELEMETRY</span>
                        <div className="flex gap-2">
                          {(["24h", "7d", "30d"] as const).map((r) => (
                            <button
                              key={r}
                              onClick={() => setAppRange(r)}
                              className={cn(
                                "uppercase transition-colors",
                                appRange === r ? "text-[#C8FF3D] font-bold" : "text-white/40 hover:text-white"
                              )}
                            >
                              {r}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Bar graph */}
                      <div className="h-12 flex items-end gap-1 pt-1">
                        {[45, 60, 35, 80, 95, 70, 85, 40, 65, 90, 100, 75, 85, 60].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-white/20 hover:bg-[#C8FF3D] rounded-t-xs transition-all duration-300"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 04 SOFTWARE: Product Architecture & Workflows */}
                {activeService === 3 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-xs font-mono text-white/50">
                      <div className="flex items-center gap-2">
                        <Workflow className="w-3.5 h-3.5 text-[#C8FF3D]" />
                        <span>MICROSERVICE TOPOLOGY</span>
                      </div>
                      <span className="text-[10px] text-[#C8FF3D]">ZERO COMPROMISES</span>
                    </div>

                    {/* Architectural Flow Diagram */}
                    <div className="grid grid-cols-4 gap-2 text-center font-mono">
                      {[
                        { title: "GATEWAY", tech: "Edge Proxy" },
                        { title: "CORE LOGIC", tech: "TypeScript" },
                        { title: "EVENT BUS", tech: "Async Queue" },
                        { title: "POSTGRES", tech: "Cluster" },
                      ].map((node, i) => (
                        <div
                          key={node.title}
                          className="p-2.5 bg-white/5 border border-white/10 rounded-xs space-y-1 relative"
                        >
                          <div className="text-[10px] font-bold text-white">{node.title}</div>
                          <div className="text-[9px] text-[#C8FF3D]">{node.tech}</div>
                          {i < 3 && (
                            <span className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-white/30 text-xs">
                              →
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* JSON Schema Inspection View */}
                    <div className="p-3 bg-black/60 border border-white/10 rounded-xs font-mono text-[11px] text-white/70 space-y-1">
                      <div className="text-[9px] text-white/40 uppercase">{"// LIVE PAYLOAD SPECIFICATION"}</div>
                      <div className="text-white/80">
                        {`{ service: "core_cluster", status: "healthy", latency_p99: "8ms", isolation: "tenant_isolated" }`}
                      </div>
                    </div>
                  </div>
                )}

                {/* 05 AI & AUTOMATION: Pragmatic Intelligent System Pipeline (NEVER EMPTY) */}
                {activeService === 4 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-xs font-mono text-white/50">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#C8FF3D]" />
                        <span>AUTOMATION PIPELINE // AUDIT STREAM</span>
                      </div>
                      <button
                        onClick={triggerAiPipeline}
                        disabled={aiRunning}
                        className="flex items-center gap-1.5 px-2 py-0.5 bg-white/10 hover:bg-[#C8FF3D] hover:text-[#0A0A0A] rounded-xs text-[10px] text-white transition-colors"
                      >
                        {aiRunning ? <RotateCw className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3 text-[#C8FF3D]" />}
                        <span>RUN PIPELINE</span>
                      </button>
                    </div>

                    {/* 4-Stage Horizontal Connected Pipeline */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono">
                      {[
                        { step: "01", name: "INPUT", sub: "Raw Briefs / API" },
                        { step: "02", name: "PARSER", sub: "Vector Embeddings" },
                        { step: "03", name: "AGENT", sub: "Multi-Step Logic" },
                        { step: "04", name: "OUTPUT", sub: "Database Persist" },
                      ].map((st, idx) => {
                        const isCurrent = aiStep === idx;
                        const isDone = aiStep > idx;

                        return (
                          <div
                            key={st.step}
                            className={cn(
                              "p-2.5 border rounded-xs transition-all duration-300 space-y-1 relative",
                              isCurrent
                                ? "border-[#C8FF3D] bg-[#C8FF3D]/10 text-white shadow-xs"
                                : isDone
                                ? "border-white/20 bg-white/5 text-white/80"
                                : "border-white/5 bg-transparent text-white/30"
                            )}
                          >
                            <div className="flex justify-between items-center text-[9px]">
                              <span>{st.step}</span>
                              <span className={isCurrent ? "text-[#C8FF3D] font-bold" : "opacity-40"}>
                                {isCurrent ? "ACTIVE" : isDone ? "DONE" : "IDLE"}
                              </span>
                            </div>
                            <div className="text-xs font-bold tracking-tight text-white">{st.name}</div>
                            <div className="text-[9px] text-white/60 truncate">{st.sub}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Real-time Activity Telemetry Console */}
                    <div className="p-3 bg-black/60 border border-white/10 rounded-xs font-mono text-[11px] space-y-1">
                      <div className="text-[9px] text-white/40 uppercase">{"// REAL-TIME EXECUTION LOG"}</div>
                      <div className="space-y-0.5 text-[10px]">
                        <div className="text-white/60">
                          [10:48:01] INCOMING PAYLOAD RECEIVED • 48 TOKENS INGESTED
                        </div>
                        <div className="text-[#C8FF3D]">
                          [10:48:02] CONTEXT PARSER COMPLETED (99.2% RECALL SCORE)
                        </div>
                        <div className="text-white/80">
                          [10:48:03] AGENT ROUTED TO PRODUCTION DB • ZERO BOTTLENECK
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Specific Deliverables List */}
              <div className="space-y-2.5 pt-2 border-t border-white/10">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                  CORE DELIVERABLES:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-center gap-2 text-xs font-mono text-white/80"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF3D] shrink-0" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase text-white/40 mr-1">
                  TECH:
                </span>
                {current.techFocus.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </FrameContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

