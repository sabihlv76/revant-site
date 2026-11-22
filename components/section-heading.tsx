export function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline justify-between border-t border-fg pt-4">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.18em]">
        {title}
      </h2>
      <span className="font-mono text-[11px] text-muted">({index})</span>
    </div>
  );
}
