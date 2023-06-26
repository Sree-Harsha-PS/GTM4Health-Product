import React, { useState } from "react";
import Logo from "./Logo";
import AdminLogoutButton from "./AdminLogout";
import Settings from "./Settings";
import Help from "./Help";

const AdminHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="toolbar">
      <Logo />
      <div className="buttons">
        <i className="fas fa-search fa-2x search-icon"></i>
        <AdminLogoutButton />
        <Settings />
        <Help />
        <i className="fas fa-user-circle fa-4x"></i> {/* Profile icon */}
      </div>
    </div>
  );
};

export default AdminHeader;
