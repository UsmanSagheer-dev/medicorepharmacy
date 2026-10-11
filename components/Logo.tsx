export function Logo() {
  return (
    <a
      className="flex items-center gap-2.5"
      href="/"
      aria-label="Medicore Pharmacy home"
    >
      <span className="relative w-9.5 h-9.5 bg-blue-600 rounded-[11px] shadow-[0_4px_12px_rgba(37,99,235,0.18)]">
        <span className="absolute w-4.5 h-1.5 bg-white rounded-xs left-2.5 top-4" />
        <span className="absolute w-1.5 h-4.5 bg-white rounded-xs left-4 top-2.5" />
      </span>
      <span className="flex flex-col leading-none">
        <b className="text-base tracking-tight">Medicore</b>
        <small className="mt-1 text-[8px] font-extrabold tracking-[0.18em] text-blue-600">
          PHARMACY
        </small>
      </span>
    </a>
  )
}
