import type { Metadata } from "next";
import { AfternoonTea } from "@/components/AfternoonTea";
import { BreakfastLunch } from "@/components/BreakfastLunch";
import { Bakery } from "@/components/Bakery";
import { Celebrations } from "@/components/Celebrations";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { HoursBand } from "@/components/HoursBand";
import { Reviews } from "@/components/Reviews";
import { Visit } from "@/components/Visit";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Afternoon tea and British breakfast in Barrie, Ontario | Campbell's British Tearoom" },
  description: site.description,
};

export default function Home() {
  return (
    <>
      <Hero />
      <HoursBand />
      <AfternoonTea />
      <BreakfastLunch />
      <Bakery />
      <Celebrations />
      <Reviews />
      <Faq />
      <Visit />
    </>
  );
}
