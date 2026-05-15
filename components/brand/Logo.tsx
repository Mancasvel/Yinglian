export function Logo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-baseline gap-2.5 ${className}`}
      aria-label="Yinglian 影链"
    >
      <span
        className="text-[1.05rem] font-semibold tracking-tight text-white"
        style={{ fontFamily: "var(--font-noto-sc), sans-serif" }}
      >
        影链
      </span>
      <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
      <span className="text-[0.72rem] font-semibold tracking-[0.12em] text-white/50">
        Yinglian
      </span>
    </div>
  );
}
