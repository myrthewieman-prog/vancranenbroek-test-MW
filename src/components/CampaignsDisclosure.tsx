"use client";

import { useState } from "react";
import { DataTable } from "@/components/DataTable";

type Column = {
  key: string;
  label: string;
  align?: "left" | "right";
  format?: "currency" | "number" | "percent";
};

export function CampaignsDisclosure({
  label,
  tableTitle,
  columns,
  rows,
}: {
  label: string;
  tableTitle: string;
  columns: Column[];
  rows: Record<string, string | number>[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-sm font-bold text-accent"
      >
        <span className={`transition-transform ${open ? "rotate-90" : ""}`}>▶</span>
        {label}
      </button>
      {open && (
        <div className="mt-3">
          <DataTable title={tableTitle} columns={columns} rows={rows} />
        </div>
      )}
    </div>
  );
}
