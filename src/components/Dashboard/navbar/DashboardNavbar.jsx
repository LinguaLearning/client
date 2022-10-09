import React, { useContext, useState } from "react";
import { useColors } from "../../../context/StylingContext/ColorContext";
import { Link } from "react-router-dom";
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
import { DashboardContext } from "../../../context/dashboardContext/DashboardContext";
import { DropdownMenuData } from "../../../static/navbarData/dashboardNavbar";
import { useAuth } from "../../../context/AuthContext";

const DashboardNavbar = () => {
  const [barStatus, setBarStatus] = useState(false);
  const { dashboardPath, setDashboardPath } = useContext(DashboardContext);
  const globalColors = useColors();
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const { signout } = useAuth();

  function checkIfActive(info) {
    if (dashboardPath === info.path) {
      return (
        <div className="mx-[10px] py-[5px] px-[15px] rounded-[10px] bg-[#9dbcc7] flex items-center text-secondary">
          {" "}
          {info.icon} {info.tabName}
        </div>
      );
    } else {
      return (
        <div className="mx-[10px] py-[5px] px-[15px] flex items-center">
          {" "}
          {info.icon} {info.tabName}
        </div>
      );
    }
  }

  return (
    <div className="relative bg-secondary py-2.5">
      <div className="flex justify-center">
        <div className="w-[95%] md:w-[90%] flex justify-between items-center">
          <div className="j">
            <Link style={{ textDecoration: "none" }} to="/">
              <p className="text-xl font-semibold text-text md:text-3xl w-fit">
                Language App
              </p>
            </Link>
          </div>
          <div className="w-1/4 hidden justify-start items-center md:flex">
            {dashboardDataNavbar.map((data, idx) => (
              <Link
                style={{ color: globalColors.text, textDecoration: "none" }}
                to={data.path}
                key={idx}
                onClick={() => setDashboardPath(data.path)}
              >
                {checkIfActive(data)}
              </Link>
            ))}
          </div>
          <div className="w-2/4 hidden justify-end items-center md:flex">
            <div>
              <div className="bg-[#9dbcc7] text-secondary py-[7px] px-5 rounded-[50px] font-bold">
                <FontAwesomeIcon
                  style={{ marginRight: "6px" }}
                  icon={faCrown}
                ></FontAwesomeIcon>
                60% off Premium
              </div>
            </div>
            <p className="ml-5 text-text">1/21</p>
            <Link style={{ color: globalColors.text }} to="/socialMedia">
              <div className="ml-[25px] flex items-center cursor-pointer">
                <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
              </div>
            </Link>
            <Link style={{ color: globalColors.text }} to="/socialMedia">
              <div className="ml-[25px] flex items-center cursor-pointer">
                <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
              </div>
            </Link>
            <Link style={{ color: globalColors.text }} to="/socialMedia">
              <div className="ml-[25px] flex items-center cursor-pointer">
                <img
                  src={russianFlag}
                  className="h-[35px] w-[35px] rounded-full"
                  alt="flag"
                />
              </div>
            </Link>
            <div
              className="ml-[25px] flex items-center cursor-pointer"
              onClick={() => {
                setDropDownOpen(!dropDownOpen);
              }}
            >
              <img
                src={avatarSample}
                className="h-[35px] w-[35px] rounded-[50%] object-cover"
                alt="avatar"
              />
            </div>
          </div>
          <div className="w-1/2 flex justify-end text-text font-extrabold text-2xl md:hidden">
            <FontAwesomeIcon
              onClick={() => setBarStatus(true)}
              style={{ cursor: "pointer" }}
              icon={faBars}
            />
          </div>
        </div>
      </div>
      {barStatus && (
        <div className="fixed bg-secondary top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center touch-none z-[100]">
          <div className="absolute left-5 top-3.5 text-text font-black text-3xl cursor-pointer">
            <FontAwesomeIcon
              onClick={() => setBarStatus(false)}
              icon={faXmark}
            ></FontAwesomeIcon>
          </div>
          <div>
            {dashboardDataNavbar.map((navItem) => (
              <Link
                to={navItem.path}
                onClick={() => setBarStatus(!barStatus)}
                style={{ textDecoration: "none" }}
              >
                <div className="font-semibold text-[33px] py-2.5 text-center text-text">
                  {navItem.tabName}
                </div>
              </Link>
            ))}
            <Link
              to="/dashboard/community"
              onClick={() => setBarStatus(!barStatus)}
              style={{ textDecoration: "none" }}
            >
              <div className="px-5 py-2.5 w-full my-[15px] rounded-[50px] border-none bg-[#9dbcc7] flex justify-between font-bold items-center text-text">
                <FontAwesomeIcon
                  style={{ marginRight: "6px", fontSize: "30px" }}
                  icon={faUsers}
                ></FontAwesomeIcon>
                Community
              </div>
            </Link>
            <Link
              to="/dashboard/socialMedia"
              onClick={() => setBarStatus(!barStatus)}
              style={{ textDecoration: "none" }}
            >
              <div className="px-5 py-2.5 w-full my-[15px] rounded-[50px] border-none bg-[#9dbcc7] flex justify-between font-bold items-center text-text">
                <FontAwesomeIcon
                  style={{ marginRight: "6px", fontSize: "30px" }}
                  icon={faBell}
                ></FontAwesomeIcon>
                Notifications
              </div>
            </Link>
            <Link
              to="/dashboard/settings"
              onClick={() => setBarStatus(!barStatus)}
              style={{ textDecoration: "none" }}
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
              style={{ textDecoration: "none" }}
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
              style={{ textDecoration: "none" }}
            >
              <div className="bg-[#9dbcc7] text-secondary py-[7px] px-5 rounded-[50px] font-bold">
                <FontAwesomeIcon
                  style={{ marginRight: "6px" }}
                  icon={faCrown}
                ></FontAwesomeIcon>
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
                <Link
                  style={{ color: globalColors.text, textDecoration: "none" }}
                  to={tabInfo.path}
                  key={idx}
                >
                  <div className="cursor-pointer w-[250px] font-lg my-2.5 mx-5">
                    {tabInfo.icon} {tabInfo.tabName}
                  </div>
                </Link>
              );
            } else {
              return (
                <div
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
    // <Box secondary={globalColors.secondary} text={globalColors.text}>

    //   {barStatus && (
    //     <SideBar bgColor={globalColors.secondary}>
    //       <Xbar>
    //         <FontAwesomeIcon
    //           onClick={() => setBarStatus(false)}
    //           icon={faXmark}
    //         ></FontAwesomeIcon>
    //       </Xbar>
    //       <SidebarList>
    //         <Link
    //           to="/dashboard/learning"
    //           onClick={() => setBarStatus(!barStatus)}
    //           style={{ textDecoration: "none" }}
    //         >
    //           <ListItem color={globalColors.text}>Learning</ListItem>
    //         </Link>
    //         <Link
    //           to="/dashboard/tools"
    //           onClick={() => setBarStatus(!barStatus)}
    //           style={{ textDecoration: "none" }}
    //         >
    //           <ListItem color={globalColors.text}>Tools</ListItem>
    //         </Link>
    //         <Link
    //           to="/dashboard/resource"
    //           onClick={() => setBarStatus(!barStatus)}
    //           style={{ textDecoration: "none" }}
    //         >
    //           <ListItem color={globalColors.text}>Resources</ListItem>
    //         </Link>
    //         <Link
    //           to="/dashboard/community"
    //           onClick={() => setBarStatus(!barStatus)}
    //           style={{ textDecoration: "none" }}
    //         >
    //           <SideButton color={globalColors.secondary}>
    //             <FontAwesomeIcon
    //               style={{ marginRight: "6px", fontSize: "30px" }}
    //               icon={faUsers}
    //             ></FontAwesomeIcon>
    //             Community
    //           </SideButton>
    //         </Link>
    //         <Link
    //           to="/dashboard/socialMedia"
    //           onClick={() => setBarStatus(!barStatus)}
    //           style={{ textDecoration: "none" }}
    //         >
    //           <SideButton color={globalColors.secondary}>
    //             <FontAwesomeIcon
    //               style={{ marginRight: "6px", fontSize: "30px" }}
    //               icon={faBell}
    //             ></FontAwesomeIcon>
    //             Notifications
    //           </SideButton>
    //         </Link>
    //         <Link
    //           to="/dashboard/community"
    //           onClick={() => setBarStatus(!barStatus)}
    //           style={{ textDecoration: "none" }}
    //         >
    //           <SideButton color={globalColors.secondary}>
    //             <Image
    //               style={{ width: "30px", height: "30px" }}
    //               src={russianFlag}
    //             />
    //             Language
    //           </SideButton>
    //         </Link>
    //         <Link
    //           to="/dashboard/community"
    //           onClick={() => setBarStatus(!barStatus)}
    //           style={{ textDecoration: "none" }}
    //         >
    //           <SideButton color={globalColors.secondary}>
    //             <Image
    //               style={{ width: "30px", height: "30px" }}
    //               src={avatarSample}
    //             />
    //             Profile
    //           </SideButton>
    //         </Link>
    //         <Link
    //           to="/"
    //           onClick={() => setBarStatus(!barStatus)}
    //           style={{ textDecoration: "none" }}
    //         >
    //           <OfferButton
    //             style={{ width: "100%", fontSize: "14px" }}
    //             secondary={globalColors.secondary}
    //           >
    //             <FontAwesomeIcon
    //               style={{ marginRight: "6px" }}
    //               icon={faCrown}
    //             ></FontAwesomeIcon>
    //             60% off Premium
    //           </OfferButton>
    //         </Link>
    //       </SidebarList>
    //     </SideBar>
    //   )}
    //
    // </Box>
  );
};

export default DashboardNavbar;
