/** @format */

import { useEffect, useState } from "react";
import TransportCard from "../Component/TransportCard";
import { vehicleList } from "../Api/Api";

const Home = () => {
  const [allVehicle, setAllVehicle] = useState({});
  useEffect(() => {
    getVehicleList();
  }, []);
  const getVehicleList = async () => {
    try {
      await vehicleList()
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setAllVehicle(
            data.reduce((acc, vehicle) => {
              if (!acc[vehicle.class_name]) {
                acc[vehicle.class_name] = [];
              }
              acc[vehicle.class_name].push(vehicle);
              return acc;
            }, {})
          );
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className=' m-6'>
      <h1 className='text-center font-bold text-2xl text-primary '>
        Equipment List
      </h1>
      <div
        className=' lg:grid lg:grid-cols-3 lg:gap-4
       '>
        {Object.entries(allVehicle).map(([key, vehicles]) => (
          <TransportCard key={key} class_name={key} transport={vehicles} />
        ))}
      </div>
    </div>
  );
};

export default Home;
