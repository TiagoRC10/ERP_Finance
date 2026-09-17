import { Segmented } from "@/components/ui/tabs";
import type { PeriodKey } from "@/lib/finance/dates";

const OPTIONS = [
  { value: "today", label: "Hoje" },
  { value: "7d", label: "7 dias" },
  { value: "30d", label: "30 dias" },
  { value: "month", label: "Mês" },
];

export function PeriodFilter({
  value,
  onChange,
}: {
  value: PeriodKey;
  onChange: (v: PeriodKey) => void;
}) {
  return (
    <Segmented
      value={value}
      onChange={(v) => onChange(v as PeriodKey)}
      options={OPTIONS}
    />
  );
}
