import PageHeader from "@/components/layout/PageHeader";

const orders = [
  {
    id: "PO-001",
    supplier: "Acme Materials Ltd.",
    created: "2026-04-07",
    delivery: "2026-04-14",
    items: 5,
    total: "$4,250.00",
    status: "Delivered",
  },
  {
    id: "PO-002",
    supplier: "Global Parts Inc.",
    created: "2026-04-05",
    delivery: "2026-04-12",
    items: 3,
    total: "$1,890.00",
    status: "In Transit",
  },
  {
    id: "PO-003",
    supplier: "FastShip Supplies",
    created: "2026-04-03",
    delivery: "2026-04-10",
    items: 8,
    total: "$720.00",
    status: "Processing",
  },
  {
    id: "PO-004",
    supplier: "TechComps Co.",
    created: "2026-04-01",
    delivery: "2026-04-08",
    items: 2,
    total: "$3,100.00",
    status: "Delivered",
  },
  {
    id: "PO-005",
    supplier: "Acme Materials Ltd.",
    created: "2026-03-28",
    delivery: "2026-04-04",
    items: 12,
    total: "$5,600.00",
    status: "Delivered",
  },
  {
    id: "PO-006",
    supplier: "EcoPack Solutions",
    created: "2026-03-25",
    delivery: "2026-04-01",
    items: 4,
    total: "$980.00",
    status: "Cancelled",
  },
];

const statusColors: Record<string, string> = {
  Delivered: "bg-success-500/10 text-success-500",
  "In Transit": "bg-accent-500/10 text-accent-500",
  Processing: "bg-warning-500/10 text-warning-500",
  Cancelled: "bg-danger-500/10 text-danger-500",
};

export default function PurchaseOrdersPage() {
  return (
    <>
      <PageHeader
        title="Purchase Orders"
        description="Track and manage all your purchase orders"
        actions={
          <button
            id="create-order-btn"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent-500 text-white text-sm font-medium rounded-lg hover:bg-accent-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Create Order
          </button>
        }
      />

      <div className="bg-white rounded-xl border border-navy-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm" id="purchase-orders-table">
            <thead>
              <tr className="border-b border-navy-100 text-left">
                <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                  Supplier
                </th>
                <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                  Est. Delivery
                </th>
                <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                  Items
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
              {orders.map((order) => (
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
                  <td className="px-6 py-3.5 text-navy-500">
                    {order.created}
                  </td>
                  <td className="px-6 py-3.5 text-navy-500">
                    {order.delivery}
                  </td>
                  <td className="px-6 py-3.5 text-navy-600">{order.items}</td>
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
    </>
  );
}
