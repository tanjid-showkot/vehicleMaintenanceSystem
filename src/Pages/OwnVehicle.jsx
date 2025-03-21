/** @format */

import { useContext } from "react";
import VehicleContext from "../Context/Context";
import TransportCard from "../Component/TransportCard";

const OwnVehicle = () => {
  const { ownVehicle } = useContext(VehicleContext);

  return (
    <div className=' m-6'>
      <h1 className='text-center font-bold text-2xl text-primary '>
        Equipment List
      </h1>
      <div
        className=' lg:grid lg:grid-cols-3 lg:gap-4
     '>
        {Object.entries(ownVehicle).map(([key, vehicles]) => (
          <TransportCard key={key} class_name={key} transport={vehicles} />
        ))}
      </div>
    </div>
  );
};

export default OwnVehicle;
