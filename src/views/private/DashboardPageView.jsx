import { Lessons } from "../../components";
import { useSelector } from "react-redux";

const DashboardPageView = () => {
  const lessonsData = useSelector((state) => state.lessons.allLessons);

  return (
    <div className="mx-auto my-10 w-[85%] lg:w-[80%]">
      <h1 className="text-secondary text-4xl font-bold">The Lessons</h1>
      <Lessons lessonsData={lessonsData} />
    </div>
  );
};

export default DashboardPageView;
