import React from "react";
import {
  Footer,
  Container,
  Box,
  Row,
  LinkItem,
  Credit,
} from "./DashboardFooterStyled";
import { useColors } from "../../../context/StylingContext/ColorContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/fontawesome-free-brands";

const DashboardFooter = () => {
  const globalColors = useColors();
  return (
    <Footer bgColor={globalColors.secondary}>
      <Container>
        <Box>
          <Row>
            <FontAwesomeIcon
              style={{
                fontSize: "35px",
                padding: "0 10px",
                color: globalColors.text,
                cursor: "pointer",
              }}
              icon={faFacebookSquare}
            />
            <FontAwesomeIcon
              style={{
                fontSize: "35px",
                padding: "0 10px",
                cursor: "pointer",
                color: globalColors.text,
              }}
              icon={faInstagram}
            />
            <FontAwesomeIcon
              style={{
                fontSize: "35px",
                padding: "0 10px",
                color: globalColors.text,
                cursor: "pointer",
              }}
              icon={faTwitterSquare}
            />
          </Row>
          <Row>
            <LinkItem color={globalColors.text}>Info</LinkItem>
            <LinkItem color={globalColors.text}>Support</LinkItem>
            <LinkItem color={globalColors.text}>Marketing</LinkItem>
          </Row>
          <Row>
            <LinkItem color={globalColors.text}>Terms of User</LinkItem>
            <LinkItem color={globalColors.text}>Privacy Policy</LinkItem>
          </Row>
          <Row>
            <Credit>&copy; 2022 Tweetalig</Credit>
          </Row>
        </Box>
      </Container>
    </Footer>
  );
};

export default DashboardFooter;
