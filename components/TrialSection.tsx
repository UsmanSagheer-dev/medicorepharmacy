"use client";

import { FormEvent, useState } from "react";
import { Icon } from "./Icon";
import { Button } from "./Button";
import { siteConfig } from "@/lib/data";

export function TrialSection() {
  const [state, setState] = useState<"idle" | "error">("idle");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (siteConfig.appUrl) window.location.href = siteConfig.appUrl;
    else setState("error");
  };

  return (
    <section
      className="section conversion-section py-24 bg-linear-to-b from-gray-50 to-white"
      id="trial"
    >
      <div className="container mx-auto max-w-7xl min-w-[calc(100%-40px)]">
        <div className="conversion-card grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 py-16 px-8 lg:px-16 text-white bg-linear-to-b from-[#0f172a] to-[#1e293b] rounded-2xl shadow-2xl">
          <div className="conversion-copy">
            <span className="eyebrow light inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 text-green-300 text-xs font-extrabold tracking-[0.12em]">
              TRY IT WITH YOUR WORKFLOW
            </span>
            <h2 className="mt-6 mb-4 text-4xl sm:text-5xl font-bold tracking-tight">
              Experience Medicore Pharmacy Yourself
            </h2>
            <p className="max-w-xl mb-0 text-blue-200 text-lg">
              Explore the software and see how it fits your pharmacy&apos;s
              daily workflow. Trial access and duration are confirmed from the
              current business configuration.
            </p>
            <ul className="list-none p-0 mt-8 mb-0 space-y-4">
              {[
                "Create and organize medicine records",
                "Explore sales and purchase workflows",
                "Review stock, batch, and expiry views",
                "Understand reports before you subscribe",
              ].map((x) => (
                <li
                  key={x}
                  className="flex items-center gap-3 text-gray-200 text-base font-semibold"
                >
                  <span className="w-6 h-6 grid place-items-center shrink-0 text-green-300 bg-green-900/50 rounded-full">
                    <Icon name="check" size={14} />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
            <div className="trial-note flex items-center gap-3 mt-10 pt-6 text-green-300 border-t border-gray-700">
              <span className="w-10 h-10 grid place-items-center rounded-lg bg-green-900/50">
                <Icon name="shield" size={20} />
              </span>
              <span className="flex flex-col">
                <b className="text-white text-sm">
                  No unconfirmed trial period
                </b>
                <small className="mt-0.5 text-gray-400">
                  Access terms are shared clearly before activation.
                </small>
              </span>
            </div>
          </div>
          <form
            className="lead-form py-10 px-8 bg-white border border-gray-200 rounded-2xl shadow-xl"
            onSubmit={submit}
          >
            <div className="form-heading flex flex-col mb-6">
              <span className="text-2xl font-extrabold text-gray-900">
                Request {siteConfig.trialLabel}
              </span>
              <small className="mt-2 text-gray-500">
                Tell us where to send setup details.
              </small>
            </div>
            <label className="flex flex-col gap-2 mb-4 text-gray-700 text-sm font-bold">
              Full name
              <input
                name="name"
                required
                placeholder="e.g. Ahmed Khan"
                className="h-12 px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400"
              />
            </label>
            <label className="flex flex-col gap-2 mb-4 text-gray-700 text-sm font-bold">
              Pharmacy or medical store
              <input
                name="pharmacy"
                required
                placeholder="e.g. City Medical Store"
                className="h-12 px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400"
              />
            </label>
            <div className="field-row grid grid-cols-2 gap-4 mb-4">
              <label className="flex flex-col gap-2 text-gray-700 text-sm font-bold">
                Phone number
                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="+92 3XX XXXXXXX"
                  className="h-12 px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400"
                />
              </label>
              <label className="flex flex-col gap-2 text-gray-700 text-sm font-bold">
                Email address
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="name@example.com"
                  className="h-12 px-4 outline-none text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400"
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
              Request Trial Access
            </Button>
            <p className="form-caption mt-4 text-center text-xs text-gray-500">
              By continuing, you agree to be contacted about Medicore Pharmacy.
            </p>
            {state === "error" && (
              <div
                className="form-message error mt-4 py-3 px-4 rounded-lg text-sm leading-normal text-red-700 bg-red-50 border border-red-200"
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
  );
}
