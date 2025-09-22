/** @format */

import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import webRouter from "./Router/Router.jsx";
import { Context } from "./Context/Context.jsx";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New version available. Reload?")) {
      updateSW();
    }
  },
});

createRoot(document.getElementById("root")).render(
  <Context>
    <RouterProvider router={webRouter} />
  </Context>
);
