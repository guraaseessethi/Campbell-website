import type { MenuItem } from "@/lib/site";
import { Copy } from "./Rich";

export function MenuList({ items }: { items: MenuItem[] }) {
  return (
    <ul className="border-t border-line">
      {items.map((item) => (
        <li key={item.name} className="grid grid-cols-[1fr_auto] gap-x-6 border-b border-line py-4">
          <div>
            <p className="font-semibold">{item.name}</p>
            {item.desc && <p className="mt-1 text-[0.95rem] text-muted">{item.desc}</p>}
          </div>
          <p className="whitespace-nowrap font-semibold tabular-nums">
            <Copy text={item.price} />
          </p>
        </li>
      ))}
    </ul>
  );
}
