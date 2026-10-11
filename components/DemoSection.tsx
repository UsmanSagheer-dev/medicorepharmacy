"use client"

import { FormEvent, useState } from "react"
import { Icon } from "./Icon"
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
    <section className="section demo-section py-[112px_0]" id="demo">
      <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)]">
        <div className="demo-grid grid grid-cols-[0.85fr_1fr] items-start gap-25">
          <div>
            <div className="section-heading mb-14">
              <span className="eyebrow inline-flex items-center gap-2 text-blue-600 text-[12px] font-extrabold tracking-[0.12em]">
                <i className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_0_5px_#dbeafe]" />
                PERSONALIZED WALKTHROUGH
              </span>
              <h2 className="mt-3.5 mb-4 text-[clamp(32px,3.6vw,46px)] leading-[1.17] tracking-tight">
                See Medicore Pharmacy in Action
              </h2>
              <p className="mb-0 text-[17px] text-gray-500">
                Tell us about your medical store and the workflow you want to
                improve. A team member can arrange a suitable walkthrough once
                your preferred contact channel is configured.
              </p>
            </div>
            <div className="demo-points -mt-4">
              <div className="flex gap-3.5 my-6">
                <span className="w-10 h-10 grid place-items-center shrink-0 text-blue-600 bg-blue-50 rounded-[9px]">
                  <Icon name="activity" />
                </span>
                <p className="flex flex-col mb-0">
                  <b className="text-gray-900 text-[14px]">Focused on your workflow</b>
                  <small className="max-w-90 mt-1 text-gray-500 leading-normal">
                    See the parts most relevant to your counter and inventory.
                  </small>
                </p>
              </div>
              <div className="flex gap-3.5 my-6">
                <span className="w-10 h-10 grid place-items-center shrink-0 text-blue-600 bg-blue-50 rounded-[9px]">
                  <Icon name="support" />
                </span>
                <p className="flex flex-col mb-0">
                  <b className="text-gray-900 text-[14px]">Ask practical questions</b>
                  <small className="max-w-90 mt-1 text-gray-500 leading-normal">
                    Discuss setup, staff access, reports, and onboarding needs.
                  </small>
                </p>
              </div>
              <div className="flex gap-3.5 my-6">
                <span className="w-10 h-10 grid place-items-center shrink-0 text-blue-600 bg-blue-50 rounded-[9px]">
                  <Icon name="calendar" />
                </span>
                <p className="flex flex-col mb-0">
                  <b className="text-gray-900 text-[14px]">Online or in-person</b>
                  <small className="max-w-90 mt-1 text-gray-500 leading-normal">
                    Share your preference and the team will confirm availability.
                  </small>
                </p>
              </div>
            </div>
          </div>
          <form className="lead-form py-8 px-8 bg-white border border-gray-200 rounded-[14px] shadow-[0_15px_40px_rgba(16,24,40,0.08)]" onSubmit={submit}>
            <div className="field-row grid grid-cols-2 gap-3.5 mb-4">
              <label className="flex flex-col gap-2 text-gray-700 text-[12px] font-bold">
                Full name
                <input
                  required
                  name="name"
                  placeholder="Your full name"
                  className="h-11 px-3 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-400 focus:shadow-[0_0_0_3px_#eff6ff] placeholder:text-gray-400"
                />
              </label>
              <label className="flex flex-col gap-2 text-gray-700 text-[12px] font-bold">
                Store name
                <input
                  required
                  name="store"
                  placeholder="Pharmacy name"
                  className="h-11 px-3 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-400 focus:shadow-[0_0_0_3px_#eff6ff] placeholder:text-gray-400"
                />
              </label>
            </div>
            <div className="field-row grid grid-cols-2 gap-3.5 mb-4">
              <label className="flex flex-col gap-2 text-gray-700 text-[12px] font-bold">
                Phone number
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="+92 3XX XXXXXXX"
                  className="h-11 px-3 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-400 focus:shadow-[0_0_0_3px_#eff6ff] placeholder:text-gray-400"
                />
              </label>
              <label className="flex flex-col gap-2 text-gray-700 text-[12px] font-bold">
                Email <span className="text-gray-400 font-medium">(optional)</span>
                <input
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="h-11 px-3 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-400 focus:shadow-[0_0_0_3px_#eff6ff] placeholder:text-gray-400"
                />
              </label>
            </div>
            <div className="field-row grid grid-cols-2 gap-3.5 mb-4">
              <label className="flex flex-col gap-2 text-gray-700 text-[12px] font-bold">
                Demo method
                <select
                  name="method"
                  defaultValue="online"
                  className="h-11 px-3 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-400 focus:shadow-[0_0_0_3px_#eff6ff]"
                >
                  <option value="online">Online demo</option>
                  <option value="in-person">
                    In-person (subject to availability)
                  </option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-gray-700 text-[12px] font-bold">
                Preferred date
                <input
                  name="date"
                  type="date"
                  className="h-11 px-3 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-400 focus:shadow-[0_0_0_3px_#eff6ff]"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 mb-4 text-gray-700 text-[12px] font-bold">
              Anything specific you want to see?{" "}
              <span className="text-gray-400 font-medium">(optional)</span>
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us about your pharmacy or questions"
                className="py-3 px-3 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-400 focus:shadow-[0_0_0_3px_#eff6ff] resize-y placeholder:text-gray-400"
              />
            </label>
            <button
              disabled={status === "loading"}
              className="button button-primary form-submit w-full border-0 mt-0.5 disabled:opacity-65 disabled:cursor-wait"
              type="submit"
            >
              {status === "loading"
                ? "Sending request…"
                : "Request a Free Demo"}
              {status !== "loading" && <Icon name="arrow" size={17} />}
            </button>
            {status === "sent" && (
              <div
                className="form-message success mt-3.5 py-2.5 px-3 rounded-[7px] text-[12px] leading-normal text-green-700 bg-green-50 border border-green-200"
                role="status"
              >
                Your request was sent. The team will contact you to confirm—this
                is not yet a booking.
              </div>
            )}
            {status === "error" && (
              <div
                className="form-message error mt-3.5 py-2.5 px-3 rounded-[7px] text-[12px] leading-normal text-red-700 bg-red-50 border border-red-200"
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
