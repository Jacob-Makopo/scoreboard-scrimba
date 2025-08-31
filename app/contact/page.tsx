import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact SolveSide - Get Your IT Solutions Today",
  description:
    "Contact SolveSide for expert IT services in South Africa. Get in touch for automation, DevOps, infrastructure, and digital transformation solutions.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
