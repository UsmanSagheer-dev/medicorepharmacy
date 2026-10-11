import { Icon } from "./Icon"

interface MetricProps {
  icon: "receipt" | "boxes" | "alert" | "chart" | "users" | "medicine" | "activity" | "support" | "play" | "email" | "calendar" | "shield"
  label: string
  value: string
  trend?: string
  warning?: boolean
}

export function Metric({ icon, label, value, trend, warning }: MetricProps) {
  return (
    <div className="metric relative min-h-18.25 py-2.5 px-2 pb-2 pl-9 flex flex-col bg-white border border-gray-100 rounded-[7px]">
      <span
        className={`metric-icon absolute left-2.5 top-2.5 w-5.25 h-5.25 grid place-items-center rounded-[5px] ${
          warning
            ? "text-amber-600 bg-amber-50"
            : "text-blue-600 bg-blue-50"
        }`}
      >
        <Icon name={icon} size={15} />
      </span>
      <small className="text-gray-400">{label}</small>
      <strong className="mt-1.5 text-[12px]">{value}</strong>
      {trend && (
        <em className="absolute right-1.5 bottom-2 text-green-600 text-[7px] not-italic">
          {trend}
        </em>
      )}
    </div>
  )
}
