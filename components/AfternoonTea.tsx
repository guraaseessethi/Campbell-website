import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/images";
import { menu } from "@/lib/site";
import { Copy } from "./Rich";

export function AfternoonTea() {
  const tea = menu.find((s) => s.id === "afternoon-tea")!;
  const sweetsNote = "Recent sweets have included Eton Mess, mousse and mini cupcakes.";
  return (
    <section id="afternoon-tea" className="bg-paper-deep">
      <div className="mx-auto grid max-w-[1280px] gap-16 px-4 py-24 md:grid-cols-12 md:gap-10 md:px-8 md:py-36">
        <div className="md:col-span-5">
          <p className="eyebrow">Afternoon tea</p>
          <h2 data-reveal className="mt-4">Built from the bottom up.</h2>
          <p className="mt-6 text-lg">
            Three tiers, one for each part of the tea. Each guest picks a loose-leaf tea and gets their own pot, served in china. The clotted cream is real.
          </p>
          <p className="mt-4">Book at least 24 hours ahead.</p>
          <div className="img-zoom relative mt-10 aspect-[4/3] max-w-md">
            <Image src={photos.teapot.src} alt={photos.teapot.alt} fill sizes="(min-width: 768px) 36vw, 90vw" className="object-cover" />
          </div>
          <ul className="mt-10 border-t border-line">
            {tea.items.map((item) => (
              <li key={item.name} className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                <span className="font-semibold">{item.name}</span>
                <span className="whitespace-nowrap font-semibold tabular-nums"><Copy text={item.price} /></span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link href="/book" className="btn btn-accent">Book afternoon tea</Link>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div id="stand-pin" className="mx-auto flex max-w-[34rem] flex-col gap-3 bg-paper-deep py-6">
            <div data-tier="top" className="mx-auto w-[62%] border border-line bg-paper p-6">
              <p className="eyebrow">Top tier</p>
              <h3 className="mt-2">Sweets</h3>
              <p className="mt-2 text-[0.95rem] text-muted">{sweetsNote}</p>
            </div>
            <div data-tier="middle" className="mx-auto w-[82%] border border-line bg-paper">
              <div className="relative aspect-[16/9]">
                <Image src={photos.scones.src} alt={photos.scones.alt} fill sizes="(min-width: 900px) 30vw, 80vw" className="object-cover" />
              </div>
              <div className="p-6">
                <p className="eyebrow">Middle tier</p>
                <h3 className="mt-2">Scones, clotted cream and jam</h3>
              </div>
            </div>
            <div data-tier="bottom" className="w-full border border-line bg-paper p-6 md:p-8">
              <p className="eyebrow">Bottom tier</p>
              <h3 className="mt-2">Sandwiches</h3>
              <p className="mt-2 text-[0.95rem] text-muted">
                Three fingers each of egg mayo, cream cheese and cucumber, and coronation chicken per guest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
