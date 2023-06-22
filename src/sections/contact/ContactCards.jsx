const ContactCards = ({ contact, Icons, contactCardRef, index }) => {
  return (
    <div
      ref={(ref) => contactCardRef.current.splice(index, 1, ref)}
      className="text-gray-400  dark:bg-secondary-black bg-white flex shadow-md justify-center items-center p-4 gap-3 rounded-md"
    >
      <div className="rounded-[50%] dark:bg-[#272727] bg- p-2 card-shadow  ">
        <Icons className=" lg:text-[24px] " />
      </div>
      <p className=" text-secondary-black  dark:text-light-black  flex-grow">
        {contact}
      </p>
    </div>
  );
};

export default ContactCards;
