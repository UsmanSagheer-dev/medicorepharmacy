interface StockProps {
  name: string
  stock: string
  low?: boolean
}

export function Stock({ name, stock, low }: StockProps) {
  return (
    <div className="stock-row flex items-center gap-1.5 py-2 border-b border-gray-50 last:border-0">
      <span className="stock-symbol w-6 h-6 grid place-items-center text-blue-600 font-extrabold bg-blue-50 rounded-[5px]">
        Rx
      </span>
      <span className="flex flex-col flex-1">
        <b className="text-[7px]">{name}</b>
        <small className="mt-0.5 text-gray-400 text-[6px]">{stock}</small>
      </span>
      {low && (
        <em className="py-0.5 px-1 text-amber-600 bg-amber-50 rounded-[3px] text-[6px] not-italic">
          Low
        </em>
      )}
    </div>
  )
}
