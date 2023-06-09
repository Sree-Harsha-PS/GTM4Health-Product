import React from "react"
import imgP from "../img/logo.png"

const Logo = () => {
  return (
    <div className="img">
      <img src={imgP} className="logo" alt="logo here"/>
    </div>
  );
};

export default Logo;