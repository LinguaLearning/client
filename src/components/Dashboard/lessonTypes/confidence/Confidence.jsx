import React from "react";

const Confidence = () => {
  return (
    <div className="flex justify-center items-center py-5 h-[70vh]">
      <div className="">
        <h1 className="text-4xl font-semibold block text-center">
          How much do you know this word?
        </h1>

        <h1 className="text-5xl my-[30px] font-bold block text-center">
          Bonjour
        </h1>

        <div className="flex">
          <button className="block self-center my-4 sm:mt-4 bg-secondary text-white py-2.5 px-10 rounded font-semibold hover:bg-shadowHard ease-in-out duration-300 transition-all mx-2">
            Very Bad
          </button>
          <button className="block self-center my-4 sm:mt-4 bg-secondary text-white py-2.5 px-10 rounded font-semibold hover:bg-shadowHard ease-in-out duration-300 transition-all mx-2">
            Bad
          </button>
          <button className="block self-center my-4 sm:mt-4 bg-secondary text-white py-2.5 px-10 rounded font-semibold hover:bg-shadowHard ease-in-out duration-300 transition-all mx-2">
            Not Enough
          </button>
          <button className="block self-center my-4 sm:mt-4 bg-secondary text-white py-2.5 px-10 rounded font-semibold hover:bg-shadowHard ease-in-out duration-300 transition-all mx-2">
            Normal
          </button>
          <button className="block self-center my-4 sm:mt-4 bg-secondary text-white py-2.5 px-10 rounded font-semibold hover:bg-shadowHard ease-in-out duration-300 transition-all mx-2">
            Good
          </button>
          <button className="block self-center my-4 sm:mt-4 bg-secondary text-white py-2.5 px-10 rounded font-semibold hover:bg-shadowHard ease-in-out duration-300 transition-all mx-2">
            Very Good
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confidence;
