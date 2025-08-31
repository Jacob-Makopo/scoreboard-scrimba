import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - SolveSide IT Services",
  description:
    "Find answers to common questions about SolveSide's IT services, automation solutions, DevOps engineering, and digital infrastructure services.",
}

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
