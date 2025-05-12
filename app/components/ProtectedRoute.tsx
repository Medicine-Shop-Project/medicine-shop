"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children, allowedRoles }) => {
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