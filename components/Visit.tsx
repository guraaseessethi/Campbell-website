import { hours, site } from "@/lib/site";
import { Copy } from "./Rich";

export function Visit() {
  return (
    <section id="visit" className="bg-paper-deep">
      <div className="mx-auto max-w-[1280px] px-4 py-24 md:px-8 md:py-36">
        <p className="eyebrow">Visit</p>
        <h2 data-reveal className="mt-4 text-[clamp(2.75rem,1.4rem+6vw,6.5rem)]">Unit 18, 274 Burton Ave.</h2>
        <p className="mt-6 text-lg">
          Inside the {site.address.plaza} in {site.address.locality}. {hours.summary}
        </p>
        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="flex flex-col gap-4 md:col-span-6">
            <a href={`tel:${site.phoneTel}`} className="btn btn-outline min-h-16 justify-between text-xl">
              <span>Call</span><span className="tabular-nums">{site.phone}</span>
            </a>
            <a href={`mailto:${site.email}`} className="btn btn-outline min-h-16 justify-between text-xl">
              <span>Email</span><span className="break-all text-base">{site.email}</span>
            </a>
            <a href={site.mapsUrl} className="btn btn-outline min-h-16 justify-between text-xl" rel="noopener">
              <span>Directions</span><span className="text-base">Google Maps</span>
            </a>
          </div>
          <dl className="border-t border-line md:col-span-5 md:col-start-8">
            <div className="grid gap-1 border-b border-line py-4">
              <dt className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted">Service area</dt>
              <dd>Barrie and Innisfil. {site.serviceAreaNote}</dd>
            </div>
            <div className="grid gap-1 border-b border-line py-4">
              <dt className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted">Takeout</dt>
              <dd><Copy text={`DoorDash: ${site.doordashUrl}`} /></dd>
            </div>
            <div className="grid gap-1 border-b border-line py-4">
              <dt className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted">Social</dt>
              <dd className="flex flex-col gap-1">
                <a href={site.socials.instagram} className="draw font-semibold" rel="noopener">Instagram</a>
                <a href={site.socials.facebook} className="draw font-semibold" rel="noopener">Facebook</a>
              </dd>
            </div>
            <div className="grid gap-1 border-b border-line py-4">
              <dt className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted">Market</dt>
              <dd>Also at the Barrie Farmers&apos; Market.</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
