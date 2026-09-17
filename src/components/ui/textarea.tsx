import { type TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-24 w-full rounded-[var(--radius-md)] border border-border bg-bg-raised px-3 py-2 text-sm text-fg placeholder:text-faint outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/25",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
