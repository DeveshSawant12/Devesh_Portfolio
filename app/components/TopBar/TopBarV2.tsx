import Image from "next/image"
import { Link } from "../../utils/Link"
import { MobileMenuButton } from "./MobileMenuButton"
import { MobileMenu } from "./MobileMenu"
import { SITE_SLUGS } from "@/config/siteConfig"

const navItems = [
  { name: "Projects", href: SITE_SLUGS.projects },
  { name: "About", href: SITE_SLUGS.about },
]

export const TopBarV2: React.FC = () => {
  return (
    <nav className="font-switzer fixed top-1 left-1/2 z-10 flex w-fit -translate-x-1/2 justify-center text-base sm:top-2.5 md:top-5 md:text-sm">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white/80 shadow-md backdrop-blur-md">
        <div className="relative flex flex-col">
          {/* Top Row */}
          <div className="flex items-center gap-4 px-4 py-3 md:gap-8 md:py-2.5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-medium text-nowrap">
              <Image
                src="/logo.png"
                alt="Devesh Sawant Logo"
                width={35}
                height={35}
                className="rounded"
                priority
              />
              Devesh Sawant
            </Link>

            {/* Desktop Navigation */}
            <ul className="md:scrolled-up:opacity-0 md:scrolled-up:max-w-0 md:scrolled-down:opacity-100 md:scrolled-down:max-w-96 hidden items-center gap-4 font-medium transition-all duration-300 ease-in-out md:flex">
              {navItems.map((item) => (
                <li key={item.name} className="flex">
                  <Link prefetch={false} href={item.href} className="bubble-hover p-1 px-2">
                    {item.name}
                  </Link>
                </li>
              ))}

              {/* Resume */}
              <li className="flex">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bubble-hover p-1 px-2"
                >
                  Resume
                </a>
              </li>

              {/* Contact */}
              <li className="flex">
                <Link
                  href="/#contact"
                  className="bubble-hover hidden rounded-full border border-gray-200 px-3 py-1 font-medium shadow-md duration-300 hover:translate-y-0.5 hover:border-white hover:shadow-none md:inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <MobileMenuButton />
          </div>

          {/* Mobile Menu */}
          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </nav>
  )
}