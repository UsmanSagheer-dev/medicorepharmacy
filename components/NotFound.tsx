import { LinkButton } from "./LinkButton"

export function NotFound() {
  return (
    <section className="not-found min-h-[70vh] flex flex-col items-center justify-center py-12 px-5 text-center">
      <span className="text-blue-600 text-[13px] font-extrabold tracking-widest">
        404
      </span>
      <h1 className="mt-3 mb-1 text-[43px]">Page not found</h1>
      <p className="mb-6 text-gray-500">
        The page you're looking for may have moved.
      </p>
      <LinkButton href="/">Return to homepage</LinkButton>
    </section>
  )
}
