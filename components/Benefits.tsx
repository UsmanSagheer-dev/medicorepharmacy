import { Icon } from "./Icon"
import { benefits } from "@/lib/data"

export function Benefits() {
  return (
    <section className="section benefits-section py-24 bg-linear-to-b from-gray-50 to-white border-y border-gray-100">
      <div className="container mx-auto max-w-7xl min-w-[calc(100%-40px)]">
        <div className="section-heading max-w-2xl mb-16 text-center mx-auto">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700 text-xs font-extrabold tracking-[0.12em]">
            <i className="w-2 h-2 rounded-full bg-[#54cc3a] shadow-[0_0_0_5px_#dcfce7]" />
            WHY MEDICORE
          </span>
          <h2 className="mt-6 mb-4 text-4xl sm:text-5xl font-bold tracking-tight">
            Everyday pharmacy work, made clearer
          </h2>
          <p className="mb-0 text-lg text-gray-600">
            Spend less time chasing records and more time running your medical
            store with confidence.
          </p>
        </div>
        <div className="benefit-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((x, i) => (
            <article
              className="benefit-card relative p-6 bg-white border border-gray-200 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              key={x.title}
            >
              <span className="card-number absolute top-6 right-6 text-gray-300 text-xs font-extrabold tracking-[0.08em]">
                0{i + 1}
              </span>
              <span className="feature-icon w-12 h-12 grid place-items-center text-[#54cc3a] bg-green-50 border border-green-100 rounded-xl">
                <Icon name={x.icon as "receipt" | "boxes" | "alert" | "chart"} />
              </span>
              <h3 className="mt-6 mb-3 text-lg font-bold">{x.title}</h3>
              <p className="min-h-18 mb-4 text-sm text-gray-600">{x.text}</p>
              <a
                className="inline-flex items-center gap-2 text-[#54cc3a] text-sm font-bold hover:text-[#4ab932] transition-colors"
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
