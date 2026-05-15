import { WeChatFrame } from "@/components/landing/WeChatFrame";
import { WECHAT_START_URL } from "@/lib/constants";

const sammyChat = [
  { side: "right" as const, text: "We are announcing a new line next month. We want calm confidence." },
  { side: "left" as const, text: "Noted. I will propose two editorial directions—one restrained, one bolder." },
  { side: "left" as const, text: "You will receive a timed first cut for review, then we lock picture." },
  { side: "right" as const, text: "Perfect. Keep titles minimal and bilingual where needed." },
];

export function SammySection() {
  return (
    <section id="sammy" className="scroll-mt-28 border-t border-white/[0.04] bg-[#06060a]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Meet Sammy</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-yl-muted sm:text-lg">
              Sammy is the fastest way to start a project: a steady point of contact who translates
              goals into a production plan, keeps communication crisp, and protects quality through
              delivery.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-yl-muted">
              Sammy is not a gimmick—Sammy is the human-facing layer of Yinglian, built for teams
              that value discretion, clarity, and a premium result.
            </p>
            <a
              href={WECHAT_START_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-neutral-950 transition hover:bg-zinc-100"
            >
              Chat with Sammy on WeChat
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[340px]">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-yl-violet/10 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-yl-surface shadow-[0_40px_120px_-55px_rgba(0,0,0,0.95)]">
              <WeChatFrame title="Sammy" subtitle="Yinglian" lines={sammyChat} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
