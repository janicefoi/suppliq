import PageHeader from "@/components/layout/PageHeader";
import StatCard from "@/components/layout/StatCard";

// Mock data
const recentOrders = [
  {
    id: "PO-001",
    supplier: "Acme Materials Ltd.",
    date: "2026-04-07",
    total: "$4,250.00",
    status: "Delivered",
  },
  {
    id: "PO-002",
    supplier: "Global Parts Inc.",
    date: "2026-04-05",
    total: "$1,890.00",
    status: "In Transit",
  },
  {
    id: "PO-003",
    supplier: "FastShip Supplies",
    date: "2026-04-03",
    total: "$720.00",
    status: "Processing",
  },
  {
    id: "PO-004",
    supplier: "TechComps Co.",
    date: "2026-04-01",
    total: "$3,100.00",
    status: "Delivered",
  },
  {
    id: "PO-005",
    supplier: "Acme Materials Ltd.",
    date: "2026-03-28",
    total: "$5,600.00",
    status: "Delivered",
  },
];

const lowStockItems = [
  { name: "Steel Bolts M8", current: 45, minimum: 100, unit: "pcs" },
  { name: "Copper Wire 2mm", current: 12, minimum: 50, unit: "m" },
  { name: "Rubber Gaskets", current: 23, minimum: 75, unit: "pcs" },
];

const statusColors: Record<string, string> = {
  Delivered: "bg-success-500/10 text-success-500",
  "In Transit": "bg-accent-500/10 text-accent-500",
  Processing: "bg-warning-500/10 text-warning-500",
};

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Overview of your supply chain operations"
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <StatCard
          title="Total Suppliers"
          value={24}
          change="+3 this month"
          changeType="positive"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          }
        />
        <StatCard
          title="Active Orders"
          value={8}
          change="2 arriving today"
          changeType="neutral"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          }
        />
        <StatCard
          title="Inventory Items"
          value={156}
          change="3 low stock alerts"
          changeType="negative"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          }
        />
        <StatCard
          title="Monthly Spend"
          value="$18.4k"
          change="-12% vs last month"
          changeType="positive"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          }
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-navy-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-navy-100">
            <h2 className="text-base font-semibold text-navy-900">
              Recent Purchase Orders
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" id="recent-orders-table">
              <thead>
                <tr className="border-b border-navy-100 text-left">
                  <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                    Supplier
                  </th>
                  <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-100">
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-navy-50/50 transition-colors"
                  >
                    <td className="px-6 py-3.5 font-medium text-navy-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-3.5 text-navy-600">
                      {order.supplier}
                    </td>
                    <td className="px-6 py-3.5 text-navy-500">{order.date}</td>
                    <td className="px-6 py-3.5 font-medium text-navy-900">
                      {order.total}
                    </td>
                    <td className="px-6 py-3.5">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[order.status] || ""}`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-white rounded-xl border border-navy-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-navy-100">
            <h2 className="text-base font-semibold text-navy-900">
              Low Stock Alerts
            </h2>
          </div>
          <div className="p-4 space-y-3" id="low-stock-alerts">
            {lowStockItems.map((item) => {
              const percentage = Math.round(
                (item.current / item.minimum) * 100
              );
              return (
                <div
                  key={item.name}
                  className="p-4 rounded-lg bg-navy-50 border border-navy-100"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-navy-900">
                      {item.name}
                    </p>
                    <span className="text-xs font-medium text-danger-500">
                      {item.current} / {item.minimum} {item.unit}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-navy-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-danger-500 transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
