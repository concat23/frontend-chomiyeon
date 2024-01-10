// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/ApiUtils'; // Replace with your actual API functions
import '../../admin/authen/style.css'

const Login = () => {
  const history =   useNavigate();
  const [formData, setFormData] = useState({ usernameOrEmail: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData); // API call for login
      // Handle successful login, e.g., store tokens in local storage, update state, etc.
      history.push('/dashboard'); // Redirect to dashboard after login
    } catch (error) {
      // Handle login failure, e.g., show error message
      console.error('Login failed:', error);
    }
  };

  return (
    <div style={loginContainerStyle}>
      <h2 style={headingStyle}>Login</h2>
      <form onSubmit={handleLogin} style={formStyle}>
        <label style={labelStyle}>
          Username or Email:
          <input
            type="text"
            name="usernameOrEmail"
            value={formData.usernameOrEmail}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </label>
        <br />
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
};

const loginContainerStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };
  
  const headingStyle = {
    textAlign: 'center',
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#333',
  };
  
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };
  
  const labelStyle = {
    marginBottom: '8px',
  };
  
  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '16px',
  };
  
  const buttonStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  };
  
  const hoverButtonStyle = {
    backgroundColor: '#45a049',
  };

export default Login;
