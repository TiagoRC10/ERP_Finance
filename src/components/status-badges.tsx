import { Badge } from "@/components/ui/badge";

export function OriginBadge({ source, installment, recurrence }: { source?: string; installment?: string | null; recurrence?: string | null }) {
  if (recurrence) return <Badge tone="accent">Recorrente</Badge>;
  if (installment) return <Badge tone="warn">Parcelado</Badge>;
  if (source === "ofx") return <Badge tone="accent">OFX</Badge>;
  if (source === "whatsapp") return <Badge tone="income">WhatsApp</Badge>;
  return <Badge>Manual</Badge>;
}

export function TxStatusBadge({ status }: { status?: string }) {
  if (status === "reconciled") return <Badge tone="income">Conciliado</Badge>;
  if (status === "pending") return <Badge tone="warn">Pendente</Badge>;
  if (status === "cancelled") return <Badge tone="expense">Cancelado</Badge>;
  return <Badge tone="income">Pago</Badge>;
}

export function OfxStatusBadge({ status }: { status: string }) {
  if (status === "matched" || status === "created") return <Badge tone="income">Conciliado</Badge>;
  if (status === "suggested") return <Badge tone="warn">Sugestão</Badge>;
  if (status === "ignored") return <Badge>Ignorado</Badge>;
  return <Badge>Pendente</Badge>;
}
