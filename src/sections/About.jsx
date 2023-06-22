import React, { useRef, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { logos } from "../data";
import resume from "../assets/Rusty-Resume.pdf";
const About = ({ AboutHeaderRef, aboutRef, aboutCardRef, sec }) => {
  const imgRef = useRef();
  const textRef = useRef();
  const card = useRef();

  const [flipCard, setFlipCard] = useState(false);

  return (
    <section
      ref={(ref) => sec.current.splice(1, 1, ref)}
      id="about"
      className=" w-full  inline-block "
    >
      <div className="sec-content-wrapper ">
        <h1
          ref={AboutHeaderRef}
          className="lg:text-6xl text-4xl font-bold mb-[50px] dark:text-primary-yellow text-center "
        >
          About Me
        </h1>
        <div
          ref={aboutCardRef}
          className={`main-card max-w-[900px] w-full  lg:h-[500px] h-[700px] m-auto  px-5`}
        >
          <div
            className={`card-container  ${flipCard ? "rotate180 " : null}  
             relative   z-100  w-full h-full dark:bg-secondary-black bg-white  text-primary-black dark:text-[#999999] `}
          >
            <div
              ref={card}
              className={`card backface-hidden h-full relative flex sm:flex-row flex-col-reverse ratate0deg shadow-xl`}
            >
              <div className="left sm:w-[40%] w-full ">
                <img
                  ref={imgRef}
                  className={`w-full h-full object-cover`}
                  src="profile.png"
                  alt=""
                />
              </div>
              <div
                ref={textRef}
                className="right font-thin sm:w-[60%] w-full md:p-12 p-5  sm:text-base text-sm relative h-full"
              >
                <p className=" text-secondary-black  dark:text-[#999999] ">
                  Hello, I am Rusty C. Mendoza A{" "}
                  <span className="font-bold px-1">Front End Developer</span>{" "}
                  based in Cagayan de Oro, Philippines. I am graduate of
                  Bachelor of Science in Information Technology, and I possess a
                  strong passion for creating dynamic and responsive websites
                  with excellent user interfaces that align with your specific
                  requirements and design preferences."
                </p>
                <button className="flex justify-center- items-center bg-primary-yellow px-2 py-1 gap-2 mt-5  text-secondary-black shadow-md hover:bg-secondary-yellow">
                  <AiOutlineDownload />
                  <a href={resume} download>
                    Resume
                  </a>
                </button>
                <span
                  onClick={() => setFlipCard(true)}
                  className="absolute bottom-[20px] right-[20px] cursor-pointer underline  dark:hover:text-white"
                >
                  <i>Click here </i> show Tech Skills
                </span>
              </div>
            </div>
            <div
              className={`
               rotate180 absolute card-face left-0 right-0 top-0 bottom-0 w-full backface-hidden shadow-xl sm:text-base text-sm  `}
            >
              <div className="relative h-full w-full">
                <h1 className="text-2xl text-center mt-7">Tech Skills</h1>
                {logos.length ? (
                  <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-7 p-5  justify-items-center rounded">
                    {logos.map((logo, id) => (
                      <div
                        key={logo.title}
                        className=" flex justify-center items items-center font-montserrat uppercase text-xs gap-2 shadow-md py-1 px-2 w-[120px] text-[#999999]  dark:hover:text-white"
                      >
                        <img
                          className=" lg:h-15 h-6  object-cover hover:scale-[1.3] transition ease-in-out delay-150 duration-300 "
                          src={logo.src}
                          alt=""
                        />
                        <span>{logo.title}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex justify-center items-center">
                    <h1 className="text-2xl">Loading...</h1>
                  </div>
                )}
                <span
                  onClick={() => setFlipCard(false)}
                  className="absolute bottom-[50px] right-[20px] cursor-pointer underline  dark:hover:text-white"
                >
                  <i>Click here </i>to show About Me
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
