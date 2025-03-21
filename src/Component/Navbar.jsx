/** @format */
import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "/Picture1.png";
import avatar from "/avatar.png";
import { NavLink, useNavigate } from "react-router";
import VehicleContext from "../Context/Context";
import SearchVehicleCard from "./SearchVehicleCard";
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const navigate = useNavigate();
  const { allVehicles } = useContext(VehicleContext);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        inputRef.current !== event.target
      ) {
        setFilteredVehicles([]); // Hide dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = (
    <React.Fragment>
      <li>
        <NavLink to='/home'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/home/ownVehicle'>Own Vehicle</NavLink>
      </li>
      <li>
        <NavLink to='/home/summary'>Summary</NavLink>
      </li>
    </React.Fragment>
  );

  const filterVehicles = (term) => {
    if (!term.trim()) {
      setFilteredVehicles([]);
      return;
    }

    const results = allVehicles
      .filter((vehicle) => vehicle.plate_number.toString().startsWith(term))
      .slice(0, 5); // Limit to 5 results

    setFilteredVehicles(results);
  };
  const handleInputFocus = () => {
    if (searchTerm.trim()) {
      filterVehicles(searchTerm);
    }
  };
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterVehicles(term);
  };

  const handleSelectVehicle = (vehicle) => {
    setSearchTerm(""); // Clear search box
    setFilteredVehicles([]); // Hide dropdown
    navigate("/home/vehicleProfile", { state: { id: vehicle.id } }); // Navigate to vehicle profile
  };

  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>
          {" "}
          <img src={logo} className=' w-36 ' />{" "}
        </a>
      </div>

      <div className='navbar-end w-[20%] lg:w-[60%]'>
        <div className='relative  ' ref={dropdownRef}>
          <input
            type='text'
            ref={inputRef}
            onFocus={handleInputFocus}
            value={searchTerm}
            onChange={handleSearch}
            placeholder='Search by Plate Number'
            className='input input-bordered w-32 md:w-auto'
          />
          {filteredVehicles.length > 0 && (
            <ul className='absolute right-0 w-[370px] bg-white border rounded-md shadow-md mt-1 z-10'>
              {filteredVehicles.map((vehicle) => (
                <li
                  key={vehicle.id}
                  className='p-2 hover:bg-gray-200 cursor-pointer'
                  onClick={() => handleSelectVehicle(vehicle)}>
                  <SearchVehicleCard vehicle={vehicle}></SearchVehicleCard>
                </li>
              ))}
            </ul>
          )}
        </div>
        <ul className='menu menu-horizontal px-1 font-bold lg:flex hidden md:me-30'>
          {menuItems}
        </ul>

        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img
                className=''
                alt='Tailwind CSS Navbar component'
                src={avatar}
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[-10]  mt-3 w-52 p-2 shadow'>
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
