// Used in Logout and User interface settings
// Used when you are inside the Product < after login>
//
import React, { useState } from "react";
import Logo from "./Logo";
import LogoutButton from "./logout";
import Settings from "./Settings";
import Help from "./Help";

const Header2 = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <div className="toolbar">
      <Logo />
      <div className="buttons">
        <div className="search-bar">
          <i className="fas fa-search fa-2x search-icon"></i>
        </div>
        <div className="user-menu">
          <div className="profile-icon" onClick={toggleUserMenu}>
            <i className="fas fa-user-circle fa-4x"></i>
            <div
              className={`user-menu-items ${
                userMenuOpen ? "open" : "closed"
              }`}
            >
              <h3 className="user-header">User Portfolio</h3>
              {user && (
                <div className="user-details">
                  <div className="header">
                    <label className="user-label username">Name:&nbsp;</label>
                    <span className="user-size">{user.name}</span>
                  </div>
                  <div className="header">
                    <label className="user-label email">Mail:&nbsp;</label>
                    <span className="user-size">{user.email}</span>
                  </div>
                  <div className="header">
                    <label className="user-label email">Role:&nbsp;</label>
                    <span className="user-size">{user.role}</span>
                  </div>
                </div>
              )}
              <div className="user-details-border"></div>
              <Settings />
              <Help />
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
