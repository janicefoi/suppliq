interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: React.ReactNode;
}

export default function StatCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon,
}: StatCardProps) {
  const changeColor = {
    positive: "text-success-500",
    negative: "text-danger-500",
    neutral: "text-navy-500",
  }[changeType];

  return (
    <div className="stat-card bg-white rounded-xl border border-navy-200 p-5 cursor-default">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-navy-500">{title}</p>
          <p className="mt-2 text-2xl font-bold text-navy-900 tracking-tight">
            {value}
          </p>
          {change && (
            <p className={`mt-1 text-xs font-medium ${changeColor}`}>
              {change}
            </p>
          )}
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-navy-50 text-navy-600">
          {icon}
        </div>
      </div>
    </div>
  );
}
