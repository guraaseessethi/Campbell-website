import Link from "next/link";
import { concept, nav, site } from "@/lib/site";
import { Copy } from "./Rich";

function UnionJackMark() {
  return (
    <svg viewBox="0 0 60 30" width="36" height="18" aria-hidden="true" focusable="false">
      <rect width="60" height="30" style={{ fill: "var(--color-accent)" }} />
      <path d="M0,0 L60,30 M60,0 L0,30" style={{ stroke: "var(--color-paper)", strokeWidth: 6 }} />
      <path d="M0,0 L60,30 M60,0 L0,30" style={{ stroke: "oklch(0.5 0.2 25)", strokeWidth: 2 }} />
      <path d="M30,0 V30 M0,15 H60" style={{ stroke: "var(--color-paper)", strokeWidth: 10 }} />
      <path d="M30,0 V30 M0,15 H60" style={{ stroke: "oklch(0.5 0.2 25)", strokeWidth: 6 }} />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-4 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="font-display text-3xl leading-tight">Campbell&apos;s British Tearoom</p>
          <p className="mt-4 text-muted">{site.address.street}, {site.address.locality}, {site.address.region} {site.address.postalCode}</p>
          <p className="mt-1 text-muted">Inside the {site.address.plaza}</p>
          <p className="mt-1 font-semibold"><a href={`tel:${site.phoneTel}`} className="draw">{site.phone}</a></p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="draw draw-hover">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">Follow along</p>
          <ul className="mt-3 flex flex-col">
            <li><a href={site.socials.instagram} className="draw draw-hover" rel="noopener">Instagram</a></li>
            <li><a href={site.socials.facebook} className="draw draw-hover" rel="noopener">Facebook</a></li>
          </ul>
          <p className="mt-6 text-sm text-muted">
            Takeout on DoorDash: <Copy text={site.doordashUrl} />
          </p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-4 py-6 text-sm text-muted md:px-8">
          <p className="flex items-center gap-3">
            <UnionJackMark />
            <span>{concept.credit}</span>
          </p>
          <p>&copy; 2026 Campbell&apos;s British Tearoom</p>
        </div>
      </div>
    </footer>
  );
}
