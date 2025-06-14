import { CheckCircle, Code, Database, Network, Server, Shield } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SeoHeading } from "@/components/seo-heading"

export function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-customGray relative"
    >
      <div className="absolute top-0 right-0 w-1/4 h-full opacity-10 pointer-events-none rotate-180 hidden md:block">
        <div className="h-full w-full">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <path
              d="M50 86.6025C50 80.0797 53.2804 74.0493 58.6603 70.5L100 47.3013C105.38 43.752 112.02 43.752 117.4 47.3013L158.74 70.5C164.12 74.0493 167.4 80.0797 167.4 86.6025V133C167.4 139.523 164.12 145.553 158.74 149.103L117.4 172.301C112.02 175.851 105.38 175.851 100 172.301L58.6603 149.103C53.2804 145.553 50 139.523 50 133V86.6025Z"
              fill="currentColor"
              className="text-brightBlue"
            />
          </svg>
        </div>
      </div>

      {/* Animated background elements - reduced for mobile */}
      <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-lightBlue/10 blur-3xl animate-pulse-slow hidden md:block"></div>
      <div
        className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-brightBlue/10 blur-3xl animate-pulse-slow hidden md:block"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-brightBlue px-3 py-1 text-sm text-white">Our Services</div>
            <SeoHeading
              level={2}
              className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-brightBlue to-blue-700"
              id="services-heading"
            >
              Comprehensive IT Solutions
            </SeoHeading>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              SolveSide offers a full spectrum of IT services designed to optimize your technology infrastructure and
              drive business growth.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {/* Combined Automation & QA Service Card */}
          <Card className="border-brightBlue/10 glass-effect shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
            <CardHeader className="pb-2">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brightBlue text-white">
                <Code className="h-6 w-6" />
              </div>
              <CardTitle className="text-brightBlue">Automation & Quality Assurance</CardTitle>
              <CardDescription>Streamline operations and ensure flawless performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Process automation workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>RPA (Robotic Process Automation)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Automated testing frameworks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Performance & security testing</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Web Development & Software Development */}
          <Card
            className="border-brightBlue/10 glass-effect shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            style={{ transitionDelay: "0.1s" }}
          >
            <CardHeader className="pb-2">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brightBlue text-white">
                <Code className="h-6 w-6" />
              </div>
              <CardTitle className="text-brightBlue">Web & Software Development</CardTitle>
              <CardDescription>Custom applications and digital solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Custom web applications</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Mobile app development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>E-commerce solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>API development & integration</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Digital Infrastructure & Networking */}
          <Card
            className="border-brightBlue/10 glass-effect shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            style={{ transitionDelay: "0.2s" }}
          >
            <CardHeader className="pb-2">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brightBlue text-white">
                <Network className="h-6 w-6" />
              </div>
              <CardTitle className="text-brightBlue">Digital Infrastructure & Networking</CardTitle>
              <CardDescription>Build robust digital foundations</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Network design & implementation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Cloud infrastructure setup</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Network security solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Performance optimization</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* ICT Infrastructure & Compliance */}
          <Card className="border-brightBlue/10 glass-effect shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
            <CardHeader className="pb-2">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brightBlue text-white">
                <Shield className="h-6 w-6" />
              </div>
              <CardTitle className="text-brightBlue">ICT Infrastructure & Compliance</CardTitle>
              <CardDescription>Meet industry standards and regulations</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Regulatory compliance management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Security policy implementation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Risk assessment & management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Audit preparation & support</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* DevOps Engineering */}
          <Card
            className="border-brightBlue/10 glass-effect shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            style={{ transitionDelay: "0.1s" }}
          >
            <CardHeader className="pb-2">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brightBlue text-white">
                <Server className="h-6 w-6" />
              </div>
              <CardTitle className="text-brightBlue">DevOps Engineering</CardTitle>
              <CardDescription>Accelerate development and deployment</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>CI/CD pipeline implementation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Infrastructure as Code (IaC)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Containerization & orchestration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Monitoring & observability</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Hosting & Maintenance */}
          <Card
            className="border-brightBlue/10 glass-effect shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            style={{ transitionDelay: "0.2s" }}
          >
            <CardHeader className="pb-2">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brightBlue text-white">
                <Database className="h-6 w-6" />
              </div>
              <CardTitle className="text-brightBlue">Hosting & Maintenance</CardTitle>
              <CardDescription>Reliable hosting and ongoing support</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Web hosting & cloud services</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>24/7 system monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Regular backups & updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brightBlue" />
                  <span>Technical support & maintenance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
