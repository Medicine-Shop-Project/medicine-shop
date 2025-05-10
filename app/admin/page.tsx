"use client";

import AdminLayout from "./components/AdminLayout";
import StatCard from "./components/StatCard";
import {
  TrendingUp,
  Users,
  Package,
  AlertCircle,
} from "lucide-react";

export default function AdminPage() {
  return (
      <AdminLayout>
        <div className="space-y-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
                title="Total Sales"
                value="৳45,675"
                icon={<TrendingUp className="h-6 w-6" />}
                trend="+12.5%"
                color="blue"
            />
            <StatCard
                title="Active Users"
                value="245"
                icon={<Users className="h-6 w-6" />}
                trend="+3.2%"
                color="green"
            />
            <StatCard
                title="Low Stock Items"
                value="12"
                icon={<Package className="h-6 w-6" />}
                trend="-2"
                color="yellow"
            />
            <StatCard
                title="Expired Items"
                value="3"
                icon={<AlertCircle className="h-6 w-6" />}
                trend="+1"
                color="red"
            />
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-black">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-black">#ORD-001</td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">John Doe</td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">৳1,200</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-black">#ORD-002</td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">Ahmad Sobur</td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">৳1,2000</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-black">#ORD-003</td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">Badhon Krisna Haldar</td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">৳360</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AdminLayout>
  );
}