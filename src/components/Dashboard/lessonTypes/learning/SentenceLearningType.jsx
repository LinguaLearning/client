import React from "react";

const SentenceLearningType = () => {
  return (
    <div className="flex justify-center items-center py-5 h-[70vh]">
      <div className="">
        <h1 className="my-20 text-3xl font-normal block text-center">
          Hover over the word to see the meaning
        </h1>
        <h1 className="my-20 text-4xl font-semibold block text-center">
          <span className="text-blue-500 underline">Bonjour</span>, comment
          vas-tu?
        </h1>
        <div className="flex justify-between">
          <button className="block self-center my-4 sm:mt-4 bg-secondary text-white py-2.5 px-10 rounded font-semibold hover:bg-shadowHard ease-in-out duration-300 transition-all">
            Go Back
          </button>
          <button className="block self-center my-4 sm:mt-4 bg-secondary text-white py-2.5 px-10 rounded font-semibold hover:bg-shadowHard ease-in-out duration-300 transition-all">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SentenceLearningType;
