const steps = [
  {
    n: "01",
    title: "Chat with Sammy on WeChat",
    body: "Open the thread, introduce your brand, and set the level of finish you expect.",
  },
  {
    n: "02",
    title: "Share your product, campaign, or idea",
    body: "Send references, assets, and constraints—Sammy keeps the brief structured.",
  },
  {
    n: "03",
    title: "Receive a first video concept",
    body: "Review pacing, structure, and visual direction early—before heavy production.",
  },
  {
    n: "04",
    title: "Review and get your final video",
    body: "Clear revision rounds and a clean delivery package for your channels.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="process" className="scroll-mt-28 border-t border-white/[0.04] bg-[#06060a]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How Yinglian works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-yl-muted sm:text-lg">
            A direct path from brief to delivery—no noisy dashboards, no endless email chains.
          </p>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <div className="flex items-start gap-4 lg:flex-col lg:gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold tracking-wide text-white/80">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-yl-muted">{s.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
