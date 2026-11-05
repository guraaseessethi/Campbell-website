import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/menu", "/book"].map((path) => ({ url: `${site.url}${path}`, lastModified: now }));
}
