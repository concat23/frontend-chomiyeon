import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the home page when the component mounts
    navigate('/');
  }, [navigate]);

  return (
    <div>
        <h1>Home</h1>
    </div>
  );
};

export default Home;
