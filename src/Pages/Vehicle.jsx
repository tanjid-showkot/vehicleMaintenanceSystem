/** @format */

import { useNavigate } from "react-router";
import VehicleListCard from "../Component/VehicleListCard";

const Vehicle = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)} className='btn btn-primary'>
        Back
      </button>
      <h1 className='text-center font-bold text-2xl text-primary'>
        Passenger Vehicle
      </h1>
      <div className='gap-3 flex flex-col'>
        <VehicleListCard></VehicleListCard>
        <VehicleListCard></VehicleListCard>
        <VehicleListCard></VehicleListCard>
      </div>
    </div>
  );
};

export default Vehicle;
