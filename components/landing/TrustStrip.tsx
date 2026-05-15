const items = [
  "Fast turnaround",
  "Brand-ready quality",
  "Built for business use",
  "Simple WeChat workflow",
];

export function TrustStrip() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.02]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-10 md:py-9">
        {items.map((label) => (
          <div key={label} className="flex items-center gap-3 md:flex-1">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-yl-violet shadow-[0_0_12px_rgba(124,106,252,0.55)]"
              aria-hidden
            />
            <p className="text-sm font-medium tracking-tight text-white/75">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
