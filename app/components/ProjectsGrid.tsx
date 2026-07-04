"use client"
import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"
import bankingPreview from "@/app/images/banking-preview.png"
import nodalPreview from "@/app/images/nodal-preview.png"
import fintechPreview from "@/app/images/fintech-preview.png"
import natureaPreview from "@/app/images/naturea-preview.png"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useMediaQuery"
import { useRef, useEffect } from "react"
import { useScroll, useSpring } from "motion/react"
import { useUI } from "@react-zero-ui/core"
import { externalLinks } from "@/config/siteConfig"

const ids = ["fintech", "banking", "naturea", "nodal"]

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const isSmallScreen = useIsMobile(576)
  const responsiveScale = isMobile ? 0.34 : 0.8
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["start start", "10% start"] : ["start start", "15% start"],
  })
  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 50 : 90

  const progress = useSpring(scrollYProgress, { stiffness, damping })

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    banking: {
      rot: 8,
      s: responsiveScale,
      dx: isMobile ? -220 : -40,
      dy: isMobile ? -120 : -30,
    },
    nodal: {
      rot: -6,
      s: responsiveScale,
      dx: isMobile ? -220 : -40,
      dy: isMobile ? -120 : -30,
    },
    fintech: {
      rot: 6,
      s: responsiveScale,
      dx: isMobile ? -220 : -40,
      dy: isMobile ? -120 : -30,
    },
    naturea: {
      rot: -8,
      s: responsiveScale,
      dx: isMobile ? -220 : -40,
      dy: isMobile ? -120 : -30,
    },
  }

    const offsets = Object.fromEntries(
      ids.map((id) => {
        const base = rawOffsets[id] ?? { x: 0, y: 0 }
        const t = OFFSET_TUNING[id]
        return [
          id,
          {
            x: base.x! + t.dx!,
            y: base.y! + t.dy!,
            rot: t.rot!,
            s: t.s ?? 1,
          },
        ]
      })
    )

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5
  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= triggerProgress) {
        setReveal("true") // Reveal ON
      } else {
        setReveal("false") // Reveal OFF
      }
    })

    return unsubscribe
  }, [progress, setReveal, triggerProgress])
  return (
    <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
        <AnimatedCard
          key="fintech"
          src={fintechPreview}
          alt="FinTech Platform"
          offset={offsets["fintech"]}
          gridId="fintech"
          color="#10B981"
          type="Full Stack"
          progress={progress}
          href={externalLinks.fintech}
          dataText="Live Demo ↗"
        />

        <AnimatedCard
          key="banking"
          src={bankingPreview}
          alt="Banking Automation Verification Suite"
          offset={offsets["banking"]}
          gridId="banking"
          color="#2563EB"
          type="AI • OCR • FastAPI"
          progress={progress}
          href={externalLinks.banking}
          dataText="Live Demo ↗"
        />

        <AnimatedCard
          key="naturea"
          src={natureaPreview}
          alt="Naturea"
          offset={offsets["naturea"]}
          gridId="naturea"
          color="#16A34A"
          type="E-Commerce"
          progress={progress}
          href={externalLinks.naturea}
          dataText="Live Demo ↗"
        />

        <AnimatedCard
          key="nodal"
          src={nodalPreview}
          alt="Nodal AI"
          offset={offsets["nodal"]}
          gridId="nodal"
          color="#7C3AED"
          type="Agentic AI"
          progress={progress}
          href={externalLinks.nodal}
          dataText="Live Demo ↗"
        />
      </div>
    </section>
  )
}
