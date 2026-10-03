"use client";

import { useState, useEffect } from "react";
import {
  ShoppingBag,
  ArrowRight,
  Check,
  X,
  Plus,
  Minus,
} from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { FrameContainer } from "@/components/common/FrameContainer";
import { NOOR_PRODUCTS, NOOR_LOOKBOOK, NoorProduct } from "@/data/concepts/noor";
import { cn } from "@/lib/utils";

export interface FurnitureFinish {
  id: string;
  name: string;
  label: string;
  texture: string;
  swatchGradient: string;
  bodyGradient: string;
  slabTone: string;
  price: string;
  priceNum: number;
  specs: {
    dimensions: string;
    weight: string;
    timber: string;
    stone: string;
    hardware: string;
  };
}

export const FURNITURE_FINISHES: FurnitureFinish[] = [
  {
    id: "charred-ash",
    name: "Charred Ash & Honed Alabaster",
    label: "CHARRED ASH",
    texture: "Deep Flamed Grain",
    swatchGradient: "radial-gradient(circle at 35% 30%, #383430 0%, #1E1C1A 50%, #0D0C0B 100%)",
    bodyGradient: "linear-gradient(175deg, #2B2724 0%, #1A1816 45%, #100F0E 100%)",
    slabTone: "linear-gradient(90deg, #F5F1E9 0%, #E8E2D5 50%, #FAF7F0 100%)",
    price: "$3,650 USD",
    priceNum: 3650,
    specs: {
      dimensions: "2100mm W × 520mm D × 640mm H",
      weight: "86 KG (Dry Assembled)",
      timber: "Quarter-Sawn Flamed Ash",
      stone: "Translucent Honed Alabaster",
      hardware: "Unlacquered Sand-Cast Bronze",
    },
  },
  {
    id: "raw-alabaster",
    name: "Honed Ivory Stone & Bleached Maple",
    label: "IVORY STONE",
    texture: "Matte Mineral Vein",
    swatchGradient: "radial-gradient(circle at 35% 30%, #FFFDF9 0%, #EFEAE1 50%, #D8D1C3 100%)",
    bodyGradient: "linear-gradient(175deg, #DDD6C8 0%, #C8BFB0 45%, #B5AB9B 100%)",
    slabTone: "linear-gradient(90deg, #FFFFFF 0%, #F5F0E6 50%, #EDE6D8 100%)",
    price: "$4,200 USD",
    priceNum: 4200,
    specs: {
      dimensions: "2100mm W × 520mm D × 640mm H",
      weight: "114 KG (Mineral Core)",
      timber: "Bleached Mountain Maple",
      stone: "Honed Greek White Alabaster",
      hardware: "Brushed Raw Champagne Bronze",
    },
  },
  {
    id: "living-bronze",
    name: "Aged Teak & Patinated Foundry Bronze",
    label: "AGED TEAK",
    texture: "Waxed River Timber",
    swatchGradient: "radial-gradient(circle at 35% 30%, #8A643E 0%, #5E4226 55%, #382615 100%)",
    bodyGradient: "linear-gradient(175deg, #5C4127 0%, #46301A 45%, #2F1E0F 100%)",
    slabTone: "linear-gradient(90deg, #E6DDD0 0%, #D1C5B4 50%, #DFD5C5 100%)",
    price: "$3,950 USD",
    priceNum: 3950,
    specs: {
      dimensions: "2100mm W × 520mm D × 640mm H",
      weight: "92 KG (Solid Heartwood)",
      timber: "Reclaimed River Teak (Waxed)",
      stone: "Smoked Honed Travertine",
      hardware: "Heavy Sand-Cast Living Bronze",
    },
  },
];

