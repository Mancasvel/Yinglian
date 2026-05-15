import { HeroChatAnimation } from "@/components/landing/HeroChatAnimation";
import { WECHAT_START_URL } from "@/lib/constants";

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

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14">
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
          <div className="relative w-full max-w-[min(100%,22rem)] sm:max-w-[min(100%,26rem)] lg:max-w-[min(100%,28.5rem)]">
            <div
              className="absolute -inset-8 rounded-[3.25rem] bg-gradient-to-b from-yl-violet/10 via-transparent to-yl-cyan/5 blur-2xl sm:-inset-10"
              aria-hidden
            />
            <div className="relative mx-auto aspect-[10/19] w-full max-w-[20.5rem] rounded-[2.65rem] border border-white/10 bg-gradient-to-b from-yl-surface-2 to-black p-[10px] shadow-[0_40px_120px_-50px_rgba(0,0,0,0.9)] sm:max-w-[24rem] sm:rounded-[2.85rem] sm:p-[11px] lg:max-w-[26.5rem] lg:rounded-[3rem] lg:p-[12px]">
              <div className="relative h-full overflow-hidden rounded-[2.05rem] ring-1 ring-white/[0.05] sm:rounded-[2.2rem] lg:rounded-[2.35rem]">
                <HeroChatAnimation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
