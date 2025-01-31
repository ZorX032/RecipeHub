import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import {RootState} from "../redux/slices/store.ts";



const ProtectedRoute = () => {
    const user = useSelector((state: RootState) => state.auth.user);

    return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;