import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer({ theme }) {
  return (
    <footer
      className={` text-gray-800 px-4 py-6 md:px-16 ${
        theme === "dark" ? "bg-dark-theme text-white" : ""
      }`}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">About Us</h3>
            <p className="text-gray-600">
              We are a cutting-edge background remover web application that
              allows you to easily remove backgrounds from your images. Try it
              out now!
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              Contact Us
            </h3>
            <ul className="text-gray-600">
              <li>Email: info@bgremoverweb.com</li>
              <li>Phone: 123-456-7890</li>
              <li>Address: 123 Main St, City, State, ZIP</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Links</h3>
            <ul className="flex flex-col text-gray-600">
              <li>
                <Link
                  to="#howToUse"
                  className="mr-4 text-[16px] cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  How to Use
                </Link>
              </li>
              <li>
                <Link
                  to="#Demo"
                  className="mr-4 text-[16px] cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  to="#GetStarted"
                  className="mr-4 text-[16px]"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-600 transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/SaurabhSax23072"
                className="text-gray-400 hover:text-orange-600 transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/s.saurabh.saxena"
                className="text-gray-400 hover:text-orange-600 transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/saurabhsaxena83540"
                className="text-gray-400 hover:text-orange-600 transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />
        <p className="text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-yellow-400">PHOTO</span>FORGE Background Remover
          Web App. All rights reserved.
        </p>
        <div className="text-center text-gray-600 text-sm">
          {" "}
          Built with ❤️ using React.js by Saurabh Saxena.
        </div>
      </div>
    </footer>
  );
}
