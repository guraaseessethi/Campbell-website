import Link from "next/link";
import { occasions, reviews } from "@/lib/site";

export function Celebrations() {
  const quote = reviews.find((r) => r.name === "Harvey L.")!;
  return (
    <section id="celebrations" className="mx-auto grid max-w-[1280px] gap-16 px-4 py-24 md:grid-cols-12 md:gap-10 md:px-8 md:py-36">
      <div className="md:col-span-6">
        <p className="eyebrow">Celebrations</p>
        <h2 data-reveal className="mt-4">Birthdays, showers and family days.</h2>
        <p className="mt-6 text-lg">
          Private parties and family celebrations fill our calendar. Tell us the occasion and the number of guests, and we will plan the table around it.
        </p>
        <div className="mt-10">
          <Link href="/book?for=celebration" className="btn btn-outline">Plan a celebration</Link>
        </div>
      </div>
      <div className="md:col-span-5 md:col-start-8 md:pt-28">
        <ul className="border-t border-line">
          {occasions.map((o) => (
            <li key={o} className="border-b border-line py-4 text-lg">{o}</li>
          ))}
        </ul>
        <figure className="mt-14">
          <blockquote>
            <p className="font-display text-2xl leading-snug">{quote.quote}</p>
          </blockquote>
          <figcaption className="mt-4 text-sm font-bold">{quote.name}, Google review</figcaption>
        </figure>
      </div>
    </section>
  );
}
