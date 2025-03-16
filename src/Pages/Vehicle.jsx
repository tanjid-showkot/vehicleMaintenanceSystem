/** @format */

import { useLocation, useNavigate } from "react-router";
import VehicleListCard from "../Component/VehicleListCard";

const Vehicle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { transport } = location.state || {};

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className='btn font-bold m-4 btn-ghost'>
        {"< "}Back to Home Page
      </button>
      <h1 className='text-center font-bold text-2xl text-primary'>
        {transport[0].class_name}
      </h1>
      <div className='gap-3 flex flex-col'>
        {transport.map((t, index) => (
          <VehicleListCard
            key={t.id}
            sl={index + 1}
            vehicle={t}></VehicleListCard>
        ))}
      </div>
    </div>
  );
};

export default Vehicle;
