import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuth } from "./context/AuthContext";

function App() {
    const { isAuthenticated } = useAuth();

    return (
    <Routes>
        <Route
            path="/"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
            path="/login"
            element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
        />
        <Route
            path="/register"
            element={!isAuthenticated ? <Register /> : <Navigate to="/" />}
        />
        {/* Optional: fallback for 404 */}
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    );
}

export default App;
