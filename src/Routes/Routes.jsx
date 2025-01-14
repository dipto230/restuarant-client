import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/order/order/Order";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";
import Secret from "../pages/Shared/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'order/:category',
          element:<Order />
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivateRouter> <Secret></Secret></PrivateRouter>
        },
      ]

    },
    {
      path:'dashboard',
      element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
      children:[
        {
          path:'cart',
          element: <Cart></Cart>
        },
        {
          path:'users',
          element:<AllUsers></AllUsers>
        }
      ]
    },
  ]);