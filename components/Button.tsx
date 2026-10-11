import { Icon, IconName } from "./Icon"

interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost" | "text"
  size?: "sm" | "md" | "lg"
  href?: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
  className?: string
  disabled?: boolean
  icon?: IconName
  iconSize?: number
  fullWidth?: boolean
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  onClick,
  className = "",
  disabled = false,
  icon,
  iconSize = 18,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = "inline-flex justify-center items-center gap-2.5 font-bold transition-all duration-200 hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"

  const sizeStyles = {
    sm: "min-h-[38px] px-4 text-xs rounded-lg",
    md: "min-h-[46px] px-5 text-sm rounded-[10px]",
    lg: "min-h-[54px] px-6 text-base rounded-xl",
  }

  const variantStyles = {
    primary:
      "text-white bg-[#54cc3a] border border-[#54cc3a] shadow-[0_5px_14px_rgba(84,204,58,0.17)] hover:bg-[#4ab932] hover:shadow-[0_7px_18px_rgba(84,204,58,0.22)] hover:border-[#4ab932]",
    secondary:
      "text-gray-900 bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50",
    outline:
      "text-[#54cc3a] bg-transparent border-2 border-[#54cc3a] hover:bg-[#f0fdf4]",
    ghost:
      "text-gray-700 bg-transparent border border-transparent hover:bg-gray-100",
    text: "text-[#54cc3a] bg-transparent border-0 hover:text-[#4ab932]",
  }

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? "w-full" : ""} ${className}`

  const content = (
    <>
      {children}
      {icon && <Icon name={icon} size={iconSize} />}
    </>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} className={combinedClassName}>
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {content}
    </button>
  )
}
