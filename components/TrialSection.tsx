"use client"

import { FormEvent, useState } from "react"
import { Icon } from "./Icon"
import { siteConfig } from "@/lib/data"

export function TrialSection() {
  const [state, setState] = useState<"idle" | "error">("idle")

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (siteConfig.appUrl) window.location.href = siteConfig.appUrl
    else setState("error")
  }

  return (
    <section className="section conversion-section py-[112px_0] bg-gray-50" id="trial">
      <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)]">
        <div className="conversion-card grid grid-cols-[1fr_0.84fr] gap-21.25 py-16 px-16 text-white bg-[#12213a] rounded-[18px] shadow-[0_25px_60px_rgba(16,24,40,0.13)]">
          <div className="conversion-copy">
            <span className="eyebrow light inline-flex items-center gap-2 text-blue-300 text-[12px] font-extrabold tracking-[0.12em]">
              TRY IT WITH YOUR WORKFLOW
            </span>
            <h2 className="mt-4 mb-4 text-[42px] leading-[1.16] tracking-tight">
              Experience Medicore Pharmacy Yourself
            </h2>
            <p className="max-w-140 mb-0 text-blue-200 text-[16px]">
              Explore the software and see how it fits your pharmacy's daily
              workflow. Trial access and duration are confirmed from the current
              business configuration.
            </p>
            <ul className="list-none p-0 mt-6.5 mb-0">
              {[
                "Create and organize medicine records",
                "Explore sales and purchase workflows",
                "Review stock, batch, and expiry views",
                "Understand reports before you subscribe",
              ].map((x) => (
                <li
                  key={x}
                  className="flex items-center gap-2.5 my-3 text-gray-200 text-[14px] font-semibold"
                >
                  <span className="w-5.25 h-5.25 grid place-items-center shrink-0 text-blue-300 bg-blue-900 rounded-full">
                    <Icon name="check" size={14} />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
            <div className="trial-note flex items-center gap-3 mt-9 pt-6 text-blue-300 border-t border-gray-700">
              <Icon name="shield" size={19} />
              <span className="flex flex-col">
                <b className="text-white text-[12px]">No unconfirmed trial period</b>
                <small className="mt-0.5 text-gray-400">
                  Access terms are shared clearly before activation.
                </small>
              </span>
            </div>
          </div>
          <form className="lead-form py-8 px-8 bg-white border border-gray-200 rounded-[14px] shadow-[0_15px_40px_rgba(16,24,40,0.08)]" onSubmit={submit}>
            <div className="form-heading flex flex-col mb-6">
              <span className="text-[20px] font-extrabold text-gray-900">Request {siteConfig.trialLabel}</span>
              <small className="mt-1 text-gray-500">
                Tell us where to send setup details.
              </small>
            </div>
            <label className="flex flex-col gap-2 mb-4 text-gray-700 text-[12px] font-bold">
              Full name
              <input
                name="name"
                required
                placeholder="e.g. Ahmed Khan"
                className="h-11 px-3 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-400 focus:shadow-[0_0_0_3px_#eff6ff] placeholder:text-gray-400"
              />
            </label>
            <label className="flex flex-col gap-2 mb-4 text-gray-700 text-[12px] font-bold">
              Pharmacy or medical store
              <input
                name="pharmacy"
                required
                placeholder="e.g. City Medical Store"
                className="h-11 px-3 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-400 focus:shadow-[0_0_0_3px_#eff6ff] placeholder:text-gray-400"
              />
            </label>
            <div className="field-row grid grid-cols-2 gap-3.5 mb-4">
              <label className="flex flex-col gap-2 text-gray-700 text-[12px] font-bold">
                Phone number
                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="+92 3XX XXXXXXX"
                  className="h-11 px-3 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-400 focus:shadow-[0_0_0_3px_#eff6ff] placeholder:text-gray-400"
                />
              </label>
              <label className="flex flex-col gap-2 text-gray-700 text-[12px] font-bold">
                Email address
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="name@example.com"
                  className="h-11 px-3 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-400 focus:shadow-[0_0_0_3px_#eff6ff] placeholder:text-gray-400"
                />
              </label>
            </div>
            <button
              className="button button-primary form-submit w-full border-0 mt-0.5"
              type="submit"
            >
              Request Trial Access <Icon name="arrow" size={17} />
            </button>
            <p className="form-caption mt-3 text-center text-[10px] text-gray-500">
              By continuing, you agree to be contacted about Medicore Pharmacy.
            </p>
            {state === "error" && (
              <div
                className="form-message error mt-3.5 py-2.5 px-3 rounded-[7px] text-[12px] leading-normal text-red-700 bg-red-50 border border-red-200"
                role="alert"
              >
                Trial registration is not connected yet. Configure VITE_APP_URL
                to enable this action.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
