import { ProgressBar } from "@/components/ProgressBar";
import type { GoalRow } from "@/lib/mock-data";

function formatValue(value: number, format: GoalRow["format"]) {
  switch (format) {
    case "currency":
      return new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      }).format(value);
    case "percent":
      return `${value.toLocaleString("nl-NL", { minimumFractionDigits: 1 })}%`;
    case "multiplier":
      return `${value.toLocaleString("nl-NL", { minimumFractionDigits: 1 })}x`;
    case "number":
    default:
      return new Intl.NumberFormat("nl-NL").format(value);
  }
}

export function GoalsOverview({ rows }: { rows: GoalRow[] }) {
  return (
    <div className="rounded-xl bg-surface p-6">
      <div className="divide-y divide-border">
        {rows.map((row) => {
          const pct = (row.achieved / row.target) * 100;
          const onTrack = pct >= 95;
          return (
            <div key={row.label} className="py-5 first:pt-0 last:pb-0">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-sm font-bold text-text-secondary">{row.label}</span>
                <span
                  className={`text-sm font-bold tabular-nums ${
                    onTrack ? "text-[var(--good)]" : "text-[var(--serious)]"
                  }`}
                >
                  {pct.toLocaleString("nl-NL", { maximumFractionDigits: 0 })}%
                </span>
              </div>
              <div className="mt-1.5 flex items-baseline gap-2">
                <span className="text-2xl tabular-nums text-foreground">
                  {formatValue(row.achieved, row.format)}
                </span>
                <span className="text-sm text-text-muted">
                  doel: {formatValue(row.target, row.format)}
                </span>
              </div>
              <div className="mt-3">
                <ProgressBar pct={pct} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
