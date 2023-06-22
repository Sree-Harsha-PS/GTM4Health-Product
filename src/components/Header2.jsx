import React, { useState } from "react";
import Logo from "./Logo";
import LogoutButton from "./logout";
import Settings from "./Settings";

const Header2 = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="toolbar">
      <Logo />
      <div className="buttons">
        <LogoutButton />
        <Settings />
        <i className="fas fa-search fa-2x search-icon"></i>
      </div>
    </div>
  );
};

export default Header2;
