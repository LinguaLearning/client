import React from "react";
import LessonButtonsController from "../../../../lib/utilities/buttonsController/LessonButtonsController";

const SentenceLearningType = ({ info }) => {
  return (
    <div className="flex justify-center items-center py-5 h-[70vh]">
      <div className="">
        <h1 className="my-20 text-3xl font-normal block text-center">
          Hover over the word to see the meaning
        </h1>
        <h1 className="my-20 text-4xl font-semibold block text-center">
          <span className="text-blue-500 underline">{info.importantWord}</span>
          {info.restSentence}
        </h1>
        <LessonButtonsController />
      </div>
    </div>
  );
};

export default SentenceLearningType;
