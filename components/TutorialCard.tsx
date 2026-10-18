import { Icon } from "./Icon"
import type { Tutorial } from "@/lib/data"

interface TutorialCardProps {
  tutorial: Tutorial
}

export function TutorialCard({ tutorial }: TutorialCardProps) {
  const getYouTubeThumbnail = (url: string) => {
    if (!url) return null
    const videoId = url.includes('youtu.be/')
      ? url.split('youtu.be/')[1]?.split('?')[0]
      : url.includes('youtube.com/watch?v=')
      ? url.split('v=')[1]?.split('&')[0]
      : null
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null
  }

  const thumbnail = (tutorial as any).videoUrl ? getYouTubeThumbnail((tutorial as any).videoUrl) : null

  return (
    <a
      className="tutorial-card overflow-hidden bg-white border border-gray-200 rounded-[13px] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(16,24,40,0.09)]"
      href={`/tutorials/${tutorial.slug}`}
    >
      <div className="tutorial-thumb relative h-40 sm:h-49 grid place-items-center overflow-hidden bg-blue-50">
        {thumbnail ? (
          <>
            <img
              src={thumbnail}
              alt={tutorial.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="play-button relative w-10 h-10 sm:w-13 sm:h-13 grid place-items-center text-white bg-blue-600 border-[5px] border-white/80 rounded-full shadow-[0_8px_20px_rgba(37,99,235,0.3)] z-10">
              <Icon name="play" size={16} />
            </span>
          </>
        ) : (
          <>
            <div className="thumb-ui absolute inset-[20px_20px_-15px] sm:inset-[29px_25px_-15px] py-3 sm:py-4.5 px-3 sm:px-4.5 bg-white border border-gray-200 rounded-[9px] -rotate-2 shadow-[0_14px_25px_rgba(16,24,40,0.12)]">
              <span className="block w-[45%] h-2 sm:h-2.25 mb-2 sm:mb-3 bg-blue-100 rounded-[3px]" />
              <span className="block w-[87%] h-10 sm:h-12.5 bg-gray-100" />
              <span className="block w-[72%] h-6 sm:h-8 mt-2 sm:mt-3 bg-blue-50" />
            </div>
            <span className="play-button relative w-10 h-10 sm:w-13 sm:h-13 grid place-items-center text-white bg-blue-600 border-[5px] border-white/80 rounded-full shadow-[0_8px_20px_rgba(37,99,235,0.3)]">
              <Icon name="play" size={16} />
            </span>
          </>
        )}
        <small className="absolute right-2 sm:right-2.5 bottom-2 sm:bottom-2.5 py-1 px-1.5 text-white bg-gray-900/75 rounded-sm text-[8px] sm:text-[9px] z-10">
          {tutorial.duration}
        </small>
      </div>
      <div className="tutorial-body py-4 sm:py-5.5 px-4 sm:px-5.5">
        <span className="tutorial-category text-blue-600 text-[9px] sm:text-[10px] font-extrabold tracking-[0.08em] uppercase">
          {tutorial.category}
        </span>
        <h3 className="mt-2 mb-2 text-[15px] sm:text-[17px]">{tutorial.title}</h3>
        <p className="min-h-14 sm:min-h-15.5 mb-4 text-[12px] sm:text-[13px] leading-[1.55] text-gray-500">
          {tutorial.description}
        </p>
        <div className="flex gap-2 text-gray-400 text-[10px] sm:text-[11px]">
          <span>{tutorial.level}</span>
          <span>•</span>
          <span>{tutorial.language}</span>
        </div>
      </div>
    </a>
  )
}
