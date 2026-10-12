"use client";

import { Icon } from "./Icon";
import { ContactForm } from "./ContactForm";

export function TrialSection() {
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
          <ContactForm formType="trial" />
        </div>
      </div>
    </section>
  );
}
