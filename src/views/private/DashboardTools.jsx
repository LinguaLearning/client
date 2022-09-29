import React from "react";
import { Tools } from "../../components";
import { Container, Title } from "./ViewStyling";
import { useColors } from "../../context/StylingContext/ColorContext";

const DashboardTools = () => {
  const globalColors = useColors();

  return (
    <Container>
      <Title secondary={globalColors.secondary}>Tools</Title>
      <Tools />
    </Container>
  );
};

export default DashboardTools;
