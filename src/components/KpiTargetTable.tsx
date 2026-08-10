import type { KpiTargetRow } from "@/lib/mock-data";

function formatValue(value: number, format: KpiTargetRow["format"]) {
  switch (format) {
    case "currency":
      return new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 2,
      }).format(value);
    case "percent":
      return `${value.toLocaleString("nl-NL", { minimumFractionDigits: 2 })}%`;
    case "decimal":
      return value.toLocaleString("nl-NL", { minimumFractionDigits: 1 });
    case "number":
    default:
      return new Intl.NumberFormat("nl-NL").format(value);
  }
}

function status(row: KpiTargetRow): "good" | "serious" | "neutral" {
  if (row.neutral) return "neutral";
  const ratio = row.lowerIsBetter ? row.target / row.achieved : row.achieved / row.target;
  return ratio >= 0.95 ? "good" : "serious";
}

const STATUS_STYLES: Record<string, string> = {
  good: "text-[var(--good)]",
  serious: "text-[var(--serious)]",
  neutral: "text-text-secondary",
};

export function KpiTargetTable({ rows }: { rows: KpiTargetRow[] }) {
  return (
    <div className="rounded-xl bg-surface p-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border text-left text-xs text-text-muted">
            <th className="pb-3 font-bold uppercase tracking-wide">Metric</th>
            <th className="pb-3 text-right font-bold uppercase tracking-wide">Behaald</th>
            <th className="pb-3 pl-6 text-right font-bold uppercase tracking-wide">Doel</th>
            <th className="pb-3 pl-6 text-right font-bold uppercase tracking-wide">% van doel</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const pct = (row.achieved / row.target) * 100;
            const s = status(row);
            return (
              <tr key={row.metric} className="border-b border-border last:border-0">
                <td className="py-2.5 font-medium text-foreground">{row.metric}</td>
                <td className="py-2.5 text-right tabular-nums text-foreground">
                  {formatValue(row.achieved, row.format)}
                </td>
                <td className="py-2.5 pl-6 text-right tabular-nums text-text-secondary">
                  {formatValue(row.target, row.format)}
                </td>
                <td className={`py-2.5 pl-6 text-right font-bold tabular-nums ${STATUS_STYLES[s]}`}>
                  {pct.toLocaleString("nl-NL", { maximumFractionDigits: 0 })}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
