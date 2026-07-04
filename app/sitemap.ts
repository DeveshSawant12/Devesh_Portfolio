import type { MetadataRoute } from "next"
import { DOMAIN_URL, SITE_SLUGS } from "@/config/siteConfig"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const flatSlugs = Object.values(SITE_SLUGS).flatMap((value) =>
    typeof value === "string" ? [value] : Object.values(value)
  )

  const allRoutes = flatSlugs.filter(
    (route) => typeof route === "string" && !route.includes("#")
  )

  return allRoutes.map((url) => ({
    url: DOMAIN_URL + url,
    lastModified: new Date(),
    changeFrequency: url === "/" ? "daily" : "weekly",
    priority: url === "/" ? 1 : 0.8,
  }))
}