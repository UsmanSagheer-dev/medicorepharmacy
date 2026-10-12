import { Icon } from "./Icon"
import { Button } from "./Button"
import { plans } from "@/lib/data"

interface PricingProps {
  standalone?: boolean
}

export function Pricing({ standalone = false }: PricingProps) {
  return (
    <section
      className={`section pricing-section py-24 bg-linear-to-br from-gray-50 to-white ${
        standalone ? "page-section bg-white" : ""
      }`}
      id="pricing"
    >
      <div className="container mx-auto max-w-7xl min-w-[calc(100%-40px)] px-4 sm:px-6">
        <div className="section-heading max-w-2xl mb-12 sm:mb-16 text-center mx-auto">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-green-100 px-3 sm:px-4 py-1.5 sm:py-2 text-green-700 text-[10px] sm:text-xs font-extrabold tracking-[0.12em]">
            <i className="w-2 h-2 rounded-full bg-[#54cc3a] shadow-[0_0_0_5px_#dcfce7]" />
            FLEXIBLE PLANS
          </span>
          <h2 className="mt-4 sm:mt-6 mb-3 sm:mb-4 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Choose a plan that can grow with you
          </h2>
          <p className="mb-0 text-sm sm:text-lg text-gray-600">
            Commercial packages are being finalized. Discuss your pharmacy needs
            with our team before making a decision.
          </p>
        </div>
        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {plans.map((p) => (
            <article
              className={`price-card relative flex flex-col p-5 sm:p-6 lg:p-8 bg-white border rounded-2xl transition-all duration-300 hover:shadow-xl ${
                p.featured
                  ? "border-2 border-[#54cc3a] shadow-[0_20px_40px_rgba(84,204,58,0.15)] md:scale-105"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              key={p.name}
            >
              {p.featured && (
                <span className="popular absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 whitespace-nowrap py-1 sm:py-1.5 px-2 sm:px-3 text-white bg-[#54cc3a] rounded-full text-[10px] sm:text-xs font-extrabold tracking-[0.07em]">
                  RECOMMENDED STARTING POINT
                </span>
              )}
              <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold">{p.name}</h3>
              <p className="min-h-12 sm:min-h-15 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-600">
                {p.description}
              </p>
              <div className="price py-4 sm:py-6 mb-4 sm:mb-6 border-y border-gray-200">
                <span className="text-lg sm:text-2xl font-extrabold text-gray-900">
                  Contact for pricing
                </span>
                <small className="block mt-1 sm:mt-2 text-gray-400 text-[10px] sm:text-xs font-normal">
                  Final limits confirmed during consultation
                </small>
              </div>
              <ul className="list-none p-0 mb-6 sm:mb-8 flex-1 space-y-2 sm:space-y-3">
                {p.features.map((x) => (
                  <li
                    key={x}
                    className="flex items-center gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm"
                  >
                    <span className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full bg-green-100 text-[#54cc3a]">
                      <Icon name="check" size={12} />
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
              <Button
                href="/contact"
                variant={p.featured ? "primary" : "secondary"}
                fullWidth
                size="lg"
              >
                {p.cta}
              </Button>
            </article>
          ))}
        </div>
        <p className="pricing-disclaimer mt-8 sm:mt-10 text-center text-xs sm:text-sm text-gray-500">
          Plan names and inclusions shown here are proposed and configurable—not
          finalized commercial packages.
        </p>
      </div>
    </section>
  )
}
