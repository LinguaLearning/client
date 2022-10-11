import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBell,
  faCrown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import russianFlag from "../../../assets/Flag_of_Russia.svg.png";
import avatarSample from "../../../assets/avatar.jpg";
import { dashboardDataNavbar } from "../../../static/navbarData/dashboardNavbar";
import { DropdownMenuData } from "../../../static/navbarData/dashboardNavbar";
import { useAuth } from "../../../context/AuthContext";

const DashboardNavbar = () => {
  const [barStatus, setBarStatus] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const { signout } = useAuth();

  return (
    <div className=" relative bg-secondary py-2.5">
      <div className="flex justify-center">
        <div className="flex w-[95%] lg:[93%] xl:w-[90%] justify-between items-center">
          <Link to="/">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-text">
              Language App
            </p>
          </Link>
          <div className="hidden flex-1 ml-6 xl:ml-12 justify-start items-center md:flex">
            {dashboardDataNavbar.map((data, idx) => (
              <NavLink
                className={({ isActive }) =>
                  `mr-2 text-sm lg:text-base lg:mr-2.5 py-1 rounded-[10px] px-3 lg:px-4 flex items-center ${
                    isActive ? "text-secondary bg-[#9dbcc7]" : "text-text"
                  }`
                }
                to={data.path}
                key={idx}
              >
                {data.icon} {data.tabName}
              </NavLink>
            ))}
          </div>
          <div className="hidden space-x-3 lg:space-x-5 items-center md:flex">
            <div className="hidden xl:flex bg-[#9dbcc7] text-secondary items-center py-[7px] px-5 rounded-[50px] font-bold">
              <FontAwesomeIcon className="mr-1.5" icon={faCrown} />
              60% off Premium
            </div>
            <p className="text-text">1/21</p>
            <Link to="/socialMedia">
              <FontAwesomeIcon
                className="cursor-pointer text-text"
                icon={faUsers}
              />
            </Link>
            <Link to="/socialMedia">
              <FontAwesomeIcon
                className="cursor-pointer text-text"
                icon={faBell}
              />
            </Link>
            <Link to="/socialMedia">
              <img
                src={russianFlag}
                className="cursor-pointer w-[35px] aspect-square rounded-full object-cover"
                alt="flag"
              />
            </Link>

            <img
              onClick={() => {
                setDropDownOpen(!dropDownOpen);
              }}
              src={avatarSample}
              className="cursor-pointer w-[35px] aspect-square rounded-full object-cover"
              alt="avatar"
            />
          </div>
          <FontAwesomeIcon
            className="cursor-pointer text-text font-extrabold text-2xl md:hidden"
            onClick={() => setBarStatus(true)}
            icon={faBars}
          />
        </div>
      </div>
      {barStatus && (
        <div className="fixed bg-secondary top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center touch-none z-[100]">
          <div className="absolute left-5 top-3.5 text-text font-black text-3xl cursor-pointer">
            <FontAwesomeIcon
              onClick={() => setBarStatus(false)}
              icon={faXmark}
            />
          </div>
          <div>
            {dashboardDataNavbar.map((navItem) => (
              <Link to={navItem.path} onClick={() => setBarStatus(!barStatus)}>
                <div className="font-semibold text-[33px] py-2.5 text-center text-text">
                  {navItem.tabName}
                </div>
              </Link>
            ))}
            <Link
              to="/dashboard/community"
              onClick={() => setBarStatus(!barStatus)}
            >
              <div className="px-5 py-2.5 w-full my-[15px] rounded-[50px] border-none bg-[#9dbcc7] flex justify-between font-bold items-center text-text">
                <FontAwesomeIcon className="mr-1.5 text-3xl" icon={faUsers} />
                Community
              </div>
            </Link>
            <Link
              to="/dashboard/socialMedia"
              onClick={() => setBarStatus(!barStatus)}
            >
              <div className="px-5 py-2.5 w-full my-[15px] rounded-[50px] border-none bg-[#9dbcc7] flex justify-between font-bold items-center text-text">
                <FontAwesomeIcon className="mr-1.5 text-3xl" icon={faBell} />
                Notifications
              </div>
            </Link>
            <Link
              to="/dashboard/settings"
              onClick={() => setBarStatus(!barStatus)}
            >
              <div className="px-5 py-2.5 w-full my-[15px] rounded-[50px] border-none bg-[#9dbcc7] flex justify-between font-bold items-center text-text">
                <img
                  className="w-[30px] h-[30px] object-cover rounded-full"
                  alt="flag"
                  src={russianFlag}
                />
                Language
              </div>
            </Link>
            <Link
              to="/dashboard/profile"
              onClick={() => setBarStatus(!barStatus)}
            >
              <div className="px-5 py-2.5 w-full my-[15px] rounded-[50px] border-none bg-[#9dbcc7] flex justify-between font-bold items-center text-text">
                <img
                  className="w-[30px] h-[30px] object-cover rounded-full"
                  alt="flag"
                  src={avatarSample}
                />
                Profile
              </div>
            </Link>
            <Link
              to="/dashboard/profile"
              onClick={() => setBarStatus(!barStatus)}
            >
              <div className="bg-[#9dbcc7] text-secondary py-[7px] px-5 rounded-[50px] font-bold">
                <FontAwesomeIcon className="mr-1.5" icon={faCrown} />
                60% off Premium
              </div>
            </Link>
          </div>
        </div>
      )}
      {dropDownOpen && (
        <div className="absolute right-[40px] bg-secondary rounded-[10px] border-solid border-[#dedede] border-[1px] text-text">
          {DropdownMenuData.map((tabInfo, idx) => {
            if (tabInfo.path) {
              return (
                <Link to={tabInfo.path} key={idx}>
                  <div className="cursor-pointer w-[250px] text-text font-lg my-2.5 mx-5">
                    {tabInfo.icon} {tabInfo.tabName}
                  </div>
                </Link>
              );
            } else {
              return (
                <div
                  key={idx}
                  className="cursor-pointer w-[250px] font-lg my-2.5 mx-5"
                  onClick={() => signout()}
                >
                  {tabInfo.icon} {tabInfo.tabName}
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default DashboardNavbar;
