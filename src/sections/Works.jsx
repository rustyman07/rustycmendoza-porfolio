import React, { useEffect } from "react";
import { data } from "../data";

const Works = ({
  sec,
  gridRef,
  worksHeaderRef,
  workCardRef,
  setData,
  getData,
}) => {
  useEffect(() => {
    setData(data);
  }, []);

  return (
    <section
      ref={(ref) => sec.current.splice(2, 1, ref)}
      id="project"
      className="w-full "
    >
      <div className="sec-content-wrapper ">
        <h1
          ref={worksHeaderRef}
          className="lg:text-6xl text-4xl font-bold mb-[50px] dark:text-primary-yellow text-center"
        >
          My Works
        </h1>
        <div
          ref={gridRef}
          className="grid-container max-w-[1440px] m-auto grid lg:grid-cols-3 gap-5 lg:gap-12 sm:grid-cols-2  sm:px-0 px-5"
        >
          {getData.map((data, i) => (
            <div
              key={i}
              ref={(ref) => workCardRef.current.splice(i, 1, ref)}
              className="card dark:text-white bg-white dark:bg-[#333333] shadow-md rounded-md overflow-hidden"
            >
              <img
                className="w-full sm:h-[250px] h-[200px] object-fill"
                src={data.image}
                alt=""
              />
              <div className="footer px-4 p-3 sm:text-base text-sm">
                <span>{data.title}</span>
                <p>{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
