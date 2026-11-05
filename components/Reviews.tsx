import { reviews, site } from "@/lib/site";

export function Reviews() {
  const [lead, ...rest] = reviews;
  return (
    <section id="reviews" className="bg-paper-deep">
      <div className="mx-auto max-w-[1280px] px-4 py-24 md:px-8 md:py-36">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 data-reveal>What guests say.</h2>
          <p className="text-lg">
            {site.reviews.rating} stars from {site.reviews.count} Google reviews, as of {site.reviews.asOf}.
          </p>
        </div>
        <figure className="mt-16 border-t border-ink pt-8">
          <blockquote>
            <p className="max-w-[28ch] font-display text-[clamp(2rem,1.2rem+3vw,4rem)] leading-[1.08] tracking-tight md:max-w-[34ch]">{lead.quote}</p>
          </blockquote>
          <figcaption className="mt-5 text-sm font-extrabold tracking-wide text-brand">{lead.name}</figcaption>
        </figure>
        <div className="mt-16 gap-x-12 md:columns-2 lg:columns-3">
          {rest.map((r) => (
            <figure key={r.name + r.quote.slice(0, 12)} className="mb-10 break-inside-avoid border-t border-line pt-5">
              <blockquote>
                <p className="font-display text-xl leading-snug">{r.quote}</p>
              </blockquote>
              <figcaption className="mt-3 text-sm font-extrabold tracking-wide text-brand">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
