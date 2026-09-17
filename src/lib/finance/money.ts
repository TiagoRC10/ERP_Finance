export function formatBRL(cents: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cents / 100);
}

export function formatBRLCompact(cents: number): string {
  const value = cents / 100;
  if (Math.abs(value) >= 1_000_000) {
    return `R$ ${(value / 1_000_000).toLocaleString("pt-BR", { maximumFractionDigits: 1 })} mi`;
  }
  if (Math.abs(value) >= 10_000) {
    return `R$ ${(value / 1_000).toLocaleString("pt-BR", { maximumFractionDigits: 1 })} mil`;
  }
  return formatBRL(cents);
}

export function parseBRLToCents(raw: string): number {
  const trimmed = raw.trim().replace(/[R$\s]/g, "");
  if (!trimmed) return 0;
  const normalized = trimmed.includes(",")
    ? trimmed.replace(/\./g, "").replace(",", ".")
    : trimmed;
  const n = Number(normalized);
  if (!Number.isFinite(n)) return 0;
  return Math.round(n * 100);
}

export function signedCents(kind: "income" | "expense" | "transfer", cents: number): number {
  if (kind === "expense") return -Math.abs(cents);
  return Math.abs(cents);
}
