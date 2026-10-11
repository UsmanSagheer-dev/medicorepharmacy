import { Icon } from "./Icon"

export function HowItWorks() {
  const steps = [
    [
      "Create Your Pharmacy Account",
      "Register your pharmacy and configure the required details.",
    ],
    [
      "Set Up Your Medicines",
      "Add medicines, suppliers, opening stock, and batches as applicable.",
    ],
    [
      "Start Managing Your Pharmacy",
      "Record sales, manage purchases, monitor stock, and review reports.",
    ],
  ]

  return (
    <section className="section steps-section py-[112px_0] bg-gray-900" id="how-it-works">
      <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)]">
        <div className="section-heading max-w-162.5 mb-14 text-center mx-auto">
          <span className="inline-flex items-center gap-2 text-blue-600 text-[12px] font-extrabold tracking-[0.12em]">
            <i className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_0_5px_#dbeafe]" />
            QUICK TO GET STARTED
          </span>
          <h2 className="mt-3.5 mb-4 text-[clamp(32px,3.6vw,46px)] leading-[1.17] tracking-tight text-white">
            From setup to your first sale
          </h2>
          <p className="mb-0 text-[17px] text-gray-400">
            A simple path to bring your pharmacy operations into one organized
            platform.
          </p>
        </div>
        <div className="steps grid grid-cols-3 gap-15">
          {steps.map((s, i) => (
            <article key={s[0]} className="relative text-center">
              <span className="block mb-4.5 text-gray-600 text-[12px] font-extrabold tracking-widest">
                0{i + 1}
              </span>
              <div className="step-icon w-15.5 h-15.5 grid place-items-center mx-auto mb-5.5 text-blue-300 bg-blue-950 border border-blue-900 rounded-[14px]">
                <Icon
                  name={(["users", "medicine", "activity"] as const)[i]}
                />
              </div>
              <h3 className="mb-2.5 text-[18px] text-white">{s[0]}</h3>
              <p className="max-w-67.5 mx-auto mb-0 text-gray-400 text-[14px]">
                {s[1]}
              </p>
              {i < 2 && (
                <i className="step-line absolute w-[calc(100%-76px)] h-px top-17.25 left-[calc(50%+68px)] bg-gray-700">
                  <Icon
                    name="chevron"
                    size={18}
                    className="absolute right-0 -top-2.25 pl-1 text-gray-500 bg-gray-900"
                  />
                </i>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
