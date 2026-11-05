import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-4 py-3 md:px-8">
        <Link href="/" className="font-display text-xl leading-none tracking-tight text-ink md:text-2xl" aria-label="Campbell's British Tearoom, home">
          Campbell&apos;s <span className="text-brand">British Tearoom</span>
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-7 text-[0.95rem] font-semibold">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="draw draw-hover">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <a href={`tel:${site.phoneTel}`} className="draw draw-hover hidden font-semibold md:inline-flex">
            {site.phone}
          </a>
          <a href={`tel:${site.phoneTel}`} className="draw draw-hover font-semibold md:hidden">
            Call
          </a>
          <Link href="/book" className="btn btn-accent">Book a table</Link>
        </div>
      </div>
    </header>
  );
}
