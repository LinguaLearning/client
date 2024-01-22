import React from "react";
import LessonButtonsController from "../../../../lib/utilities/buttonsController/LessonButtonsController";

const ImageLearningType = ({ info }) => {
  return (
    <div className="flex justify-center items-center py-5 h-[70vh]">
      <div className="">
        <img
          src={info.img}
          alt="meeting"
          className="w-[600px] h-[300px] object-cover"
        />
        <h1 className="my-20 text-4xl font-semibold block text-center">
          {info.word2} - {info.word1}
        </h1>
        <LessonButtonsController />
      </div>
    </div>
  );
};

export default ImageLearningType;
