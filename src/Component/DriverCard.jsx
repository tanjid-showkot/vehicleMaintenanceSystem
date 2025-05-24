/** @format */
import { FaEdit } from "react-icons/fa";
import day from "../assets/day.png";
import night from "../assets/moon.png";
import { GiSteeringWheel } from "react-icons/gi";
import PropTypes from "prop-types";
import { useState } from "react";
import SelectDropdown from "./SelectDropdown";

const DriverCard = ({ driver, title }) => {
  const { name, contact, shift, photo } = driver;
  const [showModal, setShowModal] = useState(false);
  const [driver1, setDriver1] = useState({
    name: null,
    contact: null,
    shift: null,
    photo: null,
  });
  const [driver2, setDriver2] = useState({
    name: null,
    contact: null,
    shift: null,
    photo: null,
  });
  return (
    <div className='card card-side bg-base-100 shadow-sm'>
      <figure>
        <img className='h-[128px] w-[128px]' src={photo} alt='Driver Photo' />
      </figure>
      <div className='text-[0.87rem] py-2 px-6'>
        <div className='flex justify-between items-center mb-2'>
          <h1 className='card-title'>
            {" "}
            <GiSteeringWheel />
            {title}
          </h1>
          <p onClick={() => setShowModal(true)} className='text-end'>
            <FaEdit />
          </p>
        </div>
        <h2 className='card-title'>{name}</h2>
        <p>
          Contact No: <strong>{contact}</strong>{" "}
        </p>
        <p className='flex items-center gap-2'>
          <span> Shift:</span>
          <span className='flex items-center gap-2'>
            <img src={shift === "Night" ? night : day} className='h-5' alt='' />
            <strong>{shift}</strong>
          </span>{" "}
        </p>
      </div>
      {showModal && (
        <dialog open className='modal'>
          <div className='modal-box'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => setShowModal(false)}
                className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                ✕
              </button>
            </form>
            <h3 className='font-bold text-lg'>Edit {title} Info</h3>

            <div className='   w-xs'>
              <fieldset className='fieldset'>
                <legend className='fieldset-legend'>Full Name:</legend>
                <input type='text' className='input' placeholder='Type here' />
              </fieldset>
              <fieldset className='fieldset'>
                <legend className='fieldset-legend'>Contact No:</legend>
                <input type='tel' className='input' placeholder='Type here' />
              </fieldset>
              <fieldset className='fieldset'>
                <legend className='fieldset-legend'>Shift</legend>
                <SelectDropdown
                  placeholder={"Select Shift"}
                  classOptions={[
                    { label: "Night", value: "Night", logo: night },
                    { label: "day", value: "day", logo: day },
                  ]}
                />
              </fieldset>
              <fieldset className='fieldset'>
                <legend className='fieldset-legend'>Photo</legend>
                <input type='file' className='file-input' />
                <label className='label'>Max size 2MB</label>
              </fieldset>
              <button className='btn btn-neutral w-full mt-4'>Submit</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

DriverCard.propTypes = {
  driver: PropTypes.shape({
    name: PropTypes.string,
    contact: PropTypes.string,
    shift: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
  title: PropTypes.string,
};

export default DriverCard;
