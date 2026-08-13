import { AlertCallout } from "@/components/AlertCallout";
import { BrandSplitCard } from "@/components/BrandSplitCard";
import { CampaignsDisclosure } from "@/components/CampaignsDisclosure";
import { ChannelSectionHeading } from "@/components/ChannelSectionHeading";
import { FunnelCard } from "@/components/FunnelCard";
import { MonitorHeroHeader } from "@/components/MonitorHeroHeader";
import { ReportFooter } from "@/components/ReportFooter";
import { StatBlock } from "@/components/StatBlock";
import { SubChannelCard } from "@/components/SubChannelCard";
import { TrendChart } from "@/components/TrendChart";
import {
  monitorAlert,
  monitorGoogleAds,
  monitorGoogleAdsBrandSplit,
  monitorGoogleAdsTrend,
  monitorHeader,
  monitorMeta,
} from "@/lib/mock-data";

function MutedLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-wide text-text-muted">{children}</p>
  );
}

export function MonitorDashboard() {
  const allCampaignsColumns = [
    { key: "netwerk", label: "Netwerk" },
    { key: "campagne", label: "Campagne" },
    { key: "kosten", label: "Kosten", align: "right" as const, format: "currency" as const },
    { key: "conversies", label: "Conversies", align: "right" as const, format: "number" as const },
    { key: "convWaarde", label: "Conv.waarde", align: "right" as const, format: "currency" as const },
  ];
  const allCampaignsRows = monitorGoogleAds.subChannels.flatMap((channel) =>
    channel.campaigns.map((c) => ({ netwerk: channel.name, ...c }))
  );

  return (
    <div>
      <MonitorHeroHeader
        eyebrow={monitorHeader.eyebrow}
        title={monitorHeader.title}
        periodLabel={monitorHeader.periodLabel}
        note={monitorHeader.note}
      />

      <div className="mt-6">
        <AlertCallout>{monitorAlert}</AlertCallout>
      </div>

      <section className="mt-10">
        <ChannelSectionHeading title="Google Ads" subtitle="Account totaal" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {monitorGoogleAds.accountStats.map((stat) => (
            <StatBlock key={stat.label} stat={stat} boxed />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {monitorGoogleAds.subChannels.map((channel) => (
            <SubChannelCard key={channel.name} channel={channel} />
          ))}
        </div>

        <div className="mt-6">
          <MutedLabel>Brand vs. non-brand (op naam &quot;brand&quot; in campagne)</MutedLabel>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {monitorGoogleAdsBrandSplit.map((split) => (
              <BrandSplitCard key={split.name} data={split} />
            ))}
          </div>
        </div>

        <CampaignsDisclosure
          label="Toon campagnes binnen Shopping, Zoeken en Performance Max"
          tableTitle="Campagnes — Google Ads"
          columns={allCampaignsColumns}
          rows={allCampaignsRows}
        />

        <div className="mt-6">
          <MutedLabel>Trend – laatste 7 weken (los van de week/maand-keuze hierboven)</MutedLabel>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <TrendChart
              title="Kosten per week"
              data={monitorGoogleAdsTrend}
              series={[{ key: "kosten", name: "Kosten", type: "line", color: "var(--series-1)" }]}
            />
            <TrendChart
              title="Conversies per week"
              data={monitorGoogleAdsTrend}
              series={[{ key: "conversies", name: "Conversies", type: "line", color: "var(--foreground)" }]}
            />
            <TrendChart
              title="Conv.waarde per week"
              data={monitorGoogleAdsTrend}
              series={[{ key: "convWaarde", name: "Conv.waarde", type: "line", color: "var(--series-1)" }]}
            />
            <TrendChart
              title="ROAS per week"
              data={monitorGoogleAdsTrend}
              series={[{ key: "roas", name: "ROAS", type: "line", color: "var(--foreground)" }]}
            />
            <TrendChart
              title="Kosten/conv. – account vs. brand vs. non-brand"
              data={monitorGoogleAdsTrend}
              showLegend
              series={[
                { key: "account", name: "Account", type: "line", color: "var(--text-muted)", dashed: true },
                { key: "brand", name: "Brand", type: "line", color: "var(--series-1)" },
                { key: "nonBrand", name: "Non-brand", type: "line", color: "var(--foreground)" },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <ChannelSectionHeading title="Meta Ads" subtitle={monitorMeta.subtitle} />
        <div className="space-y-4">
          {monitorMeta.funnels.map((funnel) => (
            <FunnelCard key={funnel.badge} funnel={funnel} />
          ))}
        </div>

        <div className="mt-6">
          <MutedLabel>
            Trend – laatste 7 weken, per doelstelling (los van de week/maand-keuze hierboven)
          </MutedLabel>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {monitorMeta.funnels.map((funnel) => {
              const badgeColorVar =
                funnel.badgeColor === "accent"
                  ? "var(--accent)"
                  : funnel.badgeColor === "amber"
                    ? "var(--badge-amber)"
                    : "var(--badge-blue)";
              const volumeLabelLower = funnel.volumeLabel.startsWith("LP")
                ? funnel.volumeLabel
                : funnel.volumeLabel.toLowerCase();
              return (
                <div key={funnel.badge} className="contents">
                  <TrendChart
                    title={`${funnel.badge} – kosten & ${volumeLabelLower}`}
                    data={funnel.trend}
                    showLegend
                    series={[
                      { key: "kosten", name: "Kosten (€)", type: "bar", color: badgeColorVar, yAxis: "left" },
                      { key: "volume", name: "Resultaten", type: "line", color: badgeColorVar, yAxis: "right" },
                    ]}
                  />
                  <TrendChart
                    title={`${funnel.badge} – kosten/${funnel.ratioLabel}`}
                    data={funnel.trend.map((p) => ({
                      week: p.week,
                      ratio: Number(p.kosten) / Number(p.volume),
                    }))}
                    series={[{ key: "ratio", name: "Kosten/resultaat", type: "line", color: badgeColorVar }]}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ReportFooter />
    </div>
  );
}
