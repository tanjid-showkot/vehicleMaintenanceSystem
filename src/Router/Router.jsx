/** @format */

import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import Vehicle from "../Pages/Vehicle";
import VehicleProfile from "../Pages/VehicleProfile";
import OwnVehicle from "../Pages/OwnVehicle";
import Summary from "../Pages/Summary";
// import Login from "../Pages/Login";

const webRouter = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Login></Login>,
  // },
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "ownVehicle",
        element: <OwnVehicle></OwnVehicle>,
      },
      {
        path: "summary",
        element: <Summary></Summary>,
      },
      {
        path: "vehicle",
        element: <Vehicle></Vehicle>,
      },
      {
        path: "vehicleProfile",
        element: <VehicleProfile></VehicleProfile>,
      },
    ],
  },
]);
export default webRouter;
