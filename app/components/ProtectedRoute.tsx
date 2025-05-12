"use client";

import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
    children: ReactNode;
    allowedRoles?: string[]; // Optional array of allowed roles
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            router.push("/");
            setIsLoading(false);
            return;
        }

        // You might want to add logic here to check if the user's role
        // matches the allowedRoles, if provided. For example:
        // const userRole = localStorage.getItem("userRole");
        // if (allowedRoles && !allowedRoles.includes(userRole)) {
        //   router.push("/unauthorized"); // Redirect to an unauthorized page
        //   setIsLoading(false);
        //   return;
        // }

        setIsAuthenticated(true);
        setIsLoading(false);
    }, [router, allowedRoles]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return null;
    }
    return <>{children}</>;
};

export default ProtectedRoute;