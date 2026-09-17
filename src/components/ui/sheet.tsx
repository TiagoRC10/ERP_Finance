import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;

export function SheetContent({
  children,
  className,
  side = "left",
}: {
  children: ReactNode;
  className?: string;
  side?: "left" | "right";
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/70" />
      <Dialog.Content
        className={cn(
          "fixed inset-y-0 z-50 w-[min(300px,88vw)] border-border bg-bg-raised p-4 outline-none",
          side === "left" ? "left-0 border-r" : "right-0 border-l",
          className,
        )}
      >
        <Dialog.Title className="sr-only">Menu</Dialog.Title>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
