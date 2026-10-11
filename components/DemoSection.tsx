"use client"

import { FormEvent, useState } from "react"
import { Icon } from "./Icon"
import { Button } from "./Button"
import { siteConfig } from "@/lib/data"

export function DemoSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  )

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!siteConfig.demoEndpoint) {
      setStatus("error")
      return
    }
    setStatus("loading")
    const form = new FormData(e.currentTarget)
    try {
      const response = await fetch(siteConfig.demoEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      })
      if (!response.ok) throw new Error()
      setStatus("sent")
      e.currentTarget.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="section demo-section py-24 bg-white" id="demo">
      <div className="container mx-auto max-w-7xl min-w-[calc(100%-40px)]">
        <div className="demo-grid grid grid-cols-1 lg:grid-cols-[0.85fr_1fr] items-start gap-12 lg:gap-20">
          <div>
            <div className="section-heading mb-16">
              <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700 text-xs font-extrabold tracking-[0.12em]">
                <i className="w-2 h-2 rounded-full bg-[#54cc3a] shadow-[0_0_0_5px_#dcfce7]" />
                PERSONALIZED WALKTHROUGH
              </span>
              <h2 className="mt-6 mb-4 text-4xl sm:text-5xl font-bold tracking-tight">
                See Medicore Pharmacy in Action
              </h2>
              <p className="mb-0 text-lg text-gray-600">
                Tell us about your medical store and the workflow you want to
                improve. A team member can arrange a suitable walkthrough once
                your preferred contact channel is configured.
              </p>
            </div>
            <div className="demo-points space-y-6">
              <div className="flex gap-4">
                <span className="w-12 h-12 grid place-items-center shrink-0 text-[#54cc3a] bg-green-50 rounded-xl">
                  <Icon name="activity" />
                </span>
                <p className="flex flex-col mb-0">
                  <b className="text-gray-900 text-base font-semibold">Focused on your workflow</b>
                  <small className="max-w-md mt-1 text-gray-600 leading-relaxed">
                    See the parts most relevant to your counter and inventory.
                  </small>
                </p>
              </div>
              <div className="flex gap-4">
                <span className="w-12 h-12 grid place-items-center shrink-0 text-[#54cc3a] bg-green-50 rounded-xl">
                  <Icon name="support" />
                </span>
                <p className="flex flex-col mb-0">
                  <b className="text-gray-900 text-base font-semibold">Ask practical questions</b>
                  <small className="max-w-md mt-1 text-gray-600 leading-relaxed">
                    Discuss setup, staff access, reports, and onboarding needs.
                  </small>
                </p>
              </div>
              <div className="flex gap-4">
                <span className="w-12 h-12 grid place-items-center shrink-0 text-[#54cc3a] bg-green-50 rounded-xl">
                  <Icon name="calendar" />
                </span>
                <p className="flex flex-col mb-0">
                  <b className="text-gray-900 text-base font-semibold">Online or in-person</b>
                  <small className="max-w-md mt-1 text-gray-600 leading-relaxed">
                    Share your preference and the team will confirm availability.
                  </small>
                </p>
              </div>
            </div>
          </div>
          <form className="lead-form p-8 bg-white border border-gray-200 rounded-2xl shadow-xl" onSubmit={submit}>
            <div className="field-row grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <label className="flex flex-col gap-2 text-gray-700 text-sm font-bold">
                Full name
                <input
                  required
                  name="name"
                  placeholder="Your full name"
                  className="h-12 px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400"
                />
              </label>
              <label className="flex flex-col gap-2 text-gray-700 text-sm font-bold">
                Store name
                <input
                  required
                  name="store"
                  placeholder="Pharmacy name"
                  className="h-12 px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400"
                />
              </label>
            </div>
            <div className="field-row grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <label className="flex flex-col gap-2 text-gray-700 text-sm font-bold">
                Phone number
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="+92 3XX XXXXXXX"
                  className="h-12 px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400"
                />
              </label>
              <label className="flex flex-col gap-2 text-gray-700 text-sm font-bold">
                Email <span className="text-gray-400 font-medium">(optional)</span>
                <input
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="h-12 px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400"
                />
              </label>
            </div>
            <div className="field-row grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <label className="flex flex-col gap-2 text-gray-700 text-sm font-bold">
                Demo method
                <select
                  name="method"
                  defaultValue="online"
                  className="h-12 px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="online">Online demo</option>
                  <option value="in-person">
                    In-person (subject to availability)
                  </option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-gray-700 text-sm font-bold">
                Preferred date
                <input
                  name="date"
                  type="date"
                  className="h-12 px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 mb-4 text-gray-700 text-sm font-bold">
              Anything specific you want to see?{" "}
              <span className="text-gray-400 font-medium">(optional)</span>
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us about your pharmacy or questions"
                className="py-3 px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-y placeholder:text-gray-400"
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
                className="form-message success mt-4 py-3 px-4 rounded-lg text-sm leading-normal text-green-700 bg-green-50 border border-green-200"
                role="status"
              >
                Your request was sent. The team will contact you to confirm—this
                is not yet a booking.
              </div>
            )}
            {status === "error" && (
              <div
                className="form-message error mt-4 py-3 px-4 rounded-lg text-sm leading-normal text-red-700 bg-red-50 border border-red-200"
                role="alert"
              >
                Demo requests are not connected yet. Configure VITE_DEMO_ENDPOINT
                or contact Medicore through a configured support channel.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
