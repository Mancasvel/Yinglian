"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const POLO_IMAGE =
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=480&q=82";
const VIDEO_POSTER =
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=720&q=85";

type ChatItem =
  | { kind: "text"; side: "left" | "right"; text: string }
  | { kind: "image"; side: "right"; src: string; alt: string }
  | { kind: "video"; side: "left"; poster: string; label: string };

const SCRIPT: ChatItem[] = [
  {
    kind: "text",
    side: "right",
    text: "我们想在欧洲销售一款高品质Polo衫，需要一支简洁、显质感的视频做投放和电商主图。",
  },
  {
    kind: "image",
    side: "right",
    src: POLO_IMAGE,
    alt: "客户发送的 Polo 产品实拍",
  },
  {
    kind: "video",
    side: "left",
    poster: VIDEO_POSTER,
    label: "概念样片",
  },
  {
    kind: "text",
    side: "right",
    text: "非常感谢您！正是我们想要的方向。",
  },
];

/** Milliseconds before each new line appears (cumulative pacing). */
const GAP_BEFORE_EACH_LINE_MS = [550, 2800, 2600, 4500];
const DWELL_MS = 3600;

function bubbleBase(side: "left" | "right") {
  return side === "right"
    ? "max-w-[88%] rounded-2xl rounded-br-sm bg-white/[0.08] ring-1 ring-white/[0.06]"
    : "max-w-[88%] rounded-2xl rounded-bl-sm bg-white/[0.04] ring-1 ring-white/[0.05]";
}

function HeroChatSequence({ onFinish }: { onFinish: () => void }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let acc = 0;

    for (let i = 0; i < SCRIPT.length; i++) {
      acc += GAP_BEFORE_EACH_LINE_MS[i] ?? 2000;
      const next = i + 1;
      timers.push(
        setTimeout(() => {
          setVisibleCount(next);
        }, acc),
      );
    }

    acc += DWELL_MS;
    timers.push(setTimeout(onFinish, acc));

    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [visibleCount]);

  const visible = SCRIPT.slice(0, visibleCount);

  return (
    <div className="flex h-full min-h-[320px] flex-col bg-[#07070a]">
      <header className="flex shrink-0 items-center justify-between border-b border-white/[0.06] px-3 py-2.5">
        <span className="w-6 text-sm text-white/35" aria-hidden>
          ‹
        </span>
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[13px] font-medium text-white/90">Sammy</span>
          <span className="text-[10px] text-white/35">Yinglian</span>
        </div>
        <span className="w-6" aria-hidden />
      </header>

      <div
        ref={scrollRef}
        className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto overflow-x-hidden px-3 py-4"
      >
        {visible.map((item, i) => {
          if (item.kind === "text") {
            return (
              <div
                key={`t-${i}`}
                className={`flex ${item.side === "right" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`animate-yl-in px-3 py-2 text-[12.5px] leading-relaxed text-white/90 ${bubbleBase(item.side)}`}
                  style={{ fontFamily: "var(--font-noto-sc), sans-serif" }}
                >
                  {item.text}
                </p>
              </div>
            );
          }

          if (item.kind === "image") {
            return (
              <div key={`i-${i}`} className="flex justify-end animate-yl-in">
                <div
                  className={`relative aspect-[4/5] w-[min(9.5rem,78%)] overflow-hidden rounded-2xl rounded-br-sm ${bubbleBase("right")} p-1`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="200px"
                    className="rounded-[0.65rem] object-cover"
                  />
                </div>
              </div>
            );
          }

function SammyVideoBubble({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const p = v.play();
    if (p !== undefined) {
      p.catch(() => {
        /* autoplay blocked — poster remains until user gesture */
      });
    }
  }, [src]);

  return (
    <div className={`overflow-hidden ${bubbleBase("left")} p-1.5`}>
      <div className="relative aspect-video w-[min(11.5rem,88%)] overflow-hidden rounded-xl bg-black">
        <video
          ref={ref}
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          controls={false}
          aria-label="Sammy 发送的视频"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />
        <div className="pointer-events-none absolute bottom-1.5 left-2 right-2 flex items-center justify-between text-[10px] text-white/90">
          <span
            className="truncate font-medium drop-shadow-sm"
            style={{ fontFamily: "var(--font-noto-sc), sans-serif" }}
          >
            {label}
          </span>
          <span className="flex shrink-0 items-center gap-1 tabular-nums text-white/55">
            <span className="text-[9px] uppercase tracking-wide">video</span>
            <span aria-hidden className="text-white/40">
              🔇
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
        })}
      </div>

      <footer className="shrink-0 border-t border-white/[0.06] px-3 py-2.5">
        <div className="flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-2 ring-1 ring-white/[0.06]">
          <span
            className="text-[11px] text-white/25"
            style={{ fontFamily: "var(--font-noto-sc), sans-serif" }}
          >
            发消息…
          </span>
          <span className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#07C160] text-[11px] font-bold text-white shadow-sm">
            ➤
          </span>
        </div>
      </footer>
    </div>
  );
}

export function HeroChatAnimation() {
  const [cycle, setCycle] = useState(0);
  const handleFinish = useCallback(() => {
    setCycle((c) => c + 1);
  }, []);

  return <HeroChatSequence key={cycle} onFinish={handleFinish} />;
}
