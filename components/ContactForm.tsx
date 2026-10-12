"use client"

import { FormEvent, useState } from "react"
import { Button } from "./Button"

interface ContactFormProps {
  formType: "demo" | "trial"
  whatsappNumber?: string
}

export function ContactForm({ formType, whatsappNumber = "923049469130" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle")

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form) as Record<string, string>

    // Construct WhatsApp message based on form type
    let whatsappMessage = ""
    if (formType === "demo") {
      whatsappMessage = `
*Demo Request*

*Name:* ${data.name}
*Store:* ${data.store}
*Phone:* ${data.phone}
*Email:* ${data.email || "Not provided"}
*Method:* ${data.method}
*Date:* ${data.date || "Not specified"}
*Message:* ${data.message || "Not provided"}
      `.trim()
    } else {
      whatsappMessage = `
*Trial Request*

*Name:* ${data.name}
*Pharmacy:* ${data.pharmacy}
*Phone:* ${data.phone}
*Email:* ${data.email}
      `.trim()
    }

    // Open WhatsApp
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappLink, "_blank")

    setStatus("sent")
    e.currentTarget.reset()
  }

  return (
    <>
      {formType === "demo" ? (
        <form className="lead-form p-5 sm:p-6 lg:p-8 bg-white border border-gray-200 rounded-2xl shadow-xl" onSubmit={submit}>
          <div className="field-row grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
            <label className="flex flex-col gap-2 text-gray-700 text-xs sm:text-sm font-bold">
              Full name
              <input
                required
                name="name"
                placeholder="Your full name"
                className="h-10 sm:h-12 px-3 sm:px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400 text-sm"
              />
            </label>
            <label className="flex flex-col gap-2 text-gray-700 text-xs sm:text-sm font-bold">
              Store name
              <input
                required
                name="store"
                placeholder="Pharmacy name"
                className="h-10 sm:h-12 px-3 sm:px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400 text-sm"
              />
            </label>
          </div>
          <div className="field-row grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
            <label className="flex flex-col gap-2 text-gray-700 text-xs sm:text-sm font-bold">
              Phone number
              <input
                required
                name="phone"
                type="tel"
                placeholder="+92 3XX XXXXXXX"
                className="h-10 sm:h-12 px-3 sm:px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400 text-sm"
              />
            </label>
            <label className="flex flex-col gap-2 text-gray-700 text-xs sm:text-sm font-bold">
              Email <span className="text-gray-400 font-medium">(optional)</span>
              <input
                name="email"
                type="email"
                placeholder="name@example.com"
                className="h-10 sm:h-12 px-3 sm:px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400 text-sm"
              />
            </label>
          </div>
          <div className="field-row grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
            <label className="flex flex-col gap-2 text-gray-700 text-xs sm:text-sm font-bold">
              Demo method
              <select
                name="method"
                defaultValue="online"
                className="h-10 sm:h-12 px-3 sm:px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm"
              >
                <option value="online">Online demo</option>
                <option value="in-person">
                  In-person (subject to availability)
                </option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-gray-700 text-xs sm:text-sm font-bold">
              Preferred date
              <input
                name="date"
                type="date"
                className="h-10 sm:h-12 px-3 sm:px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 mb-4 text-gray-700 text-xs sm:text-sm font-bold">
            Anything specific you want to see?{" "}
            <span className="text-gray-400 font-medium">(optional)</span>
            <textarea
              name="message"
              rows={3}
              placeholder="Tell us about your pharmacy or questions"
              className="py-2 sm:py-3 px-3 sm:px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-y placeholder:text-gray-400 text-sm"
            />
          </label>
          <Button
            type="submit"
            variant="primary"
            fullWidth
            icon="arrow"
            iconSize={17}
            size="lg"
            disabled={status === "loading"}
            className="mt-2"
          >
            {status === "loading" ? "Sending request…" : "Request a Free Demo"}
          </Button>
          {status === "sent" && (
            <div
              className="form-message success mt-4 py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-xs sm:text-sm leading-normal text-green-700 bg-green-50 border border-green-200"
              role="status"
            >
              <p className="mb-2">Your request was sent via WhatsApp. You can also contact us directly:</p>
              <div className="flex flex-col gap-1 mt-2">
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline font-medium">
                  WhatsApp: {whatsappNumber.replace(/(\d{2})(\d{3})(\d{7})/, "$1 $2 $3")}
                </a>
              </div>
            </div>
          )}
        </form>
      ) : (
        <form
          className="lead-form py-6 sm:py-8 lg:py-10 px-5 sm:px-6 lg:px-8 bg-white border border-gray-200 rounded-2xl shadow-xl"
          onSubmit={submit}
        >
          <div className="form-heading flex flex-col mb-4 sm:mb-6">
            <span className="text-xl sm:text-2xl font-extrabold text-gray-900">
              Request Free Trial
            </span>
            <small className="mt-2 text-gray-500 text-xs sm:text-sm">
              Tell us where to send setup details.
            </small>
          </div>
          <label className="flex flex-col gap-2 mb-4 text-gray-700 text-xs sm:text-sm font-bold">
            Full name
            <input
              name="name"
              required
              placeholder="e.g. Ahmed Khan"
              className="h-10 sm:h-12 px-3 sm:px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400 text-sm"
            />
          </label>
          <label className="flex flex-col gap-2 mb-4 text-gray-700 text-xs sm:text-sm font-bold">
            Pharmacy or medical store
            <input
              name="pharmacy"
              required
              placeholder="e.g. City Medical Store"
              className="h-10 sm:h-12 px-3 sm:px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400 text-sm"
            />
          </label>
          <div className="field-row grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
            <label className="flex flex-col gap-2 text-gray-700 text-xs sm:text-sm font-bold">
              Phone number
              <input
                name="phone"
                required
                type="tel"
                placeholder="+92 3XX XXXXXXX"
                className="h-10 sm:h-12 px-3 sm:px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400 text-sm"
              />
            </label>
            <label className="flex flex-col gap-2 text-gray-700 text-xs sm:text-sm font-bold">
              Email address
              <input
                name="email"
                required
                type="email"
                placeholder="name@example.com"
                className="h-10 sm:h-12 px-3 sm:px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400 text-sm"
              />
            </label>
          </div>
          <Button
            type="submit"
            variant="primary"
            fullWidth
            icon="arrow"
            iconSize={17}
            size="lg"
            className="mt-2"
          >
            {status === "loading" ? "Sending request…" : "Request Trial Access"}
          </Button>
          <p className="form-caption mt-4 text-center text-[10px] sm:text-xs text-gray-500">
            By continuing, you agree to be contacted about Medicore Pharmacy.
          </p>
          {status === "sent" && (
            <div
              className="form-message success mt-4 py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-xs sm:text-sm leading-normal text-green-700 bg-green-50 border border-green-200"
              role="status"
            >
              <p className="mb-2">Your request was sent via WhatsApp. You can also contact us directly:</p>
              <div className="flex flex-col gap-1 mt-2">
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline font-medium">
                  WhatsApp: {whatsappNumber.replace(/(\d{2})(\d{3})(\d{7})/, "$1 $2 $3")}
                </a>
              </div>
            </div>
          )}
        </form>
      )}
    </>
  )
}
