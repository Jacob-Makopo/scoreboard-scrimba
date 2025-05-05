"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const router = useRouter()
  const pathname = usePathname()

  const goTo = (id: string) => {
    if (pathname === "/") {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push(`/#${id}`)
    }
  }

  return (
    <footer className="w-full border-t bg-gradient-to-b from-white to-offWhite">
      <div className="container flex flex-col gap-10 px-4 py-10 md:px-6 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/solveside-logo.png"
                alt="SolveSide Logo"
                width={120}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="max-w-xs text-sm text-gray-600">
              Transforming IT infrastructure for the digital age with cutting-edge solutions and expert services.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-brightBlue transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brightBlue transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brightBlue transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brightBlue transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-base font-medium text-brightBlue">Services</h3>
            <ul className="grid gap-2 text-sm">
              {[
                "Automation Engineering",
                "Quality Assurance & Testing",
                "Digital Infrastructure",
                "ICT Compliance",
                "DevOps Engineering"
              ].map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => goTo("services")}
                    className="text-left text-gray-600 hover:text-brightBlue transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-base font-medium text-brightBlue">Company</h3>
            <ul className="grid gap-2 text-sm">
              <li>
                <button onClick={() => goTo("about")} className="text-left text-gray-600 hover:text-brightBlue transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => goTo("faq")} className="text-left text-gray-600 hover:text-brightBlue transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("Careers page coming soon!")}
                  className="text-left text-gray-600 hover:text-brightBlue transition-colors"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("Blog coming soon!")}
                  className="text-left text-gray-600 hover:text-brightBlue transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => goTo("contact")} className="text-left text-gray-600 hover:text-brightBlue transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-brightBlue transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-600 hover:text-brightBlue transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} SolveSide. All rights reserved.</p>
          <p className="text-xs text-gray-600">Designed and developed with excellence</p>
        </div>
      </div>
    </footer>
  )
}
