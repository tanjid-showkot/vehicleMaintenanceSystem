/** @format */

"use client";

import Dock from "./Dock"; // adjust path if different
import { VscHome } from "react-icons/vsc";
import { VscArchive } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { VscSettingsGear } from "react-icons/vsc";
import { MdDomain } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router";

export default function DockWrapper() {
  const navigate = useNavigate();

  const items = [
    { icon: <VscHome />, label: "Home", onClick: () => navigate("/") },
    {
      icon: <MdDomain />,
      label: "Own Vehicle",
      onClick: () => navigate("/ownVehicle"),
    },
    {
      icon: <IoMdAddCircleOutline />,
      label: "Add A Vehicle",
      onClick: () => navigate("/newVehicle"),
    },
    {
      icon: <HiOutlineDocumentReport />,
      label: "Report",
      onClick: () => navigate("/summary"),
    },
  ];

  return (
    <div
      className='
        md:hidden                     /* mobile only */
        fixed inset-x-0 bottom-0 z-50 /* pin to bottom */
        mb-[calc(var(--safe-bottom,0px)+8px)]
        pointer-events-none           /* container ignores clicks */
      '>
      <Dock
        items={items}
        className='pointer-events-auto' /* Dock handles clicks */
        panelHeight={80}
        baseItemSize={56} /* bigger tap targets */
        magnification={60} /* minimal zoom for touch */
        distance={120}
        spring={{ mass: 0.12, stiffness: 220, damping: 18 }}
      />
    </div>
  );
}
