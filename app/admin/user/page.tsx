"use client";

import AdminLayout from "../components/AdminLayout";
import { Users } from "lucide-react";

export default function UserPage() {
    // Mock data for demonstration
    const users = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Manager", status: "Inactive" },
        { id: 3, name: "Rahim Uddin", email: "rahim@example.com", role: "User", status: "Active" },
    ];

    return (
        <AdminLayout>
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-blue-600 mr-2" />
                    <h2 className="text-xl font-semibold text-black">All Users</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Role
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Status
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-black">{user.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-black">{user.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-black">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-black">{user.role}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                    <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${
                            user.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-200 text-gray-700"
                        }`}
                    >
                      {user.status}
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