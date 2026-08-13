export function ChannelSectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-5 flex items-baseline gap-3">
      <span className="inline-block h-[12px] w-[12px] shrink-0 translate-y-[-1px] bg-accent" />
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <span className="text-sm text-text-muted">{subtitle}</span>
    </div>
  );
}
