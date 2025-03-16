/** @format */
import ac from "../assets/Services/fan.png";
import others from "../assets/Services/application.png";
import engine from "../assets/Services/car-engine.png";
import dynamo from "../assets/Services/electric-motor.png";
import gear from "../assets/Services/gear.png";
import light from "../assets/Services/headlight.png";
import radiator from "../assets/issue/radiator.png";
import hydraulic from "../assets/Services/hydraulic-ram.png";
import tyre from "../assets/Services/wheels.png";
import carBreak from "../assets/Services/break.png";
import battery from "../assets/Services/battery.png";
import belt from "../assets/Services/belt.png";
import sensor from "../assets/Services/sensor.png";
import serviceLogo from "../assets/issue/service.png";
import { useLocation } from "react-router";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// #0069FF
// #F2F7FE
const VehicleProfile = () => {
  const location = useLocation();
  const { vehicle } = location.state || {};
  const [serviceList, setServiceList] = useState([]);
  const [issueList, setIssueList] = useState([]);
  const [serviceString, setServiceString] = useState("");
  const [issueString, setIssueString] = useState("");
  const form = useRef();
  const issues = [
    {
      id: 1,
      logo: ac,
      name: "Air Condition",
    },
    {
      id: 2,
      logo: gear,
      name: "Transmission",
    },
    {
      id: 3,
      logo: tyre,
      name: "Tyre",
    },
    {
      id: 4,
      logo: light,
      name: "Light",
    },
    {
      id: 5,
      logo: radiator,
      name: "Radiator",
    },
    {
      id: 6,
      logo: engine,
      name: "Engine",
    },
    {
      id: 7,
      logo: hydraulic,
      name: "Hydraulic",
    },
    {
      id: 8,
      logo: dynamo,
      name: "Dynamo",
    },
    {
      id: 9,
      logo: carBreak,
      name: "Break",
    },
    {
      id: 10,
      logo: sensor,
      name: "Sensor",
    },
    {
      id: 11,
      logo: battery,
      name: "Battery",
    },
    {
      id: 12,
      logo: belt,
      name: "Belt",
    },
    {
      id: 13,
      logo: others,
      name: "Others",
    },
  ];
  const services = [
    {
      id: 1,
      logo: serviceLogo,
      name: "500",
    },
    {
      id: 2,
      logo: serviceLogo,
      name: "1000",
    },
    {
      id: 3,
      logo: serviceLogo,
      name: "2000",
    },
    {
      id: 4,
      logo: serviceLogo,
      name: "4000",
    },
  ];
  const handleSelectService = (service) => {
    setServiceList((prevList) => {
      const isSelected = prevList.some((s) => s.id === service.id);

      if (isSelected) {
        return prevList.filter((s) => s.id !== service.id);
      } else {
        return [...prevList, service];
      }
    });
  };
  const handleIssueService = (issue) => {
    setIssueList((prevList) => {
      const isSelected = prevList.some((s) => s.id === issue.id);

      if (isSelected) {
        return prevList.filter((s) => s.id !== issue.id);
      } else {
        return [...prevList, issue];
      }
    });
  };
  const handleRequestList = () => {
    if (serviceList.length > 0) {
      setServiceString(serviceList.map((issue) => issue.name).join(", "));
    }
    if (issueList.length > 0) {
      setIssueString(issueList.map((issue) => issue.name).join(", "));
    }
  };
  const handleSendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_xxk4a4i", "template_ysdi1il", form.current, {
        publicKey: "oCYu3r-zBwmCKtm6H",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <div className='hero bg-base-200 '>
        <div className=' hero-content flex-col  lg:flex-row-reverse'>
          <img src={vehicle.photo} className='lg:max-w-sm rounded-lg ' />
          <div>
            <h1 className='text-3xl font-bold'>
              Plate No: {vehicle.plate_number}
            </h1>
            <p className='font-bold'>{vehicle.name}</p>
            <p className='font-bold'>
              CHASSIS DETAIL: {vehicle.chassis_number}
            </p>
            <p className=''>Model: {vehicle.model}</p>
            <p className=''>Vehicle Type: {vehicle.class_name}</p>
            <p className='font-bold flex flex-row items-center gap-2 '>
              Status:{" "}
              <span
                className={`text-2xl ${
                  vehicle.status ? "text-success" : "text-error"
                } font-bold`}>
                {" "}
                <div
                  aria-label='status'
                  className={`status ${
                    vehicle.status ? "status-success" : "status-error"
                  }  status-xl`}></div>{" "}
                Active
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='flex m-8 justify-between items-center'>
        <div>
          <p className='text-2xl  font-bold'>Vehicle Maintenance :</p>
        </div>
        <div>
          <div>
            <button
              onClick={() => {
                document.getElementById("my_modal_5").showModal();
                handleRequestList();
              }}
              className='btn btn-primary'>
              Maintenance Request
            </button>
          </div>
        </div>
      </div>

      <div className='lg:flex  '>
        <div className='lg:w-1/2 '>
          <div>
            <p className='text-xl ps-10 font-bold mb-4 '>Issues: </p>
          </div>
          <div className='grid grid-cols-2 gap-4 lg:ms-20 ms-8 '>
            {issues.map((issue, index) => (
              <div key={index} className='flex items-center gap-3'>
                <div>
                  <label>
                    <input
                      onChange={() => handleIssueService(issue)}
                      type='checkbox'
                      className='checkbox'
                    />
                  </label>
                </div>
                <div>
                  <div className='flex items-center gap-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle lg:h-12 lg:w-12 h-8 w-8'>
                        <img
                          src={issue.logo}
                          alt='Avatar Tailwind CSS Component'
                        />
                      </div>
                    </div>
                    <div>
                      <div className='font-bold lg:text-xl text-m '>
                        {issue.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='lg:w-1/2 mt-8  '>
          <div className='flex '>
            <div>
              <p className='text-xl ps-10 font-bold mb-4'>Services: </p>
            </div>
            <div className='mx-auto my-4 items-center'>
              <div className='text-sm opacity-50'>Current: 77601 km</div>
              <div className='text-sm font-bold '>Next : 87601 km</div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 lg:ms-20 ms-8'>
            {services.map((service, index) => (
              <div key={index} className='flex items-center gap-3'>
                <div>
                  <label>
                    <input
                      type='checkbox'
                      onChange={() => handleSelectService(service)}
                      className='checkbox'
                    />
                  </label>
                </div>
                <div>
                  <div className='flex items-center gap-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle lg:h-12 lg:w-12 h-8 w-8'>
                        <img
                          src={service.logo}
                          alt='Avatar Tailwind CSS Component'
                        />
                      </div>
                    </div>
                    <div>
                      <div className='font-bold lg:text-xl text-m '>
                        {service.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div>
          <p className='text-2xl m-8 font-bold'>Maintenance History: </p>
        </div>
        <div>
          <div className='m-4 grid gap-4 '>
            <div className='card  shadow-sm bg-[#F2F7FE] '>
              <div className=' lg:flex  justify-around py-4 items-center '>
                <div>
                  <h2 className='card-title'>Repair Request</h2>
                  <p>Issue: break, gear, ac</p>
                </div>
                <div className='flex justify-between lg:justify-around lg:w-2/3 mt-2'>
                  <div className=' flex flex-col  justify-center  items-center '>
                    <p> Request Date:</p>
                    <p> 20/01/2025</p>
                  </div>
                  <div className=' flex lg:flex-col flex-row justify-center  items-center '>
                    <div className='hidden lg:block'>Status</div>
                    <div className='badge badge-warning'>Pending</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card  shadow-sm bg-[#F2F7FE] '>
              <div className=' lg:flex  justify-around py-4 items-center '>
                <div>
                  <h2 className='card-title'>Repair Request</h2>
                  <p>Issue: break, gear, ac</p>
                </div>
                <div className='flex justify-between lg:justify-around lg:w-2/3 mt-2'>
                  <div className=' flex flex-col  justify-center  items-center '>
                    <p> Request Date:</p>
                    <p> 20/01/2025</p>
                  </div>
                  <div className=' flex flex-col  justify-center  items-center '>
                    <p> Received Date:</p>
                    <p> 20/01/2025</p>
                  </div>
                  <div className=' flex lg:flex-col flex-row justify-center  items-center '>
                    <div className='hidden lg:block'>Status</div>
                    <div className='badge badge-success'>Received</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id='my_modal_5' className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <h1 className='font-bold text-lg'>Send for Maintenance</h1>
          <div>
            <p>Issue: {issueString ? issueString : "No Issue Selected"}</p>
            <p>
              Service: {serviceString ? serviceString : "No Service Selected"}
            </p>
            <div>
              <h2 className='font-bold text-primary text-xl my-3'>
                Send Email:
              </h2>
              <div>
                <form
                  ref={form}
                  onSubmit={handleSendEmail}
                  className='flex flex-col gap-2 mx-12'>
                  <div>
                    <label className='input  input-primary w-full'>
                      <svg
                        className='h-[1em] opacity-50'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'>
                        <g
                          strokeLinejoin='round'
                          strokeLinecap='round'
                          strokeWidth='2.5'
                          fill='none'
                          stroke='currentColor'>
                          <rect
                            width='20'
                            height='16'
                            x='2'
                            y='4'
                            rx='2'></rect>
                          <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                        </g>
                      </svg>
                      <input
                        type='email'
                        name='user_email'
                        placeholder='mail@site.com'
                        required
                      />
                    </label>
                    <div className='validator-hint hidden'>
                      Enter valid email address
                    </div>
                  </div>

                  <input
                    type='text'
                    name='title'
                    className='input w-full validator'
                    value={"Maintenance Request"}
                  />

                  <textarea
                    type='text'
                    name='message'
                    className=' w-full textarea textarea-neutral'
                    value={`Please check Plate no: ${vehicle.plate_number}`}
                  />

                  <input
                    type='submit'
                    value={"Send Email"}
                    className='btn w-full btn-primary'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default VehicleProfile;
