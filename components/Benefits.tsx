import { Icon } from "./Icon"
import { benefits } from "@/lib/data"

export function Benefits() {
  return (
    <section className="section benefits-section py-[112px_0] bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)]">
        <div className="section-heading max-w-162.5 mb-14 text-center mx-auto">
          <span className="eyebrow inline-flex items-center gap-2 text-blue-600 text-[12px] font-extrabold tracking-[0.12em]">
            <i className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_0_5px_#dbeafe]" />
            WHY MEDICORE
          </span>
          <h2 className="mt-3.5 mb-4 text-[clamp(32px,3.6vw,46px)] leading-[1.17] tracking-tight">
            Everyday pharmacy work, made clearer
          </h2>
          <p className="mb-0 text-[17px] text-gray-500">
            Spend less time chasing records and more time running your medical
            store with confidence.
          </p>
        </div>
        <div className="benefit-grid grid grid-cols-4 gap-4">
          {benefits.map((x, i) => (
            <article
              className="benefit-card relative py-7 px-6 bg-white border border-gray-200 rounded-[14px] transition-all duration-250 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_35px_rgba(16,24,40,0.07)]"
              key={x.title}
            >
              <span className="card-number absolute top-6 right-6 text-gray-300 text-[11px] font-extrabold tracking-[0.08em]">
                0{i + 1}
              </span>
              <span className="feature-icon w-10.75 h-10.75 grid place-items-center text-blue-600 bg-blue-50 border border-blue-100 rounded-[10px]">
                <Icon name={x.icon as any} />
              </span>
              <h3 className="mt-5.5 mb-2.5 text-[17px]">{x.title}</h3>
              <p className="min-h-18 mb-4.5 text-[14px] text-gray-500">{x.text}</p>
              <a
                className="inline-flex items-center gap-2 text-blue-600 text-[13px] font-bold"
                href="/features"
              >
                Learn more <Icon name="arrow" size={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
