import { QrPanel } from "@/components/landing/QrPanel";
import { WECHAT_START_URL } from "@/lib/constants";

export function FinalCtaSection() {
  return (
    <section className="border-t border-white/[0.04] bg-gradient-to-b from-yl-bg to-[#030305]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)] lg:items-center lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.4rem] lg:leading-tight">
              Start your next video on WeChat.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-yl-muted sm:text-lg">
              Chat with Sammy, share your brief, and move from idea to premium video faster.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WECHAT_START_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-neutral-950 transition hover:bg-zinc-100"
              >
                Chat with Sammy on WeChat
              </a>
              <a
                href={WECHAT_START_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center text-sm font-medium text-white/60 underline decoration-white/20 underline-offset-4 transition hover:text-white/85 hover:decoration-white/40"
              >
                Open link on desktop
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 lg:items-end">
            <QrPanel size={220} caption="Scan with WeChat to start" />
            <p className="max-w-[16rem] text-center text-xs leading-relaxed text-white/40 lg:text-right">
              If you are on desktop, use the backup link or scan from your phone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
