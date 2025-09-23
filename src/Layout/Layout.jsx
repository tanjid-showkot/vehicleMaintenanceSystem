/** @format */

import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import DockWrapper from "../Component/DockWrapper";

const Layout = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />

      {/* add bottom space on mobile so content isn't covered by the Dock */}
      <main className='md:pb-0 pb-[calc(env(safe-area-inset-bottom,0px)+96px)]'>
        <Outlet />
      </main>

      {/* mobile-only bottom dock */}
      <DockWrapper />
    </div>
  );
};

export default Layout;
