import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Define metadata for better SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://solveside.co.za"),
  title: {
    default: "SolveSide - IT Solutions Provider in South Africa | Automation, DevOps & Infrastructure",
    template: "%s | SolveSide - IT Solutions South Africa",
  },
  description:
    "SolveSide delivers cutting-edge automation, quality assurance, infrastructure, and DevOps solutions to power your business forward. Expert IT services in Johannesburg, South Africa.",
  keywords: [
    "IT Solutions",
    "Automation Engineering",
    "Quality Assurance",
    "DevOps",
    "Digital Infrastructure",
    "IT Compliance",
    "Managed IT Services",
    "South Africa IT Company",
    "Johannesburg IT Services",
    "IT Consulting South Africa",
    "Technology Solutions",
    "Business Automation",
    "Network Infrastructure",
    "Cloud Solutions",
    "IT Support Johannesburg",
  ],
  authors: [{ name: "SolveSide", url: "https://solveside.co.za" }],
  creator: "SolveSide",
  publisher: "SolveSide",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-ZA": "https://solveside.co.za",
      en: "https://solveside.co.za",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
      noimageindex: false,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://solveside.co.za",
    siteName: "SolveSide",
    title: "SolveSide - Leading IT Solutions Provider in South Africa",
    description:
      "SolveSide delivers cutting-edge automation, quality assurance, infrastructure, and DevOps solutions to power your business forward. Expert IT services in Johannesburg.",
    images: [
      {
        url: "/images/solveside-og-image.png",
        width: 1200,
        height: 630,
        alt: "SolveSide - IT Solutions Provider",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SolveSide - IT Solutions Provider in South Africa",
    description:
      "SolveSide delivers cutting-edge automation, quality assurance, infrastructure, and DevOps solutions to power your business forward.",
    images: ["/images/solveside-og-image.png"],
    creator: "@solveside",
    site: "@solveside",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.ico", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#009FE3",
      },
    ],
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    minimumScale: 1,
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    yandex: "yandex-verification-code",
    bing: "msvalidate.01.YOUR_BING_VERIFICATION_CODE",
    other: {
      me: ["info@solveside.co.za"],
    },
  },
  category: "Technology",
  classification: "IT Solutions, Business Services, Technology",
  applicationName: "SolveSide",
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#009FE3" },
    { media: "(prefers-color-scheme: dark)", color: "#009FE3" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" className={inter.variable}>
      <head>
        {/* Google Search Console verification - alternative method */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />

        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Indexing directives */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Additional meta tags for SEO */}
        <meta name="geo.region" content="ZA-GT" />
        <meta name="geo.placename" content="Johannesburg" />
        <meta name="geo.position" content="-26.2041;28.0473" />
        <meta name="ICBM" content="-26.2041, 28.0473" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>

        {/* Structured data for organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://solveside.co.za/#organization",
              name: "SolveSide",
              url: "https://solveside.co.za",
              logo: {
                "@type": "ImageObject",
                url: "https://solveside.co.za/images/solveside-logo.png",
                width: 120,
                height: 50,
                "@id": "https://solveside.co.za/#logo",
              },
              image: {
                "@type": "ImageObject",
                url: "https://solveside.co.za/images/solveside-og-image.png",
                width: 1200,
                height: 630,
              },
              sameAs: [
                "https://www.facebook.com/solveside",
                "https://www.linkedin.com/company/solveside",
                "https://twitter.com/solveside",
                "https://www.instagram.com/solveside",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+27-72-582-3508",
                  contactType: "customer service",
                  availableLanguage: ["English"],
                  email: "info@solveside.co.za",
                  areaServed: "ZA",
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Tech Avenue, Suite 500",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                postalCode: "2000",
                addressCountry: "ZA",
              },
              description:
                "SolveSide delivers cutting-edge automation, quality assurance, infrastructure, and DevOps solutions to power your business forward.",
            }),
          }}
        />

        {/* Structured data for local business */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://solveside.co.za/#localbusiness",
              name: "SolveSide",
              image: {
                "@type": "ImageObject",
                url: "https://solveside.co.za/images/solveside-logo.png",
                width: 120,
                height: 50,
              },
              url: "https://solveside.co.za",
              telephone: "+27-72-582-3508",
              email: "info@solveside.co.za",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Tech Avenue, Suite 500",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                postalCode: "2000",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.2041,
                longitude: 28.0473,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
            }),
          }}
        />

        {/* Structured data for website */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://solveside.co.za/#website",
              name: "SolveSide",
              url: "https://solveside.co.za",
              description: "IT Solutions Provider in South Africa",
              publisher: {
                "@type": "Organization",
                "@id": "https://solveside.co.za/#organization",
                name: "SolveSide",
                logo: {
                  "@type": "ImageObject",
                  url: "https://solveside.co.za/images/solveside-logo.png",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://solveside.co.za/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
              inLanguage: "en-ZA",
            }),
          }}
        />

        {/* Breadcrumb structured data for better indexing */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "@id": "https://solveside.co.za/#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://solveside.co.za",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: "https://solveside.co.za/#services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "About",
                  item: "https://solveside.co.za/#about",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "FAQ",
                  item: "https://solveside.co.za/#faq",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Contact",
                  item: "https://solveside.co.za/#contact",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
