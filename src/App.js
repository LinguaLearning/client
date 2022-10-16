import RouterManagement from "./router/RouterManagement";
import LessonProvider from "./context/lessonsContext/LessonContext";
import { useDispatch } from "react-redux";
import { getAllLessons } from "./server/lessons";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLessons());
  });

  return (
    <LessonProvider>
      <RouterManagement />
    </LessonProvider>
  );
}

export default App;
