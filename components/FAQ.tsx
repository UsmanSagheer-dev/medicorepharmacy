import { faqs } from "@/lib/data"

interface FAQProps {
  standalone?: boolean
}

export function FAQ({ standalone = false }: FAQProps) {
  return (
    <section
      className={`section faq-section py-[112px_0] bg-gray-50 ${
        standalone ? "page-section bg-white" : ""
      }`}
      id="faq"
    >
      <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)]">
        <div className="faq-grid grid grid-cols-[0.65fr_1fr] gap-27.5 items-start">
          <div className="section-heading mb-0">
            <span className="eyebrow inline-flex items-center gap-2 text-blue-600 text-[12px] font-extrabold tracking-[0.12em]">
              <i className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_0_5px_#dbeafe]" />
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-3.5 mb-4 text-[clamp(32px,3.6vw,46px)] leading-[1.17] tracking-tight">
              Clear answers before you get started
            </h2>
            <p className="mb-0 text-[17px] text-gray-500">
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
                <summary className="relative list-none py-5.5 pr-10 cursor-pointer text-[15px] font-extrabold">
                  {x.q}
                  <span className="faq-plus absolute right-1.5 text-blue-600 text-[21px] font-normal transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="mb-5.5 -mt-1.25 pr-9 text-[14px] text-gray-500">
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
