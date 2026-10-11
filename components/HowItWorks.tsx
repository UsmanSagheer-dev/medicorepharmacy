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
    <section className="section steps-section py-24 bg-linear-to-b from-gray-900 to-gray-800" id="how-it-works">
      <div className="container mx-auto max-w-7xl min-w-[calc(100%-40px)]">
        <div className="section-heading max-w-2xl mb-16 text-center mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 text-green-400 text-xs font-extrabold tracking-[0.12em]">
            <i className="w-2 h-2 rounded-full bg-[#54cc3a] shadow-[0_0_0_5px_#22c55e]" />
            QUICK TO GET STARTED
          </span>
          <h2 className="mt-6 mb-4 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            From setup to your first sale
          </h2>
          <p className="mb-0 text-lg text-gray-400">
            A simple path to bring your pharmacy operations into one organized
            platform.
          </p>
        </div>
        <div className="steps grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((s, i) => (
            <article key={s[0]} className="relative text-center">
              <span className="block mb-6 text-gray-500 text-sm font-extrabold tracking-widest">
                0{i + 1}
              </span>
              <div className="step-icon w-20 h-20 grid place-items-center mx-auto mb-6 text-green-300 bg-green-950/50 border-2 border-green-800 rounded-2xl hover:border-[#54cc3a] transition-colors">
                <Icon
                  name={(["users", "medicine", "activity"] as const)[i]}
                  size={32}
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{s[0]}</h3>
              <p className="max-w-xs mx-auto mb-0 text-gray-400 text-base">
                {s[1]}
              </p>
              {i < 2 && (
                <i className="step-line hidden md:block absolute w-[calc(100%-80px)] h-px top-10 left-[calc(50%+60px)] bg-gray-700">
                  <Icon
                    name="chevron"
                    size={20}
                    className="absolute right-0 -top-2.5 pl-1 text-gray-500 bg-gray-900"
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
