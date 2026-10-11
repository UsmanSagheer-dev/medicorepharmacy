type IconName =
  | "activity"
  | "alert"
  | "arrow"
  | "barcode"
  | "boxes"
  | "calendar"
  | "chart"
  | "check"
  | "chevron"
  | "close"
  | "email"
  | "menu"
  | "medicine"
  | "play"
  | "receipt"
  | "search"
  | "shield"
  | "support"
  | "users"

interface IconProps {
  name: IconName
  size?: number
  className?: string
}

export function Icon({ name, size = 20, className = "" }: IconProps) {
  const paths: Record<IconName, React.ReactNode> = {
    activity: (
      <>
        <path d="M3 12h4l2-6 4 12 2-6h6" />
      </>
    ),
    alert: (
      <>
        <path d="M12 9v4m0 4h.01" />
        <path d="M10.3 3.7 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.7a2 2 0 0 0-3.4 0Z" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14m-5-5 5 5-5 5" />
      </>
    ),
    barcode: (
      <>
        <path d="M3 5v14M7 5v14m3-14v14m4-14v14m3-14v14m4-14v14" />
      </>
    ),
    boxes: (
      <>
        <path d="m12 2 8 4-8 4-8-4 8-4Z" />
        <path d="m4 10 8 4 8-4M4 14l8 4 8-4M4 18l8 4 8-4" />
      </>
    ),
    calendar: (
      <>
        <path d="M6 2v4m12-4v4M3 9h18" />
        <rect x="3" y="4" width="18" height="17" rx="2" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V9m6 10V5m6 14v-7m4 7H2" />
      </>
    ),
    check: (
      <>
        <path d="m5 12 4 4L19 6" />
      </>
    ),
    chevron: (
      <>
        <path d="m9 18 6-6-6-6" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    medicine: (
      <>
        <path d="M10.5 4.5a4.24 4.24 0 0 1 6 6l-6 6a4.24 4.24 0 0 1-6-6l6-6Z" />
        <path d="m8 7 9 9" />
      </>
    ),
    play: (
      <>
        <path d="m8 5 11 7-11 7V5Z" />
      </>
    ),
    receipt: (
      <>
        <path d="M6 2h12v20l-3-2-3 2-3-2-3 2V2Z" />
        <path d="M9 7h6m-6 4h6m-6 4h4" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    support: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 9a3.5 3.5 0 1 1 5.4 2.9c-1 .7-1.9 1.2-1.9 2.6M12 18h.01" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  )
}
