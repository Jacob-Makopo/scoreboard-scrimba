"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const goTo = (id: string) => {
    if (pathname === "/") {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(`/#${id}`)
    }
  }

  const handleLinkClick = (id: string) => {
    setIsOpen(false)
    goTo(id)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/solveside-logo.png"
            alt="SolveSide Logo"
            width={120}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => goTo("services")} className="text-sm font-medium hover:text-brightBlue transition-colors">
            Services
          </button>
          <button onClick={() => goTo("about")} className="text-sm font-medium hover:text-brightBlue transition-colors">
            About
          </button>
          <button onClick={() => goTo("faq")} className="text-sm font-medium hover:text-brightBlue transition-colors">
            FAQ
          </button>
          <button onClick={() => goTo("contact")} className="text-sm font-medium hover:text-brightBlue transition-colors">
            Contact
          </button>
          <Button
            className="bg-brightBlue hover:bg-brightBlue/90 text-white"
            onClick={() => goTo("contact")}
          >
            Get Started
          </Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="border-brightBlue/20">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l-brightBlue/20 w-[80%] sm:w-[350px]">
            <div className="flex justify-between items-center mb-6">
              <Image
                src="/images/solveside-logo.png"
                alt="SolveSide Logo"
                width={100}
                height={40}
                className="h-8 w-auto"
              />
              <SheetClose asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </SheetClose>
            </div>
            <div className="flex flex-col gap-6 pt-4">
              <SheetClose asChild>
                <button
                  onClick={() => handleLinkClick("services")}
                  className="text-lg font-medium hover:text-brightBlue transition-colors py-2 border-b border-gray-100 text-left"
                >
                  Services
                </button>
              </SheetClose>
              <SheetClose asChild>
                <button
                  onClick={() => handleLinkClick("about")}
                  className="text-lg font-medium hover:text-brightBlue transition-colors py-2 border-b border-gray-100 text-left"
                >
                  About
                </button>
              </SheetClose>
              <SheetClose asChild>
                <button
                  onClick={() => handleLinkClick("faq")}
                  className="text-lg font-medium hover:text-brightBlue transition-colors py-2 border-b border-gray-100 text-left"
                >
                  FAQ
                </button>
              </SheetClose>
              <SheetClose asChild>
                <button
                  onClick={() => handleLinkClick("contact")}
                  className="text-lg font-medium hover:text-brightBlue transition-colors py-2 border-b border-gray-100 text-left"
                >
                  Contact
                </button>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  className="bg-brightBlue hover:bg-brightBlue/90 text-white w-full mt-4"
                  onClick={() => handleLinkClick("contact")}
                >
                  Get Started
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
