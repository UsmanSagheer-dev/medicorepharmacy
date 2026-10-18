"use client"

import { useMemo, useState } from "react"
import { Icon } from "./Icon"
import { TutorialCard } from "./TutorialCard"
import { tutorials, tutorialCategories } from "@/lib/data"

export function TutorialsPage() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All tutorials")

  const filtered = useMemo(
    () =>
      tutorials.filter(
        (t) =>
          (category === "All tutorials" || t.category === category) &&
          `${t.title} ${t.description}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [query, category],
  )

  return (
    <>
      <section className="page-hero py-12 sm:py-16 lg:py-23.75 text-center bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="eyebrow inline-flex items-center gap-2 text-blue-600 text-[10px] sm:text-[12px] font-extrabold tracking-[0.12em]">
            <i className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_0_5px_#dbeafe]" />
            MEDICORE LEARNING CENTER
          </span>
          <h1 className="max-w-200 mx-auto mt-4 mb-4 text-[clamp(24px,5vw,58px)] leading-[1.12] tracking-tight">
            Learn Medicore Pharmacy Step by Step
          </h1>
          <p className="max-w-175 mx-auto mb-0 text-[13px] sm:text-[15px] lg:text-[17px] text-gray-500">
            Watch practical tutorials to understand every part of pharmacy
            management software at your own pace.
          </p>
        </div>
      </section>
      <section className="section tutorial-library py-12 sm:py-16 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="library-tools flex flex-col sm:flex-row items-center gap-4 sm:gap-5.5">
            <label className="search-box h-12 sm:h-13 flex items-center gap-2.5 flex-1 w-full max-w-full sm:max-w-150 px-4 text-gray-500 border border-gray-300 rounded-[10px]">
              <Icon name="search" size={19} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tutorials, features, or tasks…"
                aria-label="Search tutorials"
                className="h-full border-0 outline-none shadow-none placeholder:text-gray-400 text-sm"
              />
            </label>
            <span className="whitespace-nowrap text-gray-400 text-[11px] sm:text-[12px]">
              {filtered.length} lessons
            </span>
          </div>
          <div className="category-pills flex flex-wrap gap-2 my-6 mb-8 sm:mb-10.5">
            {tutorialCategories.map((c) => (
              <button
                className={`py-2 px-3 text-gray-600 bg-white border border-gray-300 rounded-[20px] text-[10px] sm:text-[11px] font-semibold ${
                  category === c
                    ? "text-blue-600 bg-blue-50 border-blue-200"
                    : ""
                }`}
                onClick={() => setCategory(c)}
                key={c}
              >
                {c}
              </button>
            ))}
          </div>
          {filtered.length ? (
            <div className="tutorial-grid library-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 row-gap-6 sm:row-gap-7">
              {filtered.map((t) => (
                <TutorialCard key={t.slug} tutorial={t} />
              ))}
            </div>
          ) : (
            <div className="empty-state py-10 sm:py-12 lg:py-18.75 px-5 text-center bg-gray-50 border border-dashed border-gray-300 rounded-[14px]">
              <span className="w-11.75 h-11.75 grid place-items-center mx-auto text-blue-600 bg-blue-50 rounded-full">
                <Icon name="search" />
              </span>
              <h3 className="mt-4 mb-1 text-lg">No tutorials found</h3>
              <p className="mb-4 text-gray-500 text-sm">
                Try another search term or category.
              </p>
              <button
                onClick={() => {
                  setQuery("")
                  setCategory("All tutorials")
                }}
                className="text-blue-600 bg-transparent border-0 font-bold text-sm"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
