import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "concept" | "category" | "green" | "dark" | "outline";
  className?: string;
}

export function Badge({ children, variant = "category", className }: BadgeProps) {
  const variantStyles = {
    concept:
      "bg-[#C8FF3D] text-[#0A0A0A] font-bold text-[10px] sm:text-xs tracking-[0.18em] px-2.5 py-1 uppercase rounded-none border border-[#C8FF3D]",
    category:
      "bg-transparent text-current/80 text-[10px] sm:text-xs tracking-[0.16em] uppercase px-2.5 py-1 border border-current/20",
    green:
      "bg-[#C8FF3D]/10 text-[#C8FF3D] border border-[#C8FF3D]/30 text-[10px] sm:text-xs tracking-[0.16em] uppercase px-2.5 py-1",
    dark:
      "bg-[#0A0A0A] text-[#FFFFFF] text-[10px] sm:text-xs tracking-[0.16em] uppercase px-2.5 py-1 border border-white/20",
    outline:
      "bg-transparent text-current text-[10px] sm:text-xs tracking-[0.16em] uppercase px-2 py-0.5 border border-current/25",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 select-none font-medium transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
