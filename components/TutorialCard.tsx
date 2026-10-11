import { Icon } from "./Icon"
import type { Tutorial } from "@/lib/data"

interface TutorialCardProps {
  tutorial: Tutorial
}

export function TutorialCard({ tutorial }: TutorialCardProps) {
  return (
    <a
      className="tutorial-card overflow-hidden bg-white border border-gray-200 rounded-[13px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(16,24,40,0.09)]"
      href={`/tutorials/${tutorial.slug}`}
    >
      <div className="tutorial-thumb relative h-49 grid place-items-center overflow-hidden bg-blue-50">
        <div className="thumb-ui absolute inset-[29px_25px_-15px] py-4.5 px-4.5 bg-white border border-gray-200 rounded-[9px] -rotate-2 shadow-[0_14px_25px_rgba(16,24,40,0.12)]">
          <span className="block w-[45%] h-2.25 mb-3 bg-blue-100 rounded-[3px]" />
          <span className="block w-[87%] h-12.5 bg-gray-100" />
          <span className="block w-[72%] h-8 mt-3 bg-blue-50" />
        </div>
        <span className="play-button relative w-13 h-13 grid place-items-center text-white bg-blue-600 border-[5px] border-white/80 rounded-full shadow-[0_8px_20px_rgba(37,99,235,0.3)]">
          <Icon name="play" size={19} />
        </span>
        <small className="absolute right-2.5 bottom-2.5 py-1 px-1.5 text-white bg-gray-900/75 rounded-sm text-[9px]">
          {tutorial.duration}
        </small>
      </div>
      <div className="tutorial-body py-5.5 px-5.5">
        <span className="tutorial-category text-blue-600 text-[10px] font-extrabold tracking-[0.08em] uppercase">
          {tutorial.category}
        </span>
        <h3 className="mt-2 mb-2 text-[17px]">{tutorial.title}</h3>
        <p className="min-h-15.5 mb-4 text-[13px] leading-[1.55] text-gray-500">
          {tutorial.description}
        </p>
        <div className="flex gap-2 text-gray-400 text-[11px]">
          <span>{tutorial.level}</span>
          <span>•</span>
          <span>{tutorial.language}</span>
        </div>
      </div>
    </a>
  )
}
