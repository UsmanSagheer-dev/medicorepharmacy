import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Pricing } from "@/components/Pricing"
import { DemoSection } from "@/components/DemoSection"

export default function PricingPage() {
  return (
    <>
      <Header />
      <section className="page-hero py-[95px_0_87px] text-center bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)]">
          <span className="eyebrow inline-flex items-center gap-2 text-blue-600 text-[12px] font-extrabold tracking-[0.12em]">
            <i className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_0_5px_#dbeafe]" />
            PLANS & PRICING
          </span>
          <h1 className="max-w-200 mx-auto mt-4 mb-4 text-[clamp(40px,5vw,58px)] leading-[1.12] tracking-tight">
            A plan for every stage of growth
          </h1>
          <p className="max-w-175 mx-auto mb-0 text-[17px] text-gray-500">
            Explore the proposed plan structure while final commercial
            packages are confirmed.
          </p>
        </div>
      </section>
      <Pricing standalone />
      <DemoSection />
      <Footer />
    </>
  )
}
