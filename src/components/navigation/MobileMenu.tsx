"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { Wordmark } from "@/components/common/Wordmark";
import { Button } from "@/components/common/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0A0A0A] text-white flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <Wordmark size="md" className="text-white" />
        <button
          onClick={onClose}
          className="p-2 -mr-2 text-white/80 hover:text-[#C8FF3D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF3D] transition-colors"
          aria-label="Close Navigation Menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-6 my-auto py-8">
        {navLinks.map((link, idx) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="group flex items-baseline justify-between py-2 text-3xl sm:text-4xl font-bold tracking-tight text-white hover:text-[#C8FF3D] transition-colors"
          >
            <span>{link.label}</span>
            <span className="text-xs font-mono text-white/40 group-hover:text-[#C8FF3D]">
              0{idx + 1}
            </span>
          </Link>
        ))}
      </nav>

      {/* Bottom CTA & Info */}
      <div className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            href="/contact"
            variant="accent"
            icon="up-right"
            className="w-full justify-center py-4 text-sm"
            onClick={onClose}
          >
            START A PROJECT
          </Button>
        </div>

        <div className="flex items-center justify-between text-xs tracking-wider uppercase text-white/50 pt-2">
          <span>PAKISTAN → WORLDWIDE</span>
          <span>© 2026 FRAMEHOUSE</span>
        </div>
      </div>
    </div>
  );
}
