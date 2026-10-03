import { cn } from "@/lib/utils";

interface FrameContainerProps {
  children: React.ReactNode;
  className?: string;
  theme?: "light" | "dark";
  withCorners?: boolean;
}

export function FrameContainer({
  children,
  className,
  theme = "light",
  withCorners = false,
}: FrameContainerProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "relative border transition-all duration-300",
        isDark
          ? "border-white/15 bg-[#0A0A0A] text-white"
          : "border-[#0A0A0A]/15 bg-white/40 text-[#0A0A0A]",
        className
      )}
    >
      {withCorners && (
        <>
          {/* Top-left tick */}
          <span
            className={cn(
              "absolute -top-[1px] -left-[1px] w-2.5 h-2.5 pointer-events-none border-t-2 border-l-2",
              isDark ? "border-[#C8FF3D]" : "border-[#0A0A0A]"
            )}
            aria-hidden="true"
          />
          {/* Top-right tick */}
          <span
            className={cn(
              "absolute -top-[1px] -right-[1px] w-2.5 h-2.5 pointer-events-none border-t-2 border-r-2",
              isDark ? "border-[#C8FF3D]" : "border-[#0A0A0A]"
            )}
            aria-hidden="true"
          />
          {/* Bottom-left tick */}
          <span
            className={cn(
              "absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 pointer-events-none border-b-2 border-l-2",
              isDark ? "border-[#C8FF3D]" : "border-[#0A0A0A]"
            )}
            aria-hidden="true"
          />
          {/* Bottom-right tick */}
          <span
            className={cn(
              "absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 pointer-events-none border-b-2 border-r-2",
              isDark ? "border-[#C8FF3D]" : "border-[#0A0A0A]"
            )}
            aria-hidden="true"
          />
        </>
      )}
      {children}
    </div>
  );
}
