import React from "react";

const ImageDescPracticeType = () => {
  return (
    <div className="flex justify-center items-center py-5 h-[70vh]">
      <div className="">
        <h1 className="my-20 text-4xl font-semibold block text-center">
          What does this image describe?
        </h1>
        <img
          src="https://images.unsplash.com/photo-1664575196044-195f135295df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="meeting"
          className="w-[600px] h-[300px] object-cover pb-5"
        />
        <div className="wrap">
          <div className="flex justify-center py-2">
            <div className="cursor-pointer w-[200px] py-3 bg-gray-100 border-2 border-solid rounded-lg border-black text-xl font-semibold text-center mx-2">
              Hello!
            </div>
            <div className="cursor-pointer w-[200px] py-3 bg-gray-100 border-2 border-solid rounded-lg border-black text-xl font-semibold text-center mx-2">
              Goodbye!
            </div>
          </div>
          <div className="flex justify-center py-2">
            <div className="cursor-pointer w-[200px] py-3 bg-gray-100 border-2 border-solid rounded-lg border-black text-xl font-semibold text-center mx-2">
              Good Afternoon!
            </div>
            <div className="cursor-pointer w-[200px] py-3 bg-gray-100 border-2 border-solid rounded-lg border-black text-xl font-semibold text-center mx-2">
              Good Night!
            </div>
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

export default ImageDescPracticeType;
