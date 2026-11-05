import { hours, site } from "@/lib/site";
import { Copy } from "./Rich";

export function HoursBand() {
  const rows = [
    { term: "Hours", def: <><Copy text={`${hours.rows[0].days}, ${hours.rows[0].open} to ${hours.rows[0].close}.`} /> <Copy text={hours.daysNote} /></> },
    { term: "Breakfast", def: <>{hours.breakfastUntil}</> },
    { term: "Fish Fridays", def: <>{hours.fishFridays}</> },
    { term: "Weekends", def: <strong className="font-bold text-brand">{hours.weekendNote}</strong> },
    { term: "Dine in", def: <>{hours.dineIn}</> },
    { term: "Find us", def: <>{site.address.street}, {site.address.plaza}, {site.address.locality}, {site.address.region} {site.address.postalCode}. <a href={site.mapsUrl} className="draw font-semibold" rel="noopener">Open in Google Maps</a></> },
  ];
  return (
    <section aria-labelledby="hours-title" className="mx-auto grid max-w-[1280px] gap-12 px-4 pb-24 md:grid-cols-12 md:gap-10 md:px-8 md:pb-36">
      <div className="md:col-span-4">
        <p className="eyebrow">When and where</p>
        <h2 id="hours-title" data-reveal className="mt-4 text-[clamp(2rem,1.4rem+2vw,3.25rem)]">Open every day from 9 a.m.</h2>
      </div>
      <dl className="border-t border-line md:col-span-7 md:col-start-6">
        {rows.map((row) => (
          <div key={row.term} className="grid gap-1 border-b border-line py-5 md:grid-cols-[9rem_1fr] md:gap-6">
            <dt className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted">{row.term}</dt>
            <dd className="text-lg">{row.def}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
