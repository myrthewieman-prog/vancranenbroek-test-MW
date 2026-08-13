import type { SubChannel } from "@/lib/mock-data";

const currencyFormat = new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" });
const numberFormat = new Intl.NumberFormat("nl-NL", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export function SubChannelCard({ channel }: { channel: SubChannel }) {
  const rows = [
    { label: "Kosten", value: currencyFormat.format(channel.kosten) },
    { label: "Conversies", value: numberFormat.format(channel.conversies) },
    { label: "Conv.waarde", value: currencyFormat.format(channel.convWaarde) },
    { label: "ROAS", value: `${channel.roas.toLocaleString("nl-NL", { minimumFractionDigits: 2 })}x` },
    { label: "Kosten/conv.", value: currencyFormat.format(channel.kostenPerConv) },
  ];

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <p className="text-base font-bold text-foreground">{channel.name}</p>
      <dl className="mt-3 space-y-2">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between text-sm">
            <dt className="text-text-secondary">{row.label}</dt>
            <dd className="font-bold tabular-nums text-foreground">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
