/** @format */

import { useContext, useState } from "react";
import filter from "../assets/filter.png";

import "react-day-picker/dist/style.css";
import {
  getVehicleMaintenanceByReceiveDate,
  getVehicleMaintenanceByRequestDate,
} from "../Api/Api";
import VehicleContext from "../Context/Context";
import SelectDropdown from "../Component/SelectDropdown";
import r from "../assets/r.png";
import h from "../assets/h.png";
import g from "../assets/image060314.png";
import twt from "../assets/twt.png";

const Summary = () => {
  const { classNames } = useContext(VehicleContext);
  const [category, setCategory] = useState("");
  const [site, setSite] = useState("");
  const [contractor, setContractor] = useState("");

  const [selectRequestDate, setSelectRequestDate] = useState({
    from: "",
    to: "",
  });
  const [selectReceivedDate, setSelectReceivedDate] = useState({
    from: "",
    to: "",
  });
  const [maintenanceHistory, setMaintenanceHistory] = useState([]);

  const handleStatementSearch = async () => {
    category && console.log("Category:", category);
    site && console.log("Site:", site);
    contractor && console.log("Contractor:", contractor);

    if (selectRequestDate.from && selectRequestDate.to) {
      try {
        await getVehicleMaintenanceByRequestDate(selectRequestDate)
          .then((res) => res.json())
          .then((data) => {
            const filteredData = data.filter((d) => {
              const matchesCategory = category
                ? d.vehicle.class_name === category
                : true;
              const matchesSite = site ? d.vehicle.site === site : true;
              const matchesContractor = contractor
                ? d.vehicle.contract === contractor
                : true;
              return matchesCategory && matchesSite && matchesContractor;
            });
            console.log(filteredData);

            setMaintenanceHistory(filteredData);
          });
      } catch (error) {
        console.error(error.message);
      }
    } else if (selectReceivedDate.from && selectReceivedDate.to) {
      try {
        await getVehicleMaintenanceByReceiveDate(selectReceivedDate)
          .then((res) => res.json())
          .then((data) => {
            const filteredData = data.filter((d) => {
              const matchesCategory = category
                ? d.vehicle.class_name === category
                : true;
              const matchesSite = site ? d.vehicle.site === site : true;
              const matchesContractor = contractor
                ? d.vehicle.contract === contractor
                : true;
              return matchesCategory && matchesSite && matchesContractor;
            });
            console.log(filteredData);

            setMaintenanceHistory(filteredData);
          });
      } catch (error) {
        console.error(error.message);
      }
    } else {
      // alert(
      //   "Please select a date range for either Request Date or Received Date."
      // );
      return;
    }
  };
  return (
    <div>
      <h1 className='font-bold text-2xl m-4 text-blue-600 text-center'>
        {" "}
        Statements
      </h1>
      <div>
        <div className=' bg-stone-100 md:mx-20 md:p-8 mx-2 p-2 rounded-lg'>
          <div className='md:flex gap-4 '>
            <div className='w-full'>
              <h2 className='font-medium'>Request Date</h2>
              <div className=' flex  gap-4 w-full '>
                <fieldset className='fieldset w-full'>
                  <legend className='fieldset-legend'>From</legend>
                  <input
                    type='date'
                    className='input input-primary'
                    placeholder='Type here'
                    onChange={(e) =>
                      setSelectRequestDate({
                        ...selectRequestDate,
                        from: e.target.value,
                      })
                    }
                    value={selectRequestDate.from}
                  />
                </fieldset>
                <fieldset className='fieldset w-full'>
                  <legend className='fieldset-legend'>To</legend>
                  <input
                    type='date'
                    className='input input-primary '
                    placeholder='Type here'
                    onChange={(e) =>
                      setSelectRequestDate({
                        ...selectRequestDate,
                        to: e.target.value,
                      })
                    }
                    value={selectRequestDate.to}
                  />
                </fieldset>
              </div>
            </div>
            <div className='w-full'>
              <h2 className='font-medium'>Received Date</h2>
              <div className=' flex  gap-4 w-full '>
                <fieldset className='fieldset w-full'>
                  <legend className='fieldset-legend'>From</legend>
                  <input
                    type='date'
                    className='input input-primary'
                    placeholder='Type here'
                    onChange={(e) =>
                      setSelectReceivedDate({
                        ...selectReceivedDate,
                        from: e.target.value,
                      })
                    }
                    value={selectReceivedDate.from}
                  />
                </fieldset>
                <fieldset className='fieldset w-full'>
                  <legend className='fieldset-legend'>To</legend>
                  <input
                    type='date'
                    className='input input-primary'
                    placeholder='Type here'
                    onChange={(e) =>
                      setSelectReceivedDate({
                        ...selectReceivedDate,
                        to: e.target.value,
                      })
                    }
                    value={selectReceivedDate.to}
                  />
                </fieldset>
              </div>
            </div>
          </div>

          {/* <select className='input input-primary' name='' id=''>
              <option value=''>Select</option>
              <option value=''>Select</option>
            </select> */}
          <div className='md:flex gap-4 '>
            <div className=' flex gap-4 w-full md:w-1/2'>
              <fieldset className='fieldset w-full md:w-1/2'>
                <legend className='fieldset-legend'>Category</legend>
                {/* <select className='input input-primary ' name='' id=''>
                  <option value=''>Select</option>
                  {classNames.map((className, index) => (
                    <option key={index} value={className.class_name}>
                      <img
                        src={className.class_logo}
                        className='w-2 h-2'
                        alt=''
                      />{" "}
                      <span>{className.class_name}</span>
                    </option>
                  ))}
                </select> */}
                <SelectDropdown
                  placeholder={"Select Category"}
                  classOptions={classNames}
                  selectOption={setCategory}
                />
              </fieldset>
              <fieldset className='fieldset w-full md:w-1/2'>
                <legend className='fieldset-legend'>Site</legend>
                {/* <select className='input input-primary ' name='' id=''>
                  <option value=''>Hameem</option>
                  <option value=''>Razeen</option>
                </select> */}
                <SelectDropdown
                  placeholder={"Select Site"}
                  selectOption={setSite}
                  classOptions={[
                    { label: "Hameem", value: "Hameem", logo: h },
                    { label: "Razeen", value: "Razeen", logo: r },
                  ]}
                />
              </fieldset>
            </div>
            <div className=' flex w-full md:w-1/2'>
              <fieldset className='fieldset  w-full md:w-1/2'>
                <legend className='fieldset-legend'>Contractor</legend>
                {/* <select className='input input-primary ' name='' id=''>
                  <option value=''>Own</option>
                  <option value=''>Others</option>
                </select> */}
                <SelectDropdown
                  placeholder={"Select Contractor"}
                  selectOption={setContractor}
                  classOptions={[
                    { label: "TAL AL WATHBA", value: "media", logo: twt },
                    { label: "Galadari", value: "own", logo: g },
                  ]}
                />
              </fieldset>
              <div className='flex items-end justify-end w-full md:w-1/2'>
                <button
                  onClick={handleStatementSearch}
                  className='btn btn-soft btn-primary p-6 px-10'>
                  Search
                </button>
              </div>
            </div>
          </div>
          {/* <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle '>
              <div className='w-7 rounded-full'>
                <img alt='Tailwind CSS Navbar component' src={filter} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
              <li>
                <a className='justify-between'>
                  Profile
                  <span className='badge'>New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className='overflow-x-auto flex justify-center mt-10 mx-10  '>
          <table>
            <thead>
              <tr className='bg-blue-600 text-white'>
                <th className='border border-gray-300 p-2'>SL</th>
                <th className='border border-gray-300 p-2'>Plate No</th>
                <th className='border border-gray-300 p-2'>Category</th>
                <th className='border border-gray-300 p-2'>Name</th>
                <th className='border border-gray-300 p-2'>Chassis Number</th>
                <th className='border border-gray-300 p-2'>Model</th>
                <th className='border border-gray-300 p-2'>Site</th>
                <th className='border border-gray-300 p-2'>Current Hours/Km</th>
                <th className='border border-gray-300 p-2'>New Hours/Km</th>
                <th className='border border-gray-300 p-2'>Request Date</th>
                <th className='border border-gray-300 p-2'>Received Date</th>
                <th className='border border-gray-300 p-2'>Issues</th>
                <th className='border border-gray-300 p-2'>Service</th>
                <th className='border border-gray-300 p-2'>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {maintenanceHistory.length > 0 ? (
                maintenanceHistory.map((item, index) => (
                  <tr key={index} className='text-center text-black text-sm '>
                    <td className='border border-gray-300 p-2'>{index + 1}</td>
                    <td className='border border-gray-300 p-2'>
                      {item.vehicle.plate_number}
                    </td>
                    <td className='border border-gray-300 p-2'>
                      {item.vehicle.class_name}
                    </td>
                    <td className='border border-gray-300 p-2'>
                      {item.vehicle.name}
                    </td>
                    <td className='border border-gray-300 p-2'>
                      {item.vehicle.chassis_number}
                    </td>
                    <td className='border border-gray-300 p-2'>
                      {item.vehicle.model}
                    </td>
                    <td className='border border-gray-300 p-2'>
                      {item.vehicle.site}
                    </td>
                    <td className='border border-gray-300 p-2'>
                      {item.current}
                    </td>
                    <td className='border border-gray-300 p-2'>{item.next}</td>
                    <td className='border border-gray-300 p-2'>
                      {new Date(item.req_date).toLocaleDateString()}
                    </td>
                    <td className='border border-gray-300 p-2'>
                      {new Date(item.receive_date).toLocaleDateString()}
                    </td>
                    <td className='border border-gray-300 p-2'>
                      {item.issue_parts}
                    </td>
                    <td className='border border-gray-300 p-2'>
                      {item.services}
                    </td>
                    <td className='border border-gray-300 p-2'>
                      {item.comment || "N/A"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className='text-center text-black text-sm '>
                  <td colSpan='14' className='p-4 border border-gray-300'>
                    No data available
                  </td>
                </tr>
              )}
              {/* <tr className='text-center text-black text-sm '>
                <td className='border border-gray-300 p-2'>01</td>
                <td className='border border-gray-300 p-2'>29481</td>
                <td className='border border-gray-300 p-2'>
                  Passenger Vehicle
                </td>
                <td className='border border-gray-300 p-2'>
                  TATA, LPO1618, PRIVATE TRANS. BUS
                </td>
                <td className='border border-gray-300 p-2'>
                  MAT449315P5L00329
                </td>
                <td className='border border-gray-300 p-2'>2013</td>
                <td className='border border-gray-300 p-2'>Hameem</td>
                <td className='border border-gray-300 p-2'>25486</td>
                <td className='border border-gray-300 p-2'>30002</td>
                <td className='border border-gray-300 p-2'>12/05/2025</td>
                <td className='border border-gray-300 p-2'>19/05/2025</td>
                <td className='border border-gray-300 p-2'></td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Summary;
