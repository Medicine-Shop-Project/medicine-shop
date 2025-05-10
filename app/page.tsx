import RoleLoginForm from "@/app/components/RoleLoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-indigo-500 to-gray-1000 px-4">
      <div className="duration-600 transform hover:scale-105 bg-gradient-to-br from-slate-100 via-white to-blue-100 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-blue-200">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-400 drop-shadow">
          Secure Login
        </h1>
        <RoleLoginForm />
      </div>
    </div>
  );
}
