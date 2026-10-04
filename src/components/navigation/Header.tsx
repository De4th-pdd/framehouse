"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Wordmark } from "@/components/common/Wordmark";
import { Button } from "@/components/common/Button";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "WORK", href: "/#work", sectionId: "work" },
  { label: "SERVICES", href: "/#services", sectionId: "services" },
  { label: "PRICING", href: "/#pricing", sectionId: "pricing" },
  { label: "PROCESS", href: "/#process", sectionId: "process" },
  { label: "ABOUT", href: "/#about", sectionId: "about" },
  { label: "FAQ", href: "/#faq", sectionId: "faq" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 20);

          // Calculate 0 - 100% scroll progress
          const totalDocHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const progress =
            totalDocHeight > 0 ? (scrollY / totalDocHeight) * 100 : 0;
          setScrollProgress(Math.min(100, Math.max(0, progress)));

          // Active section spy
          const sectionIds = [
            "work",
            "services",
            "pricing",
            "process",
            "about",
            "faq",
            "contact",
          ];
          let currentActive = "";
          for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 160 && rect.bottom >= 160) {
                currentActive = id;
                break;
              }
            }
          }
          setActiveSection(currentActive);

          // Detect whether the header is currently overlapping a dark section
          const headerCenterY = scrollY + 40;
          const darkSections = document.querySelectorAll(
            '[data-theme="dark"], #services, footer'
          );

          let foundDark = false;
          darkSections.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const top = rect.top + scrollY;
            const bottom = top + rect.height;
            if (headerCenterY >= top && headerCenterY <= bottom) {
              foundDark = true;
            }
          });

          setIsDark(foundDark);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? isDark
              ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 py-3 sm:py-3.5 shadow-md"
              : "bg-[#F4F2ED]/90 backdrop-blur-md border-b border-[#0A0A0A]/10 py-3 sm:py-3.5 shadow-xs"
            : "bg-transparent py-4 sm:py-6"
        )}
      >
        {/* Top 2px scroll progress bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-[#C8FF3D] transition-all duration-75 z-50 pointer-events-none"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Wordmark */}
            <div className="flex items-center gap-3 shrink-0">
              <Wordmark
                size="md"
                className={cn(
                  "transition-colors duration-200",
                  isDark ? "text-white" : "text-[#0A0A0A]"
                )}
              />
            </div>

            {/* Desktop Center/Right Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-xs font-semibold tracking-[0.16em] uppercase transition-colors hover:underline underline-offset-8",
                    activeSection === link.sectionId
                      ? isDark
                        ? "text-[#C8FF3D]"
                        : "text-[#0A0A0A]"
                      : isDark
                      ? "text-white/70 hover:text-[#C8FF3D]"
                      : "text-[#0A0A0A]/70 hover:text-[#0A0A0A]"
                  )}
                >
                  {link.label}
                  {activeSection === link.sectionId && (
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 right-0 h-[1.5px] rounded-full",
                        isDark ? "bg-[#C8FF3D]" : "bg-[#0A0A0A]"
                      )}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Actions: Desktop CTA & Mobile Controls */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Desktop CTA */}
              <div className="hidden md:block">
                <Button
                  href="/contact"
                  variant={isDark ? "accent" : "primary"}
                  icon="up-right"
                  className="text-xs py-2 px-4 font-bold"
                >
                  START A PROJECT
                </Button>
              </div>

              {/* Mobile Compact CTA */}
              <div className="md:hidden flex items-center gap-2 shrink-0">
                <Link
                  href="/contact"
                  className={cn(
                    "inline-flex items-center gap-1 px-3 py-1.5 text-[10px] font-bold font-mono uppercase tracking-wider rounded-xs border transition-all duration-200 hover:opacity-90 active:scale-[0.98]",
                    isDark
                      ? "bg-[#C8FF3D] text-[#0A0A0A] border-[#C8FF3D] hover:bg-[#d6ff66]"
                      : "bg-[#0A0A0A] text-[#C8FF3D] border-[#0A0A0A] hover:bg-black/90"
                  )}
                >
                  <span>START ↗</span>
                </Link>
              </div>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                className={cn(
                  "md:hidden inline-flex items-center justify-center p-1.5 rounded-xs transition-colors focus-visible:outline-none focus-visible:ring-2",
                  isDark
                    ? "text-white hover:bg-white/10 focus-visible:ring-[#C8FF3D]"
                    : "text-[#0A0A0A] hover:bg-[#0A0A0A]/5 focus-visible:ring-[#0A0A0A]"
                )}
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
      />
    </>
  );
}
