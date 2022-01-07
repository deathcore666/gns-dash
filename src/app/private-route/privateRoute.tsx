import { Navigate, Outlet } from "react-router-dom";
import {  useAuth } from "../store/use-auth";

export const  PrivateRoute = (  ) => {
    const {isAuth} = useAuth();
    return isAuth ? <Outlet/> : <Navigate to="/login" />;
  }