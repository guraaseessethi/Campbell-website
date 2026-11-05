import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="grid md:min-h-[min(82vh,800px)] md:grid-cols-[1.15fr_1fr]">
      <div className="flex flex-col justify-center bg-brand px-4 py-16 text-paper md:py-24 md:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] md:pr-14">
        <p data-fade className="text-[0.8rem] font-extrabold uppercase tracking-[0.14em] text-rose-tint">Barrie, Ontario</p>
        <h1 className="mt-5 text-[clamp(2.75rem,1rem+4.3vw,5.75rem)]">
          <span className="mask"><span data-rise className="block">Proper British</span></span>
          <span className="mask"><span data-rise className="block">afternoon tea,</span></span>
          <span className="mask"><span data-rise className="block text-rose-tint">in Barrie.</span></span>
        </h1>
        <p data-fade className="mt-8 max-w-[42ch] text-lg">
          Afternoon tea, full English breakfasts and lunch, with a bakery counter of scones, pies and sausage rolls. Unit 18, Barriegate Centre, 274 Burton Ave.
        </p>
        <div data-fade className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link href="/book" className="btn btn-light">Book a table</Link>
          <a href={`tel:${site.phoneTel}`} className="draw text-lg font-semibold">Call {site.phone}</a>
        </div>
        <dl data-fade className="mt-12 grid max-w-xl gap-x-8 gap-y-4 border-t border-paper/30 pt-6 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-extrabold uppercase tracking-[0.12em] text-rose-tint">Guests say</dt>
            <dd className="mt-1 text-[0.95rem]">{site.reviews.rating} stars, {site.reviews.count} Google reviews</dd>
          </div>
          <div>
            <dt className="text-xs font-extrabold uppercase tracking-[0.12em] text-rose-tint">Open</dt>
            <dd className="mt-1 text-[0.95rem]">7 days from 9 a.m.</dd>
          </div>
          <div>
            <dt className="text-xs font-extrabold uppercase tracking-[0.12em] text-rose-tint">Find us</dt>
            <dd className="mt-1 text-[0.95rem]">{site.address.plaza}, Burton Ave</dd>
          </div>
        </dl>
      </div>
      <div className="img-zoom relative min-h-[380px] md:min-h-0">
        <Image
          src={photos.hero.src}
          alt={photos.hero.alt}
          fill
          priority
          sizes="(min-width: 768px) 46vw, 100vw"
          className="object-cover"
        />
        <p className="absolute bottom-0 left-0 bg-paper px-5 py-3 text-sm font-semibold text-ink">
          Afternoon tea needs 24 hours&apos; notice.
        </p>
      </div>
    </section>
  );
}
