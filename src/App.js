import RouterManagement from "./router/RouterManagement";
import LessonProvider from "./context/lessonsContext/LessonContext";

function App() {
  return (
    <LessonProvider>
      <RouterManagement />
    </LessonProvider>
  );
}

export default App;
