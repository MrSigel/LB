import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Rechtstexte fehlen bewusst: Sie stehen auf noindex (siehe deren
 * metadata) und gehoeren nicht in den Suchindex.
 */
const pages = [
  { path: "", priority: 1, changeFrequency: "monthly" as const },
  { path: "/kompetenzen", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ueber-uns", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/kontakt", priority: 0.8, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
