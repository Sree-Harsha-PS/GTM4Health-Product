import React from "react";

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <a href="/dashboard/GTM-Readiness" className="menu-link">
        <div className="menu-item">
          <span className="menu-text">GTM Readiness</span>
        </div>
      </a>
      <a href="/dashboard/Bootcamp" className="menu-link">
        <div className="menu-item">
          <span className="menu-text">Bootcamp</span>
        </div>
      </a>
      <a href="/dashboard/Healthcare-Domains" className="menu-link">
        <div className="menu-item">
          <span className="menu-text">Healthcare Domains</span>
        </div>
      </a>
      <a href="/dashboard/Market-Insights" className="menu-link">
        <div className="menu-item">
          <span className="menu-text">Market Insights</span>
        </div>
      </a>
      <a href="/dashboard/Market-Access" className="menu-link">
        <div className="menu-item">
          <span className="menu-text">Market Access</span>
        </div>
      </a>
      <a href="/dashboard/Review-Products" className="menu-link">
        <div className="menu-item-btm">
          <span className="menu-text">Review Products</span>
        </div>
      </a>
    </div>
  );
};

export default MenuBar;
