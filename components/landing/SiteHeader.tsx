import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { WECHAT_START_URL } from "@/lib/constants";

const nav = [
  { href: "#samples", label: "Samples" },
  { href: "#process", label: "How it works" },
  { href: "#sammy", label: "Sammy" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-yl-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="shrink-0 outline-none ring-yl-violet/40 focus-visible:ring-2">
          <Logo />
        </Link>
        <nav
          className="hidden items-center gap-8 text-sm text-white/50 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white/85"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#samples"
            className="rounded-full border border-white/12 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/[0.04]"
          >
            View Sample Videos
          </a>
          <a
            href={WECHAT_START_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-zinc-100"
          >
            Chat with Sammy on WeChat
          </a>
        </div>
      </div>
    </header>
  );
}
