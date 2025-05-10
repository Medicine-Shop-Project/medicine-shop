
interface StatCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
    trend: string;
    color: "blue" | "green" | "yellow" | "red";
}

export default function StatCard({ title, value, icon, trend, color }: StatCardProps) {
    const colorClasses = {
        blue: "bg-blue-500",
        green: "bg-green-500",
        yellow: "bg-yellow-500",
        red: "bg-red-500",
    };

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
                <div
                    className={`p-2 rounded-lg ${colorClasses[color]} bg-opacity-10`}
                >
                    {icon}
                </div>
                <span
                    className={`text-sm font-semibold ${
                        trend.startsWith("+") ? "text-green-500" : "text-red-500"
                    }`}
                >
          {trend}
        </span>
            </div>
            <h3 className="text-gray-500 text-sm">{title}</h3>
            <p className="text-2xl font-bold text-black">{value}</p>
        </div>
    );
}