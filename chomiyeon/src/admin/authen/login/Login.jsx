import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as apiLogin } from '../../../services/ApiAuthenService'; // Rename the imported function
import { useAuth } from '../../common/AuthProvider'; // Update the import path
import './../login/style.css'; // Import the CSS file

const Login = () => {
    const { login: authLogin } = useAuth(); // Rename the function here
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ usernameOrEmail: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await apiLogin(formData); // Use the renamed function
      console.log(response.accessToken);
      
      if (response && response.accessToken) {
        const { accessToken } = response; // Directly access accessToken here

        localStorage.setItem('accessToken', accessToken);
        authLogin(response); // Update the authentication state
        navigate('/admin/dashboard');
      } else {
        console.error('Login failed: AccessToken not found in the response data');
        // Handle the case where the expected properties are missing in the response
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure, e.g., show an error message
    }
  };
  return (
    <div className="login-container">
      <h2 className="heading">Login</h2>
      <form onSubmit={handleLogin} className="form">
        <label className="label">
          Username or Email:
          <input
            type="text"
            name="usernameOrEmail"
            value={formData.usernameOrEmail}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <br />
        <label className="label">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <br />
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
