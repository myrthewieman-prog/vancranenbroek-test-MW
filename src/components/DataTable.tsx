export type Column = {
  key: string;
  label: string;
  align?: "left" | "right";
  format?: "currency" | "number" | "percent" | "multiplier";
};

const currencyFormat = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});
const numberFormat = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 1 });

function formatCell(value: string | number, format?: Column["format"]) {
  if (typeof value !== "number") return value;
  switch (format) {
    case "currency":
      return currencyFormat.format(value);
    case "percent":
      return `${value.toLocaleString("nl-NL", { minimumFractionDigits: 2 })}%`;
    case "multiplier":
      return `${value.toLocaleString("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}x`;
    case "number":
      return numberFormat.format(value);
    default:
      return value;
  }
}

export function DataTable({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: Column[];
  rows: Record<string, string | number>[];
}) {
  return (
    <div className="rounded-xl bg-surface p-6">
      <p className="mb-4 text-xs font-bold uppercase tracking-wide text-text-secondary">
        {title}
      </p>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--header-fill)] text-left text-xs text-white">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`py-3 px-4 first:pl-4 font-bold ${col.align === "right" ? "text-right" : ""}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={`text-foreground ${i % 2 === 1 ? "bg-surface-alt" : "bg-surface"}`}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`py-3 px-4 first:pl-4 first:font-medium ${col.align === "right" ? "text-right tabular-nums" : ""}`}
                  >
                    {formatCell(row[col.key], col.format)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
