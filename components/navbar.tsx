"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
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
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#services" className="text-sm font-medium hover:text-brightBlue transition-colors" scroll={false}>
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-brightBlue transition-colors" scroll={false}>
            About
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-brightBlue transition-colors" scroll={false}>
            FAQ
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-brightBlue transition-colors" scroll={false}>
            Contact
          </Link>
          <Button
            className="bg-brightBlue hover:bg-brightBlue/90 text-white"
            onClick={() => {
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
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
                <Link
                  href="#services"
                  className="text-lg font-medium hover:text-brightBlue transition-colors py-2 border-b border-gray-100"
                  onClick={handleLinkClick}
                  scroll={false}
                >
                  Services
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#about"
                  className="text-lg font-medium hover:text-brightBlue transition-colors py-2 border-b border-gray-100"
                  onClick={handleLinkClick}
                  scroll={false}
                >
                  About
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#faq"
                  className="text-lg font-medium hover:text-brightBlue transition-colors py-2 border-b border-gray-100"
                  onClick={handleLinkClick}
                  scroll={false}
                >
                  FAQ
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#contact"
                  className="text-lg font-medium hover:text-brightBlue transition-colors py-2 border-b border-gray-100"
                  onClick={handleLinkClick}
                  scroll={false}
                >
                  Contact
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  className="bg-brightBlue hover:bg-brightBlue/90 text-white w-full mt-4"
                  onClick={() => {
                    const contactSection = document.getElementById("contact")
                    if (contactSection) {
                      setTimeout(() => {
                        contactSection.scrollIntoView({ behavior: "smooth" })
                      }, 100)
                    }
                  }}
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
