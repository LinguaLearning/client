import React from "react";
import { Link } from "react-router-dom";

const Finish = () => {
  return (
    <div>
      <div className="font-bold text-5xl text-primary">
        Lesson is finished!!
      </div>
      <div className="flex justify-between">
        <Link to="/dashboard/learning">
          <button className="block self-center my-4 sm:mt-4 bg-secondary text-white py-2.5 px-10 rounded font-semibold hover:bg-shadowHard ease-in-out duration-300 transition-all">
            Go Home
          </button>
        </Link>
        <button className="block self-center my-4 sm:mt-4 bg-secondary text-white py-2.5 px-10 rounded font-semibold hover:bg-shadowHard ease-in-out duration-300 transition-all">
          Redo Lesson
        </button>
        <button className="block self-center my-4 sm:mt-4 bg-secondary text-white py-2.5 px-10 rounded font-semibold hover:bg-shadowHard ease-in-out duration-300 transition-all">
          Next Lesson
        </button>
      </div>
    </div>
  );
};

export default Finish;
