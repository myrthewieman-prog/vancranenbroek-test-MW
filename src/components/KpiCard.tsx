import type { Kpi } from "@/lib/mock-data";

export function KpiCard({ label, value, delta, deltaLabel }: Kpi) {
  const isPositive = delta >= 0;

  return (
    <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
      <p className="text-sm text-text-secondary">{label}</p>
      <p className="mt-2 text-2xl font-semibold tabular-nums text-foreground">
        {value}
      </p>
      <p className="mt-2 flex items-center gap-1 text-xs">
        <span
          className={
            isPositive
              ? "text-[var(--good)] font-medium"
              : "text-[var(--serious)] font-medium"
          }
        >
          {isPositive ? "▲" : "▼"} {Math.abs(delta).toLocaleString("nl-NL")}%
        </span>
        <span className="text-text-muted">{deltaLabel}</span>
      </p>
    </div>
  );
}
