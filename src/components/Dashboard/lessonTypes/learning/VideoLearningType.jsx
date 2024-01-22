import React from "react";
import LessonButtonsController from "../../../../lib/utilities/buttonsController/LessonButtonsController";

const VideoLearningType = ({ info }) => {
  return (
    <div className="flex justify-center items-center py-5 h-[70vh]">
      <div className="">
        <div className="flex justify-center">
          <video width="400" autoPlay controls>
            <source src={info.video} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
        <h1 className="my-20 text-4xl font-semibold block text-center">
          <span className="text-blue-500 underline">{info.importantWord}</span>
          {info.restSentence}
        </h1>
        <LessonButtonsController />
      </div>
    </div>
  );
};

export default VideoLearningType;
