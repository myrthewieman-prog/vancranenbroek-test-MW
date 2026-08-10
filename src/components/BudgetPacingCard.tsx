import { ProgressBar } from "@/components/ProgressBar";
import type { BudgetPacing } from "@/lib/mock-data";

const currencyFormat = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function BudgetPacingCard({ title, data }: { title: string; data: BudgetPacing }) {
  const pacingBudget = (data.spent / data.totalMediaspend) * 100;
  const pacingRuntime = (data.daysElapsed / data.daysTotal) * 100;

  return (
    <div className="rounded-xl bg-surface p-6">
      <p className="text-xs font-bold uppercase tracking-wide text-text-secondary">
        {title}
      </p>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-3xl tabular-nums text-foreground">
          {currencyFormat.format(data.spent)}
        </span>
        <span className="text-sm text-text-muted">
          van {currencyFormat.format(data.totalMediaspend)}
        </span>
      </div>

      <div className="mt-4 space-y-3">
        <div>
          <div className="mb-1 flex items-center justify-between text-xs">
            <span className="text-text-secondary">Pacing o.b.v. budget</span>
            <span className="font-bold tabular-nums text-foreground">
              {pacingBudget.toLocaleString("nl-NL", { maximumFractionDigits: 1 })}%
            </span>
          </div>
          <ProgressBar pct={pacingBudget} />
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between text-xs">
            <span className="text-text-secondary">Pacing o.b.v. looptijd</span>
            <span className="font-bold tabular-nums text-foreground">
              {pacingRuntime.toLocaleString("nl-NL", { maximumFractionDigits: 1 })}%
            </span>
          </div>
          <ProgressBar pct={pacingRuntime} />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-text-muted">
        <span>{data.startDate}</span>
        <span>
          dag {data.daysElapsed} van {data.daysTotal}
        </span>
        <span>{data.endDate}</span>
      </div>
    </div>
  );
}
