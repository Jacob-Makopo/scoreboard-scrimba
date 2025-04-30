"use client"

import { useEffect } from "react"
import Script from "next/script"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsOfService() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute("href")
        if (targetId && targetId !== "#") {
          const targetElement = document.querySelector(targetId)
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-900">
      <Navbar />

      <main className="flex-1 px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              Terms of Service
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Last Updated: 29 April 2025
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-base md:text-lg leading-relaxed space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-primary">1. Introduction</h2>
              <p>
                Welcome to SolveSide! These Terms of Service ("Terms") govern your use of the services provided by SolveSide ("we," "us," "our"), including but not limited to automation engineering, quality assurance & testing, digital infrastructure & networking, ICT infrastructure & compliance, DevOps engineering, and managed IT services (collectively, "Services"). By accessing or using our Services, you agree to comply with and be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary">2. Services Provided</h2>
              <p>
                SolveSide offers a full spectrum of IT services designed to optimize technology infrastructure and drive business growth, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Automation Engineering: Streamline operations, automate workflows, implement RPA, and custom automation solutions.</li>
                <li>Quality Assurance & Testing: Ensure flawless software performance through automated testing, performance testing, and security testing.</li>
                <li>Digital Infrastructure & Networking: Design and implement networks, cloud infrastructure, network security solutions, and performance optimization.</li>
                <li>ICT Infrastructure & Compliance: Manage regulatory compliance, implement security policies, conduct risk assessments, and provide audit preparation and support.</li>
                <li>DevOps Engineering: Implement CI/CD pipelines, infrastructure as code (IaC), containerization, and orchestration for efficient development.</li>
                <li>Managed IT Services: Provide ongoing system monitoring, maintenance, technical support, updates, and patching.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary">3. User Responsibilities</h2>
              <p>
                As a user of SolveSide’s Services, you agree to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide accurate and current information as required by the services.</li>
                <li>Comply with all applicable local, national, and international laws and regulations.</li>
                <li>Not misuse or interfere with the Services, including attempting to hack or access our systems unlawfully.</li>
                <li>Use our Services solely for lawful and authorized purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary">4. Subscription and Fees</h2>
              <p>
                Some of our Services may be provided for a fee. If you subscribe to any of these Services, you agree to pay the fees associated with your selected services, as detailed on our website or in separate contracts. Fees are subject to change, and you will be notified of any changes prior to billing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary">5. Intellectual Property</h2>
              <p>
                SolveSide retains ownership of all intellectual property, including but not limited to software, methodologies, and proprietary technologies used to deliver our Services. You are granted a limited, non-exclusive license to use our Services for your business purposes, subject to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary">6. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of any proprietary information disclosed during the use of the Services. This obligation will continue beyond the termination of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, SolveSide’s liability to you for any claim arising from or related to the use of our Services is limited to the amount paid for the specific Service giving rise to the claim during the six (6) months prior to the event.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary">8. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to our Services at our discretion if you violate any of the Terms outlined in this agreement. Upon termination, any outstanding fees will remain payable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of South Africa. Any disputes arising out of or in connection with these Terms will be resolved in the courts of South Africa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary">10. Changes to the Terms</h2>
              <p>
                We reserve the right to modify or update these Terms at any time. Any changes will be communicated to you, and your continued use of the Services will constitute acceptance of the revised Terms.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />

      <Script
        id="tos-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://solveside.co.za/terms-of-service",
            name: "SolveSide Terms of Service",
            description:
              "These Terms of Service govern your use of SolveSide’s website and services. Learn about your rights, responsibilities, and limitations.",
            url: "https://solveside.co.za/terms-of-service",
            inLanguage: "en-ZA",
            isPartOf: {
              "@id": "https://solveside.co.za/#website",
            },
            about: {
              "@id": "https://solveside.co.za/#organization",
            },
            datePublished: "2025-04-29T12:00:00+02:00",
            dateModified: "2025-04-29T12:00:00+02:00",
          }),
        }}
      />
    </div>
  )
}
