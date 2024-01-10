// Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../services/ApiUtils'; // Replace with your actual API functions

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
      const response = await signup(formData); // API call for signup
      // Handle successful signup, e.g., show success message, redirect, etc.
      history.push('/login'); // Redirect to login after signup
    } catch (error) {
      // Handle signup failure, e.g., show error message
      console.error('Signup failed:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        {/* Include input fields for name, username, email, and password */}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
