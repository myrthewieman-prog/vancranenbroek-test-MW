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
    <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-sm font-medium text-foreground">Campagnes</h2>
        <p className="text-xs text-text-muted">Bron: mock data</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-text-muted">
              <th className="py-2 pr-4 font-medium">Campagne</th>
              <th className="py-2 pr-4 font-medium">Kanaal</th>
              <th className="py-2 pr-4 font-medium">Status</th>
              <th className="py-2 pr-4 text-right font-medium">Budget</th>
              <th className="py-2 pr-4 text-right font-medium">Impressies</th>
              <th className="py-2 pr-4 text-right font-medium">Kliks</th>
              <th className="py-2 pr-4 text-right font-medium">CTR</th>
              <th className="py-2 pr-4 text-right font-medium">Conversies</th>
              <th className="py-2 pr-0 text-right font-medium">ROAS</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c) => (
              <tr
                key={c.campagne}
                className="border-b border-border last:border-0 text-foreground"
              >
                <td className="py-2.5 pr-4 font-medium">{c.campagne}</td>
                <td className="py-2.5 pr-4 text-text-secondary">{c.kanaal}</td>
                <td className={`py-2.5 pr-4 font-medium ${STATUS_STYLES[c.status]}`}>
                  {c.status}
                </td>
                <td className="py-2.5 pr-4 text-right tabular-nums">
                  {currencyFormat.format(c.budget)}
                </td>
                <td className="py-2.5 pr-4 text-right tabular-nums">
                  {numberFormat.format(c.impressies)}
                </td>
                <td className="py-2.5 pr-4 text-right tabular-nums">
                  {numberFormat.format(c.kliks)}
                </td>
                <td className="py-2.5 pr-4 text-right tabular-nums">
                  {c.ctr.toLocaleString("nl-NL", { minimumFractionDigits: 2 })}%
                </td>
                <td className="py-2.5 pr-4 text-right tabular-nums">
                  {numberFormat.format(c.conversies)}
                </td>
                <td className="py-2.5 pr-0 text-right tabular-nums">
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
