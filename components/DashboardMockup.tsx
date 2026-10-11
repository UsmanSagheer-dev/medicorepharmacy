import { Icon } from "./Icon";
import { Metric } from "./Metric";
import { Stock } from "./Stock";

export function DashboardMockup() {
  return (
    <div className="dashboard-shell w-180 overflow-hidden bg-white border border-gray-200 rounded-[14px] shadow-[0_28px_65px_rgba(16,24,40,0.12),0_2px_6px_rgba(16,24,40,0.05)] text-[9px]">
      <div className="dash-top h-11.25 px-3.5 flex items-center border-b border-gray-100">
        <div className="dash-logo w-32.25 text-blue-600 text-[11px] font-extrabold">
          <span className="inline-grid place-items-center w-4.75 h-4.75 mr-1.5 text-white bg-blue-600 rounded-[5px]">
            +
          </span>
          Medicore
        </div>
        <div className="dash-search flex items-center gap-1.5 w-52.75 py-1.5 px-2.5 text-gray-400 bg-gray-50 border border-gray-100 rounded-md">
          <Icon name="search" size={15} /> Search medicine...
        </div>
        <div className="avatar grid place-items-center w-6.75 h-6.75 ml-auto text-white text-[8px] font-extrabold bg-gray-900 rounded-full">
          AH
        </div>
      </div>
      <div className="dash-layout grid grid-cols-[130px_1fr]">
        <aside className="min-h-111.25 py-4.5 px-2.5 border-r border-gray-100">
          <div className="side-active flex items-center gap-2 py-2 px-2.5 mb-1 text-blue-600 font-bold bg-blue-50 rounded-md">
            <Icon name="activity" size={15} /> Overview
          </div>
          <div className="flex items-center gap-2 py-2 px-2.5 mb-1 text-gray-500 rounded-md">
            <Icon name="receipt" size={15} /> Sales
          </div>
          <div className="flex items-center gap-2 py-2 px-2.5 mb-1 text-gray-500 rounded-md">
            <Icon name="medicine" size={15} /> Medicines
          </div>
          <div className="flex items-center gap-2 py-2 px-2.5 mb-1 text-gray-500 rounded-md">
            <Icon name="boxes" size={15} /> Inventory
          </div>
          <div className="flex items-center gap-2 py-2 px-2.5 mb-1 text-gray-500 rounded-md">
            <Icon name="chart" size={15} /> Reports
          </div>
        </aside>
        <main className="p-4.5 bg-gray-50">
          <div className="dash-heading flex justify-between items-center mb-4">
            <div className="flex flex-col">
              <b className="text-[13px]">Good morning, Ahmed</b>
              <small className="mt-0.5 text-gray-400">
                Here is today&apos;s overview
              </small>
            </div>
            <button className="border-0 text-white bg-blue-600 rounded-[5px] py-1.5 px-2.5 text-[8px]">
              + New sale
            </button>
          </div>
          <div className="metric-grid grid grid-cols-4 gap-2">
            <Metric
              icon="chart"
              label="Today's sales"
              value="Rs 48,320"
              trend="+8.4%"
            />
            <Metric
              icon="receipt"
              label="Transactions"
              value="127"
              trend="+12"
            />
            <Metric icon="boxes" label="Low stock" value="18 items" warning />
            <Metric
              icon="calendar"
              label="Expiring soon"
              value="7 batches"
              warning
            />
          </div>
          <div className="dash-panels grid grid-cols-[1.3fr_0.85fr] gap-2 mt-2">
            <div className="chart-panel p-2.5 bg-white border border-gray-100 rounded-[7px]">
              <div className="panel-title flex items-center justify-between">
                <b className="text-[9px]">Sales overview</b>
                <span className="text-blue-600 text-[7px]">Last 7 days</span>
              </div>
              <div className="bar-chart h-20.25 flex items-end gap-2 mt-4 border-b border-gray-100 bg-[repeating-linear-gradient(to_bottom,#f3f5f8_0,#f3f5f8_1px,transparent_1px,transparent_26px)]">
                {[48, 62, 53, 78, 69, 88, 74].map((h, i) => (
                  <i
                    key={i}
                    className="flex-1 bg-blue-500 rounded-t-[3px] opacity-90"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="chart-labels flex justify-around mt-1 text-gray-400 text-[6px]">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
            <div className="stock-panel p-2.5 bg-white border border-gray-100 rounded-[7px]">
              <div className="panel-title flex items-center justify-between">
                <b className="text-[9px]">Inventory</b>
                <span className="text-blue-600 text-[7px]">View all</span>
              </div>
              <Stock name="Panadol 500mg" stock="12 packs" low />
              <Stock name="Augmentin 625mg" stock="8 packs" low />
              <Stock name="Calpol syrup" stock="42 units" />
            </div>
          </div>
          <div className="recent p-2.5 mt-2 bg-white border border-gray-100 rounded-[7px]">
            <div className="panel-title flex items-center justify-between">
              <b className="text-[9px]">Recent sales</b>
              <span className="text-blue-600 text-[7px]">Today</span>
            </div>
            <div className="sale-row head grid grid-cols-[1fr_1.5fr_1fr_0.8fr] py-1.5 px-0.5 text-gray-500 text-[7px] bg-gray-50 border-0 mt-1.5">
              <span>Receipt</span>
              <span>Customer</span>
              <span>Items</span>
              <span>Total</span>
            </div>
            <div className="sale-row grid grid-cols-[1fr_1.5fr_1fr_0.8fr] py-1.5 px-0.5 text-gray-500 text-[7px] border-t border-gray-100">
              <span>#MC-1048</span>
              <span>Walk-in customer</span>
              <span>3 items</span>
              <b className="text-gray-900 text-[7px]">Rs 1,280</b>
            </div>
            <div className="sale-row grid grid-cols-[1fr_1.5fr_1fr_0.8fr] py-1.5 px-0.5 text-gray-500 text-[7px] border-t border-gray-100">
              <span>#MC-1047</span>
              <span>Ali Raza</span>
              <span>2 items</span>
              <b className="text-gray-900 text-[7px]">Rs 860</b>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
