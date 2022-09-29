import React from "react";
import { Container } from "./ContainerLayoutStyled";

const ContainerLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContainerLayout;
