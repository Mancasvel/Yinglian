import Image from "next/image";

const samples = [
  {
    title: "Product launch video",
    description: "Precise pacing, premium lighting, and a launch narrative that stays on-brand.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Brand story video",
    description: "Emotional clarity without excess—crafted for leadership updates and flagship moments.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Social campaign video",
    description: "Sharp edits and confident rhythm, tuned for performance across key social surfaces.",
    image:
      "https://images.unsplash.com/photo-1523275335684-3783b10b4fa4?auto=format&fit=crop&w=1200&q=85",
  },
];

export function SampleVideosSection() {
  return (
    <section id="samples" className="scroll-mt-28 border-t border-white/[0.04] bg-yl-bg">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            See the quality first.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-yl-muted sm:text-lg">
            A small set of reference directions—each treated with the same care we bring to client
            delivery.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {samples.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-2xl ring-1 ring-white/[0.08] transition hover:ring-white/[0.14]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-yl-surface-2">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="text-lg font-semibold tracking-tight text-white">{s.title}</h3>
                    <span className="hidden text-xs font-medium uppercase tracking-[0.16em] text-white/45 sm:inline">
                      Reference
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/[0.06] bg-yl-surface px-5 py-5">
                <p className="text-sm leading-relaxed text-yl-muted">{s.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
