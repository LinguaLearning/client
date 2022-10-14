import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import franceFlag from "../../../assets/franceFlag.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import loadingGif from "../../../assets/loading.gif";
import { Link } from "react-router-dom";
import { LessonContext } from "../../../context/lessonsContext/LessonContext";

const Lessons = ({ lessonsData }) => {
  const finishedTasks = 1;
  const allTasks = lessonsData.length;
  const percentage = Math.round((finishedTasks / allTasks) * 10000) / 100;
  const { setSelectedLesson } = useContext(LessonContext);

  return (
    <div className="flex justify-between ">
      <div className="flex flex-1 flex-row flex-wrap">
        {lessonsData.length > 0 ? (
          lessonsData.map((lesson, idx) => (
            <div
              key={idx}
              className="relative group transition-all duration-300 hover:opacity-95 hover:scale-105 sm:mr-4 md:mr-6 lg:mr-8 my-4 overflow-hidden cursor-pointer rounded-md shadow-[0_3px_8px_rgba(0,0,0,0.24)] w-full h-[50vh] sm:w-[180px] sm:h-[250px] md:w-[210px] md:h-[310px] xl:w-[240] xl:h-[340] 2xl:w-[290px] 2xl:h-[390px]"
            >
              <Link
                key={idx}
                to="/dashboard/lesson"
                onClick={() => setSelectedLesson(lesson)}
              >
                <img
                  src={lesson.image}
                  className="absolute object-cover rounded-md h-full w-full -z-10"
                  alt=""
                />
                <div className="h-1/2 p-3.5">
                  <p className=" text-3xl md:text-[44px] 2xl:text-5xl text-white font-semibold cs-shadow-text">
                    {lesson.title}
                  </p>
                  <p className="text-xl md:text-2xl text-white font-semibold cs-shadow-text">
                    Lesson {lesson.lesson_number}
                  </p>
                </div>
                <div className="absolute z-10 flex w-full h-full bottom-0 justify-center items-center">
                  <FontAwesomeIcon
                    className=" transition-all group-hover:text-6xl text-5xl group-hover:text-black text-gray-600 opacity-50"
                    icon={faPlayCircle}
                  />
                </div>
                <div className="h-1/2 relative">
                  <div className="absolute bottom-0 w-full h-full rounded-md bg-white clip-1" />
                  <div
                    className="absolute bottom-0 w-full h-full rounded-md bg-[#0072bb] clip-2"
                    color="blue"
                  >
                    <div className="flex absolute bottom-4 left-4 items-center">
                      <img className="w-9 md:w-10" alt="" src={franceFlag} />
                      <p className="font-bold text-text text-base md:text-xl ml-2.5">
                        French
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="w-full flex justify-center mt-20">
            <img className="w-40 h-40" src={loadingGif} alt="Loading..." />
          </div>
        )}
      </div>
      <div className="hidden md:flex flex-col w-64 2xl:w-72 bg-sky-100 rounded-md shadow-[0_3px_8px_rgba(0,0,0,0.24)]">
        <h1 className="font-bold text-4xl text-center m-5 text-secondary">
          Progress
        </h1>
        <div className="px-5 pb-5">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        <div className="px-5 pb-5">
          <h3 className="text-center text-xl font-semibold text-secondary">
            {`${finishedTasks}/${allTasks} of the tasks have been finished`}
          </h3>
        </div>
        <div className="px-5 pb-5">
          <div className="bg-secondary rounded-3xl p-2.5">
            <p className="text-2xl text-text text-center pt-2.5 font-semibold">
              Leaderboard
            </p>
            <div className="rounded-3xl bg-[aliceblue]">
              {[0, 1, 2, 3, 4].map((el) => (
                <div
                  className="rounded-3xl space-x-2 bg-[aliceblue] p-2.5 flex items-center justify-between"
                  key={el}
                >
                  <img
                    className="w-10 aspect-square object-cover rounded-full"
                    alt=""
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  />
                  <p className="text-sm font-medium">Jonathan Beckham</p>
                  <p className="text-sm">300</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
