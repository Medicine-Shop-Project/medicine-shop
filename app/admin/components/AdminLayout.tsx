"use client";

import { useState } from "react";
import Link from "next/link";
import {
    LayoutDashboard,
    Pill,
    Users,
    ClipboardList,
    Settings,
    Menu,
    X,
    LogOut, // 🔴 Logout icon added
} from "lucide-react";

interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"
                }`}
            >
                <div className="p-4 border-b">
                    <h1 className="text-xl font-bold text-blue-600">MedShop Admin</h1>
                </div>
                <nav className="p-4">
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/admin"
                                className="flex items-center p-2 text-gray-700 hover:bg-blue-50 rounded-lg"
                            >
                                <LayoutDashboard className="mr-3 h-5 w-5" />
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/inventory"
                                className="flex items-center p-2 text-gray-700 hover:bg-blue-50 rounded-lg"
                            >
                                <Pill className="mr-3 h-5 w-5" />
                                Inventory
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/user"
                                className="flex items-center p-2 text-gray-700 hover:bg-blue-50 rounded-lg"
                            >
                                <Users className="mr-3 h-5 w-5" />
                                Users
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/orders"
                                className="flex items-center p-2 text-gray-700 hover:bg-blue-50 rounded-lg"
                            >
                                <ClipboardList className="mr-3 h-5 w-5" />
                                Orders
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/settings"
                                className="flex items-center p-2 text-gray-700 hover:bg-blue-50 rounded-lg"
                            >
                                <Settings className="mr-3 h-5 w-5" />
                                Settings
                            </Link>
                        </li>
                        {/* 🔽 Logout option */}
                        <li>
                            <Link
                                href="/"
                                className="flex items-center p-2 text-gray-700 hover:bg-red-50 rounded-lg"
                            >
                                <LogOut className="mr-3 h-5 w-5 text-red-500" />
                                Logout
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div
                className={`transition-all duration-300 ${
                    isSidebarOpen ? "ml-64" : "ml-0"
                }`}
            >
                {/* Top Navigation */}
                <div className="bg-white shadow-md p-4">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        {isSidebarOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
                {/* Page Content */}
                <div className="p-6">{children}</div>
            </div>
        </div>
    );
}
