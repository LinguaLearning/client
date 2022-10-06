import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Tools = () => {
  return (
    <div className="space-y-4">
      {[0, 1, 2, 3, 4, 5, 6].map((el) => (
        <div
          className="flex space-x-4 items-center bg-[#bed0ed] p-4 rounded-xl shadow-[0_3px_8px_rgba(0,0,0,0.24)]"
          key={el}
        >
          <img
            className="w-[70px] aspect-square rounded-full object-cover"
            alt=""
            src="https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
          <div className="flex flex-col flex-1">
            <p className="text-xl font-semibold">Flash Cards</p>
            <p className="text-secondary text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <FontAwesomeIcon
            className="text-secondary text-4xl"
            icon={faCircleExclamation}
          ></FontAwesomeIcon>
        </div>
      ))}
    </div>
  );
};

export default Tools;
