import { StaticImageData } from "next/image"
import { Card } from "@/app/components/ProjectCard/Card"

import bankingPreview from "@/app/images/banking-preview.png"
import nodalPreview from "@/app/images/nodal-preview.png"
import fintechPreview from "@/app/images/fintech-preview.png"
import indipathPreview from "@/app/images/indipath-preview.png"
import natureaPreview from "@/app/images/naturea-preview.png"
import aqiPreview from "@/app/images/aqi-preview.png"

import { Link } from "@/app/utils/Link"
import { externalLinks} from "@/config/siteConfig"

type StaticProject = {
  id: string
  src: StaticImageData
  alt: string
  color: string
  type: string
  text: string
  href: string
  dataText: string
  ariaLabel: string
  isExternal: boolean
}

export const STATIC_PROJECTS: StaticProject[] = [
  {
    id: "banking",
    src: bankingPreview,
    alt: "Banking Automation Verification Suite",
    color: "#2563EB",
    type: "AI • OCR • FastAPI",
    text: "Live Demo",
    href: externalLinks.banking,
    dataText: "Live Demo",
    ariaLabel: "Open Banking Automation Verification Suite",
    isExternal: true,
  },
  {
    id: "nodal",
    src: nodalPreview,
    alt: "Nodal AI",
    color: "#7C3AED",
    type: "Agentic AI",
    text: "Live Demo",
    href: externalLinks.nodal,
    dataText: "Live Demo",
    ariaLabel: "Open Nodal AI",
    isExternal: true,
  },
  {
    id: "fintech",
    src: fintechPreview,
    alt: "FinTech Platform",
    color: "#10B981",
    type: "Full Stack",
    text: "Live Demo",
    href: externalLinks.fintech,
    dataText: "Live Demo",
    ariaLabel: "Open FinTech Platform",
    isExternal: true,
  },
  {
    id: "indipath",
    src: indipathPreview,
    alt: "IndiPath",
    color: "#F97316",
    type: "Healthcare AI",
    text: "Live Demo",
    href: externalLinks.indipath,
    dataText: "Live Demo",
    ariaLabel: "Open IndiPath",
    isExternal: true,
  },
  {
    id: "naturea",
    src: natureaPreview,
    alt: "Naturea",
    color: "#16A34A",
    type: "E-Commerce",
    text:  "Live Demo",
    href: externalLinks.naturea,
    dataText: "Live Demo",
    ariaLabel: "View Naturea Project",
    isExternal: true,
  },
  {
    id: "aqi",
    src: aqiPreview,
    alt: "AQI Monitoring System",
    color: "#0EA5E9",
    type: "Machine Learning",
    text: "View on GitHub",
    href: externalLinks.aqi,
    dataText: "View Project",
    ariaLabel: "View AQI Project",
    isExternal: true,
  },
]

export const ProjectsStatic: React.FC = () => {
  return (
    <section className="border-t border-slate-200">
      <div className="inside-container-small">
        <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          {STATIC_PROJECTS.map((project) => {
            const Tag = project.isExternal ? "a" : Link
            const tagProps = project.isExternal
              ? {
                  href: project.href,
                  target: "_blank",
                  rel: "nofollow noopener",
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                }
              : {
                  href: project.href,
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                  prefetch: true,
                }

            return (
              <Tag key={project.id} {...tagProps}>
                <Card src={project.src} alt={project.alt} color={project.color} type={project.type} reveal={false} text={project.text} />
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
