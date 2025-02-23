import { Navigate, Outlet } from "react-router-dom";
import { IUser } from "../../types/userSliceTypes";

interface PrivateRouteProps {
    allowedRoles: string[];
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles }) => {
    const user = localStorage.getItem("user");
    let localUser: IUser | null = null;

    if (user) {
        try {
            localUser = JSON.parse(user);
        } catch (error) {
            console.error("Ошибка при парсинге данных пользователя:", error);
            return <Navigate to="/" replace />;
        }
    }


    if (!user || !localUser) {
        return <Navigate to="/" replace />;
    }

    if (!allowedRoles.includes(localUser.role)) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};