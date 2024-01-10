// Logout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const history = useNavigate();

  const handleLogout = () => {
    // Implement logout logic, e.g., clear tokens from local storage, update state, etc.
    history.push('/login'); // Redirect to login after logout
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
