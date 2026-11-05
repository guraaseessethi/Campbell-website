import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-[1280px] gap-12 px-4 pb-24 pt-12 md:grid-cols-12 md:gap-8 md:px-8 md:pb-36 md:pt-20">
      <div className="md:col-span-7 md:pt-8">
        <p data-fade className="eyebrow">Barrie, Ontario</p>
        <h1 className="mt-5">
          <span className="mask"><span data-rise className="block">Proper British</span></span>
          <span className="mask"><span data-rise className="block">afternoon tea,</span></span>
          <span className="mask"><span data-rise className="block text-brand">in Barrie.</span></span>
        </h1>
        <p data-fade className="mt-8 max-w-[40ch] text-lg">
          Afternoon tea, full English breakfasts and lunch, with a bakery counter of scones, pies and sausage rolls. Unit 18, Barriegate Centre, 274 Burton Ave.
        </p>
        <div data-fade className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <Link href="/book" className="btn btn-accent">Book a table</Link>
          <a href={`tel:${site.phoneTel}`} className="draw font-semibold text-lg">Call {site.phone}</a>
        </div>
        <p data-fade className="mt-6 text-[0.95rem] text-muted">
          Afternoon tea needs 24 hours&apos; notice. Book ahead for weekends and holidays.
        </p>
      </div>
      <div className="img-zoom relative md:col-span-5 md:col-start-8 md:row-start-1">
        <div className="relative aspect-[4/5]">
          <Image
            src={photos.hero.src}
            alt={photos.hero.alt}
            fill
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
