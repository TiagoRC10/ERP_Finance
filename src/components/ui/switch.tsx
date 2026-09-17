import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

export function Switch({
  checked,
  onCheckedChange,
  className,
}: {
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
  className?: string;
}) {
  return (
    <SwitchPrimitive.Root
      checked={checked}
      onCheckedChange={onCheckedChange}
      className={cn(
        "relative h-6 w-10 rounded-full border border-border bg-surface-2 data-[state=checked]:bg-accent",
        className,
      )}
    >
      <SwitchPrimitive.Thumb className="block size-5 translate-x-0.5 rounded-full bg-fg transition-transform data-[state=checked]:translate-x-4 data-[state=checked]:bg-bg" />
    </SwitchPrimitive.Root>
  );
}
