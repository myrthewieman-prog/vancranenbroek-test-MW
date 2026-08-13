export function AlertCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border-l-4 border-accent bg-accent-soft p-5">
      <p className="text-sm text-foreground">
        <span className="font-bold text-accent">Let op: </span>
        {children}
      </p>
    </div>
  );
}
