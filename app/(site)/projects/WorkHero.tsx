import { AnimatedElement } from "@/app/components/ui/AnimatedElement"

export const WorkHero: React.FC = () => {
  return (
    <div className="inside-container-large">
      <div className="flex flex-col items-center gap-6 max-md:px-5.5">
        <h1 className="xs:text-5xl relative z-5 text-center text-4xl leading-none font-medium tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
          <AnimatedElement element="span" offsetPx={20} fadeDirection="left" className="inline-block">
            Featured
          </AnimatedElement>{" "}
          <br />
          <AnimatedElement element="span" offsetPx={40} delay={0.2} fadeDirection="top" className="inline-block">
            Projects
          </AnimatedElement>
        </h1>
        <AnimatedElement
          element="p"
          delay={0.6}
          className="max-w-xs text-center text-sm leading-tight tracking-tight text-slate-700 md:max-w-sm md:pr-4 md:text-base"
        >
          A collection of AI, Machine Learning, Full Stack, OCR Automation, and Web Development projects built to solve real-world problems.
        </AnimatedElement>
      </div>
    </div>
  )
}
