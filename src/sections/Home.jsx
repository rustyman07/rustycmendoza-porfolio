const Home = ({ homeParaRef, HomeH1Ref, sec }) => {
  return (
    <section
      ref={(ref) => sec.current.splice(0, 1, ref)}
      id="home"
      className="w-screen text-center  "
    >
      <div className="sec-content-wrapper text-center ">
        {/* <h1 className="text-primary-yellow lg:text-5xl font-bold"></h1> */}
        <img
          className="rounded-[50%]  md:w-[350px] md:h-[350px] w-[250px] h-[250px] lg:mt-[100px] md:mt-[150px] m-auto mb-12"
          src="rus.png"
          alt=""
        />
        <div className="text-wrapper">
          <p ref={homeParaRef} className="sm:text-2xl dark:text-white mb-3">
            Hello, I am Rusty
          </p>
          <h1
            ref={HomeH1Ref}
            className="lg:text-5xl text-3xl drop-shadow-md font-bold text-primary-yellow"
          >
            Front-end Developer
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
