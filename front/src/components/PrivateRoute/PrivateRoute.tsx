import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface PrivateRouteProps {
    allowedRoles: string[];
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles }) => {

    const { user: userProfile, loading } = useSelector((state: RootState) => state.usersProfileSlice);
    const id = Number(localStorage.getItem("id")) || null;


    if (loading) {
        return <div>Загрузка...</div>;
    }


    if (!id) {
        return <Navigate to="/" replace />;
    }

    if (!userProfile || !userProfile.role || !allowedRoles.includes(userProfile.role)) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};
