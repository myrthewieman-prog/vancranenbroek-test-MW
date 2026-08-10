import { DataTable } from "@/components/DataTable";
import { GoalsOverview } from "@/components/GoalsOverview";
import { InsightList } from "@/components/InsightList";
import { KpiCard } from "@/components/KpiCard";
import { SectionLabel } from "@/components/SectionLabel";
import {
  clientAttention,
  clientChannelBreakdown,
  clientChannelColumns,
  clientGoals,
  clientHighlights,
  clientKpis,
} from "@/lib/mock-data";

export function ClientDashboard() {
  return (
    <div>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {clientKpis.map((kpi) => (
          <KpiCard key={kpi.label} {...kpi} />
        ))}
      </section>

      <section className="mt-8">
        <SectionLabel>Voortgang op doelstellingen</SectionLabel>
        <GoalsOverview rows={clientGoals} />
      </section>

      <section className="mt-8">
        <SectionLabel>Spend, orders &amp; CPO per kanaal</SectionLabel>
        <DataTable title="Laatste 8 weken" columns={clientChannelColumns} rows={clientChannelBreakdown} />
      </section>

      <section className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <InsightList title="Wat gaat goed" items={clientHighlights} tone="good" />
        <InsightList title="Waar we op sturen" items={clientAttention} tone="attention" />
      </section>
    </div>
  );
}
