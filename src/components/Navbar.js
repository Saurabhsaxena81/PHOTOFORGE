import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./theme.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [isOpen, setIsOpen] = useState(false); // State for toggling mobile menu

  const element = document.documentElement;

  // Handle theme change effect
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark");
    }
    // Store the theme in local storage
    localStorage.setItem("theme", theme);
  }, [theme, element]);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      className={`fixed top-0 left-0 right-0 z-50 transition duration-300 w-full ${
        scrolled
          ? `${
              theme === "dark"
                ? "bg-black shadow-md"
                : "bg-light-theme shadow-md"
            }`
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-6 py-3 flex justify-between items-center">
        {/* Brand */}
        <Link
          to="#"
          className="text-xl font-bold text-[26px] cursor-pointer"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <span className="text-yellow-400 hover:text-yellow-300">PHOTO</span>
          FORGE
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <div className={`md:hidden  ${
            theme === "dark"
              ? "bg-dark-theme text-light"
              : "bg-light-theme text-dark"
          }`}>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <AiOutlineClose className=" w-8 h-8  bg-slate-600 rounded-md" />
            ) : (
              <AiOutlineMenu className=" w-8 h-8" />
            )}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:w-auto md:flex flex-col md:flex-row items-center justify-center md:space-x-4 md:mt-0 mt-4 transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row items-center text-2xl font-semibold space-y-2 md:space-y-0 md:space-x-4">
            {["How to Use", "Demo", "Get Started"].map((item, index) => (
              <li
                key={index}
                className="group relative w-auto h-12 inline-block flex justify-center items-center"
              >
                <Link
                  to={`#${item.replace(" ", "")}`}
                  className="mr-4 text-[16px] cursor-pointer transition-colors duration-300 group-hover:text-black-300"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {item}
                </Link>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent">
                  <div className="h-full bg-yellow-500 transition-all duration-300 w-0 group-hover:w-full group-hover:opacity-100 opacity-0 rounded-full"></div>
                </div>
              </li>
            ))}
            <li className="flex items-center w-[50px] justify-center  hover:text-yellow-600 transition-colors duration-300">
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  className="theme-controller"
                  checked={theme === "dark"}
                  onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                />

                {/* Sun icon */}
                <svg
                  className="swap-off fill-current w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* Moon icon */}
                <svg
                  className="swap-on fill-current w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
