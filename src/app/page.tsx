import { CampaignTable } from "@/components/CampaignTable";
import { KpiCard } from "@/components/KpiCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { campaigns, kpis, weeklyClicks } from "@/lib/mock-data";

export default function Home() {
  return (
    <div className="min-h-full bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="mb-8">
          <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
            Van Cranenbroek
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-foreground">
            Campagne-dashboard
          </h1>
          <p className="mt-1 text-sm text-text-secondary">
            Overzicht op basis van mock data — laatste 8 weken.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.label} {...kpi} />
          ))}
        </section>

        <section className="mt-6">
          <PerformanceChart data={weeklyClicks} />
        </section>

        <section className="mt-6">
          <CampaignTable campaigns={campaigns} />
        </section>
      </div>
    </div>
  );
}
