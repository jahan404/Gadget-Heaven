import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Sidebar from "../Components/Sidebar";
import GadgetCards from "../Components/GadgetCards";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
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
        element: <Dashboard></Dashboard>
      },
      ]
    }
  ]);


 

  export default routes;