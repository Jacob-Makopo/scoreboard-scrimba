"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Brain, Code, CheckCircle, Network, Server } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HexagonPattern } from "@/components/hexagon-pattern"
import { useMobile } from "@/hooks/use-mobile"
import { SeoHeading } from "@/components/seo-heading"

export function HeroSection() {
  const isMobile = useMobile()
  const animationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Reduce animation intensity on mobile for better performance
    if (isMobile && animationRef.current) {
      const elements = animationRef.current.querySelectorAll(".animate-spin-slow")
      elements.forEach((el) => {
        el.classList.remove("animate-spin-slow")
      })
    }
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-white via-offWhite to-customGray relative overflow-hidden">
      {/* Animated background elements - reduced for mobile */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-lightBlue/10 blur-3xl animate-pulse-slow hidden md:block"></div>
      <div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-brightBlue/10 blur-3xl animate-pulse-slow hidden md:block"
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
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-brightBlue text-white px-3 py-1 text-sm mb-4">
                IT Solutions Provider
              </div>
              <SeoHeading
                level={1}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-brightBlue to-blue-700"
              >
                Transforming IT Infrastructure for the Digital Age
              </SeoHeading>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                SolveSide delivers cutting-edge automation, quality assurance, infrastructure, and DevOps solutions to
                power your business forward.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                size="lg"
                className="bg-brightBlue hover:bg-brightBlue/90 text-white shadow-lg shadow-brightBlue/20 transition-all hover:shadow-xl hover:shadow-brightBlue/30 w-full sm:w-auto"
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brightBlue text-brightBlue hover:bg-brightBlue/10 w-full sm:w-auto"
                onClick={() => {
                  const servicesSection = document.getElementById("services")
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Explore Services
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative h-[300px] w-[300px] md:h-[450px] md:w-[450px] animate-float">
              <div className="absolute inset-0 bg-brightBlue rounded-full blur-[100px] opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[250px] w-[250px] md:h-[400px] md:w-[400px] rounded-xl glass-effect shadow-lg flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Brain className="w-full h-full text-brightBlue/20" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-3 p-4 md:p-6 z-10">
                          <div className="flex flex-col items-center justify-center p-2 md:p-4 glass-effect rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="h-8 w-8 md:h-12 md:w-12 rounded-full bg-brightBlue/10 flex items-center justify-center mb-2">
                              <Code className="h-4 w-4 md:h-6 md:w-6 text-brightBlue" />
                            </div>
                            <span className="text-xs md:text-sm font-medium">Automation</span>
                          </div>
                          <div
                            className="flex flex-col items-center justify-center p-2 md:p-4 glass-effect rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                            style={{ transitionDelay: "0.1s" }}
                          >
                            <div className="h-8 w-8 md:h-12 md:w-12 rounded-full bg-brightBlue/10 flex items-center justify-center mb-2">
                              <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-brightBlue" />
                            </div>
                            <span className="text-xs md:text-sm font-medium">QA Testing</span>
                          </div>
                          <div
                            className="flex flex-col items-center justify-center p-2 md:p-4 glass-effect rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                            style={{ transitionDelay: "0.2s" }}
                          >
                            <div className="h-8 w-8 md:h-12 md:w-12 rounded-full bg-brightBlue/10 flex items-center justify-center mb-2">
                              <Network className="h-4 w-4 md:h-6 md:w-6 text-brightBlue" />
                            </div>
                            <span className="text-xs md:text-sm font-medium">Infrastructure</span>
                          </div>
                          <div
                            className="flex flex-col items-center justify-center p-2 md:p-4 glass-effect rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                            style={{ transitionDelay: "0.3s" }}
                          >
                            <div className="h-8 w-8 md:h-12 md:w-12 rounded-full bg-brightBlue/10 flex items-center justify-center mb-2">
                              <Server className="h-4 w-4 md:h-6 md:w-6 text-brightBlue" />
                            </div>
                            <span className="text-xs md:text-sm font-medium">DevOps</span>
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
      </div>
    </section>
  )
}
