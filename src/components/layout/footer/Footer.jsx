import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { NavbarData } from "../../../lib/static/navbarData/pageNavbar";

const Footer = () => {
  return (
    <div className="flex mt-auto py-7 px-[10%] space-y-5 flex-col bg-secondary">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Language App
        </h1>
        <div className="flex flex-row space-x-3">
          <Link
            className="w-12 aspect-square text-primary rounded-full bg-secondary text-2xl transition-colors duration-300 flex justify-center items-center group"
            to={"/"}
          >
            <HiOutlineMail className="transition-all duration-200 group-hover:scale-125" />
          </Link>

          <Link
            className="w-12 aspect-square text-primary rounded-full bg-secondary text-2xl transition-colors duration-300 flex justify-center items-center group"
            to={"/"}
          >
            <FontAwesomeIcon
              className="transition-all duration-200 group-hover:scale-125"
              icon="fa-brands fa-instagram"
            />
          </Link>
          <Link
            className="w-12 aspect-square text-primary rounded-full bg-secondary text-2xl transition-colors duration-300 flex justify-center items-center group"
            to={"/"}
          >
            <FiFacebook className="transition-all duration-200 group-hover:scale-125" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center xs:items-center lg:items-start text-text space-y-7 xs:space-y-0">
        <div className="flex flex-col xs:flex-row space-y-7 xs:space-y-0 xs:space-x-20 sm:space-x-32 flex-1 justify-start">
          <div className="flex flex-col space-y-2.5">
            <h1 className="text-xl font-medium">Language App</h1>
            <div className="flex flex-col">
              {NavbarData.map(
                (navItem, i) =>
                  i > 0 && (
                    <Link
                      key={i}
                      className="font-light hover:text-primary transition-all duration-200 text-lg"
                      to={navItem.path}
                    >
                      {navItem.name}
                    </Link>
                  )
              )}
            </div>
          </div>
          <div className="flex flex-col space-y-2.5">
            <h1 className="text-xl font-medium">Connect</h1>
            <div className="flex flex-col">
              <Link
                to={"/"}
                className="font-light hover:text-primary transition-all duration-200 text-lg"
              >
                Contact Us
              </Link>
              <Link
                to={"/"}
                className="font-light hover:text-primary transition-all duration-200 text-lg"
              >
                Security
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-2.5">
            <h1 className="text-xl font-medium">COURSES</h1>
            <div className="flex flex-col">
              <Link
                to={"/"}
                className="font-light hover:text-primary transition-all duration-200 text-lg"
              >
                English
              </Link>
              <Link
                to={"/"}
                className="font-light hover:text-primary transition-all duration-200 text-lg"
              >
                German
              </Link>
              <Link
                to={"/"}
                className="font-light hover:text-primary transition-all duration-200 text-lg"
              >
                French
              </Link>
              <Link
                to={"/"}
                className="font-light hover:text-primary transition-all duration-200 text-lg"
              >
                Italian
              </Link>
              <Link
                to={"/"}
                className="font-light hover:text-primary transition-all duration-200 text-lg"
              >
                Spanish
              </Link>
              <Link
                to={"/"}
                className="font-light hover:text-primary transition-all duration-200 text-lg"
              >
                Russian
              </Link>
              <Link
                to={"/"}
                className="font-light hover:text-primary transition-all duration-200 text-lg"
              >
                Turkish
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link
            className="px-8 py-4 bg-primary border rounded-lg border-primary text-secondary hover:text-primary hover:bg-secondary transition-colors duration-300"
            to={"/dashboard"}
          >
            Start Course
          </Link>
        </div>
      </div>
      <div>
        <small className="text-text">
          © 2022 Language App. All rights reserved.
        </small>
      </div>
    </div>
  );
};

export default Footer;
