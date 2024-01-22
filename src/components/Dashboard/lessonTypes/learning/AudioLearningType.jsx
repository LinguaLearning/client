import React from "react";
import Audio from "../../../../lib/utilities/audio/Audio";
import LessonButtonsController from "../../../../lib/utilities/buttonsController/LessonButtonsController";

const AudioLearningType = ({ info }) => {
  return (
    <div className="flex justify-center items-center py-5 h-[70vh]">
      <div className="">
        <Audio audio={info} />
        <h1 className="my-20 text-4xl font-semibold block text-center">
          {info.word2} - {info.word1}
        </h1>
        <LessonButtonsController />
      </div>
    </div>
  );
};

export default AudioLearningType;
