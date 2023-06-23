import React, { useEffect, useRef, useLayoutEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);
const NavbarBottom = ({
  link,
  Icons,
  active,
  setActive,
  index,
  el,
  parentEl,
}) => {
  return (
    <div
      ref={(ref) => parentEl.current.splice(index, 1, ref)}
      className="relative h-full w-10  py-2 text-center md:flex-1 md:justify-center md:flex  "
    >
      {index === 0 ? (
        <div
          ref={el}
          className="indicator absolute top-0 left-0 h-[3px] w-full bg-primary-yellow"
        ></div>
      ) : null}

      <HashLink
        to={`#${link}`}
        className={`relative ${
          active === index ? "dark:text-white text-secondary-black" : ""
        } flex flex-col gap-2 justify-center items-center h-full w-10 text-center`}
      >
        <div className="relative icons h-5 w-5">
          <Icons className="absolute left-[50%] top-[75%] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className=" text-xxs">{link}</div>
      </HashLink>
    </div>
  );
};

export default NavbarBottom;
