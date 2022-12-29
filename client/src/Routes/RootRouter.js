import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AddMedia from "../pages/AddMedia/AddMedia";
import AddTask from "../pages/AddTask/AddTask";
import CompletedTask from "../pages/CompletedTask/CompletedTask";
import Dashboard from "../pages/Dashboard/DashBoard";
import UpdateTask from "../pages/Dashboard/UpdateTask";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MediaTask from "../pages/MediaTask/MediaTask";
import MyTask from "../pages/MyTask/MyTask";
import SignIn from "../pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/addTask",
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateTask",
        element: (
          <PrivateRoute>
            <UpdateTask />
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/signin", element: <SignIn /> },
      {
        path: "/myTask",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: (
              <PrivateRoute>
                <MyTask />
              </PrivateRoute>
            ),
          },
          {
            path: "addMediaTask",
            element: (
              <PrivateRoute>
                <AddMedia />
              </PrivateRoute>
            ),
          },

          {
            path: "mediaTask",
            element: (
              <PrivateRoute>
                <MediaTask />
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "/completed",
        element: (
          <PrivateRoute>
            <CompletedTask />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default RootRouter;
