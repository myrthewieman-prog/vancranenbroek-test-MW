import type { BrandSplit } from "@/lib/mock-data";

const currencyFormat = new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" });
const numberFormat = new Intl.NumberFormat("nl-NL", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export function BrandSplitCard({
  data,
  deltaSuffix = "vorige week",
}: {
  data: BrandSplit;
  deltaSuffix?: string;
}) {
  const rows = [
    { label: "Kosten", value: currencyFormat.format(data.kosten) },
    { label: "Conversies", value: numberFormat.format(data.conversies) },
    { label: "Conv.waarde", value: currencyFormat.format(data.convWaarde) },
    { label: "ROAS", value: `${data.roas.toLocaleString("nl-NL", { minimumFractionDigits: 2 })}x` },
    { label: "Kosten/conv.", value: currencyFormat.format(data.kostenPerConv) },
  ];

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <p className="text-base font-bold text-foreground">{data.name}</p>
      <dl className="mt-3 space-y-2">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between text-sm">
            <dt className="text-text-secondary">{row.label}</dt>
            <dd className="font-bold tabular-nums text-foreground">{row.value}</dd>
          </div>
        ))}
      </dl>
      <p
        className={`mt-3 text-sm font-bold tabular-nums ${
          data.deltaTone === "good" ? "text-[var(--good)]" : "text-[var(--serious)]"
        }`}
      >
        {data.deltaPct >= 0 ? "▲" : "▼"} {Math.abs(data.deltaPct)}% vs {deltaSuffix}
      </p>
    </div>
  );
}
