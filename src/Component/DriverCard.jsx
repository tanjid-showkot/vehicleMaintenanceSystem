/** @format */
import { FaEdit } from "react-icons/fa";
import day from "../assets/day.png";
import night from "../assets/moon.png";
import { GiSteeringWheel } from "react-icons/gi";
import PropTypes from "prop-types";
import { useState } from "react";
import SelectDropdown from "./SelectDropdown";
import { Controller, useForm } from "react-hook-form";
import { editVehicleDriversInfo } from "../Api/Api";

const DriverCard = ({ driver, title, id, fetchVehicle }) => {
  const { name, contact, shift, photo } = driver;
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { register, control, handleSubmit } = useForm();
  const handleDriverInfoUpdate = async (data) => {
    console.log(data);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      key === "driver_photo" || key === "driver1_photo"
        ? formData.append(key, value[0])
        : formData.append(key, value);
    });
    try {
      await editVehicleDriversInfo(id, formData);
      setSuccess("Driver info updated successfully");
      await fetchVehicle();
      setTimeout(() => {
        setShowModal(false);
        setSuccess(null);
      }, 3000);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

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

            <form
              className='w-xs'
              onSubmit={handleSubmit(handleDriverInfoUpdate)}>
              <fieldset className='fieldset'>
                <legend className='fieldset-legend'>Full Name:</legend>
                <input
                  {...register(title === "Driver 1" ? "driver" : "driver1")}
                  type='text'
                  className='input'
                  required
                  placeholder='Type here'
                />
              </fieldset>
              <fieldset className='fieldset'>
                <legend className='fieldset-legend'>Contact No:</legend>
                <input
                  {...register(
                    title === "Driver 1" ? "driver_phone" : "driver1_phone"
                  )}
                  type='tel'
                  required
                  className='input'
                  placeholder='Type here'
                />
              </fieldset>
              <fieldset className='fieldset'>
                <legend className='fieldset-legend'>Shift</legend>
                {/* <SelectDropdown
                  placeholder={"Select Shift"}
                  classOptions={[
                    { label: "Night", value: "Night", logo: night },
                    { label: "day", value: "day", logo: day },
                  ]}
                /> */}
                <Controller
                  name={title === "Driver 1" ? "driver_shift" : "driver1_shift"}
                  control={control}
                  rules={{ required: "Shift is required" }}
                  render={({ field }) => (
                    <SelectDropdown
                      {...field}
                      placeholder='Select Shift'
                      classOptions={[
                        { label: "Night", value: "Night", logo: night },
                        { label: "Day", value: "Day", logo: day },
                      ]}
                      selectOption={field.onChange} // sync with react-hook-form
                    />
                  )}
                />
              </fieldset>
              <fieldset className='fieldset'>
                <legend className='fieldset-legend'>Photo</legend>
                <input
                  {...register(
                    title === "Driver 1" ? "driver_photo" : "driver1_photo"
                  )}
                  type='file'
                  className='file-input'
                  required
                />
                <label className='label'>Max size 500kb</label>
              </fieldset>
              <button type='submit' className='btn btn-neutral w-full mt-4'>
                Submit
              </button>
            </form>
            {error && <p className='text-red-500 mt-2'>{error}</p>}
            {success && <p className='text-green-500 mt-2'>{success}</p>}
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
  id: PropTypes.number.isRequired,
};

export default DriverCard;
