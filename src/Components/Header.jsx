/* eslint-disable react/style-prop-object */
import React from "react";
import Logo from "./icons/Logo";

function Header() {
  return (
    <div className="header fixed z-50 flex h-[64px] w-full backdrop-blur">
      <div className="flex w-full flex-row max-w-[1440px] items-center justify-between px-5 py-4 md:m-auto md:px-20 lg:px-[40px]">
        <a href="/">
          <Logo />
        </a>
        <button
          type="button"
          role="combobox"
          aria-controls="radix-:rf:"
          aria-expanded="false"
          aria-autocomplete="none"
          dir="ltr"
          data-state="closed"
          className="placeholder:text-muted-foreground bg-opacity-white hover:bg-opacity-white-hover flex items-center justify-between rounded-full p-2 text-sm text-white outline-none backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-50"
        >
          <img
            src="https://assets.nomion.io/nomion-website/language-icon.png"
            alt="global-icon"
            class="m-auto h-6 w-6"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
