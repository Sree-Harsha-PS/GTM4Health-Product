// Admin Menu Bar Component
//
import React from "react";

const AdminMenuBar = () => {
  return (
    <div className="menu-bar adbar">
      <a href="/admin/dashboard/User-Dashboard" className="menu-link">
        <div className="menu-item">
          <span className="menu-text">User Dashboard</span>
        </div>
      </a>
      <a href="/admin/dashboard/Features" className="menu-link">
        <div className="menu-item">
          <span className="menu-text">Features</span>
        </div>
      </a>
      <a href="/admin/dashboard/Add-Hospital" className="menu-link">
        <div className="menu-item">
          <span className="menu-text">Add Healthcare Centres</span>
        </div>
      </a>
      <a href="/admin/dashboard/View-Hospital" className="menu-link">
        <div className="menu-item">
          <span className="menu-text">View & Update Healthcare Centres</span>
        </div>
      </a>
      <a href="/admin/dashboard/Add-Distributors" className="menu-link">
        <div className="menu-item">
          <span className="menu-text">Add Dealers-Distributors</span>
        </div>
      </a>
       <a href="/admin/dashboard/View-Distributors" className="menu-link">
        <div className="menu-item">
          <span className="menu-text">View Dealers-Distributors</span>
        </div>
      </a>      
    </div>
  );
};

export default AdminMenuBar;
