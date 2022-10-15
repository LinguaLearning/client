import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

const ReadingPracticeType = () => {
  return (
    <div className="flex justify-center items-center py-5 h-[70vh]">
      <div className="">
        <h1 className="my-20 text-3xl font-normal block text-center">
          Read the sentence/word below by pressing the voice button
        </h1>
        <h1 className="my-20 text-4xl font-semibold block text-center">
          <span className="text-blue-500 underline">Bonjour</span>, comment
          vas-tu?
        </h1>
        <div className="flex justify-center">
          <div className="bg-gray-200 py-6 px-7 rounded-full cursor-pointer hover:bg-gray-300 ease-in-out transition-all duration-300">
            <FontAwesomeIcon
              className="text-3xl text-secondary"
              icon={faMicrophone}
            />
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <button className="block self-center sm:mt-4 bg-secondary text-white py-2.5 px-10 rounded font-semibold hover:bg-shadowHard ease-in-out duration-300 transition-all">
            Go Back
          </button>
          <button className="block self-center sm:mt-4 bg-secondary text-white py-2.5 px-10 rounded font-semibold hover:bg-shadowHard ease-in-out duration-300 transition-all">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadingPracticeType;
