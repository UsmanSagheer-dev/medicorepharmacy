import { Icon } from "./Icon"
import { Button } from "./Button"

export function Support() {
  const items = [
    [
      "support",
      "WhatsApp",
      "Quick conversation through the configured business contact.",
    ],
    [
      "play",
      "Video tutorials",
      "Learn pharmacy workflows with Urdu-first step-by-step lessons.",
    ],
    [
      "email",
      "Email support",
      "Share a detailed question once the support email is configured.",
    ],
    [
      "users",
      "Guided onboarding",
      "Discuss setup assistance and availability with the Medicore team.",
    ],
  ]

  return (
    <section className="section support-section py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl min-w-[calc(100%-40px)]">
        <div className="section-heading max-w-2xl mb-16 text-center mx-auto">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700 text-xs font-extrabold tracking-[0.12em]">
            <i className="w-2 h-2 rounded-full bg-[#54cc3a] shadow-[0_0_0_5px_#dcfce7]" />
            HELP WHEN YOU NEED IT
          </span>
          <h2 className="mt-6 mb-4 text-4xl sm:text-5xl font-bold tracking-tight">
            Support that meets you where you are
          </h2>
          <p className="mb-0 text-lg text-gray-600">
            Choose the learning or contact channel that works best for your
            question.
          </p>
        </div>
        <div className="support-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((x) => (
            <article
              key={x[1]}
              className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
            >
              <span className="text-[#54cc3a]">
                <Icon name={x[0] as "support" | "play" | "email" | "users"} />
              </span>
              <h3 className="mt-4 mb-2 text-lg font-bold">{x[1]}</h3>
              <p className="mb-0 text-sm text-gray-600">{x[2]}</p>
            </article>
          ))}
        </div>
        <div className="center-action flex justify-center mt-10">
          <Button href="/contact" icon="arrow" iconSize={17} size="lg">
            Get Help with Medicore
          </Button>
        </div>
      </div>
    </section>
  )
}
