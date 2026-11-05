import { hours, site } from "@/lib/site";

const hhmm = (h: number) => `${String(Math.floor(h)).padStart(2, "0")}:${String(Math.round((h % 1) * 60)).padStart(2, "0")}`;

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}/#restaurant`,
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    servesCuisine: "British",
    hasMenu: `${site.url}/menu`,
    acceptsReservations: true,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.latitude, longitude: site.geo.longitude },
    openingHoursSpecification: hours.schedule.map((d) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: d.day,
      opens: hhmm(d.open),
      closes: hhmm(d.close),
    })),
    areaServed: site.serviceArea.map((name) => ({ "@type": "City", name })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.reviews.rating,
      reviewCount: site.reviews.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [site.socials.instagram, site.socials.facebook],
    description: hours.summary,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
