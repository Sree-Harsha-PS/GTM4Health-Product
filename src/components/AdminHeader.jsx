// Admin component created
//
import React, { useState } from "react";
import Logo from "./Logo";
import AdminLogoutButton from "./AdminLogout";
import Settings from "./Settings";
import Help from "./Help";

const AdminHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [adminMenuOpen, setAdminMenuOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleAdminMenu = () => {
    setAdminMenuOpen(!adminMenuOpen);
  };

  return (
    <div className="toolbar">
      <Logo />
      <div className="buttons">
        <i className="fas fa-search fa-2x search-icon"></i>
        <div className="user-menu">
          <i
            className="fas fa-user-circle fa-4x"
            onClick={toggleAdminMenu}
          ></i>
          {adminMenuOpen && (
            <div className="user-menu-items">
              <AdminLogoutButton />
              <Settings />
              <Help />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
