"use client"

import { useEffect, useState } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { HomePage } from "./HomePage"
import { FeaturesPage } from "./FeaturesPage"
import { Pricing } from "./Pricing"
import { TutorialsPage } from "./TutorialsPage"
import { TutorialPage } from "./TutorialPage"
import { FAQ } from "./FAQ"
import { ContactPage } from "./ContactPage"
import { LegalPage } from "./LegalPage"
import { NotFound } from "./NotFound"
import { DemoSection } from "./DemoSection"

export function App() {
  const [path, setPath] = useState("")

  useEffect(() => {
    setPath(window.location.pathname)

    const navigate = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a")
      if (!anchor || anchor.target || anchor.origin !== window.location.origin)
        return
      const url = new URL(anchor.href)
      if (url.pathname === window.location.pathname && url.hash) return
      e.preventDefault()
      window.history.pushState({}, "", url.pathname + url.hash)
      setPath(url.pathname)
      if (url.hash) {
        window.setTimeout(() => {
          document.querySelector(url.hash)?.scrollIntoView({ behavior: "smooth" })
        })
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }

    const pop = () => setPath(window.location.pathname)

    document.addEventListener("click", navigate)
    window.addEventListener("popstate", pop)

    return () => {
      document.removeEventListener("click", navigate)
      window.removeEventListener("popstate", pop)
    }
  }, [])

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Medicore Pharmacy | Pharmacy Management Software",
      "/features": "Features | Medicore Pharmacy",
      "/pricing": "Pricing | Medicore Pharmacy",
      "/tutorials": "Video Learning Center | Medicore Pharmacy",
      "/faq": "FAQ | Medicore Pharmacy",
      "/contact": "Contact | Medicore Pharmacy",
      "/privacy": "Privacy Policy | Medicore Pharmacy",
      "/terms": "Terms of Service | Medicore Pharmacy",
    }
    document.title =
      titles[path] ||
      (path.startsWith("/tutorials/")
        ? "Tutorial | Medicore Pharmacy"
        : "Medicore Pharmacy")
  }, [path])

  let page: React.ReactNode
  if (path === "/") page = <HomePage />
  else if (path === "/features") page = <FeaturesPage />
  else if (path === "/pricing")
    page = (
      <>
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
      </>
    )
  else if (path === "/tutorials") page = <TutorialsPage />
  else if (path.startsWith("/tutorials/"))
    page = (
      <TutorialPage slug={decodeURIComponent(path.split("/").pop() || "")} />
    )
  else if (path === "/faq")
    page = (
      <>
        <section className="page-hero py-[95px_0_87px] text-center bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto max-w-295 min-w-[calc(100%-40px)]">
            <span className="eyebrow inline-flex items-center gap-2 text-blue-600 text-[12px] font-extrabold tracking-[0.12em]">
              <i className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_0_5px_#dbeafe]" />
              HELP CENTER
            </span>
            <h1 className="max-w-200 mx-auto mt-4 mb-4 text-[clamp(40px,5vw,58px)] leading-[1.12] tracking-tight">
              Questions, answered clearly
            </h1>
            <p className="max-w-175 mx-auto mb-0 text-[17px] text-gray-500">
              Straightforward information about trying, learning, and using
              Medicore Pharmacy.
            </p>
          </div>
        </section>
        <FAQ standalone />
      </>
    )
  else if (path === "/contact") page = <ContactPage />
  else if (path === "/privacy" || path === "/terms")
    page = <LegalPage type={path.slice(1) as "privacy" | "terms"} />
  else page = <NotFound />

  return (
    <>
      <Header />
      <div className="min-h-screen px-3 ">{page}</div>
      <Footer />
    </>
  )
}
