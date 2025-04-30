import { CheckCircle, Brain } from "lucide-react"
import { SeoHeading } from "@/components/seo-heading"

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-customGray via-offWhite to-white relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-lightBlue/10 blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-brightBlue/10 blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 opacity-10 pointer-events-none">
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

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-brightBlue px-3 py-1 text-sm text-white">About SolveSide</div>
              <SeoHeading
                level={2}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-brightBlue to-blue-700"
                id="about-heading"
              >
                Your Trusted IT Partner
              </SeoHeading>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                SolveSide was founded with a mission to provide businesses with cutting-edge IT solutions that drive
                growth, efficiency, and innovation.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 glass-effect rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brightBlue text-white">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <SeoHeading level={3} className="text-xl font-bold text-brightBlue">
                    Expert Team
                  </SeoHeading>
                  <p className="text-gray-600">
                    Our team consists of certified professionals with years of experience in various IT domains.
                  </p>
                </div>
              </div>
              <div
                className="flex items-start gap-4 p-4 glass-effect rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brightBlue text-white">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <SeoHeading level={3} className="text-xl font-bold text-brightBlue">
                    Tailored Solutions
                  </SeoHeading>
                  <p className="text-gray-600">
                    We understand that every business is unique, which is why we create customized solutions for each
                    client.
                  </p>
                </div>
              </div>
              <div
                className="flex items-start gap-4 p-4 glass-effect rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brightBlue text-white">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <SeoHeading level={3} className="text-xl font-bold text-brightBlue">
                    Proven Track Record
                  </SeoHeading>
                  <p className="text-gray-600">
                    With a history of successful projects across various industries, we have the experience to deliver
                    results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-brightBlue/20 to-background/0 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="w-[300px] h-[300px] text-brightBlue/20 animate-spin-slow" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="glass-effect p-8 rounded-xl border border-brightBlue/20 max-w-[80%] shadow-lg hover:shadow-xl transition-all">
                  <SeoHeading level={3} className="text-2xl font-bold mb-2 text-brightBlue">
                    Innovative Solutions
                  </SeoHeading>
                  <p className="text-gray-600">
                    We leverage cutting-edge technology to solve complex business challenges and drive digital
                    transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
