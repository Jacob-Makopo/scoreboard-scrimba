import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "IT Services - Automation, DevOps, Infrastructure & More",
  description:
    "Comprehensive IT services including automation engineering, quality assurance, web development, DevOps, digital infrastructure, and managed IT services in South Africa.",
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
