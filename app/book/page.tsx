import type { Metadata } from "next";
import Image from "next/image";
import { BookForm } from "@/components/BookForm";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a table",
  description: "Request a table at Campbell's British Tearoom in Barrie. Afternoon tea needs 24 hours' notice. Book ahead for weekends and holidays.",
};

export default function BookPage() {
  return (
    <section className="mx-auto grid max-w-[1280px] gap-16 px-4 pb-24 pt-14 md:grid-cols-12 md:gap-10 md:px-8 md:pb-36 md:pt-24">
      <div className="md:col-span-5">
        <p className="eyebrow">Book a table</p>
        <h1 className="mt-4 text-[clamp(2.75rem,1.4rem+4.6vw,5.25rem)]">Request a table.</h1>
        <p className="mt-6 text-lg">
          Send the date, time and party size. We confirm by phone or email. Afternoon tea needs 24 hours&apos; notice, and weekends and holidays fill up.
        </p>
        <p className="mt-4">
          Prefer to talk to someone? Call <a href={`tel:${site.phoneTel}`} className="draw font-semibold">{site.phone}</a>.
        </p>
        <div className="img-zoom relative mt-12 aspect-[4/3] max-w-md">
          <Image src={photos.teaNapkin.src} alt={photos.teaNapkin.alt} fill sizes="(min-width: 768px) 36vw, 90vw" className="object-cover" />
        </div>
      </div>
      <div className="md:col-span-6 md:col-start-7">
        <BookForm />
      </div>
    </section>
  );
}
