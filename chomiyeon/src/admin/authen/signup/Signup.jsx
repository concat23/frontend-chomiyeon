// Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../../services/ApiAdminUtils';
import './../signup/style.css'; // Import the CSS file

const Signup = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({ name: '', username: '', email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await signup(formData);
      // Handle successful signup, e.g., show success message, redirect, etc.
      history.push('/admin/login'); // Redirect to login after signup
    } catch (error) {
      // Handle signup failure, e.g., show error message
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="heading">Signup</h2>
      <form onSubmit={handleSignup} className="form">
        <label className="label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <label className="label">
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <label className="label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input"
          />
        </label>
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
        <button type="submit" className="button">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
