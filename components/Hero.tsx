import { Icon } from "./Icon"
import { LinkButton } from "./LinkButton"
import { DashboardMockup } from "./DashboardMockup"

export function Hero() {
  return (
    <section className="hero py-[88px_0_95px] overflow-hidden bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)]">
        <div className="hero-grid grid grid-cols-[0.9fr_1.25fr] items-center gap-18">
          <div className="hero-copy">
            <span className="eyebrow inline-flex items-center gap-2 text-blue-600 text-[12px] font-extrabold tracking-[0.12em]">
              <i className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_0_5px_#dbeafe]" />
              PHARMACY MANAGEMENT SOFTWARE
            </span>
            <h1 className="mt-5.5 mb-5 max-w-162.5 text-[clamp(42px,4.4vw,64px)] leading-[1.08] tracking-tight">
              Manage Your Pharmacy.
              <br />
              <span className="text-blue-600">Simplify Your Business.</span>
            </h1>
            <p className="max-w-147.5 mb-7 text-[18px] leading-[1.7] text-gray-500">
              Manage medicine sales, purchases, inventory, batches, expiry dates,
              and pharmacy operations from one easy-to-use platform.
            </p>
            <div className="hero-actions flex gap-3 mb-5">
              <LinkButton href="#trial">
                Start Free Trial <Icon name="arrow" size={18} />
              </LinkButton>
              <LinkButton href="#demo" variant="secondary">
                Book a Free Demo
              </LinkButton>
            </div>
            <a
              className="tutorial-link inline-flex items-center gap-2 text-blue-600 text-[14px] font-bold"
              href="/tutorials"
            >
              <span className="grid place-items-center w-6 h-6 rounded-full bg-blue-50">
                <Icon name="play" size={14} />
              </span>{" "}
              Explore Video Tutorials <Icon name="arrow" size={15} />
            </a>
            <div className="hero-benefits flex flex-wrap gap-3 pt-7 mt-7 border-t border-gray-200">
              {[
                "Easy Medicine Billing",
                "Smarter Stock Management",
                "Expiry & Low-Stock Alerts",
              ].map((x) => (
                <span
                  key={x}
                  className="flex items-center gap-2 text-gray-700 text-[12px] font-semibold"
                >
                  <i className="w-5 h-5 grid place-items-center text-blue-600 bg-blue-100 rounded-full">
                    <Icon name="check" size={13} />
                  </i>
                  {x}
                </span>
              ))}
            </div>
          </div>
          <div className="hero-visual relative">
            <div className="dashboard-label flex justify-between mx-3 mb-2.5 text-[10px] text-gray-400 font-extrabold tracking-[0.06em]">
              <span className="flex items-center gap-1.5 text-gray-600">
                <i className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_0_3px_#d1fadf]" />
                LIVE OVERVIEW
              </span>
              <span>Today, 24 May</span>
            </div>
            <DashboardMockup />
            <div className="hero-note absolute -right-3.25 -bottom-7.75 flex items-center gap-2.5 py-3 px-4 bg-white border border-gray-200 rounded-[10px] shadow-[0_12px_28px_rgba(16,24,40,0.12)]">
              <span className="w-7.75 h-7.75 grid place-items-center text-green-600 bg-green-50 rounded-[7px]">
                <Icon name="shield" size={18} />
              </span>
              <div className="flex flex-col">
                <b className="text-[10px]">Built for everyday pharmacy work</b>
                <small className="mt-0.5 text-gray-400 text-[8px]">
                  Clear workflows. Less manual tracking.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
