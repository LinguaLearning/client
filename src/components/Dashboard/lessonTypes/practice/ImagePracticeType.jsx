import React from "react";

const ImagePracticeType = () => {
  return (
    <div className="flex justify-center items-center py-5 h-[70vh]">
      <div className="">
        <h1 className="my-20 text-4xl font-semibold block text-center">
          Write the word/sentence that describes the image
        </h1>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1664575196044-195f135295df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="meeting"
            className="w-[600px] h-[300px] object-cover pb-5"
          />
        </div>
        <div className="text-center py-5">
          <input
            type="text"
            className="border-b-2 border-solid py-1 border-secondary bg-[#f0f8ff] outline-none text-3xl w-[600px] text-center"
          />
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

export default ImagePracticeType;
