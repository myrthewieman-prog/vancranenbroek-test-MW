import type { Kpi } from "@/lib/mock-data";

export function KpiCard({ label, value, delta, deltaLabel }: Kpi) {
  const isPositive = delta >= 0;

  return (
    <div className="rounded-xl bg-surface p-6">
      <div className="flex items-center gap-2">
        <span className="inline-block h-[9px] w-[9px] bg-accent" />
        <p className="text-xs font-bold uppercase tracking-wide text-text-secondary">
          {label}
        </p>
      </div>
      <p className="mt-3 text-4xl tabular-nums text-foreground">{value}</p>
      <p className="mt-3 flex items-center gap-1.5 text-xs">
        <span
          className={
            isPositive
              ? "text-[var(--good)] font-bold"
              : "text-[var(--serious)] font-bold"
          }
        >
          {isPositive ? "▲" : "▼"} {Math.abs(delta).toLocaleString("nl-NL")}%
        </span>
        <span className="text-text-muted">{deltaLabel}</span>
      </p>
    </div>
  );
}
