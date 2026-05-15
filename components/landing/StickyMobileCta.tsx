"use client";

import { WECHAT_START_URL } from "@/lib/constants";

export function StickyMobileCta() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div
        className="pointer-events-auto border-t border-white/[0.08] bg-[#050506]/85 px-4 pt-3 backdrop-blur-xl"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href={WECHAT_START_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-full items-center justify-center rounded-full bg-white text-sm font-semibold text-neutral-950 transition hover:bg-zinc-100"
        >
          Chat with Sammy on WeChat
        </a>
        <a
          href="#samples"
          className="mt-2 flex h-10 w-full items-center justify-center text-xs font-medium text-white/55 transition hover:text-white/80"
        >
          View Sample Videos
        </a>
      </div>
    </div>
  );
}
