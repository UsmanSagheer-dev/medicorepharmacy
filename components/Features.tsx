import { Icon } from "./Icon"
import { LinkButton } from "./LinkButton"
import { MiniPreview } from "./MiniPreview"
import { featureGroups } from "@/lib/data"

export function Features() {
  return (
    <section className="section features-section py-[112px_0]" id="features">
      <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)]">
        <div className="section-heading max-w-185 mb-14">
          <span className="eyebrow inline-flex items-center gap-2 text-blue-600 text-[12px] font-extrabold tracking-[0.12em]">
            <i className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_0_5px_#dbeafe]" />
            BUILT FOR THE COUNTER AND BEYOND
          </span>
          <h2 className="mt-3.5 mb-4 text-[clamp(32px,3.6vw,46px)] leading-[1.17] tracking-tight">
            One connected view of your pharmacy
          </h2>
          <p className="mb-0 text-[17px] text-gray-500">
            Practical tools that support the work your team does every day—from
            medicine setup to the final report.
          </p>
        </div>
        {featureGroups.map((f, i) => (
          <div
            className={`feature-row grid gap-23.75 items-center mb-23.75 mt-23.75 ${
              i % 2 ? "grid-cols-[1.22fr_0.78fr]" : "grid-cols-[0.78fr_1.22fr]"
            }`}
            key={f.title}
          >
            <div
              className={`feature-copy ${
                i % 2 ? "order-2" : ""
              }`}
            >
              <span className="feature-kicker inline-flex items-center gap-2 py-1.5 px-2.5 text-blue-600 bg-blue-50 rounded-md text-[12px] font-bold">
                <Icon name={f.icon as any} size={17} /> {f.eyebrow}
              </span>
              <h3 className="mt-5 mb-3.5 text-[34px] leading-[1.2] tracking-tight">
                {f.title}
              </h3>
              <p className="mb-6 text-[16px] text-gray-500">{f.description}</p>
              <ul className="list-none p-0 mb-6.5">
                {f.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2.5 my-3 text-gray-700 text-[14px] font-semibold"
                  >
                    <span className="w-5.25 h-5.25 grid place-items-center shrink-0 text-blue-600 bg-blue-100 rounded-full">
                      <Icon name="check" size={14} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <a
                className="inline-flex items-center gap-2 text-blue-600 text-[13px] font-bold"
                href="/features"
              >
                Explore this workflow <Icon name="arrow" size={16} />
              </a>
            </div>
            <div
              className={`preview-wrap relative py-7 px-7 bg-gray-100 border border-gray-200 rounded-2xl ${
                i % 2 ? "order-1" : ""
              }`}
            >
              <div className="absolute inset-3.5 border border-dashed border-gray-300 rounded-xl pointer-events-none after:content-['']" />
              <MiniPreview type={f.preview} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
