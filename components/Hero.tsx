import { Icon } from "./Icon"
import { Button } from "./Button"
import Image from "next/image"
import dashboardMockup from "../public/assets/images/pharmacydashboard.png"

const benefits = [
  "Easy Medicine Billing",
  "Smarter Stock Management",
  "Expiry & Low-Stock Alerts",
]

export function Hero() {
  return (
    <section className="overflow-hidden bg-linear-to-b from-blue-50 via-blue-50/40 to-white py-20 lg:py-32">
      <div className="mx-auto max-w-full px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Left: copy */}
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 font-poppins  rounded-full bg-green-100 px-4 py-2 text-xs font-extrabold tracking-widest text-green-700">
              <i className="h-2 w-2 rounded-full bg-[#54cc3a] ring-4 ring-green-200" />
              PHARMACY MANAGEMENT SOFTWARE
            </span>

            <h1 className="mt-8 mb-6 max-w-4xl font-poppins  text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Manage Your Pharmacy.
              <br />
              <span className="bg-linear-to-br from-[#54cc3a] to-[#4ab932] bg-clip-text text-transparent">
                Simplify Your Business.
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">
              Manage medicine sales, purchases, inventory, batches, expiry dates,
              and pharmacy operations from one easy-to-use platform.
            </p>

            <div className="mb-6 flex flex-wrap gap-4">
              <Button href="#trial" icon="arrow" size="lg">
                Start Free Trial
              </Button>
              <Button href="#demo" variant="secondary" size="lg">
                Book a Free Demo
              </Button>
            </div>

            <a
              href="/tutorials"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#54cc3a] transition hover:text-[#4ab932]"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-green-100">
                <Icon name="play" size={14} />
              </span>
              Explore Video Tutorials <Icon name="arrow" size={15} />
            </a>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4 border-t border-gray-200 pt-8">
              {benefits.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2.5 text-sm font-semibold text-gray-700"
                >
                  <i className="grid h-6 w-6 place-items-center rounded-full bg-green-100 text-[#54cc3a]">
                    <Icon name="check" size={14} />
                  </i>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: dashboard */}
          <div className="border border-gray-700 rounded-2xl">
            <Image
              src={dashboardMockup}
              alt="Dashboard Mockup"
              width={1200}
              height={800}
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}