/** @format */

import { useState } from "react";
import filter from "../assets/filter.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Summary = () => {
  const [dateRange, setDateRange] = useState({
    from: undefined,
    to: undefined,
  });

  return (
    <div>
      <h1 className='font-bold text-2xl m-4 text-blue-600 text-center'>
        {" "}
        Statements
      </h1>
      <div>
        <div className='flex justify-around gap-4 m-4'>
          <div className='flex flex-col gap-2'>
            <button
              popoverTarget='rdp-popover'
              className='input input-primary'
              style={{ anchorName: "--rdp" }}>
              {dateRange.from && dateRange.to
                ? new Intl.DateTimeFormat("en-GB").format(
                    new Date(dateRange.from),
                    "dd/MM/yyyy"
                  ) +
                  "  to  " +
                  new Intl.DateTimeFormat("en-GB").format(
                    new Date(dateRange.to),
                    "dd/MM/yyyy"
                  )
                : "Pick a date"}
            </button>
            <div
              popover='auto'
              id='rdp-popover'
              className='dropdown'
              style={{ positionAnchor: "--rdp" }}>
              {/* <DayPicker
              className='react-day-picker'
              mode='single'
              selected={date}
              onSelect={setDate}
            /> */}
              <DayPicker
                mode='range'
                selected={dateRange}
                onSelect={setDateRange}
                className='border rounded-md shadow-sm p-4 bg-white'
              />
            </div>

            <select className='input input-primary' name='' id=''>
              <option value=''>Select</option>
              <option value=''>Select</option>
            </select>
          </div>
          <div>
            <select className='input input-primary' name='' id=''>
              <option value=''>Select</option>
              <option value=''>Select</option>
            </select>
            <select className='input input-primary' name='' id=''>
              <option value=''>Select</option>
              <option value=''>Select</option>
            </select>
          </div>
          <div className='dropdown dropdown-end'>
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
          </div>
        </div>
        <div className='overflow-x-auto flex justify-center  '>
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
                <th className='border border-gray-300 p-2'>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-center text-black text-sm '>
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Summary;
