/* eslint-disable react/style-prop-object */
import React from "react";
import Logo from "./icons/Logo";
function Header() {
  return (
    <div className="header fixed z-50 flex h-[64px] w-full backdrop-blur">
      <div className="flex w-full max-w-[1440px] items-center justify-between px-5 py-4 md:m-auto md:px-20 lg:px-[40px]">
        <a href="/">
          <div className="relative flex h-7 w-40 cursor-pointer flex-row gap-2 md:h-10">
            <Logo/>
          </div>
        </a>
        <button type="button" role="combobox" aria-controls="radix-:rf:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="placeholder:text-muted-foreground flex items-center justify-between text-sm disabled:cursor-not-allowed disabled:opacity-50 outline-none rounded-full bg-opacity-white p-2 text-white backdrop-blur-md hover:bg-opacity-white-hover">
          <img src="https://assets.nomion.io/nomion-website/language-icon.png" alt="global-icon" class="h-6 w-6 m-auto" aria-hidden="true"/>
        </button>
      </div>
    </div>
  );
}

export default Header;
