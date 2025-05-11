"use client";

import AdminLayout from "../components/AdminLayout";
import { ClipboardList } from "lucide-react";

export default function OrdersPage() {
    // Mock order data
    const orders = [
        {
            id: "#ORD-001",
            customer: "John Doe",
            amount: "৳1,200",
            status: "Completed",
        },
        {
            id: "#ORD-002",
            customer: "Ahmad Sobur",
            amount: "৳12,000",
            status: "Pending",
        },
        {
            id: "#ORD-003",
            customer: "Badhon Haldar",
            amount: "৳360",
            status: "Refunded",
        },
    ];

    // Color status mapping
    const statusColor = {
        Completed: "bg-green-100 text-green-800",
        Pending: "bg-yellow-100 text-yellow-800",
        Refunded: "bg-red-100 text-red-800",
    };

    // @ts-ignore
    return (
        <AdminLayout>
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center mb-4">
                    <ClipboardList className="h-6 w-6 text-blue-600 mr-2" />
                    <h2 className="text-xl font-semibold text-black">All Orders</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-black">{order.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-black">{order.customer}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-black">{order.amount}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                    <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor[order.status] || "bg-gray-100 text-gray-700"}`}
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
        </AdminLayout>
    );
}