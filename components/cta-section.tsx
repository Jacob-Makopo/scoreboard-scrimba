"use client"

import { ArrowRight, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-offWhite relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-brightBlue/10 blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-lightBlue/10 blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Floating elements */}
      <div
        className="absolute top-32 right-1/4 w-4 h-4 bg-brightBlue/20 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-1/3 w-6 h-6 bg-lightBlue/20 rounded-full animate-bounce"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brightBlue/10 px-4 py-2 text-sm font-medium text-brightBlue mb-6">
            <Sparkles className="h-4 w-4" />
            Ready to Transform Your Business?
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-brightBlue via-blue-600 to-blue-800 mb-6">
            Let's Build Something Amazing Together
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            Join businesses that trust SolveSide to power their digital transformation. Get started today and see the
            difference expert IT solutions can make.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="group bg-brightBlue hover:bg-brightBlue/90 text-white shadow-lg shadow-brightBlue/25 hover:shadow-xl hover:shadow-brightBlue/40 transition-all duration-300 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-brightBlue text-brightBlue hover:bg-brightBlue hover:text-white transition-all duration-300 px-8 py-4 text-lg font-semibold bg-white/80 backdrop-blur-sm"
              asChild
            >
              <Link href="/services">
                <Zap className="mr-2 h-5 w-5 group-hover:text-white transition-colors duration-300" />
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Trust indicators - updated without project count */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-brightBlue">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brightBlue">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brightBlue">100%</div>
              <div className="text-sm text-gray-600">Secure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
