// Landing Page Header 
// Used in Signup Page and Login Page as well
//
import React from "react";
import Logo from "./Logo";
import SignUpButton from "./Signup";
import LoginButton from "./Login";
import HomeButton from "./Home";
import RequestDemoButton from "./Demo";

const HeaderIn = () => {
    return(
        <div className="toolbar">
            <Logo /> 
            <div className="buttons">
                <SignUpButton />
                <LoginButton />
                <HomeButton />
                {/* <RequestDemoButton /> */}
                {/* //deprecated */}
            </div>
      </div>
    );
};

export default HeaderIn;
