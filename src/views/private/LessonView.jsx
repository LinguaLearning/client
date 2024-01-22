import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Lesson } from "../../components";
import { LessonContext } from "../../context/lessonsContext/LessonContext";
import Finish from "../../components/Dashboard/lessonTypes/finish/Finish";

const LessonView = () => {
  const { selectedLesson } = useContext(LessonContext);
  let fullContainerLessonsCount = selectedLesson.lesson_container.length;
  // let percentage =
  //   JSON.stringify(((containerData + 1) / fullContainerLessonsCount) * 100) +
  //   "%";

  return (
    <>
      {/* {containerData !== fullContainerLessonsCount ? (
        <div>
          <div className="w-[90%] mx-auto my-10 flex justify-center items-center">
            <div className="w-1/4 flex justify-start">test</div>

            <div className="w-1/2 flex justify-center ">
              <div className="w-[80%] bg-gray-200 rounded-full h-4  dark:bg-grey-150">
                <div
                  className="bg-indigo-600 h-4 rounded-full dark:bg-indigo-500"
                  style={{ width: percentage }}
                ></div>
              </div>
            </div>
            <div className="w-1/4 flex justify-end">
              <Link to="/dashboard/learning">
                <div className="text-3xl">
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </Link>
            </div>
          </div>
          <Lesson selLesson={containerData}></Lesson>
        </div>
      ) : (
        <div>
          <div className="w-[90%] mx-auto my-10 flex justify-center items-center">
            <Finish />
          </div>
        </div>
      )} */}
    </>
  );
};

export default LessonView;
