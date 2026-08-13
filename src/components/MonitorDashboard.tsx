import { AlertCallout } from "@/components/AlertCallout";
import { CampaignsDisclosure } from "@/components/CampaignsDisclosure";
import { ChannelSectionHeading } from "@/components/ChannelSectionHeading";
import { FunnelCard } from "@/components/FunnelCard";
import { MonitorHeroHeader } from "@/components/MonitorHeroHeader";
import { StatBlock } from "@/components/StatBlock";
import { SubChannelCard } from "@/components/SubChannelCard";
import { monitorAlert, monitorGoogleAds, monitorHeader, monitorMeta } from "@/lib/mock-data";

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

        <CampaignsDisclosure
          label="Toon campagnes binnen Shopping, Zoeken en Performance Max"
          tableTitle="Campagnes — Google Ads"
          columns={allCampaignsColumns}
          rows={allCampaignsRows}
        />
      </section>

      <section className="mt-10">
        <ChannelSectionHeading title="Meta Ads" subtitle={monitorMeta.subtitle} />
        <div className="space-y-4">
          {monitorMeta.funnels.map((funnel) => (
            <FunnelCard key={funnel.badge} funnel={funnel} />
          ))}
        </div>
      </section>
    </div>
  );
}
