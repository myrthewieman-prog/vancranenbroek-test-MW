import { CampaignTable } from "@/components/CampaignTable";
import { KpiCard } from "@/components/KpiCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { campaigns, kpis, weeklyClicks } from "@/lib/mock-data";

export default function Home() {
  return (
    <div className="min-h-full bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 pb-24">
        <header className="mb-10">
          <div className="flex items-center gap-2">
            <span className="inline-block h-[10px] w-[10px] bg-accent" />
            <p className="text-xs font-bold uppercase tracking-wide text-foreground">
              Van Cranenbroek
            </p>
          </div>
          <h1 className="mt-3 text-4xl text-foreground sm:text-5xl">
            Campagne-dashboard
          </h1>
          <p className="mt-3 max-w-xl text-base text-text-secondary">
            Overzicht op basis van mock data — laatste 8 weken.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.label} {...kpi} />
          ))}
        </section>

        <section className="mt-4">
          <PerformanceChart data={weeklyClicks} />
        </section>

        <section className="mt-4">
          <CampaignTable campaigns={campaigns} />
        </section>
      </div>

      <footer className="fixed bottom-6 right-6 flex items-center gap-2">
        <span className="flex h-[26px] w-[26px] items-center justify-center bg-accent text-white">
          ↗
        </span>
      </footer>
    </div>
  );
}
