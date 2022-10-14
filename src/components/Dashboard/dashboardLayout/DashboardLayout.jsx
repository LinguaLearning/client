import React from "react";
import { DashboardNavbar, DashboardFooter } from "../../";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <DashboardNavbar />
      {children}
      <DashboardFooter />
    </>
  );
};

export default DashboardLayout;
