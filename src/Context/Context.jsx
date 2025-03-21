/** @format */

import { createContext, useEffect, useState } from "react";
import { editVehicle, vehicleList } from "../Api/Api";

const VehicleContext = createContext();
export const Context = ({ children }) => {
  const [mediaVehicle, setMediaVehicle] = useState({});
  const [ownVehicle, setOwnVehicle] = useState({});
  const [allVehicles, setAllVehicles] = useState([]);
  useEffect(() => {
    getVehicleList();
  }, []);
  const getVehicleList = async () => {
    try {
      await vehicleList()
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setAllVehicles(data);
          const mediaVehicles = data.filter(
            (vehicle) => vehicle.contract === "media"
          );
          const ownVehicles = data.filter(
            (vehicle) => vehicle.contract === "own"
          );
          const categorizeByClass = (vehicles) => {
            return vehicles.reduce((acc, vehicle) => {
              if (!acc[vehicle.class_name]) {
                acc[vehicle.class_name] = [];
              }
              acc[vehicle.class_name].push(vehicle);
              return acc;
            }, {});
          };

          // Store categorized vehicles separately
          setMediaVehicle(categorizeByClass(mediaVehicles));
          setOwnVehicle(categorizeByClass(ownVehicles));
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  const updateVehicle = async (id, data) => {
    try {
      await editVehicle(id, data);
      getVehicleList();
    } catch (error) {
      console.log(error.message);
    }
  };
  const contextInfo = {
    mediaVehicle,
    ownVehicle,
    getVehicleList,
    updateVehicle,
    allVehicles,
  };
  return (
    <VehicleContext.Provider value={contextInfo}>
      {children}
    </VehicleContext.Provider>
  );
};
export default VehicleContext;
