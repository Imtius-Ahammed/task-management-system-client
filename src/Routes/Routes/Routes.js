import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import CompletedTask from "../../Pages/CompletedTask/CompletedTask";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import Media from "../../Pages/Media/Media";
import MyTask from "../../Pages/MyTask/MyTask";
const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addTask',
        element:<AddTask></AddTask>
      },
      {
        path:'/myTask',
        element:<MyTask></MyTask>
      },
      {
        path:'/completedTask',
        element:<CompletedTask></CompletedTask>
      },
      {
        path:'/media',
        element:<Media></Media>
      }
    ]
  }
])
export default router;