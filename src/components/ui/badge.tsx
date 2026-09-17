import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "neutral",
  children,
}: {
  className?: string;
  tone?: "neutral" | "income" | "expense" | "warn" | "accent";
  children: React.ReactNode;
}) {
  const tones = {
    neutral: "bg-surface-2 text-muted border-border",
    income: "bg-income-dim text-income border-income/20",
    expense: "bg-expense-dim text-expense border-expense/20",
    warn: "bg-warn/10 text-warn border-warn/20",
    accent: "bg-accent-dim text-accent border-accent/20",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-pill)] border px-2 py-0.5 text-[11px] font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
