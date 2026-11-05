import { seasonal } from "@/lib/site";

// One editable text block in lib/site.ts drives this panel.
export function Seasonal() {
  return (
    <section aria-labelledby="season-title" className="border border-line bg-paper p-6 md:p-8">
      <h2 id="season-title" className="text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)]">{seasonal.label}</h2>
      <p className="mt-4 text-lg">{seasonal.text}</p>
    </section>
  );
}
