"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Brain, Code, Network, Server, Play } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { HexagonPattern } from "@/components/hexagon-pattern"
import { useMobile } from "@/hooks/use-mobile"
import { SeoHeading } from "@/components/seo-heading"

export function HeroSection() {
  const isMobile = useMobile()
  const animationRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Reduce animation intensity on mobile for better performance
    if (isMobile && animationRef.current) {
      const elements = animationRef.current.querySelectorAll(".animate-spin-slow")
      elements.forEach((el) => {
        el.classList.remove("animate-spin-slow")
      })
    }
  }, [isMobile])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-white via-offWhite to-gray-50 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-brightBlue/10 blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-lightBlue/10 blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Floating geometric elements */}
      <div
        className="absolute top-40 right-32 w-4 h-4 bg-brightBlue/30 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-60 left-1/4 w-6 h-6 bg-lightBlue/30 rounded-full animate-bounce"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-80 right-1/3 w-3 h-3 bg-brightBlue/40 rounded-full animate-bounce"
        style={{ animationDelay: "2s" }}
      ></div>

      <div ref={animationRef} className="relative">
        <div className="absolute top-0 left-0 w-1/3 h-full opacity-20 pointer-events-none hidden md:block">
          <div className="animate-spin-slow origin-center">
            <HexagonPattern />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none hidden md:block">
          <div className="animate-spin-slow origin-center" style={{ animationDirection: "reverse" }}>
            <HexagonPattern />
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className={`space-y-4 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="inline-flex items-center gap-2 rounded-full bg-brightBlue/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-brightBlue mb-4 border border-brightBlue/20">
                <div className="w-2 h-2 bg-brightBlue rounded-full animate-pulse"></div>
                Leading IT Solutions Provider
              </div>

              <SeoHeading
                level={1}
                className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-brightBlue via-blue-600 to-blue-800"
              >
                Transform Your Business with
                <span className="block text-brightBlue">Smart IT Solutions</span>
              </SeoHeading>

              <p className="max-w-[600px] text-lg md:text-xl text-gray-600 leading-relaxed">
                Empower your business with cutting-edge automation, robust infrastructure, and expert DevOps solutions.
                We turn complex challenges into competitive advantages.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 pt-6 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <Button
                size="lg"
                className="group bg-brightBlue hover:bg-brightBlue/90 text-white shadow-lg shadow-brightBlue/25 hover:shadow-xl hover:shadow-brightBlue/40 transition-all duration-300 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link href="/contact">
                  Get Started Today
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
                  <Play className="mr-2 h-5 w-5 group-hover:text-white transition-colors duration-300" />
                  Explore Services
                </Link>
              </Button>
            </div>

            {/* Trust indicators - updated without project count */}
            <div
              className={`flex flex-wrap gap-8 pt-8 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                99.9% Uptime Guarantee
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Enterprise Security
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                24/7 Expert Support
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 lg:mt-0">
            <div
              className={`relative h-[350px] w-[350px] md:h-[500px] md:w-[500px] ${isLoaded ? "animate-float" : ""}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brightBlue/20 to-lightBlue/20 rounded-full blur-[120px] opacity-60"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[450px] md:w-[450px] rounded-2xl glass-effect shadow-2xl flex items-center justify-center overflow-hidden border border-brightBlue/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-brightBlue/5 to-lightBlue/5"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Brain className="w-full h-full text-brightBlue/15 animate-pulse" />
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-4 p-6 md:p-8 z-10">
                          {[
                            { icon: Code, label: "Automation & QA", delay: "0s" },
                            { icon: Code, label: "Web & Software", delay: "0.1s" },
                            { icon: Network, label: "Infrastructure", delay: "0.2s" },
                            { icon: Server, label: "DevOps & Cloud", delay: "0.3s" },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="group flex flex-col items-center justify-center p-3 md:p-6 glass-effect rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-brightBlue/10"
                              style={{ transitionDelay: item.delay }}
                            >
                              <div className="h-10 w-10 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-brightBlue to-lightBlue flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <item.icon className="h-5 w-5 md:h-7 md:w-7 text-white" />
                              </div>
                              <span className="text-xs md:text-sm font-semibold text-center text-gray-700 group-hover:text-brightBlue transition-colors duration-300">
                                {item.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
