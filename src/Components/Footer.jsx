import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-[40px] lg:pt-[60px]">
      <div className="m-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-[24px] px-[24px] lg:px-[40px]">
        <div className="flex flex-col items-center">
          <p className="mr-[8px] leading-[1.5rem] text-[#8C8C8C]">
            Liên lạc với chúng tôi tại
          </p>
          <a href="mailto:hello@nomion.io">
            <span className="font-semibold underline underline-offset-4 text-white">
              hello@nomion.io
            </span>
          </a>
        </div>
        <div className="flex flex-col items-center gap-x-[10px] md:flex-row md:gap-x-[40px]">
          <p className="text-center text-xs font-medium leading-[1.5rem] text-[#8C8C8C] md:text-base">
            © 2023 Powered by
            <a target="_blank" rel="noreferrer" href="https://vatlyso.vn/">
              <span className="font-medium underline underline-offset-2 ml-1">
                Phygital Labs
              </span>
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
