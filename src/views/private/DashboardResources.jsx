import React from "react";
import { Resources } from "../../components";

const DashboardResources = () => {
  return (
    <div className="mx-auto my-10 w-[85%] lg:w-[80%]">
      <h1 className="text-secondary text-4xl font-bold mb-4">Resources</h1>
      <Resources />
    </div>
  );
};

export default DashboardResources;
