import { Lessons } from "../../components";
import { useLessons } from "../../lib/api/lessons";

const DashboardPageView = () => {
  const {data: lessonsData} = useLessons();

  return (
    <div className="mx-auto my-10 w-[85%] lg:w-[80%]">
      <h1 className="text-secondary text-4xl font-bold">The Lessons</h1>
      <Lessons lessonsData={lessonsData} />
    </div>
  );
};

export default DashboardPageView;
