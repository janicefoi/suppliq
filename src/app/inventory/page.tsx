import PageHeader from "@/components/layout/PageHeader";

const inventoryItems = [
  {
    id: 1,
    name: "Steel Bolts M8",
    sku: "SB-M8-001",
    category: "Fasteners",
    quantity: 45,
    minimum: 100,
    unit: "pcs",
    location: "Warehouse A",
  },
  {
    id: 2,
    name: "Copper Wire 2mm",
    sku: "CW-2M-003",
    category: "Wiring",
    quantity: 12,
    minimum: 50,
    unit: "m",
    location: "Warehouse B",
  },
  {
    id: 3,
    name: "Rubber Gaskets",
    sku: "RG-STD-007",
    category: "Seals",
    quantity: 23,
    minimum: 75,
    unit: "pcs",
    location: "Warehouse A",
  },
  {
    id: 4,
    name: "Aluminum Sheets 1mm",
    sku: "AS-1M-012",
    category: "Raw Materials",
    quantity: 250,
    minimum: 80,
    unit: "sheets",
    location: "Warehouse C",
  },
  {
    id: 5,
    name: "LED Driver Module",
    sku: "LD-MOD-045",
    category: "Electronics",
    quantity: 180,
    minimum: 60,
    unit: "pcs",
    location: "Warehouse B",
  },
  {
    id: 6,
    name: "Nylon Cable Ties",
    sku: "NCT-200-009",
    category: "Fasteners",
    quantity: 520,
    minimum: 200,
    unit: "pcs",
    location: "Warehouse A",
  },
];

function getStockStatus(quantity: number, minimum: number) {
  const ratio = quantity / minimum;
  if (ratio <= 0.3) return { label: "Critical", color: "bg-danger-500/10 text-danger-500" };
  if (ratio <= 0.6) return { label: "Low", color: "bg-warning-500/10 text-warning-500" };
  return { label: "In Stock", color: "bg-success-500/10 text-success-500" };
}

export default function InventoryPage() {
  return (
    <>
      <PageHeader
        title="Inventory"
        description="Monitor stock levels and manage inventory items"
        actions={
          <button
            id="add-item-btn"
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
            Add Item
          </button>
        }
      />

      <div className="bg-white rounded-xl border border-navy-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm" id="inventory-table">
            <thead>
              <tr className="border-b border-navy-100 text-left">
                <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                  SKU
                </th>
                <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                  Stock Level
                </th>
                <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              {inventoryItems.map((item) => {
                const status = getStockStatus(item.quantity, item.minimum);
                const percentage = Math.min(
                  Math.round((item.quantity / item.minimum) * 100),
                  100
                );
                return (
                  <tr
                    key={item.id}
                    className="hover:bg-navy-50/50 transition-colors"
                  >
                    <td className="px-6 py-3.5 font-medium text-navy-900">
                      {item.name}
                    </td>
                    <td className="px-6 py-3.5 text-navy-500 font-mono text-xs">
                      {item.sku}
                    </td>
                    <td className="px-6 py-3.5 text-navy-600">
                      {item.category}
                    </td>
                    <td className="px-6 py-3.5 text-navy-700">
                      {item.quantity} {item.unit}
                    </td>
                    <td className="px-6 py-3.5">
                      <div className="w-24 h-1.5 bg-navy-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            percentage <= 30
                              ? "bg-danger-500"
                              : percentage <= 60
                                ? "bg-warning-500"
                                : "bg-success-500"
                          }`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </td>
                    <td className="px-6 py-3.5 text-navy-500">
                      {item.location}
                    </td>
                    <td className="px-6 py-3.5">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.color}`}
                      >
                        {status.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
