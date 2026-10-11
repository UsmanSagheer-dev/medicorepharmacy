import { Icon } from "./Icon"
import { LinkButton } from "./LinkButton"

interface LegalPageProps {
  type: "privacy" | "terms"
}

export function LegalPage({ type }: LegalPageProps) {
  const privacy = type === "privacy"

  return (
    <>
      <section className="page-hero py-[95px_0_87px] text-center bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)]">
          <span className="eyebrow inline-flex items-center gap-2 text-blue-600 text-[12px] font-extrabold tracking-[0.12em]">
            <i className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_0_5px_#dbeafe]" />
            LEGAL
          </span>
          <h1 className="max-w-200 mx-auto mt-4 mb-4 text-[clamp(40px,5vw,58px)] leading-[1.12] tracking-tight">
            {privacy ? "Privacy Policy" : "Terms of Service"}
          </h1>
          <p className="max-w-175 mx-auto mb-0 text-[17px] text-gray-500">
            This page is reserved for Medicore's reviewed legal documentation.
          </p>
        </div>
      </section>
      <section className="section legal py-[112px_0] min-h-112.5">
        <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)]">
          <div className="legal-card max-w-190 py-10 px-10 bg-gray-50 border border-gray-200 rounded-[14px]">
            <h2 className="mt-0 text-[clamp(32px,3.6vw,46px)] leading-[1.17] tracking-tight">
              {privacy
                ? "Policy pending legal review"
                : "Terms pending legal review"}
            </h2>
            <p className="mb-0 text-gray-500">
              Medicore has not published finalized{" "}
              {privacy ? "privacy" : "service"} terms in this project. This
              placeholder avoids presenting invented legal commitments.
            </p>
            <p className="mb-0 text-gray-500">
              Before launch, replace this content with approved documentation
              covering account data, pharmacy records, retention, security,
              service availability, subscriptions, and user rights as applicable.
            </p>
            <a
              className="inline-flex items-center gap-2 text-blue-600 text-[13px] font-bold"
              href="/contact"
            >
              Contact Medicore <Icon name="arrow" size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
