import { Icon } from "./Icon";
import { DemoSection } from "./DemoSection";

export function FeaturesPage() {
  const full = [
    "Medicine and packaging records",
    "Fast medicine search",
    "Barcode workflow readiness",
    "Sales and receipt workflow",
    "Purchase invoice management",
    "Supplier records",
    "Multiple medicine batches",
    "Stock adjustment structure",
    "Expiry date tracking",
    "Low-stock notifications",
    "Customer records",
    "Credit sales configuration",
    "Sales returns structure",
    "Business reports",
    "Staff and role configuration",
  ];

  return (
    <>
      <section className="page-hero py-[95px_0_87px] text-center bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)]">
          <span className="eyebrow inline-flex items-center gap-2 text-blue-600 text-[12px] font-extrabold tracking-[0.12em]">
            <i className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_0_5px_#dbeafe]" />
            PRODUCT CAPABILITIES
          </span>
          <h1 className="max-w-200 mx-auto mt-4 mb-4 text-[clamp(40px,5vw,58px)] leading-[1.12] tracking-tight">
            Practical tools for the work behind every sale
          </h1>
          <p className="max-w-175 mx-auto mb-0 text-[17px] text-gray-500">
            Medicore Pharmacy is structured around the core workflows of modern
            medical stores, with availability confirmed for your configuration.
          </p>
        </div>
      </section>
      <section className="section py-[112px_0]">
        <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)]">
          <div className="capability-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {full.map((x, i) => (
              <article
                key={x}
                className="py-6.5 px-6 border border-gray-200 rounded-xl"
              >
                <span className="text-blue-600">
                  <Icon
                    name={
                      (
                        [
                          "medicine",
                          "search",
                          "barcode",
                          "receipt",
                          "boxes",
                          "users",
                          "calendar",
                          "activity",
                          "alert",
                          "alert",
                          "users",
                          "receipt",
                          "receipt",
                          "chart",
                          "shield",
                        ] as const
                      )[i]
                    }
                  />
                </span>
                <h3 className="mt-4 mb-2 text-[15px]">{x}</h3>
                <p className="mb-0 text-[13px] text-gray-500">
                  {i === 2 || i === 11 || i === 12 || i === 14
                    ? "This capability depends on the selected configuration and should be confirmed during your demo."
                    : "Designed to keep related pharmacy information clear, searchable, and easier to act on."}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <DemoSection />
    </>
  );
}
