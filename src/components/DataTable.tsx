"use client";

import { useMemo, useState } from "react";

export type Column = {
  key: string;
  label: string;
  align?: "left" | "right";
  format?: "currency" | "number" | "percent" | "multiplier";
  sortable?: boolean;
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
  const [sort, setSort] = useState<{ key: string; direction: "asc" | "desc" } | null>(null);

  const sortedRows = useMemo(() => {
    if (!sort) return rows;
    const { key, direction } = sort;
    return [...rows].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];
      let cmp = 0;
      if (typeof aVal === "number" && typeof bVal === "number") {
        cmp = aVal - bVal;
      } else {
        cmp = String(aVal).localeCompare(String(bVal), "nl-NL");
      }
      return direction === "asc" ? cmp : -cmp;
    });
  }, [rows, sort]);

  function toggleSort(col: Column) {
    if (col.sortable === false || !col.format) return;
    setSort((current) => {
      if (!current || current.key !== col.key) return { key: col.key, direction: "desc" };
      if (current.direction === "desc") return { key: col.key, direction: "asc" };
      return null;
    });
  }

  return (
    <div className="rounded-xl bg-surface p-6">
      <p className="mb-4 text-xs font-bold uppercase tracking-wide text-text-secondary">
        {title}
      </p>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--header-fill)] text-left text-xs text-white">
              {columns.map((col) => {
                const isSortable = col.sortable !== false && !!col.format;
                const isActive = sort?.key === col.key;
                return (
                  <th
                    key={col.key}
                    className={`py-3 px-4 first:pl-4 font-bold ${col.align === "right" ? "text-right" : ""}`}
                  >
                    {isSortable ? (
                      <button
                        type="button"
                        onClick={() => toggleSort(col)}
                        className={`inline-flex items-center gap-1 ${col.align === "right" ? "flex-row-reverse" : ""} hover:text-white/80`}
                      >
                        {col.label}
                        <span aria-hidden className={`text-[10px] ${isActive ? "text-white" : "text-white/40"}`}>
                          {isActive ? (sort.direction === "desc" ? "▼" : "▲") : "▲▼"}
                        </span>
                      </button>
                    ) : (
                      col.label
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row, i) => (
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
