export function ProgressBar({ pct }: { pct: number }) {
  const clamped = Math.max(0, Math.min(100, pct));
  return (
    <div className="h-1.5 w-full rounded-full bg-surface-alt">
      <div className="h-1.5 rounded-full bg-accent" style={{ width: `${clamped}%` }} />
    </div>
  );
}
