import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { TutorialPage } from "@/components/TutorialPage"
import { tutorials } from "@/lib/data"
import { notFound } from "next/navigation"

export default async function Tutorial({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tutorial = tutorials.find((t) => t.slug === slug)
  if (!tutorial) {
    notFound()
  }

  return (
    <>
      <Header />
      <TutorialPage slug={slug} />
      <Footer />
    </>
  )
}

export function generateStaticParams() {
  return tutorials.map((tutorial) => ({
    slug: tutorial.slug,
  }))
}
