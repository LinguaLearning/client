import RouterManagement from "./router/RouterManagement";
import { ColorProvider } from "./context/StylingContext/ColorContext";
import LessonProvider from "./context/lessonsContext/LessonContext";

function App() {
  return (
    <LessonProvider>
      <ColorProvider>
        <RouterManagement />
      </ColorProvider>
    </LessonProvider>
  );
}

export default App;
