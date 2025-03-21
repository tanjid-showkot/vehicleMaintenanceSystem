/** @format */

import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import webRouter from "./Router/Router.jsx";
import { Context } from "./Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <Context>
    <RouterProvider router={webRouter} />
  </Context>
);
