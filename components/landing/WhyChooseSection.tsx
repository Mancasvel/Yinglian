const reasons = [
  {
    title: "High-quality output",
    body: "Lighting, motion, and sound treated with editorial discipline—not template energy.",
  },
  {
    title: "Faster than traditional workflows",
    body: "Decisions happen in chat, production stays parallel, and momentum stays high.",
  },
  {
    title: "Easy to start on WeChat",
    body: "Meet clients where they already work, with a calm, familiar interface.",
  },
  {
    title: "Built for real business needs",
    body: "Launch films, brand stories, and campaign cuts—aligned to how teams ship.",
  },
  {
    title: "Clear revisions and delivery process",
    body: "Expect explicit review moments and a predictable path to final files.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="border-t border-white/[0.04] bg-yl-bg">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Why clients choose Yinglian
        </h2>
        <div className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="grid gap-3 py-8 sm:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] sm:items-start sm:gap-10 sm:py-9"
            >
              <h3 className="text-base font-semibold text-white">{r.title}</h3>
              <p className="text-sm leading-relaxed text-yl-muted">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
