import React from "react";
import testingVideo from "../../../../assets/Mercedes Glk - 1406.mp4";

const VideoLearningType = () => {
  return (
    <div className="flex justify-center items-center py-5 h-[70vh]">
      <div className="">
        <div className="flex justify-center">
          <video width="400" autoPlay controls>
            <source src={testingVideo} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
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

export default VideoLearningType;
