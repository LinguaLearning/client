import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/fontawesome-free-brands";

const DashboardFooter = () => {
  return (
    <div className="bg-secondary pt-6 flex flex-col">
      <div className="text-center my-1">
        <FontAwesomeIcon
          className="text-4xl px-2 text-text cursor-pointer"
          icon={faFacebookSquare}
        />
        <FontAwesomeIcon
          className="text-4xl px-2 text-text cursor-pointer"
          icon={faInstagram}
        />
        <FontAwesomeIcon
          className="text-4xl px-2 text-text cursor-pointer"
          icon={faTwitterSquare}
        />
      </div>
      <div className="text-center my-1">
        <div className="text-text inline px-1.5 cursor-pointer">Info</div>
        <div className="text-text inline px-1.5 cursor-pointer">Support</div>
        <div className="text-text inline px-1.5 cursor-pointer">Marketing</div>
      </div>
      <div className="text-center my-1">
        <div className="text-text inline px-1.5 cursor-pointer">
          Terms of User
        </div>
        <div className="text-text inline px-1.5 cursor-pointer">
          Privacy Policy
        </div>
      </div>
      <div className="text-center my-1">
        <p className="text-slate-400">&copy; 2022 Tweetalig</p>
      </div>
    </div>
  );
};

export default DashboardFooter;
