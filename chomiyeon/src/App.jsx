// App.jsx

import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ListCmyEmployeeComponent from './components/ListCmyEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CmyEmployeeComponent from './components/CmyEmployeeComponent';
import { useAuth } from './common/AuthProvider';
import Login from './admin/authen/login/Login';
import Signup from './admin/authen/signup/Signup';
import Logout from './admin/authen/logout/Logout';
import Dashboard from './admin/authen/dashboard/Dashboard';
import Home from './client-ui/home/Home';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/admin/*'
          element={
            <div>
              <HeaderComponent />
              <div className='horizontal-container'>
                <Routes>
                  <Route
                    index
                    element={
                      isAuthenticated ? (
                        <ListCmyEmployeeComponent />
                      ) : (
                        <Navigate to="/admin/login" replace />
                      )
                    }
                  />
                  <Route path='login' element={<Login />} />
                  <Route path='signup' element={<Signup />} />
                  <Route path='logout' element={<Logout />} />
                  <Route
                    path='dashboard'
                    element={
                      isAuthenticated ? (
                        <Dashboard />
                      ) : (
                        <Navigate to="/admin/login" replace />
                      )
                    }
                  />
                  <Route
                    path='employees'
                    element={
                      isAuthenticated ? (
                        <ListCmyEmployeeComponent />
                      ) : (
                        <Navigate to="/admin/login" replace />
                      )
                    }
                  />
                  <Route
                    path='employees/create/employee'
                    element={
                      isAuthenticated ? (
                        <CmyEmployeeComponent />
                      ) : (
                        <Navigate to="/admin/login" replace />
                      )
                    }
                  />
                  <Route
                    path='employees/update/employee/:id'
                    element={
                      isAuthenticated ? (
                        <CmyEmployeeComponent />
                      ) : (
                        <Navigate to="/admin/login" replace />
                      )
                    }
                  />
                </Routes>
                <FooterComponent />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
