import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/images";
import { menu } from "@/lib/site";
import { MenuList } from "./MenuList";

export function BreakfastLunch() {
  const breakfast = menu.find((s) => s.id === "breakfast")!;
  const lunch = menu.find((s) => s.id === "lunch")!;
  return (
    <section id="breakfast-lunch" className="mx-auto grid max-w-[1280px] gap-16 px-4 py-24 md:grid-cols-12 md:gap-10 md:px-8 md:py-36">
      <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
        <div data-wipe className="img-zoom relative aspect-[4/5]">
          <Image src={photos.fryUp.src} alt={photos.fryUp.alt} fill sizes="(min-width: 768px) 40vw, 92vw" className="object-cover" />
        </div>
      </div>
      <div className="md:col-span-6 md:col-start-7">
        <p className="eyebrow">Breakfast and lunch</p>
        <h2 data-reveal className="mt-4">Breakfast until noon, then lunch.</h2>
        <p className="mt-6 text-lg">
          A proper breakfast with fried bread, potato scone and black pudding. You can swap in Lorne (square) sausage. Lunch is sandwiches and hot plates.
        </p>

        <h3 className="mt-16">Breakfast</h3>
        <p className="mt-2 text-sm text-muted">Served until noon.</p>
        <div className="mt-6"><MenuList items={breakfast.items} /></div>

        <h3 className="mt-16">Lunch</h3>
        <div className="mt-6"><MenuList items={lunch.items} /></div>

        <p className="mt-10">
          <Link href="/menu" className="draw font-bold text-lg">Full menu with prices</Link>
        </p>
      </div>
    </section>
  );
}
