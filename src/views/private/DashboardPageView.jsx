import { Lessons } from "../../components";
import { getAllLessons } from "../../server/lessons";
import { useState, useEffect } from "react";

const DashboardPageView = () => {
  const [lessonsData, setLessonsData] = useState([]);
  useEffect(() => {
    getAllLessons().then((data) => setLessonsData(data));
  }, []);

  console.log(lessonsData);

  getAllLessons();
  return (
    <div className="mx-auto my-10 w-[85%] lg:w-[80%]">
      <h1 className="text-secondary text-4xl font-bold">The Lessons</h1>
      <Lessons lessonsData={lessonsData} />
    </div>
  );
};

export default DashboardPageView;
