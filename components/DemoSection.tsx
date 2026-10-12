"use client"

import { Icon } from "./Icon"
import { ContactForm } from "./ContactForm"

export function DemoSection() {
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
              <p className="mb-3 text-lg text-gray-600">
                Tell us about your medical store and the workflow you want to
                improve. A team member can arrange a suitable walkthrough once
                your preferred contact channel is configured.
              </p>
              <a
                href="https://wa.me/923049469130"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#54cc3a] font-semibold hover:underline"
              >
                <Icon name="support" />
                Contact us on WhatsApp: 0304 9469130
              </a>
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
          <ContactForm formType="demo" />
        </div>
      </div>
    </section>
  )
}
