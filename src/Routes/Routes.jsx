import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import GadgetCards from "../Components/GadgetCards";
import GadgetDetailPage from "../Pages/GadgetDetailPage";
import ErrorElement from "../Pages/ErrorElement";
import CartItems from "../Components/CartItems";
import WIshlistItems from "../Components/WIshlistItems";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement : <ErrorElement></ErrorElement>,
      children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : ()=>fetch('../categories.json'),
        children : [
          {
            path : "/",
            element: <GadgetCards></GadgetCards>,
            loader: ()=>fetch('../gadgets.json'),
          },
          {
            path : "/gadget-categories/:categoryName",
            element: <GadgetCards></GadgetCards>,
            loader: ()=>fetch('../gadgets.json'),
          },
        ]
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,

        children : [
          {
            path: "/dashboard",
            element : <CartItems></CartItems>,
          },
          {
             path: "/dashboard/cartItems",
             element : <CartItems></CartItems>,
          },
          {
             path: "/dashboard/wishlistItems",
             element : <WIshlistItems></WIshlistItems>,
          },
        ],
      },
      {
        path: "/detailPage/:id",
        element: <GadgetDetailPage></GadgetDetailPage>,
        loader: ()=>fetch('../gadgets.json'),
      },
      ]
    }
  ]);


 

  export default routes;