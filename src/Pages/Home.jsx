/** @format */

import { useContext } from "react";
import TransportCard from "../Component/TransportCard";
import VehicleContext from "../Context/Context";

const Home = () => {
  const { mediaVehicle } = useContext(VehicleContext);
  console.log(mediaVehicle);
  return (
    <div className=' m-6'>
      <h1 className='text-center font-bold text-2xl text-primary '>
        Equipment List
      </h1>
      <div
        className=' grid lg:grid-cols-3 grid-cols-1 gap-4
       '>
        {Object.entries(mediaVehicle).map(([key, vehicles]) => (
          <TransportCard key={key} class_name={key} transport={vehicles} />
        ))}
      </div>
    </div>
  );
};

export default Home;
