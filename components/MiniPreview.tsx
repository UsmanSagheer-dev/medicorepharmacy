import { Icon } from "./Icon"

interface MiniPreviewProps {
  type: string
}

export function MiniPreview({ type }: MiniPreviewProps) {
  if (type === "billing")
    return (
      <div className="mini-ui relative z-10 min-h-82.5 p-6 bg-white border border-gray-200 rounded-[11px] shadow-[0_18px_40px_rgba(16,24,40,0.1)] text-[11px]">
        <div className="mini-toolbar flex justify-between items-center pb-5 border-b border-gray-100">
          <b className="text-[14px]">New sale</b>
          <span className="text-gray-400">Receipt #MC-1049</span>
        </div>
        <div className="lookup flex items-center gap-2.5 py-2.5 px-3 text-gray-400 bg-gray-50 border border-gray-200 rounded-[7px] mt-4.5 mb-3">
          <Icon name="search" size={17} /> Search medicine by name or barcode
        </div>
        <div className="product-line grid grid-cols-[36px_1fr_auto_60px] items-center gap-3 py-3 border-b border-gray-50">
          <span className="product-icon w-9 h-9 grid place-items-center text-blue-600 bg-blue-50 rounded-[7px]">
            <Icon name="medicine" size={18} />
          </span>
          <span className="flex flex-col">
            <b>Panadol 500mg</b>
            <small className="mt-0.5 text-gray-400">GSK · Box of 100</small>
          </span>
          <span className="qty py-1.5 px-2 text-gray-600 border border-gray-200 rounded-[5px]">
            − &nbsp; 2 &nbsp; +
          </span>
          <b>Rs 520</b>
        </div>
        <div className="product-line grid grid-cols-[36px_1fr_auto_60px] items-center gap-3 py-3 border-b border-gray-50">
          <span className="product-icon w-9 h-9 grid place-items-center text-blue-600 bg-blue-50 rounded-[7px]">
            <Icon name="medicine" size={18} />
          </span>
          <span className="flex flex-col">
            <b>Calpol Syrup</b>
            <small className="mt-0.5 text-gray-400">120ml · Batch CP204</small>
          </span>
          <span className="qty py-1.5 px-2 text-gray-600 border border-gray-200 rounded-[5px]">
            − &nbsp; 1 &nbsp; +
          </span>
          <b>Rs 285</b>
        </div>
        <div className="bill-total flex justify-end items-end gap-7 pt-5">
          <span className="flex flex-col">
            <small className="text-gray-400">Subtotal</small>
            <b className="mt-1 text-[18px]">Rs 805</b>
          </span>
          <button className="inline-flex items-center gap-2 py-2.5 px-4 text-white bg-blue-600 border-0 rounded-[7px] font-bold">
            Complete sale <Icon name="arrow" size={16} />
          </button>
        </div>
      </div>
    )

  if (type === "alerts")
    return (
      <div className="mini-ui relative z-10 min-h-82.5 p-6 bg-white border border-gray-200 rounded-[11px] shadow-[0_18px_40px_rgba(16,24,40,0.1)] text-[11px]">
        <div className="mini-toolbar flex justify-between items-center pb-5 border-b border-gray-100">
          <b className="text-[14px]">Inventory alerts</b>
          <span className="text-gray-400">Updated just now</span>
        </div>
        <div className="alert-tabs flex gap-5.5 mt-4 mb-1.5 border-b border-gray-200">
          <b className="py-2.5 px-0.5 text-blue-600 border-b-2 border-blue-600">
            Low stock <i className="py-0.5 px-1.5 bg-gray-100 rounded-[10px] not-italic">18</i>
          </b>
          <span className="py-2.5 px-0.5 text-gray-500">
            Expiring soon <i className="py-0.5 px-1.5 bg-gray-100 rounded-[10px] not-italic">7</i>
          </span>
        </div>
        {[
          "Augmentin 625mg|8 packs|Reorder at 12",
          "Brufen 400mg|5 boxes|Reorder at 10",
          "Surbex Z|4 bottles|Reorder at 8",
        ].map((item, i) => {
          const [a, b, c] = item.split("|")
          return (
            <div className="alert-line grid grid-cols-[35px_1fr_90px_auto] items-center gap-2.5 py-3.5 px-1 border-b border-gray-50" key={a}>
              <span className="alert-product w-8.5 h-8.5 grid place-items-center text-blue-600 bg-blue-50 rounded-[7px] font-extrabold">
                {a.slice(0, 1)}
              </span>
              <span className="flex flex-col">
                <b>{a}</b>
                <small className="mt-0.5 text-gray-400">{c}</small>
              </span>
              <span className="flex flex-col">
                <strong>{b}</strong>
                <small className="mt-0.5 text-gray-400">Available</small>
              </span>
              <button className="py-1.5 px-2.5 text-blue-600 bg-white border border-blue-200 rounded-[5px] font-bold">
                Review
              </button>
            </div>
          )
        })}
      </div>
    )

  return (
    <div className="mini-ui relative z-10 min-h-82.5 p-6 bg-white border border-gray-200 rounded-[11px] shadow-[0_18px_40px_rgba(16,24,40,0.1)] text-[11px]">
      <div className="mini-toolbar flex justify-between items-center pb-5 border-b border-gray-100">
        <b className="text-[14px]">Medicine inventory</b>
        <button className="border-0 text-white bg-blue-600 rounded-[5px] py-1.5 px-2.5 text-[8px]">
          + Add medicine
        </button>
      </div>
      <div className="table-filter grid grid-cols-[1fr_auto] gap-2.5 mt-4.5 mb-4.5">
        <div className="lookup flex items-center gap-2 py-2.5 px-3 text-gray-400 bg-gray-50 border border-gray-200 rounded-[7px]">
          <Icon name="search" size={16} /> Search medicines...
        </div>
        <button className="text-gray-600 bg-white border border-gray-200 rounded-[7px]">
          All stock
        </button>
      </div>
      <div className="medicine-table">
        <div className="medicine-line table-head grid grid-cols-[1.7fr_1fr_0.7fr_0.7fr] gap-2 items-center py-2 px-2.5 text-gray-400 bg-gray-50 border-0">
          <span className="text-gray-400 font-medium">Medicine</span>
          <span className="text-gray-400 font-medium">Batch</span>
          <span className="text-gray-400 font-medium">Stock</span>
          <span className="text-gray-400 font-medium">Status</span>
        </div>
        {[
          ["Panadol 500mg", "PN-2409", "84 boxes", "In stock"],
          ["Augmentin 625mg", "AG-2411", "8 boxes", "Low stock"],
          ["Calpol Syrup", "CP-2510", "42 units", "In stock"],
        ].map((r) => (
          <div className="medicine-line grid grid-cols-[1.7fr_1fr_0.7fr_0.7fr] gap-2 items-center py-3.5 px-2.5 text-gray-600 border-b border-gray-50" key={r[0]}>
            {r.map((c, i) => (
              <span
                key={c}
                className={
                  i === 3
                    ? c === "In stock"
                      ? "status text-green-700 bg-green-50 rounded-[20px] text-[9px] w-fit py-0.5 px-1.5"
                      : "status text-amber-600 bg-amber-50 rounded-[20px] text-[9px] w-fit py-0.5 px-1.5"
                    : ""
                }
              >
                {c}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
