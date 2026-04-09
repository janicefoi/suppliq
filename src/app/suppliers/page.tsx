import PageHeader from "@/components/layout/PageHeader";

const suppliers = [
  {
    id: 1,
    name: "Acme Materials Ltd.",
    contact: "John Smith",
    email: "john@acme.com",
    category: "Raw Materials",
    rating: 4.8,
    status: "Active",
  },
  {
    id: 2,
    name: "Global Parts Inc.",
    contact: "Sarah Lee",
    email: "sarah@globalparts.com",
    category: "Components",
    rating: 4.5,
    status: "Active",
  },
  {
    id: 3,
    name: "FastShip Supplies",
    contact: "Mike Chen",
    email: "mike@fastship.com",
    category: "Packaging",
    rating: 4.2,
    status: "Active",
  },
  {
    id: 4,
    name: "TechComps Co.",
    contact: "Lisa Wang",
    email: "lisa@techcomps.com",
    category: "Electronics",
    rating: 4.6,
    status: "Under Review",
  },
  {
    id: 5,
    name: "EcoPack Solutions",
    contact: "David Brown",
    email: "david@ecopack.com",
    category: "Packaging",
    rating: 3.9,
    status: "Inactive",
  },
];

const statusColors: Record<string, string> = {
  Active: "bg-success-500/10 text-success-500",
  "Under Review": "bg-warning-500/10 text-warning-500",
  Inactive: "bg-navy-200 text-navy-500",
};

export default function SuppliersPage() {
  return (
    <>
      <PageHeader
        title="Suppliers"
        description="Manage your supplier relationships and contacts"
        actions={
          <button
            id="add-supplier-btn"
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
            Add Supplier
          </button>
        }
      />

      <div className="bg-white rounded-xl border border-navy-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm" id="suppliers-table">
            <thead>
              <tr className="border-b border-navy-100 text-left">
                <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                  Supplier
                </th>
                <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-xs font-medium text-navy-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              {suppliers.map((s) => (
                <tr
                  key={s.id}
                  className="hover:bg-navy-50/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <p className="font-medium text-navy-900">{s.name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-navy-800">{s.contact}</p>
                    <p className="text-xs text-navy-400">{s.email}</p>
                  </td>
                  <td className="px-6 py-4 text-navy-600">{s.category}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-warning-500"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span className="text-sm font-medium text-navy-700">
                        {s.rating}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[s.status] || ""}`}
                    >
                      {s.status}
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
