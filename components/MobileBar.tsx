import Link from "next/link";
import { site } from "@/lib/site";

export function MobileBar() {
  return (
    <div role="region" aria-label="Quick actions" className="mobile-bar md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <Link href="/book" className="btn btn-accent">Book a table</Link>
        <a href={`tel:${site.phoneTel}`} className="btn btn-outline">Call us</a>
      </div>
    </div>
  );
}
