import { Icon } from "./Icon"
import { LinkButton } from "./LinkButton"
import { TutorialCard } from "./TutorialCard"
import { tutorials } from "@/lib/data"

export function TutorialsPreview() {
  return (
    <section className="section tutorials-preview py-[112px_0]">
      <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)]">
        <div className="heading-row flex justify-between items-end mb-12.5">
          <div className="section-heading mb-0">
            <span className="eyebrow inline-flex items-center gap-2 text-blue-600 text-[12px] font-extrabold tracking-[0.12em]">
              <i className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_0_5px_#dbeafe]" />
              VIDEO LEARNING CENTER
            </span>
            <h2 className="mt-3.5 mb-4 text-[clamp(32px,3.6vw,46px)] leading-[1.17] tracking-tight">
              Learn at your own pace
            </h2>
            <p className="mb-0 text-[17px] text-gray-500">
              Practical, Urdu-first lessons designed around real pharmacy tasks.
              Official videos will appear as they are published.
            </p>
          </div>
          <LinkButton href="/tutorials" variant="secondary">
            Explore All Tutorials <Icon name="arrow" size={17} />
          </LinkButton>
        </div>
        <div className="tutorial-grid grid grid-cols-3 gap-5">
          {tutorials.slice(0, 3).map((t) => (
            <TutorialCard key={t.slug} tutorial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
