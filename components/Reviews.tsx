import { reviews, site } from "@/lib/site";

export function Reviews() {
  return (
    <section id="reviews" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1280px] px-4 py-24 md:px-8 md:py-36">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 data-reveal>What guests say.</h2>
          <p className="text-lg">
            {site.reviews.rating} stars from {site.reviews.count} Google reviews, as of {site.reviews.asOf}.
          </p>
        </div>
        <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2">
          {reviews.map((r) => (
            <figure key={r.name + r.quote.slice(0, 12)} className="border-t border-paper/30 pt-6">
              <blockquote>
                <p className="font-display text-2xl leading-snug md:text-[1.7rem]">{r.quote}</p>
              </blockquote>
              <figcaption className="mt-4 text-sm font-extrabold tracking-wide">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
