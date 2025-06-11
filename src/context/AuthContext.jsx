import { createContext, useContext, useState } from "react";

// 1. Create the context
const AuthContext = createContext();

// 2. Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null if not logged in

    const login = (userData) => {
    setUser(userData);
    // You might store token in localStorage here
    };

    const logout = () => {
    setUser(null);
    // Also remove token if stored
    };

    const isAuthenticated = !!user;

    return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
        {children}
    </AuthContext.Provider>
    );
};

// 3. Create a custom hook for easy access
export const useAuth = () => {
    return useContext(AuthContext);
};
