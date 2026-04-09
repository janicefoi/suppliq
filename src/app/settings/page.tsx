import PageHeader from "@/components/layout/PageHeader";

const settingsSections = [
  {
    title: "Company Profile",
    description: "Update your business information and branding",
    fields: [
      { label: "Company Name", value: "Suppliq Demo Corp", type: "text" },
      { label: "Industry", value: "Manufacturing", type: "text" },
      { label: "Currency", value: "USD ($)", type: "text" },
    ],
  },
  {
    title: "Notifications",
    description: "Configure when you receive alerts and updates",
    toggles: [
      { label: "Low stock alerts", description: "Get notified when items fall below minimum levels", enabled: true },
      { label: "Order status updates", description: "Receive updates when order statuses change", enabled: true },
      { label: "Supplier communications", description: "Get notified about supplier messages", enabled: false },
      { label: "Weekly reports", description: "Receive a weekly summary of procurement activity", enabled: true },
    ],
  },
];

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Manage your account preferences and configurations"
      />

      <div className="space-y-6 max-w-3xl">
        {/* Company Profile */}
        <div className="bg-white rounded-xl border border-navy-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-navy-100">
            <h2 className="text-base font-semibold text-navy-900">
              {settingsSections[0].title}
            </h2>
            <p className="text-sm text-navy-500 mt-0.5">
              {settingsSections[0].description}
            </p>
          </div>
          <div className="p-6 space-y-5">
            {settingsSections[0].fields?.map((field) => (
              <div key={field.label}>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  defaultValue={field.value}
                  className="w-full px-3.5 py-2.5 text-sm border border-navy-200 rounded-lg bg-white text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-colors"
                  id={`setting-${field.label.toLowerCase().replace(/\s+/g, "-")}`}
                />
              </div>
            ))}
            <button
              id="save-profile-btn"
              className="inline-flex items-center px-4 py-2.5 bg-accent-500 text-white text-sm font-medium rounded-lg hover:bg-accent-600 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl border border-navy-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-navy-100">
            <h2 className="text-base font-semibold text-navy-900">
              {settingsSections[1].title}
            </h2>
            <p className="text-sm text-navy-500 mt-0.5">
              {settingsSections[1].description}
            </p>
          </div>
          <div className="divide-y divide-navy-100">
            {settingsSections[1].toggles?.map((toggle) => (
              <div
                key={toggle.label}
                className="flex items-center justify-between px-6 py-4"
              >
                <div>
                  <p className="text-sm font-medium text-navy-900">
                    {toggle.label}
                  </p>
                  <p className="text-xs text-navy-500 mt-0.5">
                    {toggle.description}
                  </p>
                </div>
                <button
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    toggle.enabled ? "bg-accent-500" : "bg-navy-300"
                  }`}
                  id={`toggle-${toggle.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${
                      toggle.enabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
