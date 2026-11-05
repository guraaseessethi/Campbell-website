import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/images";
import { reviews } from "@/lib/site";

export function FishFriday() {
  const quote = reviews.find((r) => r.name === "Renee B.")!;
  return (
    <section id="fish-friday" className="bg-ink text-paper">
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-4 py-20 md:py-28 md:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] md:pr-14">
          <p className="text-[0.8rem] font-extrabold uppercase tracking-[0.14em] text-rose-tint">Fish Fridays</p>
          <h2 data-reveal className="mt-4">Every Friday, fish and chips.</h2>
          <p className="mt-6 text-lg">Beer batter and chunky fries, cut fresh in house.</p>
          <p className="mt-8 flex items-baseline justify-between gap-6 border-y border-paper/30 py-4 text-lg md:max-w-md">
            <span className="font-semibold">Cod and Chips</span>
            <span className="font-semibold tabular-nums">$20.95</span>
          </p>
          <figure className="mt-10 md:max-w-md">
            <blockquote><p className="font-display text-2xl leading-snug">{quote.quote}</p></blockquote>
            <figcaption className="mt-3 text-sm font-bold">{quote.name}, Google review</figcaption>
          </figure>
          <div className="mt-10">
            <Link href="/book" className="btn btn-light">Book a table</Link>
          </div>
        </div>
        <div className="img-zoom relative min-h-[360px] md:min-h-[560px]">
          <Image src={photos.fishChips.src} alt={photos.fishChips.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
