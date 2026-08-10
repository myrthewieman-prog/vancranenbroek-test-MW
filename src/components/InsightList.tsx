export function InsightList({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "good" | "attention";
}) {
  const dotColor = tone === "good" ? "var(--good)" : "var(--serious)";

  return (
    <div className="rounded-xl bg-accent-soft p-6">
      <p className="text-xs font-bold uppercase tracking-wide text-text-secondary">{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm text-foreground">
            <span
              className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full"
              style={{ background: dotColor }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
