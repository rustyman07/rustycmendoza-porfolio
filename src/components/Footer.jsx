import React from "react";
import { GrFacebook, GrLinkedin, GrTwitter } from "react-icons/gr";
const Footer = () => {
  return (
    <footer className="dark:bg-secondary-black bg-white h-[76px] lg:mt-[130px] mt-0 md:mb-0 mb-[50px] grow flex justify-center items-center ">
      <div className="lg:mt-2 md:-mt-8 mt-1 flex justify-center flex-col items-center md:gap-3  gap-2 sm:text-base text-sm">
        <div className="text-center dark:text-primary-yellow  flex  justify-center sm:gap-10 gap-5">
          <a href="https://www.facebook.com/rusty.mendoza.56/">
            <GrFacebook />
          </a>
          <a href="https://www.linkedin.com/in/rusty-mendoza-273a4b267/">
            {" "}
            <GrLinkedin />
          </a>

          <GrTwitter />
        </div>
        <p className="dark:text-primary-yellow md:text-sm text-xxs">
          &copy; {new Date().getFullYear()} rustymen. All rights reserve
        </p>
      </div>
    </footer>
  );
};

export default Footer;
