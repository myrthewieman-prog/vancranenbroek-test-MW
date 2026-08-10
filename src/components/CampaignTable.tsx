import type { Campaign } from "@/lib/mock-data";

const STATUS_STYLES: Record<Campaign["status"], string> = {
  Actief: "text-[var(--good)]",
  Gepauzeerd: "text-[var(--serious)]",
  Gepland: "text-text-muted",
};

const numberFormat = new Intl.NumberFormat("nl-NL");
const currencyFormat = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function CampaignTable({ campaigns }: { campaigns: Campaign[] }) {
  return (
    <div className="rounded-xl bg-surface p-6">
      <div className="mb-4 flex items-center gap-2">
        <span className="inline-block h-[9px] w-[9px] bg-accent" />
        <h2 className="text-xs font-bold uppercase tracking-wide text-text-secondary">
          Campagnes
        </h2>
      </div>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--header-fill)] text-left text-xs text-white">
              <th className="py-3 pl-4 pr-4 font-bold">Campagne</th>
              <th className="py-3 pr-4 font-bold">Kanaal</th>
              <th className="py-3 pr-4 font-bold">Status</th>
              <th className="py-3 pr-4 text-right font-bold">Budget</th>
              <th className="py-3 pr-4 text-right font-bold">Impressies</th>
              <th className="py-3 pr-4 text-right font-bold">Kliks</th>
              <th className="py-3 pr-4 text-right font-bold">CTR</th>
              <th className="py-3 pr-4 text-right font-bold">Conversies</th>
              <th className="py-3 pr-4 text-right font-bold">ROAS</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c, i) => (
              <tr
                key={c.campagne}
                className={`text-foreground ${i % 2 === 1 ? "bg-surface-alt" : "bg-surface"}`}
              >
                <td className="py-3 pl-4 pr-4 font-medium">{c.campagne}</td>
                <td className="py-3 pr-4 text-text-secondary">{c.kanaal}</td>
                <td className={`py-3 pr-4 font-bold ${STATUS_STYLES[c.status]}`}>
                  {c.status}
                </td>
                <td className="py-3 pr-4 text-right tabular-nums">
                  {currencyFormat.format(c.budget)}
                </td>
                <td className="py-3 pr-4 text-right tabular-nums">
                  {numberFormat.format(c.impressies)}
                </td>
                <td className="py-3 pr-4 text-right tabular-nums">
                  {numberFormat.format(c.kliks)}
                </td>
                <td className="py-3 pr-4 text-right tabular-nums">
                  {c.ctr.toLocaleString("nl-NL", { minimumFractionDigits: 2 })}%
                </td>
                <td className="py-3 pr-4 text-right tabular-nums">
                  {numberFormat.format(c.conversies)}
                </td>
                <td className="py-3 pr-4 text-right tabular-nums">
                  {c.roas > 0 ? `${c.roas.toLocaleString("nl-NL")}x` : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
