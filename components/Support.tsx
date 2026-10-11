import { Icon } from "./Icon"
import { LinkButton } from "./LinkButton"

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
    <section className="section support-section py-[112px_0] pt-0">
      <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)]">
        <div className="section-heading max-w-162.5 mb-14 text-center mx-auto">
          <span className="eyebrow inline-flex items-center gap-2 text-blue-600 text-[12px] font-extrabold tracking-[0.12em]">
            <i className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_0_5px_#dbeafe]" />
            HELP WHEN YOU NEED IT
          </span>
          <h2 className="mt-3.5 mb-4 text-[clamp(32px,3.6vw,46px)] leading-[1.17] tracking-tight">
            Support that meets you where you are
          </h2>
          <p className="mb-0 text-[17px] text-gray-500">
            Choose the learning or contact channel that works best for your
            question.
          </p>
        </div>
        <div className="support-grid grid grid-cols-4 border border-gray-200 rounded-[14px] overflow-hidden">
          {items.map((x) => (
            <article
              key={x[1]}
              className="py-7 px-7 border-r border-gray-200 last:border-0"
            >
              <span className="text-blue-600">
                <Icon name={x[0] as any} />
              </span>
              <h3 className="mt-4 mb-2 text-[15px]">{x[1]}</h3>
              <p className="mb-0 text-[13px] text-gray-500">{x[2]}</p>
            </article>
          ))}
        </div>
        <div className="center-action flex justify-center mt-8">
          <LinkButton href="/contact">
            Get Help with Medicore <Icon name="arrow" size={17} />
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
