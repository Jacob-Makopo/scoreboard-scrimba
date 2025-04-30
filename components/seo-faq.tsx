interface FAQItem {
  question: string
  answer: string
}

interface SEOFAQProps {
  faqs: FAQItem[]
  className?: string
}

export function SEOFAQ({ faqs, className = "" }: SEOFAQProps) {
  // Structured data for FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <div className={className}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <dl className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="pt-6 border-t border-gray-200">
            <dt className="text-lg font-medium text-brightBlue">{faq.question}</dt>
            <dd className="mt-2 text-base text-gray-600">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
