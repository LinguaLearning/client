import React from "react";

const ContainerLayout = ({ children }) => {
  return (
    <div className="w-[90%] sm:w-[80%] md:w-[65%] bg-white shadow-sm my-12 mx-auto rounded-2xl p-7">
      {children}
    </div>
  );
};

export default ContainerLayout;
