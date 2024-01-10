import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../common/AuthProvider';

const PrivateRoute = ({ element, ...props }) => {
    const { isAuthenticated } = useAuth();
  
    return isAuthenticated ? (
      <Route {...props} element={element} />
    ) : (
      <Navigate to="/login" replace={true} state={{ from: props.location }} />
    );
  };
  
  export default PrivateRoute;
