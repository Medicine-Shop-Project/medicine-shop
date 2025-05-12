// pages/admin/settings.tsx

import AdminLayout from "../components/AdminLayout";

export default function SettingsPage() {
    return (
        <AdminLayout>
            <div className="max-w-3xl mx-auto p-6 space-y-10">
                <h2 className="text-3xl font-bold text-gray-800">Settings</h2>

                {/* Shop Information */}
                <section className="bg-white shadow rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-black">Shop Information</h3>
                    <div className="space-y-4">
                        <input type="text"
                               placeholder="Shop Name"
                               style={{ color: "black", border: "1px solid #ccc", padding: "10px", borderRadius: "6px", width: "100%" }}/>
                        <input type="text"
                               placeholder="Address"
                               style={{ color: "black", border: "1px solid #ccc", padding: "10px", borderRadius: "6px", width: "100%" }} />
                        <input type="text"
                               placeholder="Phone Number"
                               style={{ color: "black", border: "1px solid #ccc", padding: "10px", borderRadius: "6px", width: "100%" }} />
                        <input type="text"
                               placeholder="Email"
                               style={{ color: "black", border: "1px solid #ccc", padding: "10px", borderRadius: "6px", width: "100%" }}/>
                        <button className={buttonStyle}>Save Changes</button>
                    </div>
                </section>

                {/* Notification Preferences */}
                <section className="bg-white shadow rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-black"> Notification Preferences</h3>
                    <div className="space-y-3">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-green-600 text-black" /> Email me when stock is low
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-green-600 text-black" /> Daily sales summary email
                        </label>
                        <button className={buttonStyle}>Save Preferences</button>
                    </div>
                </section>

                {/* Change Password */}
                <section className="bg-white shadow rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-black"> Change Password</h3>
                    <div className="space-y-4">
                        <input type="text"
                               placeholder="Current Password"
                               style={{ color: "black", border: "1px solid #ccc", padding: "10px", borderRadius: "6px", width: "100%" }} />
                        <input type="text"
                               placeholder="New Password"
                               style={{ color: "black", border: "1px solid #ccc", padding: "10px", borderRadius: "6px", width: "100%" }} />
                        <input type="text"
                               placeholder="Confirm New Password"
                               style={{ color: "black", border: "1px solid #ccc", padding: "10px", borderRadius: "6px", width: "100%" }} />
                        <button className={buttonStyle}>Update Password</button>
                    </div>
                </section>

                {/* Backup & Restore */}
                <section className="bg-white shadow rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-black"> Backup & Restore</h3>
                    <div className="space-y-4">
                        <button className={buttonStyle}>Download Backup</button>
                        <input type="file" className="block" />
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition ">
                            Restore Data
                        </button>
                    </div>
                </section>

                {/* Danger Zone */}
                <section className="bg-red-50 border border-red-200 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-red-600 mb-4">⚠️ Danger Zone</h3>
                    <p className="text-sm text-gray-700 mb-3">
                        Deleting your shop is permanent and cannot be undone.
                    </p>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                        Delete Shop
                    </button>
                </section>
            </div>
        </AdminLayout>
    );
}

// Tailwind utility styles
const inputStyle =
    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500";

const buttonStyle =
    "bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition";
