import React, { useContext, useState } from "react";
import {
  Box,
  Container,
  PageEssentials,
  Brand,
  BrandName,
  TabNavigator,
  Tab,
  Client,
  Offer,
  OfferButton,
  ElemtText,
  LinkElement,
  Image,
  TabActive,
  DropdownMenu,
  DropdownItem,
  BurgerIcon,
  SideBar,
  SidebarList,
  Xbar,
  ListItem,
  SideButton,
} from "./DashboardNavbaeStyled";
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
        <TabActive secondary={globalColors.secondary}>
          {" "}
          {info.icon} {info.tabName}
        </TabActive>
      );
    } else {
      return (
        <Tab>
          {" "}
          {info.icon} {info.tabName}
        </Tab>
      );
    }
  }

  return (
    <Box secondary={globalColors.secondary} text={globalColors.text}>
      <Container>
        <PageEssentials>
          <Brand>
            <BrandName>Language App</BrandName>
          </Brand>
          <TabNavigator>
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
          </TabNavigator>
        </PageEssentials>
        <Client>
          <Offer>
            <OfferButton secondary={globalColors.secondary}>
              <FontAwesomeIcon
                style={{ marginRight: "6px" }}
                icon={faCrown}
              ></FontAwesomeIcon>
              60% off Premium
            </OfferButton>
          </Offer>
          <ElemtText>1/21</ElemtText>
          <Link style={{ color: globalColors.text }} to="/socialMedia">
            <LinkElement>
              <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
            </LinkElement>
          </Link>
          <Link style={{ color: globalColors.text }} to="/socialMedia">
            <LinkElement>
              <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
            </LinkElement>
          </Link>
          <Link style={{ color: globalColors.text }} to="/socialMedia">
            <LinkElement>
              <Image src={russianFlag} />
            </LinkElement>
          </Link>
          <LinkElement
            onClick={() => {
              setDropDownOpen(!dropDownOpen);
            }}
          >
            <Image src={avatarSample} />
          </LinkElement>
        </Client>
        <BurgerIcon>
          <FontAwesomeIcon
            onClick={() => setBarStatus(true)}
            style={{ cursor: "pointer" }}
            icon={faBars}
          />
        </BurgerIcon>
      </Container>
      {barStatus && (
        <SideBar bgColor={globalColors.secondary}>
          <Xbar>
            <FontAwesomeIcon
              onClick={() => setBarStatus(false)}
              icon={faXmark}
            ></FontAwesomeIcon>
          </Xbar>
          <SidebarList>
            <Link
              to="/dashboard/learning"
              onClick={() => setBarStatus(!barStatus)}
              style={{ textDecoration: "none" }}
            >
              <ListItem color={globalColors.text}>Learning</ListItem>
            </Link>
            <Link
              to="/dashboard/tools"
              onClick={() => setBarStatus(!barStatus)}
              style={{ textDecoration: "none" }}
            >
              <ListItem color={globalColors.text}>Tools</ListItem>
            </Link>
            <Link
              to="/dashboard/resource"
              onClick={() => setBarStatus(!barStatus)}
              style={{ textDecoration: "none" }}
            >
              <ListItem color={globalColors.text}>Resources</ListItem>
            </Link>
            <Link
              to="/dashboard/community"
              onClick={() => setBarStatus(!barStatus)}
              style={{ textDecoration: "none" }}
            >
              <SideButton color={globalColors.secondary}>
                <FontAwesomeIcon
                  style={{ marginRight: "6px", fontSize: "30px" }}
                  icon={faUsers}
                ></FontAwesomeIcon>
                Community
              </SideButton>
            </Link>
            <Link
              to="/dashboard/socialMedia"
              onClick={() => setBarStatus(!barStatus)}
              style={{ textDecoration: "none" }}
            >
              <SideButton color={globalColors.secondary}>
                <FontAwesomeIcon
                  style={{ marginRight: "6px", fontSize: "30px" }}
                  icon={faBell}
                ></FontAwesomeIcon>
                Notifications
              </SideButton>
            </Link>
            <Link
              to="/dashboard/community"
              onClick={() => setBarStatus(!barStatus)}
              style={{ textDecoration: "none" }}
            >
              <SideButton color={globalColors.secondary}>
                <Image
                  style={{ width: "30px", height: "30px" }}
                  src={russianFlag}
                />
                Language
              </SideButton>
            </Link>
            <Link
              to="/dashboard/community"
              onClick={() => setBarStatus(!barStatus)}
              style={{ textDecoration: "none" }}
            >
              <SideButton color={globalColors.secondary}>
                <Image
                  style={{ width: "30px", height: "30px" }}
                  src={avatarSample}
                />
                Profile
              </SideButton>
            </Link>
            <Link
              to="/"
              onClick={() => setBarStatus(!barStatus)}
              style={{ textDecoration: "none" }}
            >
              <OfferButton
                style={{ width: "100%", fontSize: "14px" }}
                secondary={globalColors.secondary}
              >
                <FontAwesomeIcon
                  style={{ marginRight: "6px" }}
                  icon={faCrown}
                ></FontAwesomeIcon>
                60% off Premium
              </OfferButton>
            </Link>
          </SidebarList>
        </SideBar>
      )}
      {dropDownOpen && (
        <DropdownMenu
          secondary={globalColors.secondary}
          text={globalColors.text}
        >
          {DropdownMenuData.map((tabInfo, idx) => {
            if (tabInfo.path) {
              return (
                <Link
                  style={{ color: globalColors.text, textDecoration: "none" }}
                  to={tabInfo.path}
                  key={idx}
                >
                  <DropdownItem>
                    {tabInfo.icon} {tabInfo.tabName}
                  </DropdownItem>
                </Link>
              );
            } else {
              return (
                <DropdownItem key={idx} onClick={() => signout()}>
                  {tabInfo.icon} {tabInfo.tabName}
                </DropdownItem>
              );
            }
          })}
        </DropdownMenu>
      )}
    </Box>
  );
};

export default DashboardNavbar;
