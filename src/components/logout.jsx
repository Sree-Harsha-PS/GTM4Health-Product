import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Navigate to the login page
    navigate('/');
  };

  return <button className="loginn" onClick={handleLogin}>Logout</button>;
};

export default LogoutButton;
