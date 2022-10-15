import React from "react";

const ImageLearningType = () => {
  return (
    <div className="flex justify-center items-center py-5 h-[70vh]">
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1664575196044-195f135295df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="meeting"
          className="w-[600px] h-[300px] object-cover"
        />
        <h1 className="my-20 text-4xl font-semibold block text-center">
          Bonjour - Hello!
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

export default ImageLearningType;
