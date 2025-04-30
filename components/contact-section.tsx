"use client"

import React, { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { HexagonPattern } from "@/components/hexagon-pattern"
import { SeoHeading } from "@/components/seo-heading"

export function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement
    const formDataToSend = new FormData(form)

    try {
      await fetch("https://formsubmit.co/ajax/478e75697c5ab412189623f81a1d12be", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      })

      toast({
        title: "✅ Message Sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      })

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "❌ Something went wrong",
        description: "Please try again later.",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-customGray via-offWhite to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-lightBlue/10 blur-3xl animate-pulse-slow hidden md:block" />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-brightBlue/10 blur-3xl animate-pulse-slow hidden md:block"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-30 pointer-events-none hidden md:block">
        <div className="animate-spin-slow origin-center" style={{ animationDirection: "reverse" }}>
          <HexagonPattern />
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-brightBlue px-3 py-1 text-sm text-white">Contact Us</div>
            <SeoHeading
              level={2}
              className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-brightBlue to-blue-700"
              id="contact-heading"
            >
              Get in Touch
            </SeoHeading>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              Have a question or ready to start your IT transformation? Reach out to our team today.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2 mt-12">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <Card className="border-brightBlue/10 glass-effect shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-brightBlue">Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <ContactItem icon={<Phone />} label="Phone" value="+27692112403" />
                  <ContactItem icon={<Mail />} label="Email" value="info@solveside.co.za" />
                  <ContactItem
                    icon={<MapPin />}
                    label="Office"
                    value="13 Olympus Dr, Olympus AH, 0081 Pretoria, South Africa"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-brightBlue/10 glass-effect shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-brightBlue">Business Hours</CardTitle>
                <CardDescription>When you can reach our team</CardDescription>
              </CardHeader>
              <CardContent>
                <BusinessHour day="Monday - Friday" time="9:00 AM - 6:00 PM" />
                <BusinessHour day="Saturday" time="10:00 AM - 4:00 PM" />
                <BusinessHour day="Sunday" time="Closed" />
              </CardContent>
            </Card>
          </div>

          {/* Right: Form */}
          <Card className="border-brightBlue/10 glass-effect shadow-md hover:shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-brightBlue">Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New Contact Form Submission" />

                <InputField label="Name" name="name" value={formData.name} onChange={handleChange} required />
                <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                <InputField label="Company" name="company" value={formData.company} onChange={handleChange} />
                <TextareaField label="Message" name="message" value={formData.message} onChange={handleChange} required />

                <Button
                  type="submit"
                  className="w-full bg-brightBlue hover:bg-brightBlue/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

const ContactItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-4 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brightBlue text-white">{icon}</div>
    <div className="space-y-1">
      <p className="text-sm font-medium leading-none">{label}</p>
      <p className="text-sm text-gray-600 whitespace-pre-line">{value}</p>
    </div>
  </div>
)

const BusinessHour = ({ day, time }: { day: string; time: string }) => (
  <div className="flex items-center justify-between p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors">
    <p className="text-sm font-medium">{day}</p>
    <p className="text-sm text-gray-600">{time}</p>
  </div>
)

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
}: {
  label: string
  name: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}) => (
  <div className="grid gap-2">
    <Label htmlFor={name}>{label}</Label>
    <Input
      id={name}
      name={name}
      type={type}
      placeholder={`Your ${label.toLowerCase()}`}
      value={value}
      onChange={onChange}
      required={required}
      className="border-brightBlue/20 focus-visible:ring-brightBlue"
    />
  </div>
)

const TextareaField = ({
  label,
  name,
  value,
  onChange,
  required = false,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  required?: boolean
}) => (
  <div className="grid gap-2">
    <Label htmlFor={name}>{label}</Label>
    <Textarea
      id={name}
      name={name}
      placeholder={`Your ${label.toLowerCase()}`}
      value={value}
      onChange={onChange}
      required={required}
      className="min-h-[120px] border-brightBlue/20 focus-visible:ring-brightBlue"
    />
  </div>
)
