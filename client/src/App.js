import { RouterProvider } from "react-router-dom";
import RootRouter from "./Routes/RootRouter";
function App() {
  return <RouterProvider router={RootRouter} />;
}

export default App;
