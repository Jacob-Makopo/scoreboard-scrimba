"use client"

import { useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import Script from "next/script"

export default function Home() {
  useEffect(() => {
    // Implement smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute("href")

        if (targetId && targetId !== "#") {
          const targetElement = document.querySelector(targetId)
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Page-specific structured data */}
      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://solveside.co.za/#webpage",
            name: "SolveSide - IT Solutions Provider in South Africa",
            description:
              "SolveSide delivers cutting-edge automation, quality assurance, infrastructure, and DevOps solutions to power your business forward.",
            url: "https://solveside.co.za/",
            isPartOf: {
              "@id": "https://solveside.co.za/#website",
            },
            about: {
              "@id": "https://solveside.co.za/#organization",
            },
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://solveside.co.za/images/solveside-og-image.png",
              width: 1200,
              height: 630,
            },
            datePublished: "2023-04-10T12:30:00+02:00",
            dateModified: "2023-04-10T12:30:00+02:00",
            inLanguage: "en-ZA",
          }),
        }}
      />
    </div>
  )
}
