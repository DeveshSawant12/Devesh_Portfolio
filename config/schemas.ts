import { DOMAIN_URL, SITE_CONFIG, SITE_NAP, SITE_SLUGS, externalLinks } from "./siteConfig"
import type { Graph, ItemList } from "schema-dts"

interface ProjectItem {
  name: string
  url: string
  date: string
  description: string
  external?: string
  type?: "SoftwareSourceCode" | "SoftwareApplication" | "WebSite" | "WebApplication" | "CreativeWork"
}

// Project data for schema
const projectsData: ProjectItem[] = [
  {
    name: "Banking Automation Verification Suite",
    url: externalLinks.banking,
    date: "2026-06-01",
    description: "AI-powered banking verification platform.",
    type: "WebApplication",
  },
  {
    name: "Nodal",
    url: externalLinks.nodal,
    date: "2026-05-15",
    description: "Agentic AI platform.",
    type: "SoftwareSourceCode",
  },
  {
    name: "FinTech Platform",
    url: externalLinks.fintech,
    date: "2026-04-20",
    description: "Modern financial management platform.",
    type: "WebApplication",
  },
  {
    name: "IndiPath",
    url: externalLinks.indipath,
    date: "2026-03-10",
    description: "Healthcare AI application.",
    type: "WebApplication",
  },
  {
    name: "Naturea",
    url: externalLinks.naturea,
    date: "2025-12-01",
    description: "E-commerce website.",
    type: "WebSite",
  },
  {
    name: "AQI Monitoring System",
    url: externalLinks.aqi,
    date: "2025-10-01",
    description: "Machine Learning based AQI prediction.",
    type: "SoftwareSourceCode",
  },
]

const SITE = DOMAIN_URL.replace(/\/$/, "")

const itemList: ItemList = {
  "@type": "ItemList",
  "@id": `${SITE}${SITE_SLUGS.projects}#list`,
  itemListOrder: "Descending",
  numberOfItems: projectsData.length,
  itemListElement: projectsData.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@id": p.url.startsWith("/") ? `${SITE}${p.url}` : p.url,
    },
  })),
}

export const projectsGraph: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    itemList,
    {
      "@type": "CollectionPage",
      "@id": `${SITE}${SITE_SLUGS.projects}#page`,
      url: `${SITE}${SITE_SLUGS.projects}`,
      name: "Projects",
      isPartOf: {
        "@id": `${SITE}#website`,
      },
      mainEntity: {
        "@id": `${SITE}${SITE_SLUGS.projects}#list`,
      },
      mainEntityOfPage: `${SITE}${SITE_SLUGS.projects}`,
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: `${SITE}${SITE_SLUGS.projects}`,
        },
      ],
    },
  ],
}

export const homeGraph: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE}#home`,
      url: SITE,
      name: SITE_CONFIG.title,
      isPartOf: {
        "@id": `${SITE}#website`,
      },
      mainEntityOfPage: SITE,
      mainEntity: {
        "@type": "ItemList",
        name: "Featured Projects",
        itemListElement: projectsData.slice(0, 4).map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@id": p.url.startsWith("/") ? `${SITE}${p.url}` : p.url,
          },
        })),
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE,
        },
      ],
    },
  ],
}

export const siteGraph: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}#org`,
      name: "Devesh Sawant",
      url: SITE,
      logo: {
        "@id": `${SITE}#logo`,
      },
      sameAs: Object.values(SITE_NAP.profiles),
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Hiring",
          email: `mailto:${SITE_NAP.email}`,
          availableLanguage: ["en"],
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#devesh-sawant`,
      name: "Devesh Sawant",
      url: SITE,
      jobTitle: "AI Engineer",
      image: {
        "@id": `${SITE}#headshot`,
      },
      worksFor: {
        "@id": `${SITE}#org`,
      },
      sameAs: Object.values(SITE_NAP.profiles),
      email: SITE_NAP.email,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}#website`,
      url: SITE,
      name: SITE_CONFIG.title,
      publisher: {
        "@id": `${SITE}#org`,
      },
      inLanguage: "en",
    },
    {
      "@type": "ImageObject",
      "@id": `${SITE}#headshot`,
      url: `${SITE}/profile.webp`,
    },
    {
      "@type": "ImageObject",
      "@id": `${SITE}#logo`,
      url: `${SITE}/favicon.ico`,
    },
  ],
}