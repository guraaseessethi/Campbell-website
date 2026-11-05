import { seasonal } from "@/lib/site";
import { Copy } from "./Rich";

// One editable block in lib/site.ts drives this panel.
export function Seasonal() {
  return (
    <section aria-labelledby="season-title" className="bg-paper-deep p-6 md:p-8">
      <h2 id="season-title" className="text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)]">{seasonal.label}</h2>
      <p className="mt-3 text-[0.95rem] text-muted">{seasonal.intro}</p>
      <ul className="mt-5 border-t border-line">
        {seasonal.items.map((item) => (
          <li key={item.name} className="flex items-baseline justify-between gap-4 border-b border-line py-3">
            <span className="font-semibold">{item.name}</span>
            <span className="text-sm text-muted">{item.note}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted">
        Last checked: <Copy text={seasonal.updated} />
      </p>
    </section>
  );
}
