import type { Metadata } from "next";
import { MenuList } from "@/components/MenuList";
import { Seasonal } from "@/components/Seasonal";
import { menu } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu with prices",
  description: "Full menu with prices from Campbell's British Tearoom in Barrie, Ontario: breakfast until noon, lunch, afternoon tea, Fish Friday and the bakery counter.",
};

export default function MenuPage() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-4 pb-12 pt-14 md:px-8 md:pt-24">
        <p className="eyebrow">Menu</p>
        <h1 className="mt-4">Menu and prices</h1>
        <p className="mt-6 text-lg">
          Breakfast is served until noon. Afternoon tea needs 24 hours&apos; notice. Prices are in Canadian dollars and may change.
        </p>
        <nav aria-label="Menu categories" className="mt-12 flex flex-wrap gap-x-8 gap-y-2 border-b border-line">
          {menu.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="draw draw-hover text-sm font-extrabold uppercase tracking-[0.12em]">
              {s.title}
            </a>
          ))}
        </nav>
      </section>

      <div className="mx-auto grid max-w-[1280px] gap-16 px-4 pb-24 md:grid-cols-12 md:gap-10 md:px-8 md:pb-36">
        <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
          <Seasonal />
        </div>
        <div className="flex flex-col gap-24 md:col-span-7 md:col-start-6">
          {menu.map((s) => (
            <section key={s.id} id={s.id}>
              <h2 className="text-[clamp(2rem,1.4rem+2vw,3.25rem)]">{s.title}</h2>
              <p className="mt-4 text-muted">{s.intro}</p>
              <div className="mt-8"><MenuList items={s.items} /></div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
