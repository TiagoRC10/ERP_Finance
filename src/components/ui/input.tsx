import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-[var(--radius-sm)] border border-border bg-bg-raised px-3 text-sm text-fg placeholder:text-faint outline-none transition-colors focus:border-accent/50 focus:ring-2 focus:ring-accent/25 disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
