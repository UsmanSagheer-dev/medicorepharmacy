import { Hero } from "./Hero"
import { Benefits } from "./Benefits"
import { Features } from "./Features"
import { HowItWorks } from "./HowItWorks"
import { TrialSection } from "./TrialSection"
import { TutorialsPreview } from "./TutorialsPreview"
import { Pricing } from "./Pricing"
import { DemoSection } from "./DemoSection"
import { Support } from "./Support"
import { FAQ } from "./FAQ"

export function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Features />
      <HowItWorks />
      <TrialSection />
      <TutorialsPreview />
      <Pricing />
      <DemoSection />
      <Support />
      <FAQ />
    </>
  )
}
