"use client";

import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { WeekPoint } from "@/lib/mock-data";

export type TrendSeries = {
  key: string;
  name: string;
  type: "line" | "bar";
  color: string;
  yAxis?: "left" | "right";
  dashed?: boolean;
};

function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-border bg-surface px-3 py-2 shadow-md">
      <p className="text-xs font-medium text-text-secondary">{label}</p>
      <ul className="mt-1 space-y-0.5">
        {payload.map((entry) => (
          <li
            key={entry.name}
            className="flex items-center gap-2 text-xs tabular-nums text-foreground"
          >
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: entry.color }} />
            <span className="text-text-secondary">{entry.name}</span>
            <span className="ml-auto font-medium">
              {entry.value.toLocaleString("nl-NL", { maximumFractionDigits: 1 })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TrendChart({
  title,
  data,
  series,
  showLegend,
}: {
  title: string;
  data: WeekPoint[];
  series: TrendSeries[];
  showLegend?: boolean;
}) {
  const hasRightAxis = series.some((s) => s.yAxis === "right");

  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <p className="text-sm font-bold text-foreground">{title}</p>
      <div className="mt-3 h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
            <CartesianGrid stroke="var(--gridline)" vertical={false} />
            <XAxis
              dataKey="week"
              tick={{ fill: "var(--text-muted)", fontSize: 11 }}
              axisLine={{ stroke: "var(--border)" }}
              tickLine={false}
            />
            <YAxis
              yAxisId="left"
              tick={{ fill: "var(--text-muted)", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              width={44}
            />
            {hasRightAxis && (
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fill: "var(--text-muted)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                width={44}
              />
            )}
            <Tooltip content={<ChartTooltip />} cursor={{ stroke: "var(--gridline)" }} />
            {showLegend && (
              <Legend
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: 11, color: "var(--text-secondary)" }}
              />
            )}
            {series.map((s) =>
              s.type === "bar" ? (
                <Bar
                  key={s.key}
                  yAxisId={s.yAxis ?? "left"}
                  dataKey={s.key}
                  name={s.name}
                  fill={s.color}
                  fillOpacity={0.25}
                  stroke={s.color}
                  radius={[2, 2, 0, 0]}
                />
              ) : (
                <Line
                  key={s.key}
                  yAxisId={s.yAxis ?? "left"}
                  type="monotone"
                  dataKey={s.key}
                  name={s.name}
                  stroke={s.color}
                  strokeWidth={2}
                  strokeDasharray={s.dashed ? "4 3" : undefined}
                  dot={{ r: 2.5, strokeWidth: 0, fill: s.color }}
                  activeDot={{ r: 4 }}
                />
              )
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
