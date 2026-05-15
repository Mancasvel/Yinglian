export type ChatLine = { side: "left" | "right"; text: string };

export function WeChatFrame({
  title,
  subtitle,
  lines,
}: {
  title: string;
  subtitle?: string;
  lines: ChatLine[];
}) {
  return (
    <div className="flex h-full min-h-[320px] flex-col bg-[#07070a]">
      <header className="flex shrink-0 items-center justify-between border-b border-white/[0.06] px-3 py-2.5">
        <span className="w-6 text-sm text-white/35" aria-hidden>
          ‹
        </span>
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[13px] font-medium text-white/90">{title}</span>
          {subtitle ? (
            <span className="text-[10px] text-white/35">{subtitle}</span>
          ) : null}
        </div>
        <span className="w-6" aria-hidden />
      </header>
      <div className="flex flex-1 flex-col gap-2.5 overflow-hidden px-3 py-4">
        {lines.map((m, i) => (
          <div
            key={`${m.side}-${i}`}
            className={`flex ${m.side === "right" ? "justify-end" : "justify-start"}`}
          >
            <p
              className={
                m.side === "right"
                  ? "max-w-[88%] rounded-2xl rounded-br-sm bg-white/[0.08] px-3 py-2 text-[12.5px] leading-snug text-white/90 ring-1 ring-white/[0.06]"
                  : "max-w-[88%] rounded-2xl rounded-bl-sm bg-white/[0.04] px-3 py-2 text-[12.5px] leading-snug text-white/75 ring-1 ring-white/[0.05]"
              }
            >
              {m.text}
            </p>
          </div>
        ))}
      </div>
      <footer className="shrink-0 border-t border-white/[0.06] px-3 py-2.5">
        <div className="flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-2 ring-1 ring-white/[0.06]">
          <span className="text-[11px] text-white/25">Message</span>
          <span className="ml-auto h-1.5 w-1.5 rounded-full bg-yl-cyan/80" aria-hidden />
        </div>
      </footer>
    </div>
  );
}
