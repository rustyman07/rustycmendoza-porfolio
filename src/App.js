import { useState, useLayoutEffect, useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Home from "./sections/Home";
import Works from "./sections/Works";
import Contacts from "./sections/contact/Contacts";
import { navlink } from "./data";
import NavbarBottom from "./components/NavbarBottom";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

function App() {
  const appRef = useRef();
  const sec = useRef([]);
  const HomeH1Ref = useRef();
  const homeParaRef = useRef();
  const homeSecRef = useRef();
  const AboutHeaderRef = useRef();
  const worksHeaderRef = useRef();
  const aboutRef = useRef();
  const aboutCardRef = useRef();
  const gridRef = useRef();
  const workCardRef = useRef([]);
  const contactCardRef = useRef([]);
  const contactHeaderRef = useRef();
  const el = useRef();
  const parentEl = useRef([]);
  const [getData, setData] = useState([]);
  const [onResize, setOnResize] = useState(window.innerWidth);
  const isMobile = onResize <= 768;
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const loadTl = gsap.timeline({
        defaults: {
          opacity: 0,
          ease: "ease-in",
          duration: 0.3,
        },
      });

      const heroTl = show();
      heroTl.pause();
      loadTl.add(heroTl.tweenFromTo(0, heroTl.duration()), "<0.5");
      loadTl.add(() => {
        // after that tween is done, we'll create a ScrollTrigger with the "real" heroTl animation
        ScrollTrigger.create({
          animation: heroTl,
          trigger: sec.current[0],
          start: "80% 100%",
          end: "90% 40%",
          toggleActions: "play none none reverse",
        });
      });
      headerAnimation(sec.current[1], AboutHeaderRef.current);
      headerAnimation(sec.current[2], worksHeaderRef.current);
      headerAnimation(sec.current[3], contactHeaderRef.current);
    });
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(aboutCardRef.current, {
        y: 80,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: sec.current[1],
          ease: "ease-in",
          start: "top 60%",
          end: "bottom 30%",
          toggleActions: "restart none none reverse",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const show = () => {
    const tl = gsap.timeline({
      defaults: {
        opacity: 0,
        ease: "ease-in",
        duration: 0.3,
      },
    });
    tl.from(homeParaRef.current, { y: 10, duration: 1.2 }).from(
      HomeH1Ref.current,
      { y: 10 },
      "<0.5"
    );
    return tl;
  };
  useLayoutEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    setOnResize(window.innerWidth);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (isMobile) {
        workCardRef.current.forEach((card, i) => {
          cardsAnimationOnMobile(card, i + 1);
        });
      } else {
        workCardsDesktopAnimation();
      }
    });
    return () => ctx.revert();
  }, [isMobile, getData]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ContactcardsAnimation(contactCardRef.current[0], 1, 0.3);
      ContactcardsAnimation(contactCardRef.current[1], 2, 0.6);
      ContactcardsAnimation(contactCardRef.current[2], 3, 0.9);
    });
    return () => {
      ctx.revert();
    };
  }, [isMobile]);

  function workCardsDesktopAnimation() {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: sec.current[2],
          start: "center bottom",
          end: "center 10%",
          toggleActions: "restart none none reverse",
        },
      })
      .from(workCardRef.current, { y: 40, opacity: 0, stagger: 0.3 });

    return tl;
  }

  function headerAnimation(section, header) {
    gsap.from(header, {
      y: 20,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: section,
        ease: "ease-in",
        start: "top 80%",
        end: "60% 50%",
        toggleActions: "restart none none reverse",
      },
    });

    // .from(aboutCardRef.current, { y: 50, opacity: 0 }, "<0.3");
  }

  const cardsAnimationOnMobile = (target, n) => {
    gsap.from(target, {
      x: n % 2 == 0 ? 100 : -100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: target,
        ease: "ease-in",
        start: "top 80%",
        end: "80% 20%",
        toggleActions: "restart none none reverse",
      },
    });
  };

  const ContactcardsAnimation = (target, n, delay) => {
    gsap.from(target, {
      x: isMobile ? (n % 2 == 0 ? 100 : -100) : null,
      y: !isMobile ? 20 : null,
      delay: !isMobile ? delay : null,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: !isMobile ? sec.current[3] : target,
        ease: "ease-in",
        start: "top 60%",
        end: "80% 20%",
        toggleActions: "restart none none none",
      },
    });
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (isMobile) {
        const navItem = gsap.utils.toArray(parentEl.current);
        navItem.find((link, i) => {
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
      }
    });
    return () => {
      ctx.revert();
    };
  }, [active, isMobile]);

  return (
    <div ref={appRef} className="App h-full relative overflow-hidden ">
      <Navbar sec={sec.current} active={active} setActive={setActive} />
      <div className="sidebar-icons"></div>
      <Home
        homeParaRef={homeParaRef}
        HomeH1Ref={HomeH1Ref}
        homeSecRef={homeSecRef}
        sec={sec}
      />
      <About
        AboutHeaderRef={AboutHeaderRef}
        aboutRef={aboutRef}
        aboutCardRef={aboutCardRef}
        sec={sec}
      />
      <Works
        sec={sec}
        gridRef={gridRef}
        worksHeaderRef={worksHeaderRef}
        workCardRef={workCardRef}
        setData={setData}
        getData={getData}
      />
      <Contacts
        sec={sec}
        isMobile={isMobile}
        contactHeaderRef={contactHeaderRef}
        contactCardRef={contactCardRef}
      />
      {isMobile && (
        <div className="fixed  bottom-0 left-0 h-[56px] w-screen bg-white dark:bg-primary-black card-shadow ">
          <div className="flex text-light-black text-2xl  h-full justify-between items-center px-12">
            {navlink.map((item, i) => {
              const Icons = item.icon;
              return (
                <NavbarBottom
                  link={item.nav}
                  Icons={Icons}
                  key={i}
                  active={active}
                  setActive={setActive}
                  index={i}
                  el={el}
                  parentEl={parentEl}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
