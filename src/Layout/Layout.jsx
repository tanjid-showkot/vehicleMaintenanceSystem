/** @format */

import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
