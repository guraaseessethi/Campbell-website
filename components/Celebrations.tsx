import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/images";
import { occasions, reviews } from "@/lib/site";

export function Celebrations() {
  const quote = reviews.find((r) => r.name === "Harvey L.")!;
  return (
    <section id="celebrations" className="bg-brand text-paper">
      <div className="mx-auto grid max-w-[1280px] gap-16 px-4 py-24 md:grid-cols-12 md:gap-10 md:px-8 md:py-36">
        <div className="md:col-span-6">
          <p className="text-[0.8rem] font-extrabold uppercase tracking-[0.14em] text-rose-tint">Celebrations</p>
          <h2 data-reveal className="mt-4">Birthdays, showers and family days.</h2>
          <p className="mt-6 text-lg">
            Private parties and family celebrations fill our calendar. Tell us the occasion and the number of guests, and we will plan the table around it.
          </p>
          <ul className="mt-10 border-t border-paper/30">
            {occasions.map((o) => (
              <li key={o} className="border-b border-paper/30 py-3.5 text-lg">{o}</li>
            ))}
          </ul>
          <div className="mt-10">
            <Link href="/book?for=celebration" className="btn btn-light">Plan a celebration</Link>
          </div>
        </div>
        <div className="md:col-span-5 md:col-start-8 md:pt-16">
          <div data-wipe className="img-zoom relative aspect-[4/5]">
            <Image src={photos.teacup.src} alt={photos.teacup.alt} fill sizes="(min-width: 768px) 40vw, 92vw" className="object-cover" />
          </div>
          <figure className="mt-10">
            <blockquote><p className="font-display text-2xl leading-snug">{quote.quote}</p></blockquote>
            <figcaption className="mt-3 text-sm font-bold">{quote.name}, Google review</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
