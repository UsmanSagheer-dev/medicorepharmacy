import { Icon } from "./Icon"
import { LinkButton } from "./LinkButton"
import { plans } from "@/lib/data"

interface PricingProps {
  standalone?: boolean
}

export function Pricing({ standalone = false }: PricingProps) {
  return (
    <section
      className={`section pricing-section py-[112px_0] bg-gray-50 ${
        standalone ? "page-section bg-white" : ""
      }`}
      id="pricing"
    >
      <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)]">
        <div className="section-heading max-w-162.5 mb-14 text-center mx-auto">
          <span className="eyebrow inline-flex items-center gap-2 text-blue-600 text-[12px] font-extrabold tracking-[0.12em]">
            <i className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_0_5px_#dbeafe]" />
            FLEXIBLE PLANS
          </span>
          <h2 className="mt-3.5 mb-4 text-[clamp(32px,3.6vw,46px)] leading-[1.17] tracking-tight">
            Choose a plan that can grow with you
          </h2>
          <p className="mb-0 text-[17px] text-gray-500">
            Commercial packages are being finalized. Discuss your pharmacy needs
            with our team before making a decision.
          </p>
        </div>
        <div className="pricing-grid grid grid-cols-3 gap-4.5 items-stretch">
          {plans.map((p) => (
            <article
              className={`price-card relative flex flex-col py-8.5 px-8.5 bg-white border border-gray-200 rounded-[14px] ${
                p.featured
                  ? "border-2 border-blue-600 shadow-[0_18px_42px_rgba(37,99,235,0.1)]"
                  : ""
              }`}
              key={p.name}
            >
              {p.featured && (
                <span className="popular absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap py-1 px-2.5 text-white bg-blue-600 rounded-[20px] text-[8px] font-extrabold tracking-[0.07em]">
                  RECOMMENDED STARTING POINT
                </span>
              )}
              <h3 className="mb-2 text-[22px]">{p.name}</h3>
              <p className="min-h-17 mb-6 text-[14px] text-gray-500">
                {p.description}
              </p>
              <div className="price py-5 mb-5 border-y border-gray-200 text-[20px] font-extrabold">
                Contact for pricing
                <small className="block mt-1.5 text-gray-400 text-[10px] font-normal">
                  Final limits confirmed during consultation
                </small>
              </div>
              <ul className="list-none p-0 mb-6 flex-1">
                {p.features.map((x) => (
                  <li
                    key={x}
                    className="flex items-center gap-2 my-3 text-gray-600 text-[13px]"
                  >
                    <Icon name="check" size={15} />
                    {x}
                  </li>
                ))}
              </ul>
              <LinkButton
                href="/contact"
                variant={p.featured ? "primary" : "secondary"}
              >
                {p.cta}
              </LinkButton>
            </article>
          ))}
        </div>
        <p className="pricing-disclaimer mt-7 text-center text-[11px] text-gray-500">
          Plan names and inclusions shown here are proposed and configurable—not
          finalized commercial packages.
        </p>
      </div>
    </section>
  )
}
