import { Logo } from "@/components/brand/Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#030305]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Logo />
        <p className="text-xs text-white/35">
          © {new Date().getFullYear()} Yinglian. English brand name: Yinglian · 影链
        </p>
      </div>
    </footer>
  );
}
