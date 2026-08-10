import { BudgetPacingCard } from "@/components/BudgetPacingCard";
import { ChannelTabs } from "@/components/ChannelTabs";
import { KpiCard } from "@/components/KpiCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { SectionLabel } from "@/components/SectionLabel";
import { googleAds, kpis, meta, paidOverview, weeklySpend } from "@/lib/mock-data";

export function MonitorDashboard() {
  return (
    <div>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.label} {...kpi} />
        ))}
      </section>

      <section className="mt-4">
        <BudgetPacingCard title="Budget & pacing — totaal paid" data={paidOverview} />
      </section>

      <section className="mt-4">
        <PerformanceChart data={weeklySpend} />
      </section>

      <section className="mt-12">
        <SectionLabel>Per kanaal</SectionLabel>
        <ChannelTabs channels={[googleAds, meta]} />
      </section>
    </div>
  );
}
