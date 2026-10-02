import Link from "next/link";
import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
  asLink?: boolean;
  size?: "sm" | "md" | "lg";
}

/**
 * Temporary Wordmark Treatment: FRAMEHOUSE
 * Strict requirement: DO NOT invent a logo, monogram, or F/FH icon.
 * Modular architecture allows seamless swap with final brand SVG asset later.
 */
export function Wordmark({ className, asLink = true, size = "md" }: WordmarkProps) {
  const sizeClasses = {
    sm: "text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em]",
    md: "text-xs sm:text-base tracking-[0.16em] sm:tracking-[0.22em]",
    lg: "text-lg sm:text-2xl tracking-[0.18em] sm:tracking-[0.25em]",
  };

  const content = (
    <span
      className={cn(
        "font-bold uppercase select-none transition-colors duration-200 inline-block",
        sizeClasses[size],
        className
      )}
    >
      FRAMEHOUSE
    </span>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF3D] rounded-xs"
        aria-label="FRAMEHOUSE Homepage"
      >
        {content}
      </Link>
    );
  }

  return content;
}
