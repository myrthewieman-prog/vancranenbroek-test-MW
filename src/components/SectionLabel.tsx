export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="inline-block h-[9px] w-[9px] bg-accent" />
      <h2 className="text-xs font-bold uppercase tracking-wide text-text-secondary">
        {children}
      </h2>
    </div>
  );
}
