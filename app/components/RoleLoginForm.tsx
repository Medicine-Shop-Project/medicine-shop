"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import router

export default function RoleLoginForm() {
  const [role, setRole] = useState("admin");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); // Initialize router

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Redirect based on role
    if (role === "admin") {
      router.push("/admin"); // Navigate to /admin route
    } else if (role === "manager") {
      router.push("/manager"); // Optional: Add these pages too
    } else if (role === "staff") {
      router.push("/staff");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-gray-800">
      <div>
        <label className="block mb-2 font-semibold">Select Role</label>
        <select
          className="cursor-pointer w-full px-4 py-2 rounded-lg bg-blue-50 text-gray-700 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="staff">Staff</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-semibold">Username</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-4 py-2 pr-16 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-600 focus:outline-none"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className="mt-2 text-right">
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
          >
            Forgot password?
          </a>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-gradient-to-r from-blue-400 via-indigo-900 to-purple-600 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
      >
        Log In
      </button>
    </form>
  );
}
