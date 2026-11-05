import Image from "next/image";
import { photos } from "@/lib/images";
import { menu, shop, site } from "@/lib/site";
import { Copy } from "./Rich";
import { MenuList } from "./MenuList";
import { Seasonal } from "./Seasonal";

export function Bakery() {
  const bakery = menu.find((s) => s.id === "bakery")!;
  return (
    <section id="bakery">
      <div className="img-zoom relative h-[60vh] min-h-[380px] md:h-[80vh]">
        <Image src={photos.piesDark.src} alt={photos.piesDark.alt} fill sizes="100vw" className="object-cover" />
      </div>
      <div className="relative mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="-mt-20 bg-paper p-6 md:-mt-32 md:ml-[8%] md:max-w-[46rem] md:p-12">
          <p className="eyebrow">Bakery counter and shop</p>
          <h2 data-reveal className="mt-4">Pies, scones and sausage rolls to take home.</h2>
          <p className="mt-6 text-lg">
            Eat in or take home. Everything is made in house. Pick up a pie on the way home, or order takeout on DoorDash: <Copy text={site.doordashUrl} />
          </p>
        </div>
      </div>
      <div className="mx-auto mt-24 grid max-w-[1280px] gap-16 px-4 pb-24 md:grid-cols-12 md:gap-10 md:px-8 md:pb-36">
        <div className="md:col-span-6">
          <h3>From the bakery counter</h3>
          <div className="mt-6"><MenuList items={bakery.items} /></div>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <h3>Shop</h3>
          <p className="mt-4">{shop.intro}</p>
          <ul className="mt-6 border-t border-line">
            {shop.items.map((item) => (
              <li key={item} className="border-b border-line py-4">{item}</li>
            ))}
          </ul>
          <div className="mt-14">
            <Seasonal />
          </div>
        </div>
      </div>
    </section>
  );
}
