import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import CompletedTask from "../../Pages/CompletedTask/CompletedTask";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
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
      }
    ]
  }
])
export default router;