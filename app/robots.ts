import type { MetadataRoute } from "next";

// Concept preview: keep search engines out so it never competes with the live site.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
