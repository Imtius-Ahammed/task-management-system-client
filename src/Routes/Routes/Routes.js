import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import CompletedTask from "../../Pages/CompletedTask/CompletedTask";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import Media from "../../Pages/Media/Media";
import MyTask from "../../Pages/MyTask/MyTask";
import Update from "../../Pages/Update/Update";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addTask",
        element: (
          <PrivateRoutes>
            <AddTask></AddTask>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myTask",
        element: (
          <PrivateRoutes>
            <MyTask></MyTask>
          </PrivateRoutes>
        ),
      },
      {
        path: "/completedTask",
        element: (
          <PrivateRoutes>
            <CompletedTask></CompletedTask>
          </PrivateRoutes>
        ),
      },
      {
        path: "/media",
        element: (
          <PrivateRoutes>
            <Media></Media>
          </PrivateRoutes>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <Update></Update>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://task-management-system-server.vercel.app/update/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
