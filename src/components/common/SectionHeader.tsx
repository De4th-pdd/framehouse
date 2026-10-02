import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title?: string;
  description?: string;
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  theme = "light",
  className,
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div className={cn("space-y-4 max-w-4xl", className)}>
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "w-2 h-2 rounded-full",
            isDark ? "bg-[#C8FF3D]" : "bg-[#0A0A0A]"
          )}
        />
        <p
          className={cn(
            "text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase",
            isDark ? "text-[#C8FF3D]" : "text-[#0A0A0A]/70"
          )}
        >
          {eyebrow}
        </p>
      </div>

      {title && (
        <h2
          className={cn(
            "text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]",
            isDark ? "text-[#FFFFFF]" : "text-[#0A0A0A]"
          )}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={cn(
            "text-base sm:text-xl leading-relaxed max-w-2xl font-normal",
            isDark ? "text-[#FFFFFF]/70" : "text-[#0A0A0A]/80"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
