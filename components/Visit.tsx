import { hours, site } from "@/lib/site";

export function Visit() {
  return (
    <section id="visit" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1280px] px-4 py-24 md:px-8 md:py-36">
        <p className="text-[0.8rem] font-extrabold uppercase tracking-[0.14em] text-rose-tint">Visit</p>
        <h2 data-reveal className="mt-4 text-[clamp(2.75rem,1.4rem+6vw,6.5rem)]">Unit 18, 274 Burton Ave.</h2>
        <p className="mt-6 text-lg">{site.visitLine} {hours.summary}</p>
        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="flex flex-col gap-4 md:col-span-6">
            <a href={`tel:${site.phoneTel}`} className="btn btn-outline-light min-h-16 justify-between text-xl">
              <span>Call</span><span className="tabular-nums">{site.phone}</span>
            </a>
            <a href={`mailto:${site.email}`} className="btn btn-outline-light min-h-16 justify-between text-xl">
              <span>Email</span><span className="text-base">{site.email}</span>
            </a>
            <a href={site.mapsUrl} className="btn btn-outline-light min-h-16 justify-between text-xl" rel="noopener">
              <span>Directions</span><span className="text-base">Google Maps</span>
            </a>
          </div>
          <dl className="border-t border-paper/30 md:col-span-5 md:col-start-8">
            {[
              { t: "Accessibility", d: <>{site.accessibility}</> },
              { t: "Takeout", d: (
                <span className="flex flex-col">
                  <a href={site.orderUrl} className="draw font-semibold" rel="noopener">Order pickup online</a>
                  <a href={site.doordashUrl} className="draw font-semibold" rel="noopener">Delivery on DoorDash</a>
                </span>
              ) },
              { t: "Service area", d: <>Barrie and Innisfil. {site.serviceAreaNote}</> },
              { t: "Social", d: (
                <span className="flex flex-col">
                  <a href={site.socials.instagram} className="draw font-semibold" rel="noopener">Instagram</a>
                  <a href={site.socials.facebook} className="draw font-semibold" rel="noopener">Facebook</a>
                </span>
              ) },
              { t: "Market", d: <>Also at the Barrie Farmers&apos; Market.</> },
            ].map((row) => (
              <div key={row.t} className="grid gap-1 border-b border-paper/30 py-4">
                <dt className="text-sm font-extrabold uppercase tracking-[0.12em] text-rose-tint">{row.t}</dt>
                <dd>{row.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
