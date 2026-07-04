import Image from "next/image"
import clsx from "clsx"
import profilePhoto from "../images/Deva.jpg"
import signature from "../images/signature.png"
import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about-devesh" className={clsx("border-y border-gray-200 bg-white", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">About</span>
          <br />
          Devesh Sawant
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src={profilePhoto} alt="Devesh Sawant Headshot" className="custom-shadow aspect-[4/4.5]" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium">
                Devesh Sawant
              </Text>
              <p className="text-sm text-gray-500">
                AI Engineer • Full-Stack Developer • Freelancer
              </p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500">
            <p>
              <strong className="font-semibold text-slate-900">I've always enjoyed solving problems through technology.</strong>
            </p>

            <p>
              My journey started with web development, but over time I became fascinated by Artificial Intelligence and backend engineering.
              <br />
              <br />Today, I build AI applications, modern web platforms, and intelligent systems using technologies like React, FastAPI, Neo4j, and Large Language Models.
            </p>

            <p>
               As an Artificial Intelligence & Data Science student, I enjoy turning ideas into reliable software that solves real-world problems and creates meaningful impact. 
            </p>
            <p>When I'm not coding, I enjoy exploring emerging AI technologies, building personal projects, learning system design, and continuously improving my skills.</p>

            {/* signature */}
            <Image src={signature} alt="Devesh Sawant Signature" className="relative mt-6 -ml-12 h-20 w-auto" />
          </Typography>
        </div>
      </div>
    </section>
  )
}
