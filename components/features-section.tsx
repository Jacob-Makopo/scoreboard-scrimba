"use client"

import { useState } from "react"
import { CheckCircle, Zap, Shield, Clock, Users, Award, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SeoHeading } from "@/components/seo-heading"

export function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast Implementation",
      description: "Get your solutions deployed quickly with our streamlined processes and expert team.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise-Grade Security",
      description: "Your data and systems are protected with industry-leading security measures.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support to keep your business running smoothly.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "Work with certified professionals who understand your business needs.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Guaranteed",
      description: "We deliver excellence with rigorous testing and quality assurance processes.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Scalable Solutions",
      description: "Our solutions grow with your business, adapting to your changing needs.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-offWhite relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-brightBlue/5 blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-lightBlue/5 blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Floating geometric shapes */}
      <div
        className="absolute top-40 right-20 w-4 h-4 bg-brightBlue/20 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-60 left-32 w-6 h-6 bg-lightBlue/20 rounded-full animate-bounce"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-80 left-1/4 w-3 h-3 bg-brightBlue/30 rounded-full animate-bounce"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-brightBlue/10 px-4 py-2 text-sm font-medium text-brightBlue mb-4">
            <CheckCircle className="h-4 w-4" />
            Why Choose SolveSide
          </div>
          <SeoHeading
            level={2}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-brightBlue via-blue-600 to-blue-800 mb-4"
          >
            Built for Modern Businesses
          </SeoHeading>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            We combine cutting-edge technology with proven methodologies to deliver solutions that drive real business
            results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Professional blue gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brightBlue/5 to-lightBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-brightBlue/20 to-lightBlue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
                <div className="w-full h-full bg-white rounded-lg"></div>
              </div>

              <CardContent className="relative p-8">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brightBlue to-lightBlue text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>

                <SeoHeading
                  level={3}
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brightBlue transition-colors duration-300"
                >
                  {feature.title}
                </SeoHeading>

                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Hover indicator */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brightBlue to-lightBlue transition-all duration-500 ${hoveredCard === index ? "w-full" : "w-0"}`}
                ></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
