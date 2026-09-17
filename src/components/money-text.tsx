import { formatBRL } from "@/lib/finance/money";
import { cn } from "@/lib/utils";

export function MoneyText({
  cents,
  signed = false,
  className,
  tone,
}: {
  cents: number;
  signed?: boolean;
  className?: string;
  tone?: "income" | "expense" | "neutral";
}) {
  const value = signed ? cents : cents;
  const resolved =
    tone ?? (signed ? (value > 0 ? "income" : value < 0 ? "expense" : "neutral") : "neutral");
  return (
    <span
      className={cn(
        "tabular tracking-tight",
        resolved === "income" && "text-income",
        resolved === "expense" && "text-expense",
        resolved === "neutral" && "text-fg",
        className,
      )}
    >
      {formatBRL(value)}
    </span>
  );
}
