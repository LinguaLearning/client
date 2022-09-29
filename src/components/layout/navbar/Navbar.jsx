import React, { useState } from "react";
import {
  Box,
  Brand,
  BrandName,
  Menu,
  NavElement,
  User,
  Button,
  Container,
  BurgerIcon,
  SideBar,
  Xbar,
  SidebarList,
  ListItem,
  ButtonSide,
} from "./NavbarStyled";
import { Link } from "react-router-dom";
import { useColors } from "../../../context/StylingContext/ColorContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [barStatus, setBarStatus] = useState(false);

  const globalColors = useColors();
  return (
    <Box primary={globalColors.primary}>
      <Container className="container">
        <Brand>
          <Link style={{ textDecoration: "none" }} to="/">
            <BrandName text={globalColors.text}>Language App</BrandName>
          </Link>
        </Brand>
        <Menu>
          <NavElement>
            <Link
              style={{ color: globalColors.text, textDecoration: "none" }}
              to="/"
            >
              Home
            </Link>
          </NavElement>
          <NavElement>
            <Link
              style={{ color: globalColors.text, textDecoration: "none" }}
              to="/about"
            >
              About
            </Link>
          </NavElement>
          <NavElement>
            <Link
              style={{ color: globalColors.text, textDecoration: "none" }}
              to="/pricing"
            >
              Pricing
            </Link>
          </NavElement>
          <NavElement>
            <Link
              style={{ color: globalColors.text, textDecoration: "none" }}
              to="/ideology"
            >
              Out Ideology
            </Link>
          </NavElement>
        </Menu>
        <User>
          <Link to="/login">
            <Button text={globalColors.text} primary={globalColors.primary}>
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button text={globalColors.text} primary={globalColors.primary}>
              Sign Up
            </Button>
          </Link>
        </User>
        <BurgerIcon>
          <FontAwesomeIcon
            onClick={() => setBarStatus(true)}
            style={{ cursor: "pointer" }}
            icon={faBars}
          />
        </BurgerIcon>
      </Container>
      {barStatus && (
        <SideBar bgColor={globalColors.primary}>
          <Xbar>
            <FontAwesomeIcon
              onClick={() => setBarStatus(false)}
              icon={faXmark}
            ></FontAwesomeIcon>
          </Xbar>
          <SidebarList>
            <Link
              to="/"
              onClick={() => setBarStatus(!barStatus)}
              style={{ textDecoration: "none" }}
            >
              <ListItem color={globalColors.text}>Home</ListItem>
            </Link>
            <Link
              to="/about"
              onClick={() => setBarStatus(!barStatus)}
              style={{ textDecoration: "none" }}
            >
              <ListItem color={globalColors.text}>About</ListItem>
            </Link>
            <Link
              to="/pricing"
              onClick={() => setBarStatus(!barStatus)}
              style={{ textDecoration: "none" }}
            >
              <ListItem color={globalColors.text}>Pricing</ListItem>
            </Link>
            <Link
              to="/ideology"
              onClick={() => setBarStatus(!barStatus)}
              style={{ textDecoration: "none" }}
            >
              <ListItem color={globalColors.text}>Our Ideology</ListItem>
            </Link>
            <Link
              to="/login"
              onClick={() => setBarStatus(!barStatus)}
              style={{ textDecoration: "none" }}
            >
              <ButtonSide color={globalColors.primary}>Login</ButtonSide>
            </Link>
            <Link
              to="/signup"
              onClick={() => setBarStatus(!barStatus)}
              style={{ textDecoration: "none" }}
            >
              <ButtonSide
                color={globalColors.primary}
                bgColor={globalColors.text}
              >
                SignUp
              </ButtonSide>
            </Link>
          </SidebarList>
        </SideBar>
      )}
    </Box>
  );
};

export default Navbar;
