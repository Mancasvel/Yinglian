"use client";

import { QRCodeSVG } from "qrcode.react";
import { WECHAT_START_URL } from "@/lib/constants";

export function QrPanel({
  size = 168,
  caption,
  className = "",
}: {
  size?: number;
  caption?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-3 rounded-2xl bg-white p-4 text-neutral-950 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.85)] ring-1 ring-white/10 ${className}`}
    >
      <QRCodeSVG
        value={WECHAT_START_URL}
        size={size}
        level="M"
        marginSize={2}
        bgColor="#ffffff"
        fgColor="#09090b"
      />
      {caption ? (
        <p className="max-w-[14rem] text-center text-xs leading-relaxed text-neutral-600">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
