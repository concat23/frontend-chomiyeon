// Logout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../logout/style.css'; // Import the CSS file

const Logout = () => {
  const history = useNavigate();

  const handleLogout = () => {
    // Implement logout logic, e.g., clear tokens from local storage, update state, etc.
    history.push('/admin/login'); // Redirect to login after logout
  };

  return (
    <div className="logout-container">
      <h2 className="heading">Logout</h2>
      <button onClick={handleLogout} className="button">
        Logout
      </button>
    </div>
  );
};

export default Logout;
