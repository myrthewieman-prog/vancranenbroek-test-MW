"use client";

import { useEffect, useRef, useState } from "react";
import { monitorMonthOptions, monitorWeekOptions, type MonitorPeriod } from "@/lib/mock-data";

export function MonitorHeroHeader({
  eyebrow,
  title,
  period,
  onPeriodChange,
  subtitlePeriod,
  buttonLabel,
  note,
}: {
  eyebrow: string;
  title: string;
  period: MonitorPeriod;
  onPeriodChange: (period: MonitorPeriod) => void;
  subtitlePeriod: string;
  buttonLabel: string;
  note: string;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const options = period === "week" ? monitorWeekOptions : monitorMonthOptions;
  const currentOption = options[options.length - 1];

  useEffect(() => {
    setSelected(null);
    setOpen(false);
  }, [period]);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const displayLabel = selected === null || selected === currentOption ? buttonLabel : selected;

  return (
    <div
      className="rounded-2xl p-8 sm:p-10"
      style={{
        background:
          "linear-gradient(135deg, #4c2889 0%, #2a1a5e 35%, #150f2e 70%, #0d0d18 100%)",
      }}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-[10px] w-[10px] bg-accent" />
            <p className="text-xs font-bold uppercase tracking-wide text-[#c9bdf5]">
              {eyebrow}
            </p>
          </div>
          <h1 className="mt-3 text-3xl text-white sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-[#a9a6c2]">
            {subtitlePeriod} · {note}
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <div className="inline-flex rounded-full bg-white/10 p-1">
            <button
              type="button"
              onClick={() => onPeriodChange("week")}
              className={`rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
                period === "week" ? "bg-white text-[#150f2e]" : "text-[#c9bdf5]"
              }`}
            >
              Week
            </button>
            <button
              type="button"
              onClick={() => onPeriodChange("maand")}
              className={`rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
                period === "maand" ? "bg-white text-[#150f2e]" : "text-[#c9bdf5]"
              }`}
            >
              Maand
            </button>
          </div>

          <div ref={containerRef} className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-bold text-white"
            >
              {displayLabel}
              <span aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>

            {open && (
              <div className="absolute right-0 z-10 mt-2 max-h-80 w-72 overflow-y-auto rounded-xl border border-border bg-surface p-1.5 shadow-xl">
                {options
                  .slice()
                  .reverse()
                  .map((option) => {
                    const isSelected =
                      selected === null ? option === currentOption : option === selected;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setSelected(option);
                          setOpen(false);
                        }}
                        className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm ${
                          isSelected
                            ? "bg-accent/10 font-bold text-accent"
                            : "text-foreground hover:bg-surface-alt"
                        }`}
                      >
                        <span>{option}</span>
                        {isSelected && <span aria-hidden>✓</span>}
                      </button>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
