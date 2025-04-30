import { SEOFAQ } from "@/components/seo-faq"
import { SeoHeading } from "@/components/seo-heading"

export function FAQSection() {
  const faqs = [
    {
      question: "What IT services does SolveSide offer?",
      answer:
        "SolveSide offers a comprehensive range of IT services including Automation Engineering, Quality Assurance & Testing, Digital Infrastructure & Networking, ICT Infrastructure & Compliance, DevOps Engineering, and Managed IT Services.",
    },
    {
      question: "Where is SolveSide located?",
      answer:
        "SolveSide is headquartered in Johannesburg, South Africa, but we serve clients throughout South Africa and beyond.",
    },
    {
      question: "How can SolveSide help my business with automation?",
      answer:
        "Our automation engineering services help businesses streamline operations, reduce manual tasks, implement RPA (Robotic Process Automation), create custom automation solutions, and optimize workflows for increased efficiency and reduced costs.",
    },
    {
      question: "What industries does SolveSide work with?",
      answer:
        "SolveSide works with a diverse range of industries including finance, healthcare, retail, manufacturing, logistics, education, and government sectors. Our solutions are tailored to meet the specific needs of each industry.",
    },
    {
      question: "How does SolveSide ensure quality in software development?",
      answer:
        "Our Quality Assurance & Testing services include automated testing frameworks, performance testing, security testing, and comprehensive QA process implementation to ensure flawless software performance and reliability.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-offWhite relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-brightBlue px-3 py-1 text-sm text-white">FAQ</div>
            <SeoHeading
              level={2}
              className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-brightBlue to-blue-700"
              id="faq-heading"
            >
              Frequently Asked Questions
            </SeoHeading>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our IT services and solutions.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <SEOFAQ faqs={faqs} className="bg-white rounded-lg shadow-lg p-6" />
        </div>
      </div>
    </section>
  )
}
