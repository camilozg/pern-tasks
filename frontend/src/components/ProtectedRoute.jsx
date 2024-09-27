import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRoute = ({ redirectTo, isAllowed, children }) => {
    if (!isAllowed) {
        return <Navigate to={redirectTo} repalce />;
    }

    return children ? children : <Outlet />;
}