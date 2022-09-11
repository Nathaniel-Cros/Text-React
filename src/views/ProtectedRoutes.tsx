import React from 'react';
import { AuthContext } from '../context/AuthContext';
import {
    Outlet,
} from 'react-router-dom';
import HomeLoginView from '../views/Login';


const ProtectedRoutes = () => {
    const authContext = React.useContext(AuthContext);
    const { isLogin } = authContext;

    return isLogin? <Outlet />: <HomeLoginView />
}

export default ProtectedRoutes
