import React from "react";
import { Container, Title } from "./ViewStyling";
import { useColors } from "../../context/StylingContext/ColorContext";
import { Resources } from "../../components";

const DashboardResources = () => {
  const globalColors = useColors();

  return (
    <Container>
      <Title secondary={globalColors.secondary}>Resources</Title>
      <Resources />
    </Container>
  );
};

export default DashboardResources;
