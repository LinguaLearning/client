import RouterManagement from "./router/RouterManagement";
import { ColorProvider } from "./context/StylingContext/ColorContext";

function App() {
  return (
    <ColorProvider>
      <RouterManagement />
    </ColorProvider>
  );
}

export default App;
