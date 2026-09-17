import { cn } from "@/lib/utils";

export function Logo({
  compact = false,
  size,
  className,
}: {
  compact?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const resolved = size ?? (compact ? "sm" : "lg");
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <img
        src="/hubbpo-logo.png"
        alt="HUB bpo"
        className={cn(
          "object-contain drop-shadow-[0_0_18px_rgb(62_198_255_/_0.45)]",
          resolved === "sm" && "h-10 w-14",
          resolved === "md" && "h-16 w-24",
          resolved === "lg" && "h-[118px] w-[172px]",
        )}
        draggable={false}
      />
      {resolved !== "sm" && (
        <span className="text-[10px] font-medium tracking-[0.38em] text-accent uppercase">Finance OS</span>
      )}
    </div>
  );
}
