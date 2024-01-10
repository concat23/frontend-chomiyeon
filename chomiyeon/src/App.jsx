import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ListCmyEmployeeComponent from './components/ListCmyEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CmyEmployeeComponent from './components/CmyEmployeeComponent';
import { AuthProvider, useAuth } from './common/AuthProvider';
import Login from './admin/authen/Login';
import Signup from './admin/authen/Signup';
import Logout from './admin/authen/Logout';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className='horizontal-container'>
          <HeaderComponent />
          <Routes>
            <Route
              path='/'
              element={
                isAuthenticated ? (
                  <ListCmyEmployeeComponent />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/logout' element={<Logout />} />
            <Route
              path='/employees'
              element={
                isAuthenticated ? (
                  <ListCmyEmployeeComponent />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path='/employees/create/employee'
              element={
                isAuthenticated ? (
                  <CmyEmployeeComponent />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path='/employees/update/employee/:id'
              element={
                isAuthenticated ? (
                  <CmyEmployeeComponent />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          </Routes>
          <FooterComponent />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
