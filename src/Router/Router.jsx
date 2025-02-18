/** @format */

import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import Vehicle from "../Pages/Vehicle";
import VehicleProfile from "../Pages/VehicleProfile";

const webRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
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
