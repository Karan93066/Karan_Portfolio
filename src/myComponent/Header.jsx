import React, { useState, useEffect, useRef } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import { gsap, Elastic } from "gsap";
import "./Additional.css";

function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "HOME", toLink: "home" },
    { id: 2, text: "ABOUT", toLink: "about" },
    { id: 3, text: "PROJECTS", toLink: "projects" },
    { id: 4, text: "CONTACT", toLink: "contact" },
  ];

  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    function handleMouseLeave() {
      gsap.to(".button-circle, .button-text", {
        duration: 2,
        scale: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut.config(2, 0.3),
      });
    }

    function handleMouseMove(e) {
      parallaxIt(e, ".button-circle", 75);
      parallaxIt(e, ".button-text", 50);
    }

    function parallaxIt(e, target, movement) {
      const boundingRect = wrapper.getBoundingClientRect();
      const relX = e.pageX - boundingRect.left;
      const relY = e.pageY - boundingRect.top;

      gsap.to(target, {
        duration: 0.3,
        x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
        y: ((relY - boundingRect.height / 2) / boundingRect.width) * movement,
      });
    }

    wrapper.addEventListener("mouseleave", handleMouseLeave);
    wrapper.addEventListener("mousemove", handleMouseMove);

    return () => {
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
      wrapper.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="h-[100vh]">
        <video
          src="/background.webm"
          className="h-[100vh]"
          autoPlay
          muted
          loop
          playsinline
        ></video>
        <div className="stick top-0 z-50 flex justify-between items-center h-20 max-w-auto mx-auto lg:px-20 pl-8 text-white bg-black bg-opacity-75">
          <div className="basis-1/2">
            <h2 data-text="Karan." className="text-3xl font-bold cursor-pointer">
              Karan.
            </h2>
          </div>
          <div className="hidden md:flex">
            <ul className="md:flex">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="p-4 font-bold text-white rounded-xl m-2 cursor-pointer duration-300 btn"
                >
                  <ScrollLink
                    to={item.toLink}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.text}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <div className="md:flex text-white p-4 gap-4">
              <div className="m-2 transition-colors duration-[0.5s] ease-in-out hover:text-[#01fe87] cursor-pointer">
                <a
                  href="https://www.instagram.com/karan_sing12/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram size={25} />
                </a>
              </div>
              <div className="m-2 transition-colors duration-[.5s] ease-in-out hover:text-[#01fe87] cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/karan-singh-34bb13236/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin size={25} />
                </a>
              </div>
              <div className="m-2 transition-colors duration-[.5s] ease-in-out hover:text-[#01fe87] cursor-pointer">
                <a
                  href="https://github.com/Karan93066"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub size={25} />
                </a>
              </div>
            </div>
          </div>
          <div onClick={handleNav} className="block md:hidden basis-1/4">
            {nav ? (
              <AiOutlineClose size={30} color={"white"} />
            ) : (
              <AiOutlineMenu size={30} color={"white"} />
            )}
          </div>
          <ul
            className={
              nav
                ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
            }
          >
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
              KARAN.
            </h1>
            {navItems.map((item) => (
              <li
                key={item.id}
                className="p-4 border-b rounded-xl cursor-pointer border-gray-600"
              >
                <ScrollLink
                  to={item.toLink}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={handleNav}
                >
                  {item.text}
                </ScrollLink>
              </li>
            ))}
            <div className="flex flex-row p-4 ">
              <div className="m-2 cursor-pointer">
                <a
                  href="https://www.instagram.com/karan_sing12/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram size={25} />
                </a>
              </div>
              <div className="m-2 cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/karan-singh-34bb13236/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin size={25} />
                </a>
              </div>
              <div className="m-2 cursor-pointer">
                <a
                  href="https://github.com/Karan93066"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub size={25} />
                </a>
              </div>
            </div>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-items-center lg:my-20 mt-60">
          <div className="wrapper">
            <h1 className="lg:text-6xl text-3xl text-white font-bold text-center lg:mt-16 heading">
              HEY, I'M KARAN
            </h1>
          </div>
          <div className="lg:py-12 py-8 px-2">
            <p className="lg:text-xl text-large text-white font-large text-center lg:px-80">
              A Result-Oriented Web Developer building and managing Websites and
              Web Applications that leads to the success of the overall product
            </p>
          </div>
          <div
            className="text-center lg:py-10 py-6 button-circle"
            ref={wrapperRef}
          >
            <button className="text-[#60c1a2] button-text">
              <ScrollLink to="projects" smooth={true} duration={500}>
                Projects
              </ScrollLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
