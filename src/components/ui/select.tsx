import { cn } from "@/lib/utils";
import type { SelectHTMLAttributes } from "react";

export function NativeSelect({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "flex h-10 w-full rounded-[var(--radius-sm)] border border-border bg-bg-raised px-3 text-sm text-fg outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/25",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
