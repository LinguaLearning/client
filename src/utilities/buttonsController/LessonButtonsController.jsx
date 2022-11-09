import React from "react";
import { useDispatch } from "react-redux";
import {
  moveOneContainerUp,
  moveOneContainerDown,
} from "../../redux/lessonsStore/lessonContainerSlice";

const LessonButtonsController = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between">
      <button
        onClick={() => dispatch(moveOneContainerDown())}
        className="block self-center my-4 sm:mt-4 bg-secondary text-white py-2.5 px-10 rounded font-semibold hover:bg-shadowHard ease-in-out duration-300 transition-all"
      >
        Go Back
      </button>
      <button
        onClick={() => dispatch(moveOneContainerUp())}
        className="block self-center my-4 sm:mt-4 bg-secondary text-white py-2.5 px-10 rounded font-semibold hover:bg-shadowHard ease-in-out duration-300 transition-all"
      >
        Continue
      </button>
    </div>
  );
};

export default LessonButtonsController;
