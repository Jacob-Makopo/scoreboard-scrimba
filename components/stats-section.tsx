"use client"

import { useEffect, useState } from "react"
import { TrendingUp, Award, Clock, Shield } from "lucide-react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("stats-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: <Award className="h-8 w-8" />,
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable infrastructure",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      value: "100%",
      label: "Security Focused",
      description: "Enterprise-grade protection",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "Fast",
      label: "Implementation",
      description: "Quick deployment",
    },
  ]

  return (
    <section
      id="stats-section"
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-brightBlue via-blue-600 to-blue-800 relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl animate-pulse-slow"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Floating elements */}
      <div
        className="absolute top-40 right-32 w-2 h-2 bg-white/30 rounded-full animate-ping"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-60 left-1/4 w-3 h-3 bg-white/20 rounded-full animate-ping"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white mb-4">
            <TrendingUp className="h-4 w-4" />
            Our Commitment
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white mb-4">
            Excellence in Every Solution
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-blue-100 leading-relaxed">
            Our dedication to quality and reliability drives everything we do.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="group relative" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* Professional blue gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brightBlue/10 to-lightBlue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brightBlue to-lightBlue text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>

                  <div className={`text-4xl md:text-5xl font-bold text-white mb-2 ${isVisible ? "animate-pulse" : ""}`}>
                    {stat.value}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>

                  <p className="text-blue-100 text-sm">{stat.description}</p>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
                  <div className="w-full h-full bg-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
