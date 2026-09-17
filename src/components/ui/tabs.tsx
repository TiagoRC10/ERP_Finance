import { cn } from "@/lib/utils";

export function Segmented({
  value,
  onChange,
  options,
  className,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  className?: string;
}) {
  return (
    <div className={cn("inline-flex rounded-[var(--radius-pill)] border border-border bg-bg-raised p-1", className)}>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={cn(
            "h-8 rounded-[var(--radius-pill)] px-3 text-xs font-medium transition-colors",
            value === o.value ? "bg-surface-3 text-fg" : "text-muted hover:text-fg",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
