import React from "react";
import Logo from "./Logo";
import LogoutButton from "./logout";
import RequestDemoButton from "./Demo";

const Header2 = () => {
    return(
        <div className="toolbar"> 
            <Logo/>
            <div className="buttons">
                <LogoutButton />
                <RequestDemoButton />
            </div>
      </div>
    );
};

export default Header2;