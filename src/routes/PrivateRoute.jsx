import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);

    if(user && user.email){
        return children;
    }

    return (
        <Navigate to={`/auth/login`}></Navigate>
    );
};

export default PrivateRoute;