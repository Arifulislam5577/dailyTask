import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AddMedia from "../pages/AddMedia/AddMedia";
import AddTask from "../pages/AddTask/AddTask";
import CompletedTask from "../pages/CompletedTask/CompletedTask";
import Dashboard from "../pages/Dashboard/DashBoard";
import Home from "../pages/Home/Home";
import MediaTask from "../pages/MediaTask/MediaTask";
import MyTask from "../pages/MyTask/MyTask";
const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/addTask", element: <AddTask /> },
      {
        path: "/myTask",
        element: <Dashboard />,
        children: [
          { index: true, element: <MyTask /> },
          { path: "addMediaTask", element: <AddMedia /> },
          { path: "mediaTask", element: <MediaTask /> },
        ],
      },
      { path: "/completed", element: <CompletedTask /> },
    ],
  },
]);

export default RootRouter;