export function NoorShowcase() {
  const [viewMode, setViewMode] = useState<"lookbook" | "catalog">("lookbook");
  const [selectedProduct, setSelectedProduct] = useState<NoorProduct>(NOOR_PRODUCTS[1]); // Default to Mizan Credenza
  const [activeFinish, setActiveFinish] = useState(0);
  const [selectedSwatch, setSelectedSwatch] = useState(0);
  const [selectedSize, setSelectedSize] = useState<"S" | "M" | "L" | "XL">("M");
  const [checkoutNotice, setCheckoutNotice] = useState(false);
  
  const currentFinish = FURNITURE_FINISHES[activeFinish];
  
  // Interactive Cart Drawer state
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<{ product: NoorProduct; size: string; swatchName: string; quantity: number }[]>([
    {
      product: NOOR_PRODUCTS[1],
      size: "STD",
      swatchName: "Charred Ash & Honed Alabaster",
      quantity: 1,
    },
  ]);

  // Lock body scroll and handle Escape key when cart is open
  useEffect(() => {
    if (!cartOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCartOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cartOpen]);

  const handleAddToCart = (prod: NoorProduct, finishOrSwatchIdx?: number) => {
    let swatchToUse: string;
    let priceToUse: number = prod.priceNum;
    
    if (prod.id === "prod-02") {
      const finishObj = typeof finishOrSwatchIdx === "number" ? FURNITURE_FINISHES[finishOrSwatchIdx] : currentFinish;
      swatchToUse = finishObj.name;
      priceToUse = finishObj.priceNum;
    } else {
      swatchToUse = prod.swatches[typeof finishOrSwatchIdx === "number" ? finishOrSwatchIdx : selectedSwatch]?.name || prod.swatches[0]?.name;
    }

    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === prod.id && item.swatchName === swatchToUse
      );
      if (existing) {
        return prev.map((item) =>
          item === existing
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          product: { ...prod, priceNum: priceToUse },
          size: prod.id === "prod-02" ? "STD" : selectedSize,
          swatchName: swatchToUse,
          quantity: 1,
        },
      ];
    });
    setCartOpen(true);
  };

  const updateQuantity = (idx: number, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item, i) => {
          if (i === idx) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as typeof prev;
    });
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.product.priceNum * item.quantity, 0);

  return (
    <div className="relative">
      <FrameContainer
        theme="light"
        withCorners={true}
        className="p-6 sm:p-10 lg:p-14 bg-[#FAF8F5] border-[#121110]/15 relative overflow-hidden transition-all duration-300 shadow-md"
      >
        {/* Subtle Textured Paper Grain Feel */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#12111008_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]"
          aria-hidden="true"
        />

        {/* Top Monograph Meta Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#121110]/10 pb-6 mb-8 sm:mb-10">
          <div className="flex items-center gap-3">
            <Badge variant="concept">CONCEPT / 01</Badge>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#121110]/70">
              ATELIER NOOR // CONCEPT — LUXURY E-COMMERCE
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-[#121110]/70">
            <span>STOREFRONT CONCEPT</span>
            <span className="text-[#121110]/20">•</span>
            <span>EDITORIAL MONOGRAPH DEMO</span>
          </div>
        </div>

        {/* Brand Banner & Problem-Solution Statement */}
        <div className="relative z-10 space-y-6 sm:space-y-8 mb-8 sm:mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-mono tracking-[0.22em] text-[#8C6D46] uppercase font-semibold">
                CONTEMPORARY PUNJAB DESIGN HOUSE CONCEPT
              </span>
              <h3 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#121110] leading-[1.02] font-sans">
                ATELIER NOOR
              </h3>
              <p className="text-base sm:text-lg text-[#121110]/80 max-w-2xl font-normal leading-relaxed pt-1">
                A self-initiated storefront concept for a contemporary Pakistani design house, combining editorial storytelling with a considered e-commerce experience.
              </p>
            </div>

            {/* View Mode Switcher + Bag Button */}
            <div className="lg:col-span-4 flex flex-wrap items-center lg:justify-end gap-3">
              <div className="inline-flex p-1 bg-[#121110]/5 border border-[#121110]/10 rounded-xs">
                <button
                  onClick={() => setViewMode("lookbook")}
                  className={cn(
                    "px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-all rounded-xs",
                    viewMode === "lookbook"
                      ? "bg-[#121110] text-white font-bold shadow-xs"
                      : "text-[#121110]/60 hover:text-[#121110]"
                  )}
                >
                  01 // Lookbook
                </button>
                <button
                  onClick={() => setViewMode("catalog")}
                  className={cn(
                    "px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-all rounded-xs",
                    viewMode === "catalog"
                      ? "bg-[#121110] text-white font-bold shadow-xs"
                      : "text-[#121110]/60 hover:text-[#121110]"
                  )}
                >
                  02 // Catalog
                </button>
              </div>

              {/* Interactive Bag Trigger */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative inline-flex items-center gap-2 px-3.5 py-2 bg-[#121110] text-white text-xs font-mono tracking-wider uppercase hover:bg-[#282725] transition-colors rounded-xs shadow-xs"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>BAG ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Stage: Lookbook vs Catalog */}
        <div className="relative z-10 pt-2">
          {viewMode === "lookbook" ? (
            /* MODE A: HIGH-FASHION EDITORIAL PRODUCT MONOGRAPH */
            <div className="space-y-10 sm:space-y-12 animate-in fade-in duration-300">
              {/* Monograph Folio Header */}
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#121110]/10 pb-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#8C6D46] font-semibold">
                    AUTUMN / WINTER 2026 // MONOGRAPH SPECIMEN 02
                  </span>
                  <p className="text-sm font-serif italic text-[#121110]/70">
                    &ldquo;{NOOR_LOOKBOOK.quote}&rdquo;
                  </p>
                </div>
                <div className="text-xs font-mono text-[#121110]/50 tracking-wider">
                  CONCEPT SPECIFICATION // BESPOKE STUDY
                </div>
              </div>

              {/* Editorial Monograph Layout: Left Product Story & Specs, Right Full Editorial Viewport */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Left Column: Monograph Narrative & Specifications (4 Cols) */}
                <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
                  {/* Monograph Title & Summary */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono tracking-[0.28em] uppercase text-[#8C6D46] font-bold">
                      CONCEPT PRODUCT // ATELIER JOINERY STUDY
                    </span>
                    <h4 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[#121110] leading-[1.06]">
                      The Mizan Low Credenza
                    </h4>
                    <p className="text-sm sm:text-base text-[#121110]/80 leading-relaxed font-sans pt-2">
                      Hand-planed solid timber sideboard anchored with precision mortise-and-tenon
                      joinery, unlacquered sand-cast bronze pulls, and a monolithic honed slab surface.
                      Engineered as a concept demonstration for bespoke physical product e-commerce.
                    </p>
                  </div>

                  {/* Tactile Material Study Bar (Circular Macro-Texture Swatches) */}
                  <div className="space-y-4 pt-2 border-t border-[#121110]/10">
                    <div className="flex justify-between items-baseline text-xs font-mono">
                      <span className="text-[#121110]/60 uppercase tracking-widest text-[11px]">
                        MATERIAL STUDY:
                      </span>
                      <span className="font-bold text-[#121110] tracking-wide">
                        {currentFinish.name}
                      </span>
                    </div>

                    {/* Circular tactile macro swatches with rich textures */}
                    <div className="grid grid-cols-3 gap-3">
                      {FURNITURE_FINISHES.map((finish, idx) => (
                        <button
                          key={finish.id}
                          type="button"
                          onClick={() => setActiveFinish(idx)}
                          className={cn(
                            "group p-3 border rounded-xs text-left transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3",
                            activeFinish === idx
                              ? "border-[#121110] bg-white shadow-sm ring-1 ring-[#121110]/20"
                              : "border-[#121110]/15 bg-white/40 hover:bg-white hover:border-[#121110]/40"
                          )}
                          aria-label={`Select ${finish.name} finish`}
                        >
                          <div className="flex items-center justify-between">
                            {/* Circular Macro Texture Swatch */}
                            <div
                              className="w-8 h-8 rounded-full border border-black/20 shadow-xs relative overflow-hidden transition-transform group-hover:scale-105"
                              style={{
                                background: finish.swatchGradient,
                              }}
                            >
                              {/* Texture overlay grain */}
                              <div
                                className="absolute inset-0 opacity-40 mix-blend-overlay"
                                style={{
                                  backgroundImage:
                                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)",
                                }}
                              />
                            </div>
                            {activeFinish === idx && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#121110]" />
                            )}
                          </div>
                          <div>
                            <div className="text-xs font-mono font-bold text-[#121110] truncate">
                              {finish.label}
                            </div>
                            <div className="text-[10px] font-mono text-[#121110]/50 truncate">
                              {finish.texture}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Open Hairline Grid Specifications (Cassina/Boffi Monograph Style) */}
                  <div className="divide-y divide-[#121110]/10 border-t border-b border-[#121110]/10 text-xs font-mono">
                    <div className="py-2.5 flex justify-between items-baseline">
                      <span className="text-[#121110]/50 tracking-wider">DIMENSIONS</span>
                      <span className="font-semibold text-[#121110]">{currentFinish.specs.dimensions}</span>
                    </div>
                    <div className="py-2.5 flex justify-between items-baseline">
                      <span className="text-[#121110]/50 tracking-wider">NET WEIGHT</span>
                      <span className="font-semibold text-[#121110]">{currentFinish.specs.weight}</span>
                    </div>
                    <div className="py-2.5 flex justify-between items-baseline">
                      <span className="text-[#121110]/50 tracking-wider">PRIMARY TIMBER</span>
                      <span className="font-semibold text-[#121110]">{currentFinish.specs.timber}</span>
                    </div>
                    <div className="py-2.5 flex justify-between items-baseline">
                      <span className="text-[#121110]/50 tracking-wider">SURFACE SLAB</span>
                      <span className="font-semibold text-[#121110]">{currentFinish.specs.stone}</span>
                    </div>
                    <div className="py-2.5 flex justify-between items-baseline">
                      <span className="text-[#121110]/50 tracking-wider">HARDWARE SPEC</span>
                      <span className="font-semibold text-[#121110]">{currentFinish.specs.hardware}</span>
                    </div>
                    <div className="py-2.5 flex justify-between items-baseline">
                      <span className="text-[#121110]/50 tracking-wider">STUDY SPEC</span>
                      <span className="font-semibold text-[#8C6D46]">PROTOTYPE FINISH</span>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-2 space-y-3">
                    <div className="flex justify-between items-baseline text-xs font-mono">
                      <span className="text-[#121110]/60">CONCEPT PRODUCT SPEC:</span>
                      <span className="text-base font-bold text-[#121110]">
                        {currentFinish.price}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddToCart(selectedProduct, activeFinish)}
                      className="group w-full py-4 px-6 bg-[#121110] hover:bg-[#282725] text-white text-xs font-mono font-bold tracking-[0.16em] uppercase rounded-xs shadow-md transition-all duration-200 flex items-center justify-between cursor-pointer"
                    >
                      <span>TEST COMMERCE FLOW — ADD TO BAG</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#8C6D46]" />
                    </button>

                    <div className="flex justify-between text-[11px] font-mono text-[#121110]/50 pt-1">
                      <span>SELF-INITIATED CONCEPT</span>
                      <span>INTERACTIVE CART DEMO</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Dedicated High-End Editorial Product Viewport (7 Cols) */}
                <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                  <div className="relative w-full rounded-xs overflow-hidden border border-[#121110]/15 bg-[#EBE7DF] shadow-md transition-all duration-500">
                    {/* Architectural Editorial Plate Header Bar */}
                    <div className="flex justify-between items-center px-6 py-4 border-b border-[#121110]/10 text-[10px] font-mono tracking-widest uppercase text-[#121110]/60 bg-[#FAF8F5]/80 backdrop-blur-xs">
                      <span>FOLIO NO. 042 // CAMERA STUDY</span>
                      <span className="text-[#8C6D46] font-bold">
                        FINISH // {currentFinish.name.toUpperCase()}
                      </span>
                      <span>SCALE 1:1 CONCEPT STUDY</span>
                    </div>

                    {/* Editorial Lighting & Layered Shadow Stage */}
                    <div className="relative p-6 sm:p-10 lg:p-14 min-h-[360px] sm:min-h-[440px] flex flex-col justify-center items-center overflow-hidden">
                      {/* Ambient Raking Light (South Window) */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-60"
                        style={{
                          background:
                            "radial-gradient(circle at 18% 12%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 65%), linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)",
                        }}
                      />

                      {/* Monograph Watermark in background */}
                      <div className="absolute right-6 bottom-6 pointer-events-none select-none text-[80px] sm:text-[110px] font-serif font-light text-[#121110]/[0.04] leading-none">
                        NOOR
                      </div>

                      {/* EDITORIAL FURNITURE COMPOSITION (Layered CSS & Photographic Shading) */}
                      <div className="relative w-full max-w-lg transition-all duration-500 my-4">
                        {/* 1. Diffuse Soft Ambient Floor Shadow */}
                        <div
                          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[92%] h-10 rounded-full pointer-events-none blur-lg"
                          style={{
                            background:
                              "radial-gradient(ellipse at center, rgba(18,17,16,0.38) 0%, rgba(18,17,16,0) 75%)",
                          }}
                        />
                        <div
                          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[82%] h-4 rounded-full pointer-events-none blur-xs"
                          style={{
                            background:
                              "radial-gradient(ellipse at center, rgba(18,17,16,0.55) 0%, rgba(18,17,16,0) 70%)",
                          }}
                        />

                        {/* 2. Top Honed Stone Slab (Cantilevered with Raking Chamfer Highlight) */}
                        <div className="relative z-20 mx-auto w-[98%] shadow-md">
                          {/* Upper Chamfer Glint */}
                          <div className="h-1 w-full bg-white/70 rounded-t-xs" />
                          {/* Stone Slab Body */}
                          <div
                            className="h-4 sm:h-5 w-full border-x border-b border-[#121110]/20 rounded-xs flex items-center justify-between px-4 transition-all duration-500"
                            style={{
                              background: currentFinish.slabTone,
                              boxShadow:
                                "inset 0 1px 2px rgba(255,255,255,0.6), 0 3px 6px rgba(0,0,0,0.12)",
                            }}
                          >
                            <span className="text-[8px] font-mono tracking-widest text-black/40 uppercase">
                              HONED {currentFinish.specs.stone.toUpperCase()}
                            </span>
                            <span className="text-[8px] font-mono tracking-widest text-black/30">
                              32MM CHAMFER
                            </span>
                          </div>
                          {/* Contact Shadow under Stone Slab */}
                          <div className="h-1.5 w-full bg-gradient-to-b from-black/45 to-transparent" />
                        </div>

                        {/* 3. Main Credenza Timber Body with Continuous Grain Texture */}
                        <div
                          className="relative z-10 w-[94%] mx-auto h-36 sm:h-44 border border-[#121110]/30 rounded-xs overflow-hidden shadow-xl transition-all duration-500"
                          style={{
                            background: currentFinish.bodyGradient,
                          }}
                        >
                          {/* Micro Wood Grain Overlay Lines */}
                          <div
                            className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none"
                            style={{
                              backgroundImage:
                                "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 6px), repeating-linear-gradient(0deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 4px)",
                            }}
                          />

                          {/* 4 Soft-Closing Cabinet Bay Doors with Deep Recessed Reveal Seams */}
                          <div className="absolute inset-0 grid grid-cols-4 divide-x divide-black/70">
                            {[0, 1, 2, 3].map((bay) => (
                              <div
                                key={bay}
                                className="relative h-full flex flex-col justify-center items-center group/bay"
                              >
                                {/* Light catching on left edge of door panel */}
                                <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-white/10" />

                                {/* Sand-Cast Bronze Pull Stud with Specular Highlight */}
                                <div
                                  className={cn(
                                    "relative w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-black/40 shadow-md transition-transform duration-300 group-hover/bay:scale-110",
                                    bay === 0 || bay === 1 ? "self-end mr-3" : "self-start ml-3"
                                  )}
                                  style={{
                                    background:
                                      "radial-gradient(circle at 35% 30%, #F5DEB3 0%, #C49E65 40%, #7D5D3B 80%, #3D2D1B 100%)",
                                    boxShadow:
                                      "0 2px 4px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.6)",
                                  }}
                                >
                                  {/* Micro pin highlight */}
                                  <div className="absolute top-0.5 left-0.5 w-1 h-1 rounded-full bg-white/60 blur-[0.2px]" />
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Subtle ambient Vignette on lower credenza belly */}
                          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                        </div>

                        {/* 4. Slender Underframe & Tapered Cast Bronze Base Legs */}
                        <div className="relative z-0 w-[84%] mx-auto h-9 sm:h-11">
                          {/* Horizontal Cross-Stretcher Rail */}
                          <div
                            className="absolute top-2 left-6 right-6 h-1 rounded-full border border-black/30 shadow-xs"
                            style={{
                              background:
                                "linear-gradient(180deg, #9C7A4A 0%, #523F23 100%)",
                            }}
                          />
                          {/* Left Inset Leg */}
                          <div
                            className="absolute top-0 left-8 w-2 h-full rounded-b-xs shadow-md"
                            style={{
                              background:
                                "linear-gradient(90deg, #7A5C33 0%, #3A2B18 100%)",
                            }}
                          />
                          {/* Right Inset Leg */}
                          <div
                            className="absolute top-0 right-8 w-2 h-full rounded-b-xs shadow-md"
                            style={{
                              background:
                                "linear-gradient(90deg, #7A5C33 0%, #3A2B18 100%)",
                            }}
                          />
                        </div>
                      </div>

                      {/* Editorial Caption Tag */}
                      <div className="relative z-10 text-center space-y-1 pt-4">
                        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#121110]/50">
                          CONCEPT MONOGRAPH // STUDY NO. 04
                        </span>
                        <p className="text-xs font-mono text-[#121110]/80">
                          {currentFinish.name} • Honed {currentFinish.specs.stone} • Unlacquered Bronze
                        </p>
                      </div>
                    </div>

                    {/* Viewport Footer Telemetry */}
                    <div className="flex flex-wrap justify-between items-center px-6 py-3.5 border-t border-[#121110]/10 bg-[#FAF8F5]/80 text-[11px] font-mono text-[#121110]/70">
                      <span>FINISH: {currentFinish.name.toUpperCase()}</span>
                      <div className="flex items-center gap-4">
                        <span>STUDY: ATELIER JOINERY</span>
                        <span className="text-[#121110]/20">•</span>
                        <span className="text-[#8C6D46] font-bold">CONCEPT STOREFRONT DEMO</span>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Monograph Footnotes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-[#121110]/70 pt-2">
                    <div className="p-3.5 border border-[#121110]/10 rounded-xs bg-white/40 space-y-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#8C6D46] font-bold">
                        JOINERY PHILOSOPHY
                      </span>
                      <p className="text-[11px] leading-relaxed">
                        Precision blind mortise joints executed without metal fasteners in structural timber load paths.
                      </p>
                    </div>
                    <div className="p-3.5 border border-[#121110]/10 rounded-xs bg-white/40 space-y-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#8C6D46] font-bold">
                        FOUNDRY PATINA
                      </span>
                      <p className="text-[11px] leading-relaxed">
                        Hardware left unlacquered to develop a rich, living amber oxidation tailored to the natural ambient climate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* MODE B: HIGH-DENSITY PRODUCT CATALOG */
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#121110]/10 pb-4">
                <div className="text-xs font-mono tracking-widest uppercase text-[#121110]/60">
                  CATALOGUE ARCHIVE // 3 CONCEPT SPECS
                </div>
                <div className="text-xs font-mono text-[#8C6D46] font-bold">
                  SIMULATED COMMERCE // INTERACTIVE DEMO
                </div>
              </div>

              {/* Product Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {NOOR_PRODUCTS.map((prod) => (
                  <div
                    key={prod.id}
                    className="p-5 bg-white border border-[#121110]/15 rounded-xs space-y-4 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="px-2 py-0.5 bg-[#FAF7F2] text-[#8C6D46] font-bold border border-[#121110]/10">
                          {prod.tag}
                        </span>
                        <span className="text-[#121110]/50">{prod.edition}</span>
                      </div>

                      <div className="aspect-[4/3] bg-[#F7F4EE] border border-[#121110]/10 rounded-xs p-4 flex flex-col justify-between">
                        <span className="text-[9px] font-mono text-[#121110]/40 uppercase tracking-widest">
                          {prod.category}
                        </span>
                        <div className="text-center">
                          <h6 className="text-lg font-serif font-bold text-[#121110]">
                            {prod.name}
                          </h6>
                          <p className="text-xs font-mono text-[#8C6D46] font-bold pt-1">
                            {prod.price}
                          </p>
                        </div>
                        <div className="flex justify-center gap-1.5 pt-2">
                          {prod.swatches.map((s) => (
                            <span
                              key={s.name}
                              className="w-2.5 h-2.5 rounded-full border border-black/20"
                              style={{ backgroundColor: s.hex }}
                              title={s.name}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-xs text-[#121110]/70 font-sans line-clamp-2">
                        {prod.description}
                      </p>
                    </div>

                    <button
                      onClick={() => handleAddToCart(prod)}
                      className="w-full py-2.5 px-4 bg-[#121110] text-white text-xs font-mono tracking-wider uppercase hover:bg-[#282725] transition-colors rounded-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>ADD TO BAG</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </FrameContainer>

      {/* Interactive Slide-Out Cart Drawer */}
      {cartOpen && (
        <div
          onClick={() => setCartOpen(false)}
          className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Atelier Shopping Bag"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-[#FAF8F5] text-[#121110] h-full shadow-2xl p-6 sm:p-8 flex flex-col justify-between border-l border-[#121110]/20 animate-in slide-in-from-right duration-300"
          >
            {/* Drawer Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#121110]/15 pb-4">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#8C6D46]" />
                  <h4 className="text-sm font-mono font-bold uppercase tracking-wider">
                    ATELIER SHOPPING BAG ({cartItems.reduce((a, b) => a + b.quantity, 0)})
                  </h4>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-1 text-[#121110]/60 hover:text-[#121110] transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress Indicator */}
              <div className="p-3 bg-white border border-[#121110]/10 rounded-xs space-y-1.5 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[#121110]/70">DHL EXPRESS WORLDWIDE</span>
                  <span className="text-[#8C6D46] font-bold">COMPLIMENTARY</span>
                </div>
                <div className="w-full bg-[#121110]/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#8C6D46] h-full w-full" />
                </div>
                <p className="text-[10px] text-[#121110]/50 pt-0.5">
                  Orders over $300 qualify for numbered artisan dispatch &amp; courier tracking.
                </p>
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="py-12 text-center text-xs font-mono text-[#121110]/50 space-y-2">
                  <p>Your bag is currently empty.</p>
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div
                    key={`${item.product.id}-${item.size}-${item.swatchName}-${idx}`}
                    className="p-4 bg-white border border-[#121110]/10 rounded-xs space-y-2"
                  >
                    <div className="flex justify-between items-start">
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-mono text-[#8C6D46] uppercase font-bold">
                          {item.product.category}
                        </span>
                        <h6 className="text-sm font-serif font-bold text-[#121110]">
                          {item.product.name}
                        </h6>
                        <div className="text-[11px] font-mono text-[#121110]/60">
                          {item.swatchName} • SIZE {item.size}
                        </div>
                      </div>
                      <div className="text-right font-mono font-bold text-xs text-[#121110]">
                        ${(item.product.priceNum * item.quantity).toLocaleString()} USD
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-[#121110]/5 text-xs font-mono">
                      <div className="flex items-center gap-2 border border-[#121110]/15 px-2 py-0.5 rounded-xs">
                        <button
                          onClick={() => updateQuantity(idx, -1)}
                          aria-label="Decrease quantity"
                          className="p-0.5 text-[#121110]/60 hover:text-[#121110] hover:bg-black/5 rounded-xs active:scale-95 transition-all"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-1 font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(idx, 1)}
                          aria-label="Increase quantity"
                          className="p-0.5 text-[#121110]/60 hover:text-[#121110] hover:bg-black/5 rounded-xs active:scale-95 transition-all"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => updateQuantity(idx, -item.quantity)}
                        className="text-[10px] text-red-600 hover:underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer & Checkout Action */}
            <div className="border-t border-[#121110]/15 pt-4 space-y-4">
              <div className="space-y-1.5 font-mono text-xs">
                <div className="flex justify-between text-[#121110]/70">
                  <span>SUBTOTAL</span>
                  <span>${totalAmount.toLocaleString()} USD</span>
                </div>
                <div className="flex justify-between text-[#121110]/70">
                  <span>ESTIMATED TAXES</span>
                  <span>INCLUDED</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-[#121110] pt-1 border-t border-[#121110]/10">
                  <span>TOTAL ESTIMATE</span>
                  <span>${totalAmount.toLocaleString()} USD</span>
                </div>
              </div>

              {checkoutNotice && (
                <div className="p-3 bg-[#8C6D46]/10 border border-[#8C6D46]/30 rounded-xs space-y-1 font-mono text-xs text-[#121110]">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#8C6D46]">COMMERCE DEMO ACTIVE</span>
                    <button
                      onClick={() => setCheckoutNotice(false)}
                      className="text-[10px] text-[#121110]/60 hover:text-[#121110] cursor-pointer"
                    >
                      DISMISS ✕
                    </button>
                  </div>
                  <p className="text-[10px] text-[#121110]/80">
                    In production, this transfers directly to Shopify Plus Storefront API or Stripe Checkout session.
                  </p>
                </div>
              )}

              <div className="space-y-2">
                <button
                  onClick={() => setCheckoutNotice(true)}
                  className="w-full py-4 px-6 bg-[#121110] text-white text-xs font-mono font-bold tracking-widest uppercase hover:bg-[#282725] transition-colors rounded-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>PROCEED TO SECURE CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCartOpen(false)}
                  className="w-full text-center text-[10px] font-mono text-[#121110]/60 hover:underline py-1 cursor-pointer"
                >
                  CONTINUE EXPLORING MONOGRAPH
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
