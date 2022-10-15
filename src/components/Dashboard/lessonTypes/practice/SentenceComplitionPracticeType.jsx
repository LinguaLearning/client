import React from "react";

const SentenceComplitionPracticeType = () => {
  return (
    <div className="flex justify-center items-center py-5 h-[70vh]">
      <div className="">
        <h1 className="my-20 text-3xl font-normal block text-center">
          Complete the sentence below
        </h1>
        <div className="flex justify-center my-20">
          <input
            type="text"
            className="border-b-2 border-solid py-1 border-secondary bg-[#f0f8ff] outline-none text-3xl w-40"
          />
          <h1 className=" text-4xl font-semibold block text-center">
            comment vas-tu?
          </h1>
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

export default SentenceComplitionPracticeType;
