import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="mx-auto grid max-w-[1280px] gap-16 px-4 py-24 md:grid-cols-12 md:gap-10 md:px-8 md:py-36">
      <div className="md:col-span-4">
        <p className="eyebrow">Questions</p>
        <h2 data-reveal className="mt-4">Before you come in.</h2>
        <p className="mt-6">The questions we hear most, answered here.</p>
      </div>
      <div className="md:col-span-7 md:col-start-6">
        <div className="border-t border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line py-5">
              <summary className="flex min-h-11 list-none items-center justify-between gap-6 text-lg font-bold">
                <span>{f.q}</span>
                <span aria-hidden="true" className="text-2xl font-normal text-brand transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
