"use client"

import { useEffect } from "react"
import Script from "next/script"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
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
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-800">
      <Navbar />

      <main className="flex-1 px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Privacy Policy</h1>
            <p className="text-base md:text-lg text-gray-600">
              Effective Date: 29 April 2025 <br />
              Jurisdiction: Republic of South Africa <br />
              Referenced Laws: POPIA, GDPR, CCPA
            </p>
          </div>

          <div className="space-y-10 text-base md:text-lg leading-relaxed bg-white rounded-2xl shadow-lg p-8">
            {[
              {
                title: "1. Introduction",
                content:
                  'SolveSide ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal data when you access or use our Services.',
              },
              {
                title: "2. Information We Collect",
                content: "We collect personal data in the course of providing our Services. This may include:",
                list: [
                  "Contact Information: Name, email address, phone number, and billing information.",
                  "Usage Data: Information on how you use our Services, including device information, IP addresses, browser type, and interaction data.",
                  "Payment Information: Details related to any payments made for our services.",
                ],
              },
              {
                title: "3. How We Use Your Information",
                content: "We use the information we collect to:",
                list: [
                  "Provide, maintain, and improve our Services.",
                  "Communicate with you about your use of our Services and respond to inquiries.",
                  "Process payments and provide billing information.",
                  "Comply with legal obligations and protect the security of our Services.",
                ],
              },
              {
                title: "4. Data Sharing",
                content:
                  "We do not sell, rent, or lease your personal data to third parties. We may share your information with third-party service providers who assist in the operation of our Services (e.g., payment processors, cloud providers) under strict confidentiality agreements.",
                list: [
                  "We may also disclose your personal information if required by law or in response to valid legal requests by public authorities.",
                ],
              },
              {
                title: "5. Data Security",
                content:
                  "We use commercially reasonable administrative, technical, and physical security measures to protect your personal data from unauthorized access, disclosure, alteration, and destruction. However, no data transmission over the internet can be guaranteed 100% secure.",
              },
              {
                title: "6. Data Retention",
                content:
                  "We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including compliance with legal, accounting, or reporting requirements.",
              },
              {
                title: "7. Your Rights",
                content: "Under applicable data protection laws, you have the right to:",
                list: [
                  "Access, update, or delete your personal data.",
                  "Request a copy of your personal data in a portable format.",
                  "Withdraw consent or object to data processing, where applicable.",
                  "Lodge a complaint with the relevant supervisory authority if you believe your rights have been violated.",
                ],
              },
              {
                title: "8. Cookies",
                content:
                  "We use cookies to enhance user experience, track usage, and improve our Services. You can control cookie settings through your browser, but disabling cookies may affect your use of our Services.",
              },
              {
                title: "9. Changes to This Privacy Policy",
                content:
                  'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date." We encourage you to review this Privacy Policy periodically to stay informed about how we protect your data.',
              },
              {
                title: "10. Contact Us",
                content:
                  "If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at info@solveside.co.za.",
              },
            ].map(({ title, content, list }, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="text-2xl font-semibold text-primary">{title}</h2>
                {content && <p>{content}</p>}
                {list && (
                  <ul className="list-disc pl-6 space-y-1">
                    {list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <Script
        id="privacy-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://solveside.co.za/privacy-policy",
            name: "SolveSide Privacy Policy",
            description:
              "SolveSide's privacy policy outlines how we collect, use, and protect your personal information in compliance with POPIA, GDPR, and CCPA.",
            url: "https://solveside.co.za/privacy-policy",
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
