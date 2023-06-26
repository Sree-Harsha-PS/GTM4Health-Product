import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Navigate to the logout page
    // Clear all tokens and data from local storage
    localStorage.clear();
    navigate('/admin');
  };

  return <button className="loginn" onClick={handleLogout}>Admin Logout</button>;
};

export default AdminLogoutButton;
