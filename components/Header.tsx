import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-2.5 sm:gap-5 md:px-8">
        <Link href="/" className="whitespace-nowrap font-display text-[1.1rem] leading-none tracking-tight text-ink sm:text-xl md:text-[1.6rem]" aria-label="Campbell's British Tearoom, home">
          Campbell&apos;s <span className="text-brand">British Tearoom</span>
        </Link>
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex gap-6 text-[0.92rem] font-semibold">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="draw draw-hover">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3 sm:gap-4">
          <a href={`tel:${site.phoneTel}`} className="draw draw-hover hidden font-semibold lg:inline-flex">
            {site.phone}
          </a>
          <a href={`tel:${site.phoneTel}`} className="draw draw-hover font-semibold lg:hidden">
            Call
          </a>
          <Link href="/book" aria-label="Book a table" className="btn btn-accent !min-h-11 !px-4 !py-2 sm:!px-5"><span className="sm:hidden">Book</span><span className="hidden sm:inline">Book a table</span></Link>
        </div>
      </div>
    </header>
  );
}
