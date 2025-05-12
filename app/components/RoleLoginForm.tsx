"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import router

export default function RoleLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://medback.site/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data?.user?.role) {
        const userRole = data.user.role;
        localStorage.setItem("accessToken", data.access_token);

        if (userRole === "admin") {
          router.push("/admin");
        } else if (userRole === "manager") {
          router.push("/manager");
        } else if (userRole === "staff") {
          router.push("/staff");
        } else {
          setError("Invalid role received from the server.");
        }
      } else {
        setError(data?.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("An unexpected error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="space-y-5 text-gray-800">
        {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline">{error}</span>
            </div>
        )}

        <div>
          <label className="block mb-2 font-semibold">Email</label>
          <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Password</label>
          <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 pr-16 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            className={`w-full py-2 bg-gradient-to-r from-blue-400 via-indigo-900 to-purple-600 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer ${
                loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
        >
          {loading ? "Logging In..." : "Log In"}
        </button>
      </form>
  );
}
