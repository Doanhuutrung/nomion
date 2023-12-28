/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import Logo from "./icons/Logo";
import Menu from "./common/accordion";

function Header() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleIconClick = () => {
    setMenuVisible(!isMenuVisible);
  };
  return (
    <div className="header fixed z-50 flex h-[64px] w-full backdrop-blur">
      <div className="flex w-full max-w-[1440px] flex-row items-center justify-between px-5 py-4 md:m-auto md:px-20 lg:px-[40px]">
        <a href="/">
          <Logo />
        </a>
        <div onClick={handleIconClick}>
          <button
            type="button"
            dir="ltr"
            data-state="closed"
            className=" rounded-full p-2 text-sm text-white outline-none backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-50"
          >
            <img
              src="https://assets.nomion.io/nomion-website/language-icon.png"
              alt="global-icon"
              className="m-auto h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
        {isMenuVisible && <Menu />}
      </div>
    </div>
  );
}

export default Header;
