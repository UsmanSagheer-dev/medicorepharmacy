import { Icon } from "./Icon"
import { TutorialCard } from "./TutorialCard"
import { tutorials } from "@/lib/data"

interface TutorialPageProps {
  slug: string
}

export function TutorialPage({ slug }: TutorialPageProps) {
  const tutorial = tutorials.find((t) => t.slug === slug)
  if (!tutorial) return null

  const index = tutorials.indexOf(tutorial)
  const related = tutorials
    .filter((t) => t.category === tutorial.category && t.slug !== slug)
    .slice(0, 2)

  return (
    <main className="lesson-page py-6 sm:py-8.5 bg-gray-50">
      <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)] px-4 sm:px-6">
        <div className="lesson-breadcrumb flex items-center gap-1.5 mb-6 sm:mb-8 text-gray-500 text-[11px] sm:text-[12px]">
          <a href="/tutorials" className="text-blue-600 font-bold">
            Tutorials
          </a>
          <Icon name="chevron" size={14} />
          <span>{tutorial.category}</span>
        </div>
        <div className="lesson-grid grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-7 items-start">
          <article className="min-w-0">
            {tutorial.videoUrl ? (
              <div className="aspect-video rounded-[14px] overflow-hidden">
                <iframe
                  src={tutorial.videoUrl.replace('youtu.be/', 'www.youtube.com/embed/').replace('youtube.com/watch?v=', 'youtube.com/embed/')}
                  title={tutorial.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="video-placeholder aspect-video flex flex-col justify-center items-center py-8 text-center text-white bg-gray-900 rounded-[14px]">
                <span className="video-icon w-15 h-15 grid place-items-center text-white bg-blue-600 rounded-full">
                  <Icon name="play" size={25} />
                </span>
                <h2 className="mt-5 mb-2">Official video coming soon</h2>
                <p className="max-w-140 mb-0 text-gray-400 text-[14px]">
                  This lesson structure is ready for an approved YouTube or
                  video-hosting embed. No unofficial training video has been
                  substituted.
                </p>
                <small className="mt-4 text-gray-500">
                  {tutorial.language}-first · English subtitles when available
                </small>
              </div>
            )}
            <div className="lesson-title mt-4 sm:mt-5 py-5 sm:py-8 px-5 sm:px-8 bg-white border border-gray-200 rounded-[13px]">
              <span className="tutorial-category text-blue-600 text-[10px] font-extrabold tracking-[0.08em] uppercase">
                {tutorial.category}
              </span>
              <h1 className="mt-2.5 mb-2.5 text-[22px] sm:text-[30px] tracking-tight">
                {tutorial.title}
              </h1>
              <p className="mb-4 text-sm sm:text-base">{tutorial.description}</p>
              <div className="flex gap-2 text-gray-400 text-[10px] sm:text-[11px]">
                <span>{tutorial.level}</span>
                <span>•</span>
                <span>{tutorial.duration}</span>
                <span>•</span>
                <span>{tutorial.language}</span>
              </div>
            </div>
            <div className="instructions mt-4 sm:mt-5 py-5 sm:py-8 px-5 sm:px-8 bg-white border border-gray-200 rounded-[13px]">
              <h2 className="mb-2 text-[18px] sm:text-[20px]">In this lesson</h2>
              <p className="mb-5 text-[13px] sm:text-[14px]">
                Use these steps as a quick reference when the official video is
                published.
              </p>
              <ol className="list-none p-0 m-0">
                {tutorial.steps.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-center gap-3 py-3 border-t border-gray-100"
                  >
                    <span className="w-6.75 h-6.75 grid place-items-center shrink-0 text-blue-600 bg-blue-50 rounded-full text-[11px] font-extrabold">
                      {i + 1}
                    </span>
                    <p className="mb-0 text-gray-700 text-[12px] sm:text-[13px]">{s}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="lesson-nav flex flex-col sm:flex-row justify-between gap-3 sm:gap-5 mt-4 sm:mt-5">
              {index > 0 ? (
                <a
                  href={`/tutorials/${tutorials[index - 1].slug}`}
                  className="max-w-full sm:max-w-[48%] flex flex-col gap-1.5 py-4 px-4 bg-white border border-gray-200 rounded-[10px]"
                >
                  <small className="text-gray-400">Previous lesson</small>
                  <b className="text-[11px] sm:text-[12px] text-blue-600">
                    ← {tutorials[index - 1].title}
                  </b>
                </a>
              ) : (
                <span></span>
              )}
              {index < tutorials.length - 1 && (
                <a
                  className="next max-w-full sm:max-w-[48%] flex flex-col gap-1.5 py-4 px-4 bg-white border border-gray-200 rounded-[10px] text-right ml-auto"
                  href={`/tutorials/${tutorials[index + 1].slug}`}
                >
                  <small className="text-gray-400">Next lesson</small>
                  <b className="text-[11px] sm:text-[12px] text-blue-600">
                    {tutorials[index + 1].title} →
                  </b>
                </a>
              )}
            </div>
          </article>
          <aside className="lg:sticky lg:top-25 mt-6 lg:mt-0">
            <div className="course-card py-5.5 px-5.5 bg-white border border-gray-200 rounded-xl">
              <span className="text-blue-600 text-[9px] font-extrabold tracking-[0.08em]">
                COURSE PROGRESS
              </span>
              <h3 className="mt-2 mb-4 text-[14px] sm:text-[16px]">{tutorial.category}</h3>
              <div className="progress h-1.5 overflow-hidden bg-gray-100 rounded-[5px]">
                <i className="block w-0 h-full bg-blue-600" />
              </div>
              <p className="mb-0 text-[11px] sm:text-[12px] text-gray-500">
                Progress tracking will be available for authenticated learners.
              </p>
              <a
                href="/tutorials"
                className="text-blue-600 text-[11px] sm:text-[12px] font-bold"
              >
                View all lessons
              </a>
            </div>
            {related.length > 0 && (
              <div className="related mt-4 py-5.5 px-5.5 bg-white border border-gray-200 rounded-xl">
                <h3 className="mb-3 text-[13px] sm:text-[14px]">Related lessons</h3>
                {related.map((t) => (
                  <a
                    href={`/tutorials/${t.slug}`}
                    key={t.slug}
                    className="flex gap-2 py-2.5 border-t border-gray-100"
                  >
                    <span className="w-7.25 h-7.25 grid place-items-center shrink-0 text-blue-600 bg-blue-50 rounded-md">
                      <Icon name="play" size={15} />
                    </span>
                    <p className="flex flex-col mb-0">
                      <b className="text-gray-900 text-[10px] sm:text-[11px]">{t.title}</b>
                      <small className="mt-0.5 text-gray-400 text-[8px] sm:text-[9px]">
                        {t.duration}
                      </small>
                    </p>
                  </a>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  )
}
