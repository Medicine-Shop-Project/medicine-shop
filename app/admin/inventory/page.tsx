
"use client";

import { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import {
    Search,
    Plus,
    Filter,
    Edit,
    Trash2,
    AlertCircle,
} from "lucide-react";

interface Medicine {
    id: string;
    name: string;
    category: string;
    stock: number;
    price: number;
    expiryDate: string;
    manufacturer: string;
}

export default function InventoryPage() {
    const [showAddModal, setShowAddModal] = useState(false);

    // Sample data - replace with actual API data later
    const medicines: Medicine[] = [
        {
            id: "MED001",
            name: "Paracetamol 500mg",
            category: "Pain Relief",
            stock: 500,
            price: 5.99,
            expiryDate: "2024-12-31",
            manufacturer: "ABC Pharma",
        },
        // Add more sample items as needed
    ];

    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Inventory Management</h1>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
                    >
                        <Plus className="h-5 w-5" />
                        Add Medicine
                    </button>
                </div>

                {/* Search and Filter Bar */}
                <div className="flex gap-4 bg-white p-4 rounded-lg shadow">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder="Search medicines..."
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                        <Filter className="h-5 w-5" />
                        Filter
                    </button>
                </div>

                {/* Inventory Table */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Medicine Info
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Category
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Stock
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Price
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Expiry Date
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {medicines.map((medicine) => (
                            <tr key={medicine.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div>
                                        <div className="font-medium text-gray-900">{medicine.name}</div>
                                        <div className="text-sm text-gray-500">{medicine.manufacturer}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {medicine.category}
                                </td>
                                <td className="px-6 py-4">
                                    <StockStatus stock={medicine.stock} />
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    ₹{medicine.price.toFixed(2)}
                                </td>
                                <td className="px-6 py-4">
                                    <ExpiryDate date={medicine.expiryDate} />
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500 text-center">
                                    <div className="flex justify-center gap-2">
                                        <button
                                            className="text-blue-600 hover:text-blue-800"
                                            onClick={() => {/* Handle edit */}}
                                        >
                                            <Edit className="h-5 w-5" />
                                        </button>
                                        <button
                                            className="text-red-600 hover:text-red-800"
                                            onClick={() => {/* Handle delete */}}
                                        >
                                            <Trash2 className="h-5 w-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Medicine Modal */}
            {showAddModal && (
                <AddMedicineModal onClose={() => setShowAddModal(false)} />
            )}
        </AdminLayout>
    );
}

function StockStatus({ stock }: { stock: number }) {
    let statusColor = "text-green-800 bg-green-100";
    let status = "In Stock";

    if (stock <= 0) {
        statusColor = "text-red-800 bg-red-100";
        status = "Out of Stock";
    } else if (stock < 100) {
        statusColor = "text-yellow-800 bg-yellow-100";
        status = "Low Stock";
    }

    return (
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}>
      {status} ({stock})
    </span>
    );
}

function ExpiryDate({ date }: { date: string }) {
    const expiryDate = new Date(date);
    const today = new Date();
    const daysUntilExpiry = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    let statusColor = "text-green-800";
    if (daysUntilExpiry <= 0) {
        statusColor = "text-red-800";
    } else if (daysUntilExpiry <= 30) {
        statusColor = "text-yellow-800";
    }

    return (
        <div className={`flex items-center gap-1 ${statusColor}`}>
            {daysUntilExpiry <= 30 && <AlertCircle className="h-4 w-4" />}
            <span>{new Date(date).toLocaleDateString()}</span>
        </div>
    );
}

function AddMedicineModal({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg">
                <h2 className="text-black  text-xl font-bold mb-4">Add New Medicine</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Medicine Name</label>
                        <input
                            type="text"
                            className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <select className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                                <option>Pain Relief</option>
                                <option>Antibiotics</option>
                                <option>Cardiovascular</option>
                                <option>Vitamins</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Manufacturer</label>
                            <input
                                type="text"
                                className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Stock</label>
                            <input
                                type="number"
                                className="text-black  mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Price (₹)</label>
                            <input
                                type="number"
                                step="0.01"
                                className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                            <input
                                type="date"
                                className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-4 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                        >
                            Add Medicine
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}