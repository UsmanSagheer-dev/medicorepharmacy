import { Icon } from "./Icon"
import { Button } from "./Button"
import { TutorialCard } from "./TutorialCard"
import { tutorials } from "@/lib/data"

export function TutorialsPreview() {
  return (
    <section className="section tutorials-preview py-24 bg-white">
      <div className="container mx-auto max-w-7xl min-w-[calc(100%-40px)]">
        <div className="heading-row flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="section-heading mb-0">
            <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700 text-xs font-extrabold tracking-[0.12em]">
              <i className="w-2 h-2 rounded-full bg-[#54cc3a] shadow-[0_0_0_5px_#dcfce7]" />
              VIDEO LEARNING CENTER
            </span>
            <h2 className="mt-6 mb-4 text-4xl sm:text-5xl font-bold tracking-tight">
              Learn at your own pace
            </h2>
            <p className="mb-0 text-lg text-gray-600">
              Practical, Urdu-first lessons designed around real pharmacy tasks.
              Official videos will appear as they are published.
            </p>
          </div>
          <Button href="/tutorials" variant="secondary" icon="arrow" iconSize={17}>
            Explore All Tutorials
          </Button>
        </div>
        <div className="tutorial-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {tutorials.slice(0, 3).map((t) => (
            <TutorialCard key={t.slug} tutorial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
