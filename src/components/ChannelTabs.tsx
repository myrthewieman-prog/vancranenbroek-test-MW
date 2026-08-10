"use client";

import { useState } from "react";
import { BudgetPacingCard } from "@/components/BudgetPacingCard";
import { DataTable } from "@/components/DataTable";
import { KpiTargetTable } from "@/components/KpiTargetTable";
import type { ChannelData } from "@/lib/mock-data";

export function ChannelTabs({ channels }: { channels: ChannelData[] }) {
  const [activeLabel, setActiveLabel] = useState(channels[0].label);
  const active = channels.find((c) => c.label === activeLabel) ?? channels[0];

  return (
    <div>
      <div className="flex gap-8 border-b border-border">
        {channels.map((channel) => {
          const isActive = channel.label === activeLabel;
          return (
            <button
              key={channel.label}
              type="button"
              onClick={() => setActiveLabel(channel.label)}
              className={`-mb-px border-b-2 pb-3 text-sm font-bold transition-colors ${
                isActive
                  ? "border-accent text-foreground"
                  : "border-transparent text-text-muted hover:text-text-secondary"
              }`}
            >
              {channel.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4">
        <BudgetPacingCard title="Budget & pacing" data={active.budgetPacing} />
        <KpiTargetTable rows={active.kpiRows} />
        <DataTable title="Campagnes" columns={active.campaignColumns} rows={active.campaigns} />
      </div>
    </div>
  );
}
