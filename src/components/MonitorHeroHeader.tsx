import type { MonitorPeriod } from "@/lib/mock-data";

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
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-bold text-white"
          >
            {buttonLabel}
            <span aria-hidden>▾</span>
          </button>
        </div>
      </div>
    </div>
  );
}
