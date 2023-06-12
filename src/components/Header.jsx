import React from "react";
import Logo from "./Logo";
import SignUpButton from "./Signup";
import LoginButton from "./Login";
import RequestDemoButton from "./Demo";

const Header = () => {
    return(
        <div className="toolbar">
            <Logo />
            <div className="buttons">
                <SignUpButton />
                <LoginButton />
                <RequestDemoButton />
            </div>
      </div>
    );
};

export default Header;