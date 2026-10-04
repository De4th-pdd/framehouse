"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Search,
  Command,
  TrendingUp,
  X,
} from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { FrameContainer } from "@/components/common/FrameContainer";
import {
  MERIDIAN_METRICS,
  MERIDIAN_WORKSTREAMS,
  COMMAND_ACTIONS,
  WorkstreamItem,
} from "@/data/concepts/meridian";
import { cn } from "@/lib/utils";

export function MeridianShowcase() {
  const [timeframe, setTimeframe] = useState<"24H" | "7D" | "30D" | "YTD">("7D");
  const [selectedEnv, setSelectedEnv] = useState<"ALL" | "Production" | "Staging" | "Sandbox">("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [highDensityOnly, setHighDensityOnly] = useState(false);
  const [statusNotice, setStatusNotice] = useState<string | null>(null);

  // Keyboard shortcut listener for ⌘K / Ctrl+K and Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isCommandOpen) {
        setIsCommandOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCommandOpen]);

  // Lock body scroll when Command Palette is open
  useEffect(() => {
    if (!isCommandOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isCommandOpen]);

  const metrics = MERIDIAN_METRICS[timeframe];

  // Filter workstreams based on environment, high-density flag, and search query
  const filteredWorkstreams = useMemo(() => {
    return MERIDIAN_WORKSTREAMS.filter((item) => {
      const matchEnv = selectedEnv === "ALL" || item.environment === selectedEnv;
      const matchDensity = !highDensityOnly || item.status === "Active" || item.unitsNum > 50;
      const matchSearch =
        item.stream.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.module.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase());
      return matchEnv && matchDensity && matchSearch;
    });
  }, [selectedEnv, highDensityOnly, searchQuery]);

  // Construct SVG polygon points for smooth liquidity trajectory curve
  const svgPoints = useMemo(() => {
    const points = metrics.points;
    const width = 600;
    const height = 140;
    const step = width / (points.length - 1);
    const coords = points.map((p, idx) => {
      const x = Math.round(idx * step);
      const y = Math.round(height - (p / 110) * height + 10);
      return `${x},${y}`;
    });
    return coords.join(" ");
  }, [metrics]);

  return (
    <div className="relative" data-theme="dark">
      <FrameContainer
        theme="dark"
        withCorners={true}
        className="p-6 sm:p-10 lg:p-14 bg-[#090B0E] border-white/15 relative overflow-hidden transition-all duration-300 shadow-xl text-white"
      >
        {/* Subtle Slate Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem]"
          aria-hidden="true"
        />

        {/* Top Header & Status Bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8 sm:mb-10">
          <div className="flex items-center gap-3">
            <Badge variant="concept">CONCEPT / 02</Badge>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-white/70">
              MERIDIAN // CONCEPT — BUSINESS OPERATIONS APP
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-white/70">
            <span>SIMULATED DATA — CONCEPT UI</span>
            <span className="text-white/20">•</span>
            <span className="text-[#C8FF3D] font-bold">KEYBOARD-DRIVEN PROTOTYPE</span>
          </div>
        </div>

        {/* Title & Product Overview */}
        <div className="relative z-10 space-y-6 sm:space-y-8 mb-8 sm:mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-mono tracking-[0.22em] text-[#C8FF3D] uppercase font-semibold">
                DENSE OPERATIONAL INTERFACE CONCEPT
              </span>
              <h3 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.02] font-sans">
                MERIDIAN
              </h3>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl font-normal leading-relaxed pt-1">
                A self-initiated operations dashboard concept exploring dense information architecture, keyboard workflows and fast state transitions.
              </p>
            </div>

            {/* Interactive Command Bar Trigger */}
            <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
              <button
                onClick={() => setIsCommandOpen(true)}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-mono tracking-wider uppercase text-white rounded-xs transition-all shadow-xs"
              >
                <Command className="w-3.5 h-3.5 text-[#C8FF3D]" />
                <span>COMMAND PALETTE</span>
                <kbd className="px-1.5 py-0.5 text-[9px] bg-black/40 border border-white/20 rounded-xs text-white/70 font-mono">
                  ⌘K
                </kbd>
              </button>
            </div>
          </div>
        </div>

        {/* Main Application Interface Preview Stage */}
        <div className="relative z-10 bg-[#0F1218] border border-white/15 rounded-xs p-6 sm:p-8 space-y-8 shadow-2xl">
          {/* Top Operational Telemetry Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-white/10">
            <div className="p-4 bg-white/5 border border-white/10 rounded-xs space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                ACTIVE PROJECTS
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                {metrics.activeProjects}
              </div>
              <div className="text-xs font-mono text-[#C8FF3D] font-bold flex items-center gap-1 pt-0.5">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{metrics.activityChange}</span>
              </div>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-xs space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                OPEN TASKS
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                {metrics.openTasks}
              </div>
              <div className="text-xs font-mono text-white/60 pt-0.5">
                All prioritized & assigned
              </div>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-xs space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                ORDERS TODAY
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                {metrics.orders}
              </div>
              <div className="text-xs font-mono text-[#C8FF3D] font-bold pt-0.5">
                {metrics.ordersSub}
              </div>
            </div>
          </div>

          {/* Real SVG Operational Throughput Chart with Timeframe Switcher */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#C8FF3D]" />
                <span className="font-bold uppercase tracking-wider text-white">
                  ORDER &amp; WORKFLOW ACTIVITY
                </span>
                <span className="text-white/40">({timeframe} TIMEFRAME)</span>
              </div>

              {/* Timeframe Selector Pills */}
              <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-xs text-xs font-mono">
                {(["24H", "7D", "30D", "YTD"] as const).map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setTimeframe(tf)}
                    className={cn(
                      "px-3 py-1 rounded-xs transition-all",
                      timeframe === tf
                        ? "bg-[#C8FF3D] text-black font-bold shadow-xs"
                        : "text-white/60 hover:text-white"
                    )}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* SVG Visualizer Chart */}
            <div className="w-full h-36 bg-black/40 border border-white/10 rounded-xs p-4 relative overflow-hidden flex items-end">
              <svg
                viewBox="0 0 600 140"
                preserveAspectRatio="none"
                className="w-full h-full text-[#C8FF3D]"
              >
                <defs>
                  <linearGradient id="meridianGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C8FF3D" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#C8FF3D" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Area under curve */}
                <polygon
                  points={`0,140 ${svgPoints} 600,140`}
                  fill="url(#meridianGrad)"
                />
                {/* Main Curve Line */}
                <polyline
                  fill="none"
                  stroke="#C8FF3D"
                  strokeWidth="2.5"
                  points={svgPoints}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="absolute top-3 right-4 text-[10px] font-mono text-white/50">
                INDEX SCALE: 100K BASE UNITS
              </div>
            </div>
          </div>

          {/* Interactive Transaction Ledger Section */}
          <div className="space-y-4 pt-2">
            {statusNotice && (
              <div className="p-3 bg-[#C8FF3D]/10 border border-[#C8FF3D]/30 rounded-xs flex items-center justify-between text-xs font-mono text-white">
                <span className="text-[#C8FF3D] font-medium">SYSTEM: {statusNotice}</span>
                <button
                  onClick={() => setStatusNotice(null)}
                  className="text-white/60 hover:text-white text-[10px] cursor-pointer ml-4"
                >
                  DISMISS ✕
                </button>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                  OPERATIONAL WORKFLOWS
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-white/10 text-white/80 rounded-xs">
                  {filteredWorkstreams.length} ENTRIES
                </span>
                {highDensityOnly && (
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-[#C8FF3D]/20 text-[#C8FF3D] rounded-xs font-bold">
                    ACTIVE FILTER
                  </span>
                )}
              </div>

              {/* Environment & Search Controls */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Environment Filter */}
                <div className="inline-flex p-0.5 bg-white/5 border border-white/10 rounded-xs text-[11px] font-mono">
                  {(["ALL", "Production", "Staging", "Sandbox"] as const).map((env) => (
                    <button
                      key={env}
                      onClick={() => setSelectedEnv(env)}
                      className={cn(
                        "px-2.5 py-1 rounded-xs transition-all",
                        selectedEnv === env
                          ? "bg-white text-black font-bold"
                          : "text-white/60 hover:text-white"
                      )}
                    >
                      {env}
                    </button>
                  ))}
                </div>

                {/* Instant Search Bar */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search workstreams..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 pr-3 py-1 bg-white/5 border border-white/15 text-xs font-mono text-white rounded-xs focus:outline-none focus:border-[#C8FF3D] w-36 sm:w-48 placeholder:text-white/30"
                  />
                </div>
              </div>
            </div>

            {/* High-Density Workstream Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="text-white/40 border-b border-white/10 text-[10px] uppercase tracking-wider">
                    <th className="py-2.5 px-3">WORKFLOW ID</th>
                    <th className="py-2.5 px-3">WORKFLOW</th>
                    <th className="py-2.5 px-3">BUSINESS MODULE</th>
                    <th className="py-2.5 px-3 text-right">VOLUME / UNITS</th>
                    <th className="py-2.5 px-3">STATUS</th>
                    <th className="py-2.5 px-3">HANDLER</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredWorkstreams.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-white/40 text-xs font-mono">
                        No workstreams found matching your filter criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredWorkstreams.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-white/5 transition-colors group cursor-default"
                      >
                        <td className="py-3 px-3 text-white/70 font-semibold">{item.id}</td>
                        <td className="py-3 px-3 text-white font-bold">{item.stream}</td>
                        <td className="py-3 px-3 text-white/60">{item.module}</td>
                        <td className="py-3 px-3 text-right font-bold text-white group-hover:text-[#C8FF3D] transition-colors">
                          {item.units}
                        </td>
                        <td className="py-3 px-3">
                          <span
                            className={cn(
                              "inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] rounded-xs font-bold uppercase",
                              item.status === "Completed"
                                ? "bg-[#C8FF3D]/10 text-[#C8FF3D] border border-[#C8FF3D]/30"
                                : item.status === "Active"
                                ? "bg-amber-400/10 text-amber-300 border border-amber-400/30"
                                : "bg-white/10 text-white/70 border border-white/20"
                            )}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                            <span>{item.status}</span>
                          </span>
                        </td>
                        <td className="py-3 px-3 text-white/50 text-[10px]">{item.handler}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </FrameContainer>

      {/* Interactive Command Palette Modal (Cmd+K) */}
      {isCommandOpen && (
        <div
          onClick={() => setIsCommandOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-label="Meridian Command Palette"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-[#0F1218] border border-white/20 rounded-xs shadow-2xl p-4 sm:p-6 space-y-4 animate-in zoom-in-95 duration-200"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-white/80">
                <Command className="w-4 h-4 text-[#C8FF3D]" />
                <span className="font-bold">MERIDIAN COMMAND PALETTE</span>
              </div>
              <button
                onClick={() => setIsCommandOpen(false)}
                className="text-white/40 hover:text-white transition-colors cursor-pointer"
                aria-label="Close command palette"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                AVAILABLE ACTIONS // PRESS TO SIMULATE
              </span>
              <div className="space-y-1.5 pt-2">
                {COMMAND_ACTIONS.map((cmd) => (
                  <button
                    key={cmd.id}
                    onClick={() => {
                      if (cmd.id === "env-all") {
                        setSelectedEnv("ALL");
                        setStatusNotice("Filter reset: Active stream shows all execution environments.");
                      } else if (cmd.id === "env-prod") {
                        setSelectedEnv("Production");
                        setStatusNotice("Environment filter: Active view Production only.");
                      } else if (cmd.id === "env-stg") {
                        setSelectedEnv("Staging");
                        setStatusNotice("Environment filter: Active view Staging only.");
                      } else if (cmd.id === "env-sbx") {
                        setSelectedEnv("Sandbox");
                        setStatusNotice("Environment filter: Active view Sandbox only.");
                      } else if (cmd.id === "filter-high") {
                        setHighDensityOnly((prev) => !prev);
                        setStatusNotice("High-density threshold (> 10k units) toggled.");
                      } else if (cmd.id === "export-data") {
                        setStatusNotice("Export simulated: Operational telemetry ledger compiled to local session bundle.");
                      }
                      setIsCommandOpen(false);
                    }}
                    className="w-full p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xs flex items-center justify-between text-xs font-mono text-white transition-all text-left group cursor-pointer"
                  >
                    <span className="group-hover:text-[#C8FF3D] transition-colors">{cmd.label}</span>
                    <kbd className="px-1.5 py-0.5 text-[9px] bg-black/60 border border-white/20 rounded-xs text-white/60">
                      {cmd.shortcut}
                    </kbd>
                  </button>
                ))}
              </div>
            </div>

            <div className="text-[10px] font-mono text-white/40 pt-2 border-t border-white/10 flex justify-between">
              <span>PROTOTYPE // SUB-50MS WORKSPACE NAVIGATION</span>
              <span>ESC TO EXIT</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
