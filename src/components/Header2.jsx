import React from "react";
import Logo from "./Logo";
import LogoutButton from "./logout";
import Settings from "./Settings";

const Header2 = () => {
    return (
        <div className="toolbar">
            <Logo />
            <div className="buttons">
                <LogoutButton />
                <Settings />
                <i className="fas fa-user-circle fa-4x"></i> {/* Profile icon */}
            </div>
        </div>
    );
};

export default Header2;
