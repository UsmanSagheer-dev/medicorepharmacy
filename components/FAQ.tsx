import { faqs } from "@/lib/data"

interface FAQProps {
  standalone?: boolean
}

export function FAQ({ standalone = false }: FAQProps) {
  return (
    <section
      className={`section faq-section py-24 bg-gray-50 ${
        standalone ? "page-section bg-white" : ""
      }`}
      id="faq"
    >
      <div className="container mx-auto max-w-7xl min-w-[calc(100%-40px)]">
        <div className="faq-grid grid grid-cols-1 lg:grid-cols-[0.65fr_1fr] gap-12 lg:gap-20 items-start">
          <div className="section-heading mb-0">
            <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700 text-xs font-extrabold tracking-[0.12em]">
              <i className="w-2 h-2 rounded-full bg-[#54cc3a] shadow-[0_0_0_5px_#dcfce7]" />
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-6 mb-4 text-4xl sm:text-5xl font-bold tracking-tight">
              Clear answers before you get started
            </h2>
            <p className="mb-0 text-lg text-gray-600">
              Learn what is available today and what will be confirmed with your
              product configuration.
            </p>
          </div>
          <div className="accordion">
            {faqs.map((x, i) => (
              <details
                key={x.q}
                className="border-b border-gray-200"
                open={i === 0}
              >
                <summary className="relative list-none py-6 pr-10 cursor-pointer text-base font-extrabold hover:text-[#54cc3a] transition-colors">
                  {x.q}
                  <span className="faq-plus absolute right-1.5 text-[#54cc3a] text-2xl font-normal transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="mb-6 -mt-2 pr-9 text-sm text-gray-600 leading-relaxed">
                  {x.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
