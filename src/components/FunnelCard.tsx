import { CampaignsDisclosure } from "@/components/CampaignsDisclosure";
import { StatBlock } from "@/components/StatBlock";
import type { MonitorFunnel } from "@/lib/mock-data";

const BADGE_STYLES: Record<MonitorFunnel["badgeColor"], string> = {
  accent: "bg-accent",
  amber: "bg-[var(--badge-amber)]",
  blue: "bg-[var(--badge-blue)]",
};

export function FunnelCard({
  funnel,
  deltaSuffix = "vorige week",
}: {
  funnel: MonitorFunnel;
  deltaSuffix?: string;
}) {
  const columns = [
    { key: "campagne", label: "Campagne" },
    { key: "kosten", label: "Kosten", align: "right" as const, format: "currency" as const },
    { key: "volume", label: funnel.volumeLabel, align: "right" as const, format: "number" as const },
  ];

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="flex items-center gap-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white ${BADGE_STYLES[funnel.badgeColor]}`}
        >
          {funnel.badge}
        </span>
        <p className="font-bold text-foreground">{funnel.title}</p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {funnel.stats.map((stat) => (
          <StatBlock key={stat.label} stat={stat} deltaSuffix={deltaSuffix} />
        ))}
      </div>

      <CampaignsDisclosure
        label="Toon campagnes"
        tableTitle={funnel.title}
        columns={columns}
        rows={funnel.campaigns}
      />
    </div>
  );
}
