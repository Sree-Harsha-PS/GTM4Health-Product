// Admin Menu Bar Component
//
import React from "react";

const AdminMenuBar = () => {
  return (
    <div className="menu-bar adbar">
      <a href="/admin/dashboard/User-Dashboard" className="menu-link">
        <div className="menu-item">
          <i className="fas fa-users-cog menu-icon"></i>
          <span className="menu-text">User Dashboard</span>
        </div>
      </a>
      <a href="/admin/dashboard/Features" className="menu-link">
        <div className="menu-item">
        <i className="fas fa-puzzle-piece menu-icon"></i>
          <span className="menu-text">Features</span>
        </div>
      </a>
      <a href="/admin/dashboard/Add-Hospital" className="menu-link">
        <div className="menu-item">
          <i className="fas fa-hospital-alt menu-icon"></i>
          <span className="menu-text">Add Healthcare Centres</span>
        </div>
      </a>
      <a href="/admin/dashboard/View-Hospital" className="menu-link">
        <div className="menu-item">
          <i className="fas fa-search-location menu-icon"></i>
          <span className="menu-text">View & Update All Healthcare Centres</span>
        </div>
      </a>
      <a href="/admin/dashboard/City-Hospital" className="menu-link">
        <div className="menu-item">
          <i className="fas fa-search-location menu-icon"></i>
          <span className="menu-text">View & Update Healthcare Centres - City Wise</span>
        </div>
      </a>
      <a href="/admin/dashboard/Add-Distributors" className="menu-link">
        <div className="menu-item">
          <i className="fas fa-users menu-icon"></i>
          <span className="menu-text">Add Dealers-Distributors</span>
        </div>
      </a>
       <a href="/admin/dashboard/View-Distributors" className="menu-link">
        <div className="menu-item">
          <i className="fas fa-address-book menu-icon"></i>
          <span className="menu-text">View Dealers-Distributors</span>
        </div>
      </a>      
    </div>
  );
};

export default AdminMenuBar;
