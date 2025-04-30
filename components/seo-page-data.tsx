"use client"

import { usePathname } from "next/navigation"
import Script from "next/script"

interface SEOPageDataProps {
  title: string
  description: string
  type?: "WebPage" | "AboutPage" | "ContactPage" | "ServicePage" | "FAQPage"
  image?: string
  datePublished?: string
  dateModified?: string
}

export function SEOPageData({
  title,
  description,
  type = "WebPage",
  image = "/images/solveside-og-image.png",
  datePublished = "2023-04-10T12:30:00+02:00",
  dateModified = "2023-04-10T12:30:00+02:00",
}: SEOPageDataProps) {
  const pathname = usePathname()
  const url = `https://solveside.co.za${pathname}`

  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#${type.toLowerCase()}`,
    name: title,
    headline: title,
    description: description,
    url: url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: {
      "@type": "ImageObject",
      url: `https://solveside.co.za${image}`,
      width: 1200,
      height: 630,
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://solveside.co.za/#organization",
      name: "SolveSide",
      logo: {
        "@type": "ImageObject",
        url: "https://solveside.co.za/images/solveside-logo.png",
        width: 120,
        height: 50,
      },
    },
    datePublished: datePublished,
    dateModified: dateModified,
    inLanguage: "en-ZA",
  }

  return (
    <Script id="page-structured-data" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(structuredData)}
    </Script>
  )
}
