import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/images";
import { menu } from "@/lib/site";
import { TeaStand } from "./TeaStand";

export function AfternoonTea() {
  const tea = menu.find((s) => s.id === "afternoon-tea")!;
  return (
    <section id="afternoon-tea" className="bg-paper-deep">
      <div className="mx-auto grid max-w-[1280px] gap-16 px-4 pb-16 pt-24 md:grid-cols-12 md:gap-10 md:px-8 md:pb-24 md:pt-36">
        <div className="md:col-span-5">
          <p className="eyebrow">Afternoon tea</p>
          <h2 data-reveal className="mt-4">Built from the bottom up.</h2>
          <p className="mt-6 text-lg">
            Three tiers, one for each part of the tea. Each guest picks a loose-leaf tea and gets their own pot, served in china. The clotted cream is real.
          </p>
          <p className="mt-4">High Tea is $39.50 and takes about 2 hours. Book at least 24 hours ahead.</p>
          <ul className="mt-10 border-t border-line">
            {tea.items.map((item) => (
              <li key={item.name} className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                <span className="font-semibold">{item.name}</span>
                <span className={`whitespace-nowrap tabular-nums ${item.price?.startsWith("Ask") ? "text-[0.95rem] text-muted" : "font-semibold"}`}>{item.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link href="/book" className="btn btn-accent">Book afternoon tea</Link>
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <TeaStand />
        </div>
      </div>
      <div className="mx-auto grid max-w-[1280px] gap-6 px-4 pb-24 md:grid-cols-12 md:px-8 md:pb-36">
        <div data-wipe className="img-zoom relative aspect-[4/5] md:col-span-4">
          <Image src={photos.sconeCream.src} alt={photos.sconeCream.alt} fill sizes="(min-width: 768px) 30vw, 92vw" className="object-cover" />
        </div>
        <div className="img-zoom relative aspect-[4/3] md:col-span-8 md:mt-24 md:aspect-[16/10]">
          <Image src={photos.teaSpread.src} alt={photos.teaSpread.alt} fill sizes="(min-width: 768px) 62vw, 92vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
