import { Icon } from "./Icon"

interface LinkButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary" | "text"
  onClick?: () => void
  className?: string
}

export function LinkButton({
  href,
  children,
  variant = "primary",
  onClick,
  className = "",
}: LinkButtonProps) {
  const baseStyles =
    "min-h-[46px] inline-flex justify-center items-center gap-2.5 rounded-[10px] px-5 text-sm font-bold transition-all duration-200 hover:-translate-y-px"

  const variantStyles = {
    primary:
      "text-white !bg-blue-600 border border-blue-600 shadow-[0_5px_14px_rgba(37,99,235,0.17)] hover:bg-blue-700 hover:shadow-[0_7px_18px_rgba(37,99,235,0.22)]",
    secondary:
      "text-gray-900 bg-white border border-gray-300 hover:border-gray-400",
    text: "text-blue-600 hover:text-blue-700",
  }

  return (
    <a
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
