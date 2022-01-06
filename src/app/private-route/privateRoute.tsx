import { Navigate, Outlet } from "react-router-dom";
import {  useAuth } from "../store/use-auth";

export const  PrivateRoute = (  ) => {
    const {isAuth} = useAuth();
    console.log(isAuth)
    return isAuth ? <Outlet/> : <Navigate to="/login" />;
  }