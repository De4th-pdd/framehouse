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

export function NoorShowcase() {
  const [viewMode, setViewMode] = useState<"lookbook" | "catalog">("lookbook");
  const [selectedProduct, setSelectedProduct] = useState<NoorProduct>(NOOR_PRODUCTS[0]);
  const [selectedSwatch, setSelectedSwatch] = useState(0);
  const [selectedSize, setSelectedSize] = useState<"S" | "M" | "L" | "XL">("M");
  const [checkoutNotice, setCheckoutNotice] = useState(false);
  
  // Interactive Cart Drawer state
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<{ product: NoorProduct; size: string; swatchName: string; quantity: number }[]>([
    {
      product: NOOR_PRODUCTS[0],
      size: "M",
      swatchName: "Raw Ivory",
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

  const handleAddToCart = (prod: NoorProduct, swatchIdx?: number) => {
    const swatchToUse = prod.swatches[swatchIdx !== undefined ? swatchIdx : selectedSwatch]?.name || prod.swatches[0]?.name;
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === prod.id && item.size === selectedSize && item.swatchName === swatchToUse
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
          product: prod,
          size: selectedSize,
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
              FLAGSHIP E-COMMERCE & EDITORIAL MONOGRAPH
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-[#121110]/70">
            <span>LAHORE // DIRECT TO CONSUMER</span>
            <span className="text-[#121110]/20">•</span>
            <span>BESPOKE FLAGSHIP STOREFRONT</span>
          </div>
        </div>

        {/* Brand Banner & Problem-Solution Statement */}
        <div className="relative z-10 space-y-6 sm:space-y-8 mb-8 sm:mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-mono tracking-[0.22em] text-[#8C6D46] uppercase font-semibold">
                CONTEMPORARY PUNJAB TEXTILE & ARTISANAL ATELIER
              </span>
              <h3 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#121110] leading-[1.02] font-sans">
                ATELIER NOOR
              </h3>
              <p className="text-base sm:text-lg text-[#121110]/80 max-w-2xl font-normal leading-relaxed pt-1">
                A digital flagship engineered for a high-end luxury pret and joinery house. Built to escape
                cookie-cutter Shopify templates by fusing editorial magazine storytelling with friction-free commerce mechanics.
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
        <div className="relative z-10 bg-white/70 border border-[#121110]/10 rounded-xs p-6 sm:p-8 lg:p-10 shadow-xs">
          {viewMode === "lookbook" ? (
            /* MODE A: HIGH-FASHION EDITORIAL LOOKBOOK */
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#121110]/10 pb-4">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#8C6D46] font-semibold">
                    AUTUMN / WINTER 2026 // MONOGRAPH FOLIO
                  </span>
                  <h4 className="text-xl sm:text-2xl font-serif italic text-[#121110]">
                    &ldquo;{NOOR_LOOKBOOK.quote}&rdquo;
                  </h4>
                </div>
                <div className="text-xs font-mono text-[#121110]/60">
                  LOOK 04 OF 12 • SCULPTURAL SILHOUETTES
                </div>
              </div>

              {/* Product Specimen Switcher in Lookbook Mode */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-[#121110]/50 uppercase">SELECT SPECIMEN:</span>
                {NOOR_PRODUCTS.map((prod) => {
                  const isSelected = selectedProduct.id === prod.id;
                  return (
                    <button
                      key={prod.id}
                      onClick={() => {
                        setSelectedProduct(prod);
                        setSelectedSwatch(0);
                      }}
                      className={cn(
                        "px-3 py-1.5 text-xs font-mono tracking-wider rounded-xs border transition-all",
                        isSelected
                          ? "bg-[#121110] text-white border-[#121110] font-bold shadow-xs"
                          : "bg-white/60 text-[#121110]/70 border-[#121110]/15 hover:border-[#121110]/40"
                      )}
                    >
                      {prod.name}
                    </button>
                  );
                })}
              </div>

              {/* Editorial Lookbook Composition */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Lookbook Visual Editorial Plate */}
                <div className="lg:col-span-7 bg-[#EFECE6] border border-[#121110]/10 p-8 rounded-xs relative overflow-hidden min-h-[380px] flex flex-col justify-between group shadow-inner">
                  {/* Subtle ambient lighting wash */}
                  <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_30%_20%,#FFFFFF_0%,transparent_75%)]" />

                  <div className="flex justify-between items-start text-[10px] font-mono uppercase tracking-widest text-[#121110]/60 z-10">
                    <span>PLATE 04 — LAHORE WORKSHOP</span>
                    <span>NATURAL SUNLIGHT STUDY</span>
                  </div>

                  {/* Stylized Visual Mockup of the Garment / Object */}
                  <div className="my-8 flex justify-center items-center relative z-10">
                    <div
                      className="relative w-full max-w-sm aspect-[4/3] border border-[#121110]/15 rounded-xs p-6 shadow-lg flex flex-col justify-between transition-colors duration-300"
                      style={{
                        background: `linear-gradient(145deg, #FAF7F2 0%, ${selectedProduct.swatches[selectedSwatch]?.hex || "#E5DFD3"}33 100%)`
                      }}
                    >
                      <div className="flex justify-between text-[9px] font-mono text-[#121110]/60">
                        <span>ATELIER NOOR EDITIONS</span>
                        <span className="font-semibold">{selectedProduct.swatches[selectedSwatch]?.name}</span>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="w-12 h-1 bg-[#121110]/20 mx-auto" />
                        <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#8C6D46] font-bold">
                          {selectedProduct.category}
                        </div>
                        <div className="text-2xl sm:text-3xl font-serif font-bold text-[#121110]">
                          {selectedProduct.name}
                        </div>
                        <div className="text-sm font-mono font-bold text-[#121110]">
                          {selectedProduct.price}
                        </div>
                      </div>
                      <div className="flex justify-between items-end text-[9px] font-mono text-[#121110]/60 pt-2 border-t border-[#121110]/10">
                        <span>{selectedProduct.edition}</span>
                        <span>{selectedProduct.provenance}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between items-center text-xs font-mono text-[#121110]/80 z-10 gap-2 border-t border-[#121110]/10 pt-4">
                    <span>CURATED ATTIRE // READY-TO-SHIP</span>
                    <button
                      onClick={() => handleAddToCart(selectedProduct)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#121110] hover:text-[#8C6D46] transition-colors"
                    >
                      <span>ADD THIS LOOK TO BAG</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Editorial Notes & Material Provenance */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#8C6D46] font-bold">
                      THE SPECIFICATION
                    </span>
                    <h5 className="text-2xl font-bold text-[#121110] font-sans">
                      {selectedProduct.name}
                    </h5>
                    <p className="text-sm text-[#121110]/70 leading-relaxed font-sans">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Fabric Swatch Selector */}
                  <div className="space-y-3 pt-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#121110]/60 uppercase">FINISH / MATERIAL:</span>
                      <span className="font-bold text-[#121110]">
                        {selectedProduct.swatches[selectedSwatch].name}
                      </span>
                    </div>

                    <div className="flex gap-2.5">
                      {selectedProduct.swatches.map((swatch, idx) => (
                        <button
                          key={swatch.name}
                          onClick={() => setSelectedSwatch(idx)}
                          className={cn(
                            "group flex items-center gap-2 px-3 py-2 border rounded-xs transition-all text-xs font-mono",
                            selectedSwatch === idx
                              ? "border-[#121110] bg-[#121110] text-white shadow-xs"
                              : "border-[#121110]/15 bg-white text-[#121110]/80 hover:border-[#121110]/40"
                          )}
                        >
                          <span
                            className="w-3 h-3 rounded-full border border-black/20"
                            style={{ backgroundColor: swatch.hex }}
                          />
                          <span>{swatch.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size Selector */}
                  <div className="space-y-2 pt-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#121110]/60 uppercase">SELECT SIZE:</span>
                      <span className="font-bold text-[#121110]">{selectedSize}</span>
                    </div>
                    <div className="flex gap-2">
                      {(["S", "M", "L", "XL"] as const).map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={cn(
                            "w-9 h-8 border rounded-xs text-xs font-mono flex items-center justify-center transition-all",
                            selectedSize === sz
                              ? "border-[#121110] bg-[#121110] text-white font-bold"
                              : "border-[#121110]/15 bg-white text-[#121110]/70 hover:border-[#121110]/40"
                          )}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Aesthetic Guarantee List */}
                  <div className="p-4 bg-[#F5F2EB] border border-[#121110]/10 rounded-xs space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C6D46] font-bold">
                      PROVENANCE & INTEGRITY
                    </span>
                    <ul className="text-xs font-mono text-[#121110]/80 space-y-1.5">
                      {NOOR_LOOKBOOK.aestheticNotes.map((note, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#8C6D46] shrink-0" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Row */}
                  <div className="pt-2 flex items-center gap-4">
                    <button
                      onClick={() => handleAddToCart(selectedProduct)}
                      className="flex-1 py-3.5 px-6 bg-[#121110] text-white text-xs font-mono font-bold tracking-widest uppercase hover:bg-[#2A2826] transition-colors rounded-xs shadow-md flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>ORDER THIS PIECE — {selectedProduct.price}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* MODE B: HIGH-DENSITY PRODUCT CATALOG */
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#121110]/10 pb-4">
                <div className="text-xs font-mono tracking-widest uppercase text-[#121110]/60">
                  CATALOGUE ARCHIVE // 3 EXCLUSIVE COMMISSIONS ACTIVE
                </div>
                <div className="text-xs font-mono text-[#8C6D46] font-bold">
                  DIRECT ATELIER PURCHASE • WORLDWIDE EXPRESS
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
                      className="w-full py-2.5 px-4 bg-[#121110] text-white text-xs font-mono tracking-wider uppercase hover:bg-[#282725] transition-colors rounded-xs flex items-center justify-center gap-2"
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
