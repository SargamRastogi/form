import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import User from "./components/User";
import NotFound from "./components/Notfound";
import DefaultLayout from "./views/DefaultLayout";
import GuestLayout from "./views/GuestLayout";
import Dashboard from "./components/Dashboard";
import UserForm from "./components/UserForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children :[
            {
                path: "/",
                element: <Navigate to = "/users"/>
              },
                {
                    path: "/dashboard",
                    element: <Dashboard/>,
                  },
                  {
                    path: "/users",
                    element: <User/>,
                  },
                  {
                    path: "/users/new",
                    element: <UserForm key = "userCreate"/>,
                  },
                  {
                    path: "/users/:id",
                    element: <UserForm key = "userUpdate"/>,
                  },
            
            
        ]
      },
      {
        path: "/",
        element: <GuestLayout/>,
        children : [
            {
                path: "/login",
                element: <Login />,
              },
              {
                path: "/signup",
                element: <Signup />,
              },
        ]
    },
  
 
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
