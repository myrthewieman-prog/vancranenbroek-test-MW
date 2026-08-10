"use client";

import { useState, type ReactNode } from "react";

export function ViewSwitcher({
  clientView,
  monitorView,
}: {
  clientView: ReactNode;
  monitorView: ReactNode;
}) {
  const [view, setView] = useState<"klant" | "monitor">("klant");

  return (
    <div>
      <div className="mb-10 inline-flex rounded-full bg-surface p-1">
        <button
          type="button"
          onClick={() => setView("klant")}
          className={`rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
            view === "klant" ? "bg-accent text-white" : "text-text-secondary"
          }`}
        >
          Klantweergave
        </button>
        <button
          type="button"
          onClick={() => setView("monitor")}
          className={`rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
            view === "monitor" ? "bg-accent text-white" : "text-text-secondary"
          }`}
        >
          Monitor (intern)
        </button>
      </div>

      {view === "klant" ? clientView : monitorView}
    </div>
  );
}
