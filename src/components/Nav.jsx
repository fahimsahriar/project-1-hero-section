import React from "react";
import { useState } from "react";

function Nav() {
  const [isActive, setIsActive] = useState(false);
  const test = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <>
      <nav>
        <div className="one">
          <div className="logo">
            <img src="../public/image/brand_logo.png" alt="logo" />
          </div>
          <ul>
            <li>menu</li>
            <li>location</li>
            <li>about</li>
            <li>contact</li>
          </ul>
          <div
            className={isActive ? "container change" : "container"}
            onClick={test}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <button>Login</button>
        </div>
        <div  className={isActive ? "two" : "two change"}>
          <p><a href=""> Home</a></p>
          <p><a href=""> About</a></p>
          <p><a href=""> Service</a></p>
          <p><a href=""> Contact</a></p>
        </div>
      </nav>
    </>
  );
}

export default Nav;
