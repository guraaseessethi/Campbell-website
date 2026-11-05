"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// All animation lives here. Content is visible without JS; motion arms after mount.
export function Motion() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    mm.add(
      {
        reduce: "(prefers-reduced-motion: reduce)",
        motion: "(prefers-reduced-motion: no-preference)",
        desktop: "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
      },
      (ctx) => {
        const c = ctx.conditions ?? {};
        if (c.reduce) return;

        if (c.motion) {
          gsap
            .timeline({ defaults: { ease: "expo.out" } })
            .from("[data-rise]", { yPercent: 105, duration: 0.9, stagger: 0.08 })
            .from("[data-fade]", { y: 16, opacity: 0, duration: 0.6, stagger: 0.08 }, 0.25);

          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
            gsap.from(el, {
              y: 20,
              opacity: 0,
              duration: 0.8,
              ease: "expo.out",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            });
          });

          gsap.utils.toArray<HTMLElement>("[data-wipe]").forEach((el) => {
            gsap.fromTo(
              el,
              { clipPath: "inset(0 0 100% 0)" },
              {
                clipPath: "inset(0 0 0% 0)",
                duration: 0.9,
                ease: "expo.out",
                scrollTrigger: { trigger: el, start: "top 85%", once: true },
              },
            );
          });
        }

        if (c.desktop) {
          // Signature moment: the afternoon tea stand assembles bottom to top while pinned.
          gsap
            .timeline({
              scrollTrigger: {
                trigger: "#stand-pin",
                start: "top 14%",
                end: "+=700",
                pin: true,
                scrub: 0.6,
                anticipatePin: 1,
              },
            })
            .from("[data-tier='bottom']", { y: 48, opacity: 0, duration: 1, ease: "expo.out" })
            .from("[data-tier='middle']", { y: 48, opacity: 0, duration: 1, ease: "expo.out" })
            .from("[data-tier='top']", { y: 48, opacity: 0, duration: 1, ease: "expo.out" });
        }
      },
    );

    return () => mm.revert();
  }, []);

  return null;
}
