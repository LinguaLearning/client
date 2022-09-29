import React from "react";
import { DashboardNavbar, DashboardFooter } from "../../";
import DashboardProvider from "../../../context/dashboardContext/DashboardContext";

const DashboardLayout = ({ children }) => {
  return (
    <DashboardProvider>
      <DashboardNavbar />
      {children}
      <DashboardFooter />
    </DashboardProvider>
  );
};

export default DashboardLayout;
