import { hours, site } from "@/lib/site";

export function HoursBand() {
  const notes = [
    { term: "Breakfast", def: hours.breakfastUntil },
    { term: "Fish Fridays", def: hours.fishFridays },
    { term: "Weekends", def: hours.weekendNote, strong: true },
    { term: "Holidays", def: hours.holidayNote },
    { term: "Dine in", def: hours.dineIn },
  ];
  return (
    <section aria-labelledby="hours-title" className="mx-auto grid max-w-[1280px] gap-14 px-4 py-24 md:grid-cols-12 md:gap-10 md:px-8 md:py-32">
      <div className="md:col-span-4">
        <p className="eyebrow">When and where</p>
        <h2 id="hours-title" data-reveal className="mt-4 text-[clamp(2.25rem,1.5rem+2.6vw,3.75rem)]">Open every day from 9 a.m.</h2>
        <address className="mt-8 not-italic">
          <p className="text-lg font-semibold">{site.address.street}</p>
          <p>{site.address.locality}, {site.address.region} {site.address.postalCode}</p>
          <p className="mt-2 text-muted">{site.visitLine} {site.accessibility}</p>
        </address>
        <p className="mt-6">
          <a href={site.mapsUrl} className="draw font-bold" rel="noopener">Get directions</a>
        </p>
      </div>
      <div className="md:col-span-4">
        <h3 className="eyebrow">Hours</h3>
        <ul className="mt-4 border-t border-line">
          {hours.schedule.map((d) => (
            <li key={d.day} className="flex justify-between gap-6 border-b border-line py-3">
              <span className="font-semibold">{d.day}</span>
              <span className="tabular-nums">{d.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <dl className="md:col-span-4">
        <h3 className="eyebrow">Good to know</h3>
        <div className="mt-4 border-t border-line">
          {notes.map((n) => (
            <div key={n.term} className="border-b border-line py-3">
              <dt className="text-xs font-extrabold uppercase tracking-[0.12em] text-muted">{n.term}</dt>
              <dd className={n.strong ? "mt-1 font-bold text-brand" : "mt-1"}>{n.def}</dd>
            </div>
          ))}
        </div>
      </dl>
    </section>
  );
}
