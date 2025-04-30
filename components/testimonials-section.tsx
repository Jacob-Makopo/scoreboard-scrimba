"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useMobile } from "@/hooks/use-mobile"

export function TestimonialsSection() {
  const isMobile = useMobile()
  const [activeTab, setActiveTab] = useState("tab1")

  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-offWhite relative"
    >
      {/* Animated background elements - reduced for mobile */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-lightBlue/10 blur-3xl animate-pulse-slow hidden md:block"></div>
      <div
        className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-brightBlue/10 blur-3xl animate-pulse-slow hidden md:block"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none hidden md:block">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full">
          <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g opacity="0.8">
              <path
                d="M400 400m-300 0a300 300 0 1 0 600 0a300 300 0 1 0 -600 0"
                stroke="currentColor"
                strokeWidth="20"
                className="text-brightBlue"
              />
              <path
                d="M400 400m-250 0a250 250 0 1 0 500 0a250 250 0 1 0 -500 0"
                stroke="currentColor"
                strokeWidth="15"
                className="text-brightBlue"
              />
              <path
                d="M400 400m-200 0a200 200 0 1 0 400 0a200 200 0 1 0 -400 0"
                stroke="currentColor"
                strokeWidth="10"
                className="text-brightBlue"
              />
              <path
                d="M400 400m-150 0a150 150 0 1 0 300 0a150 150 0 1 0 -300 0"
                stroke="currentColor"
                strokeWidth="5"
                className="text-brightBlue"
              />
              <path
                d="M400 400m-100 0a100 100 0 1 0 200 0a100 100 0 1 0 -200 0"
                stroke="currentColor"
                strokeWidth="2"
                className="text-brightBlue"
              />
            </g>
          </svg>
        </div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-brightBlue px-3 py-1 text-sm text-white">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-brightBlue to-blue-700">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our clients have to say about working with SolveSide.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl mt-12">
          <Tabs defaultValue="tab1" className="w-full" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 bg-customGray">
              <TabsTrigger value="tab1" className="data-[state=active]:bg-brightBlue data-[state=active]:text-white">
                Enterprise
              </TabsTrigger>
              <TabsTrigger value="tab2" className="data-[state=active]:bg-brightBlue data-[state=active]:text-white">
                Mid-Market
              </TabsTrigger>
              <TabsTrigger value="tab3" className="data-[state=active]:bg-brightBlue data-[state=active]:text-white">
                Startups
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-brightBlue/10 glass-effect shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                        <AvatarFallback className="bg-brightBlue text-white">JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-brightBlue">John Doe</CardTitle>
                        <CardDescription>CTO, Global Enterprises</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      "SolveSide transformed our IT infrastructure, resulting in a 40% increase in operational
                      efficiency. Their DevOps implementation has significantly accelerated our development cycles."
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className="border-brightBlue/10 glass-effect shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                  style={{ transitionDelay: "0.1s" }}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                        <AvatarFallback className="bg-brightBlue text-white">SM</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-brightBlue">Sarah Miller</CardTitle>
                        <CardDescription>IT Director, Fortune 500 Company</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      "The automation solutions provided by SolveSide have revolutionized our business processes. We've
                      seen dramatic improvements in efficiency and significant cost savings."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="tab2" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-brightBlue/10 glass-effect shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                        <AvatarFallback className="bg-brightBlue text-white">RJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-brightBlue">Robert Johnson</CardTitle>
                        <CardDescription>CEO, Regional Solutions</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      "SolveSide's quality assurance team helped us identify and fix critical issues before our product
                      launch. Their thorough testing methodology is unmatched in the industry."
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className="border-brightBlue/10 glass-effect shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                  style={{ transitionDelay: "0.1s" }}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                        <AvatarFallback className="bg-brightBlue text-white">LP</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-brightBlue">Lisa Park</CardTitle>
                        <CardDescription>Operations Manager, Mid-Tech Inc.</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      "The digital infrastructure overhaul by SolveSide has made our systems more reliable and secure.
                      Their team's expertise in compliance has been invaluable for our regulated industry."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="tab3" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-brightBlue/10 glass-effect shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                        <AvatarFallback className="bg-brightBlue text-white">AK</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-brightBlue">Alex Kim</CardTitle>
                        <CardDescription>Founder, Tech Startup</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      "As a startup, we needed scalable IT solutions that could grow with us. SolveSide delivered
                      exactly what we needed, allowing us to focus on our core business while they handled our
                      technology needs."
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className="border-brightBlue/10 glass-effect shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                  style={{ transitionDelay: "0.1s" }}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                        <AvatarFallback className="bg-brightBlue text-white">MR</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-brightBlue">Maya Rodriguez</CardTitle>
                        <CardDescription>CTO, Innovative Solutions</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      "SolveSide's DevOps engineering team helped us implement CI/CD pipelines that have dramatically
                      improved our development workflow. Their expertise has been a game-changer for our small team."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
