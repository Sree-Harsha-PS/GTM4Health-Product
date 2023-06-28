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
          <span className="menu-text">Add Hospitals</span>
        </div>
      </a>
    </div>
  );
};

export default AdminMenuBar;
