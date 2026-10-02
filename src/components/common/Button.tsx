"use client";

import Link from "next/link";
import { ArrowRight, ArrowDown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  icon?: "right" | "down" | "up-right" | "none";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon = "right",
  className,
  type = "button",
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center gap-3 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF3D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variantClasses = {
    primary:
      "bg-[#0A0A0A] text-[#FFFFFF] hover:bg-[#1A1A1A] border border-[#0A0A0A]",
    secondary:
      "bg-transparent text-[#0A0A0A] border border-[#0A0A0A]/20 hover:border-[#0A0A0A] hover:bg-[#0A0A0A]/5",
    accent:
      "bg-[#C8FF3D] text-[#0A0A0A] hover:bg-[#B5F520] font-bold border border-[#C8FF3D]",
    outline:
      "bg-transparent text-[#FFFFFF] border border-[#FFFFFF]/25 hover:border-[#C8FF3D] hover:text-[#C8FF3D]",
    ghost:
      "bg-transparent text-current hover:text-[#C8FF3D] px-2 py-1",
  };

  const renderIcon = () => {
    switch (icon) {
      case "right":
        return (
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        );
      case "down":
        return (
          <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-1" />
        );
      case "up-right":
        return (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        );
      default:
        return null;
    }
  };

  const combinedClasses = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={combinedClasses} target={target} rel={rel}>
        <span>{children}</span>
        {renderIcon()}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
}
