// PrivateRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from 'path-to-your-auth-context'; // Adjust the path accordingly
import './../private/style.css'; // Import the CSS file

const PrivateRoute = ({ element, ...props }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Route {...props} element={element} />
  ) : (
    <div className="route-container">
      <h2 className="unauthorized-heading">Unauthorized Access</h2>
      <p>Please log in to access this page.</p>
      <Navigate to="/admin/login" replace={true} state={{ from: props.location }} />
    </div>
  );
};

export default PrivateRoute;
