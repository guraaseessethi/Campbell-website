import type { ReactNode } from "react";

const ink = "var(--color-ink)";
const line = { stroke: ink, strokeWidth: 2.5, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };
const paper = "var(--color-paper)";
const brand = "var(--color-brand)";
const tan = "var(--color-tan)";

function Row({ tier, eyebrow, title, text, children }: { tier: string; eyebrow: string; title: string; text: string; children: ReactNode }) {
  return (
    <div data-tier={tier} className="grid grid-cols-[8rem_1fr] items-center gap-5 sm:grid-cols-[15rem_1fr] sm:gap-8">
      <svg viewBox="0 0 160 132" className="block h-auto w-full" aria-hidden="true" focusable="false">
        {children}
      </svg>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h3 className="mt-1">{title}</h3>
        <p className="mt-2 text-[0.95rem] text-muted">{text}</p>
      </div>
    </div>
  );
}

// A three-tier stand drawn in line work. Each tier has its own label. Assembles on scroll (see Motion.tsx).
export function TeaStand() {
  return (
    <div id="stand-pin" className="mx-auto flex max-w-[44rem] flex-col gap-6 py-4 sm:gap-0">
      <Row tier="top" eyebrow="Top tier" title="Sweets" text="Recent sweets have included Eton Mess, mousse and mini cupcakes.">
        <line x1="80" y1="19" x2="80" y2="132" style={{ ...line, strokeWidth: 3 }} />
        <circle cx="80" cy="12" r="7" fill="none" style={{ ...line, strokeWidth: 3 }} />
        <ellipse cx="80" cy="102" rx="44" ry="7" fill={paper} style={line} />
        {[62, 80, 98].map((x) => (
          <g key={x}>
            <path d={`M${x - 6},92 L${x + 6},92 L${x + 4.5},100 L${x - 4.5},100 Z`} fill={brand} style={{ ...line, strokeWidth: 2 }} />
            <circle cx={x} cy="87" r="7" fill={paper} style={{ ...line, strokeWidth: 2 }} />
            <circle cx={x} cy="79.5" r="2.2" fill={brand} />
          </g>
        ))}
      </Row>
      <Row tier="middle" eyebrow="Middle tier" title="Scones, clotted cream and jam" text="Scones with real clotted cream and jam.">
        <line x1="80" y1="0" x2="80" y2="132" style={{ ...line, strokeWidth: 3 }} />
        <ellipse cx="80" cy="102" rx="62" ry="7" fill={paper} style={line} />
        {[56, 104].map((x) => (
          <g key={x}>
            <path d={`M${x - 19},99 C${x - 19},78 ${x + 19},78 ${x + 19},99 Z`} fill={tan} style={{ ...line, strokeWidth: 2 }} />
            <path d={`M${x - 17},93 L${x + 17},93`} fill="none" style={{ ...line, strokeWidth: 1.5 }} />
            <ellipse cx={x} cy="83" rx="7" ry="3.6" fill={paper} style={{ ...line, strokeWidth: 1.8 }} />
            <circle cx={x} cy="80.5" r="2.4" fill={brand} />
          </g>
        ))}
      </Row>
      <Row tier="bottom" eyebrow="Bottom tier" title="Sandwiches" text="Three fingers each of egg mayo, cream cheese and cucumber, and coronation chicken per guest.">
        <line x1="80" y1="0" x2="80" y2="122" style={{ ...line, strokeWidth: 3 }} />
        <ellipse cx="80" cy="124" rx="34" ry="5" fill={paper} style={line} />
        <ellipse cx="80" cy="102" rx="76" ry="7" fill={paper} style={line} />
        {[28, 56, 84, 112].map((x, i) => (
          <g key={x}>
            <rect x={x} y="86" width="24" height="14" rx="2.5" fill={paper} style={{ ...line, strokeWidth: 2 }} />
            <rect x={x + 3} y="91" width="18" height="3" rx="1" fill={i % 2 ? tan : brand} />
          </g>
        ))}
      </Row>
    </div>
  );
}
