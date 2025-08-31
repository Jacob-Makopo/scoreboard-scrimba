import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About SolveSide - Your Trusted IT Partner in South Africa",
  description:
    "Learn about SolveSide's mission to provide cutting-edge IT solutions that drive growth, efficiency, and innovation for businesses across South Africa.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
