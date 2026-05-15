import { WeChatFrame } from "@/components/landing/WeChatFrame";
import { QrPanel } from "@/components/landing/QrPanel";
import { WECHAT_START_URL } from "@/lib/constants";
import Image from "next/image";

const heroChat = [
  { side: "right" as const, text: "We need a restrained launch film—premium, fast, bilingual supers." },
  { side: "left" as const, text: "Understood. I will align on tone, pacing, and deliver a first concept for review." },
  { side: "left" as const, text: "Share product stills and the narrative you want emphasized." },
  { side: "right" as const, text: "Sending the deck and hero pack now." },
];

const outputFrames = [
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=640&q=80",
    alt: "Abstract cinematic lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=640&q=80",
    alt: "Cinematic still",
  },
  {
    src: "https://images.unsplash.com/photo-1523275335684-3783b10b4fa4?auto=format&fit=crop&w=640&q=80",
    alt: "Product in studio light",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 yl-grid-bg opacity-[0.55]" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-yl-violet/15 blur-[100px] animate-yl-glow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-40 h-64 w-64 rounded-full bg-yl-cyan/10 blur-[90px] animate-yl-glow"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12">
        <div>
          <p className="animate-yl-in text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
            Yinglian · 影链
          </p>
          <h1 className="animate-yl-in animate-yl-delay-1 mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl sm:leading-[1.06]">
            High-quality videos, started on WeChat.
          </h1>
          <p className="animate-yl-in animate-yl-delay-2 mt-6 max-w-lg text-base leading-relaxed text-yl-muted sm:text-lg">
            Yinglian helps brands and businesses create premium video content through a simple chat
            with Sammy on WeChat.
          </p>
          <div className="animate-yl-in animate-yl-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WECHAT_START_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-neutral-950 transition hover:bg-zinc-100"
            >
              Chat with Sammy on WeChat
            </a>
            <a
              href="#samples"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-6 text-sm font-medium text-white/85 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              View Sample Videos
            </a>
          </div>
          <p className="animate-yl-in animate-yl-delay-4 mt-6 max-w-md text-sm leading-relaxed text-white/40">
            Brief, align, and review in one thread—then receive a finished film that is ready for
            brand channels.
          </p>
        </div>

        <div className="animate-yl-in animate-yl-delay-2 relative flex justify-center lg:justify-end">
          <div className="relative flex w-full max-w-[420px] flex-col items-center gap-6 lg:max-w-none lg:flex-row lg:items-start lg:justify-end">
            <div className="relative w-full max-w-[280px]">
              <div className="absolute -inset-6 rounded-[2.75rem] bg-gradient-to-b from-yl-violet/10 via-transparent to-yl-cyan/5 blur-2xl" aria-hidden />
              <div className="relative mx-auto aspect-[10/19] w-full max-w-[260px] rounded-[2.35rem] border border-white/10 bg-gradient-to-b from-yl-surface-2 to-black p-[9px] shadow-[0_40px_120px_-50px_rgba(0,0,0,0.9)]">
                <div className="relative h-full overflow-hidden rounded-[1.85rem] ring-1 ring-white/[0.05]">
                  <WeChatFrame
                    title="Sammy"
                    subtitle="Yinglian"
                    lines={heroChat}
                  />
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-center text-[11px] font-medium uppercase tracking-[0.18em] text-white/35 lg:text-left">
                  From chat to delivery
                </p>
                <div className="flex gap-2">
                  {outputFrames.map((f) => (
                    <div
                      key={f.src}
                      className="relative aspect-video flex-1 overflow-hidden rounded-lg ring-1 ring-white/10"
                    >
                      <Image
                        src={f.src}
                        alt={f.alt}
                        fill
                        sizes="(max-width: 768px) 33vw, 120px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden shrink-0 lg:block">
              <QrPanel
                size={120}
                caption="Scan with WeChat to start a project with Sammy."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
