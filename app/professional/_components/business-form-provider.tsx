"use client"

import { createContext, useContext, useState } from "react";

// Define the context type for better type safety
interface BusinessFormContextType {
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
}

const initialContextValue: BusinessFormContextType = {
    isLoading: false,
    setIsLoading: () => null // Better initial value than empty function
};

const BusinessFormContext = createContext<BusinessFormContextType>(initialContextValue);

export default function BusinessFormProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);

    const value = {
        isLoading,
        setIsLoading
    };

    console.log("value", value)

    return (
        <BusinessFormContext.Provider value={value}>
            {children}
        </BusinessFormContext.Provider>
    );
}

// Add error handling for when hook is used outside provider
export function useBusinessFormContext() {
    const context = useContext(BusinessFormContext);
    if (!context) {
        throw new Error("useBusinessFormContext must be used within a BusinessFormProvider");
    }
    return context;
}