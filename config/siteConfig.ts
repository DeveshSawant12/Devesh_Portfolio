export const DOMAIN_URL = "https://www.austinserb.com"

export const SITE_CONFIG = {
  title: "Devesh Sawant | AI Engineer & Full Stack Developer Portfolio",
  description:
    "Portfolio of Devesh Sawant, AI Engineer and Full Stack Developer specializing in Agentic AI, Knowledge Graphs, RAG pipelines, LLM Engineering, FastAPI, React, and intelligent systems.",
  url: DOMAIN_URL ?? "http://localhost:3000",
  siteName: "Devesh Sawant",
  keywords: [
    "Devesh Sawant",
    "AI Engineer",
    "Full Stack Developer",
    "Agentic AI",
    "LLM Engineer",
    "Knowledge Graph",
    "Neo4j",
    "FastAPI",
    "React",
    "Python",
    "RAG",
    "Generative AI",
    "Intelligent Systems",
    "Portfolio",
  ],
  ogImage: "/assets/bg-home-poster-optimized.webp",
  logo: "/serbyte-logo.png",
} as const

export const SITE_NAP = {
  name: "Devesh Sawant",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Devesh Sawant",
  contactTitle: "AI Engineer",
  email: "deveshsawant300@gmail.com",
  phone: "9420707429",
  formattedPhone: "+91 9420707429",
  addressLink:
    "https://www.google.com/maps/place/SAWANT+HOUSE/@16.253926,73.6782156,228m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3bc03d6018df6e61:0xe09ae046e2938760!2sVaravade,+Maharashtra+416602!3b1!8m2!3d16.264694!4d73.6801092!16s%2Fg%2F1tfpy91w!3m5!1s0x3bc017feb5ff4e11:0x22e88025e3b124e0!8m2!3d16.2534799!4d73.6786313!16s%2Fg%2F11tc9xbbsq!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",
  street: "Phanaswadi, Phanas Nagar, Maharashtra 416602",
  city: "Kankavli",
  state: "Maharashtra",
  zipCode: "416602",
  openingHours: [{ days: "Mon - Sat", hours: "8am - 6pm" }] as const,
  googleReviewLink: "",
  profiles: {
    facebook: "",
    linkedIn: "https://www.linkedin.com/in/deveshsawant12/",
    yelp: "",
    pinterest: "",
    gbp: "",
    github: "https://github.com/DeveshSawant12",
    x: "https://x.com/DeveshSawant17",
  } as const,
  logo: "/serbyte-logo.png",
  favicon: "/favicon.ico",
  images: [
    "https://www.serbyte.net/serbyte-logo.png",
    "https://www.serbyte.net/assets/bg-home-poster-optimized.webp",
  ],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about-devesh",
} as const

export const externalLinks = {
  banking: "https://banking-automation-verification-suite.pages.dev/login",
  nodal: "https://github.com/DeveshSawant12/Nodal",
  fintech: "https://fintech-4f4.pages.dev/",
  indipath: "https://tool-disco-04737509.figma.site/",
  naturea: "https://deveshsawant12.github.io/NATUREA/",
  aqi: "https://github.com/DeveshSawant12/AQI_HP",
} as const

const flattenSlugs = (
  obj: Record<string, string | Record<string, string>>
): string[] => {
  return Object.values(obj).flatMap((value) =>
    typeof value === "string" ? [value] : flattenSlugs(value)
  )
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) =>
  typeof value === "string" ? [value] : flattenSlugs(value)
)