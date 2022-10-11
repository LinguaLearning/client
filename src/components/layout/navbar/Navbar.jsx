import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarData } from "../../../static/navbarData/pageNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [barStatus, setBarStatus] = useState(false);
  return (
    <div className="relative flex justify-center bg-primary py-2.5">
      <div className="flex w-[95%] lg:[93%] xl:w-[90%] justify-between items-center">
        <Link to="/">
          <p className="text-xl md:text-2xl xl:text-3xl font-semibold text-text">
            Language App
          </p>
        </Link>
        <div className="hidden justify-center items-center md:flex">
          {NavbarData.map((navItem) => (
            <div
              key={navItem.path}
              className="mx-3.5 lg:mx-5 font-medium text-base xl:text-[17px] text-text"
            >
              <Link to={navItem.path}>{navItem.name}</Link>
            </div>
          ))}
        </div>
        <div className="hidden justify-end md:flex">
          <Link to="/login">
            <div className="bg-text mx-1.5 lg:mx-2.5 py-2 text-sm lg:text-base px-3.5 lg:px-5 rounded-[20px] text-primary font-semibold border-text border-solid border-2 transition-all duration-300 ease-in-out cursor-pointer hover:bg-primary hover:text-text">
              Login
            </div>
          </Link>
          <Link to="/signup">
            <div className="bg-text mx-1.5 lg:mx-2.5 py-2 text-sm lg:text-base px-3.5 lg:px-5 rounded-[20px] text-primary font-semibold border-text border-solid border-2 transition-all duration-300 ease-in-out cursor-pointer hover:bg-primary hover:text-text">
              Sign Up
            </div>
          </Link>
        </div>
        <div className="w-1/2 flex justify-end text-text font-extrabold text-2xl md:hidden">
          <FontAwesomeIcon
            onClick={() => setBarStatus(true)}
            className="cursor-pointer"
            icon={faBars}
          />
        </div>
      </div>
      {barStatus && (
        <div className="absolute bg-primary top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center touch-none">
          <div className="absolute left-5 top-3.5 text-text font-black text-3xl cursor-pointer">
            <FontAwesomeIcon
              onClick={() => setBarStatus(false)}
              icon={faXmark}
            ></FontAwesomeIcon>
          </div>
          <div>
            {NavbarData.map((navItem) => (
              <Link
                key={navItem.path}
                to={navItem.path}
                onClick={() => setBarStatus(!barStatus)}
              >
                <div className="font-semibold text-[33px] py-2.5 text-center text-text">
                  {navItem.name}
                </div>
              </Link>
            ))}
            <Link to="/login">
              <div className="bg-text mx-2.5 py-2 px-5 rounded-[20px] text-primary font-semibold border-text border-solid border-2 transition-all duration-300 ease-in-out cursor-pointer hover:bg-primary hover:text-text text-center my-2.5">
                Login
              </div>
            </Link>
            <Link to="/signup">
              <div className="bg-text mx-2.5 py-2 px-5 rounded-[20px] text-primary font-semibold border-text border-solid border-2 transition-all duration-300 ease-in-out cursor-pointer hover:bg-primary hover:text-text text-center my-2.5">
                Sign Up
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
