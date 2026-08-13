import type { Stat } from "@/lib/mock-data";

export function StatBlock({
  stat,
  boxed,
  deltaSuffix = "vorige week",
}: {
  stat: Stat;
  boxed?: boolean;
  deltaSuffix?: string;
}) {
  const content = (
    <>
      <p className="text-2xl tabular-nums text-foreground sm:text-[28px]">{stat.value}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-wide text-text-muted">
        {stat.label}
      </p>
      {stat.deltaPct !== undefined && (
        <p
          className={`mt-2 text-sm font-bold tabular-nums ${
            stat.deltaTone === "good" ? "text-[var(--good)]" : "text-[var(--serious)]"
          }`}
        >
          {stat.deltaPct >= 0 ? "▲" : "▼"} {Math.abs(stat.deltaPct)}% vs {deltaSuffix}
        </p>
      )}
    </>
  );

  if (!boxed) return <div>{content}</div>;

  return <div className="rounded-xl border border-border bg-surface p-6">{content}</div>;
}
