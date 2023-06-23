import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import ContactCards from "./ContactCards";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { contact } from "../../data";
import emailjs from "@emailjs/browser";
import Alert from "./Alert";
const initialValues = {
  user_name: "",
  user_email: "",
  message: "",
};
const Contacts = ({ sec, contactHeaderRef, contactCardRef, isMobile }) => {
  const contactCardForm = useRef();
  const form = useRef();
  const [inputData, setInputData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "" });
  const prevName = useRef("");

  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(contactCardForm.current, {
        y: 80,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: sec.current[3],
          ease: "ease-in",
          start: `${isMobile ? "30%" : "top"} 60%`,
          end: "70% 30%",
          toggleActions: "restart none none  reverse",
        },
      });
    });
    return () => ctx.revert();
  }, [isMobile]);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setInputData({
        user_name: "",
        user_email: "",
        message: "",
      });
      setAlert({
        show: true,
        message: `Your message has been sent successfully. Salamat ${
          inputData.user_name.charAt(0).toUpperCase() +
          inputData.user_name.slice(1)
        }`,
      });
      setInputData(initialValues);
    }
  }, [formErrors]);
  useEffect(() => {
    prevName.current = setInputData.user_name;
  }, [setInputData.user_name]);
  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors(validate(inputData));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex1 = /^[A-Za-z\s]*$/;

    if (!values.user_name) {
      errors.user_name = "Name is required!";
    } else if (values.user_name.length < 3) {
      errors.user_name = "Name must atleast 3 character!";
    } else if (!regex1.test(values.user_name)) {
      errors.user_name = "Please enter a valid name!";
    }
    if (!values.user_email) {
      errors.user_email = "Email is required!";
    } else if (!regex.test(values.user_email)) {
      errors.user_email = "This is not a valid email format";
    }
    if (!values.message) {
      errors.message = "Please add some message";
    }
    return errors;
  };
  return (
    <section
      ref={(ref) => sec.current.splice(3, 1, ref)}
      id="contact"
      className=" relative min-h-[calc(100vh)] "
    >
      <div className="sec-content-wrapper h-100% flex flex-col lg:  pb-0 ">
        <h1
          ref={contactHeaderRef}
          className="lg:text-6xl text-4xl font-bold mb-[50px] dark:text-primary-yellow  text-center "
        >
          Contacts
        </h1>
        <div className="flex lg:flex-row flex-col justify-center max-w-[900px] mx-auto lg:gap-5 gap-3 dark:text-light-black  lg:px-0 px-5">
          <div className="left flex lg:w-[300px] w-full flex-col lg:gap-5 gap-3 text-sm lg:text-base">
            <ContactCards
              contact={contact.email}
              Icons={contact.icon[0]}
              contactCardRef={contactCardRef}
              index={0}
            />
            <ContactCards
              contact={contact.phoneNumber}
              Icons={contact.icon[1]}
              contactCardRef={contactCardRef}
              index={1}
            />
            <ContactCards
              contact={contact.address}
              Icons={contact.icon[2]}
              contactCardRef={contactCardRef}
              index={2}
            />
          </div>
          <div
            ref={contactCardForm}
            className="p-5 gap-3 rounded-md shadow-md bg-white dark:bg-secondary-black"
          >
            <form ref={form} onSubmit={sendEmail}>
              <div className="right flex flex-col gap-4  text-sm lg:text-base ">
                <div className="header ">
                  <h1 className="font-bold dark:text-white mb-1">
                    Send Message
                  </h1>
                  <p>
                    Want to get in touch or talk about project? Feel free to
                    contact me via email. or you can drop a line in the form
                    below.
                  </p>
                </div>
                {alert.show && <Alert alert={alert} setAlert={setAlert} />}
                <div className="input-items flex sm:flex-row flex-col gap-3">
                  <div className="input-group grow">
                    <input
                      className="appearance-none border  dark:border-tertiary-black rounded w-full lg:py-2 py-3 px-3 leading-tight focus:outline-none 
                  focus:shadow-outline bg-transparent  dark:placeholder-light-black placeholder-secondary-black"
                      type="text"
                      placeholder="Name"
                      name="user_name"
                      value={inputData.user_name}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <p className=" text-red-400 text-sm mt-1">
                      {formErrors.user_name}
                    </p>
                  </div>

                  <div className="input-group grow">
                    <input
                      className=" appearance-none border  dark:border-tertiary-black rounded w-full lg:py-2 py-3 px-3 leading-tight focus:outline-none 
                  focus:shadow-outline bg-transparent  dark:placeholder-light-black placeholder-secondary-black"
                      type="email"
                      placeholder="Email"
                      name="user_email"
                      value={inputData.user_email}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <p className=" text-red-400 text-sm mt-1">
                      {formErrors.user_email}
                    </p>
                  </div>
                </div>

                <div className="input-items appearance-none   w-full leading-tight ">
                  <textarea
                    className="focus:outline-none outline-none rounded border py-2 px-3 dark:border-tertiary-black focus:shadow-outline w-full h-full bg-transparent dark:placeholder-light-black placeholder-secondary-black"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    name="message"
                    value={inputData.message}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  ></textarea>
                  <p className=" text-red-400 text-sm">{formErrors.message}</p>
                </div>
              </div>
              <input
                type="submit"
                value="Send"
                className=" bg-primary-yellow px-6 py-1 gap-2 mt-3 text-secondary-black shadow-md hover:bg-secondary-yellow"
              />
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Contacts;
