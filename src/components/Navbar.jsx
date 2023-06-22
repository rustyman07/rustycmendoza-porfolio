import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { HashLink } from "react-router-hash-link";
const getTheme = JSON.parse(localStorage.getItem("theme")) || false;

gsap.registerPlugin(Flip);

const Navbar = ({ sec, active, setActive }) => {
  const navlinks = ["home", "about", "project", "contact"];
  const el = useRef();
  const navItemRef = useRef([]);
  const [theme, setTheme] = useState(getTheme);

  useLayoutEffect(() => {
    if (theme) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", JSON.stringify(true));
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", JSON.stringify(false));
    }
    // localStorage.removeItem("theme");
  }, [theme]);

  useLayoutEffect(() => {
    const handler = () => {
      const sections = gsap.utils.toArray(sec);
      gsap.context(() => {
        sections.forEach((element, i) => {
          if (window.scrollY >= element.offsetTop - element.clientHeight / 2) {
            setActive(i);
          }
        });
      });
    };

    document.addEventListener("scroll", handler);
    return () => {
      document.removeEventListener("scroll", handler);
    };
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const navLink = gsap.utils.toArray(navItemRef.current);
      navLink.find((link, i) => {
        // if (link.to.includes(`/${activeLink}`)) {

        if (active == i) {
          const state = Flip.getState(el.current);
          link.appendChild(el.current);

          Flip.from(state, {
            duration: 1.25,
            absolute: true,
            ease: "elastic.out(1,0.5)",
          });
        }
      });
    });
    return () => {
      ctx.revert();
    };
  }, [active]);

  return (
    <header className=" bg-white dark:bg-primary-black fixed left-0 top-0 w-full flex justify-between items-center nav-height md:px-12 px-5 z-20 shadow-md ">
      <nav className="font-poppins flex justify-between items-center max-w-[1440px] m-auto w-screen ">
        <div className="text-primary-yellow lg:text-4xl  text-2xl font-bold">
          RCM
        </div>
        <div className="left flex gap-12">
          <div className="relative flex justify-center items-center">
            <button
              onClick={() => setTheme(!theme)}
              className="w-[45px] h-[20px]  bg-primary-yellow relative rounded-[20px] "
            >
              <div
                className={`w-[16px] h-[16px] rounded-[16px]   duration-300  left-[2px] ease-in-out bg-white  absolute top-[2px]  ${
                  theme ? "translate-x-[26px]" : ""
                }`}
              ></div>
            </button>
          </div>
          <ul className="gap-12 uppercase hidden lg:flex">
            {navlinks.map((link, i) => (
              <div
                ref={(ref) => navItemRef.current.splice(i, 1, ref)}
                key={i}
                className="group nav-item relative flex justify-center items-center "
                data-test-id={link}
              >
                <HashLink
                  smooth={true}
                  to={`/#${link}`}
                  className={`nav-link ${
                    active === i
                      ? "text-primary-yellow dark:text-primary-yellow drop-shadow-lg"
                      : " dark:text-white text-primary-black"
                  } group-hover:text-primary-yellow cursor-pointer`}
                >
                  {link}
                </HashLink>
                {0 === i ? <div ref={el} className="link-active "></div> : null}
                <div className="link group-hover:w-[100%]"></div>
              </div>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
