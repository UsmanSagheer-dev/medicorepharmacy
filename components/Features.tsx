import { Icon } from "./Icon"
import { featureGroups } from "@/lib/data"
import { IMAGES } from "@/public/assets/images"

const previewImages: Record<string, string> = {
  billing: IMAGES.saleScreen.src,
  inventory: IMAGES.medicineInventory.src,
  alerts: IMAGES.dashboardMockup.src,
}

export function Features() {
  return (
    <section className="section features-section py-24 bg-white" id="features">
      <div className="container mx-auto max-w-7xl min-w-[calc(100%-40px)]">
        <div className="section-heading max-w-2xl mb-16">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700 text-xs font-extrabold tracking-[0.12em]">
            <i className="w-2 h-2 rounded-full bg-[#54cc3a] shadow-[0_0_0_5px_#dcfce7]" />
            BUILT FOR THE COUNTER AND BEYOND
          </span>
          <h2 className="mt-6 mb-4 text-4xl sm:text-5xl font-bold tracking-tight">
            One connected view of your pharmacy
          </h2>
          <p className="mb-0 text-lg text-gray-600">
            Practical tools that support the work your team does every day—from
            medicine setup to the final report.
          </p>
        </div>
        {featureGroups.map((f, i) => (
          <div
            className={`feature-row grid gap-12 lg:gap-16 items-center mb-20 mt-20 ${
              i % 2 ? "lg:grid-cols-[1.2fr_0.8fr]" : "lg:grid-cols-[0.8fr_1.2fr]"
            }`}
            key={f.title}
          >
            <div
              className={`feature-copy ${
                i % 2 ? "lg:order-2" : ""
              }`}
            >
              <span className="feature-kicker inline-flex items-center gap-2 py-2 px-3 text-[#54cc3a] bg-green-50 rounded-lg text-sm font-bold">
                <Icon name={f.icon as "receipt" | "boxes" | "alert" | "chart" | "users" | "medicine" | "activity"} size={18} /> {f.eyebrow}
              </span>
              <h3 className="mt-6 mb-4 text-3xl sm:text-4xl font-bold tracking-tight">
                {f.title}
              </h3>
              <p className="mb-6 text-base text-gray-600">{f.description}</p>
              <ul className="list-none p-0 mb-8 space-y-3">
                {f.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 text-gray-700 text-sm font-semibold"
                  >
                    <span className="w-6 h-6 grid place-items-center shrink-0 text-[#54cc3a] bg-green-100 rounded-full">
                      <Icon name="check" size={14} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <a
                className="inline-flex items-center gap-2 text-[#54cc3a] text-sm font-bold hover:text-[#4ab932] transition-colors"
                href="/features"
              >
                Explore this workflow <Icon name="arrow" size={16} />
              </a>
            </div>
            <div
              className={`preview-wrap relative p-4 sm:p-6 lg:p-8 ${
                i % 2 ? "lg:order-1" : ""
              }`}
            >
              <div className="absolute inset-2 sm:inset-3 lg:inset-4 border border-dashed border-gray-300 rounded-xl pointer-events-none after:content-['']" />
              <img
                src={previewImages[f.preview] }
                alt={f.title}
                className="w-full h-auto rounded-lg shadow-sm object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
