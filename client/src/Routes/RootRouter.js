import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
const RootRouter = createBrowserRouter([
  { path: "/", element: <Layout />, children: [] },
]);

export default RootRouter;
