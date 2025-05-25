/** @format */
import ac from "../assets/Services/fan.png";
import others from "../assets/Services/application.png";
import oilLeak from "../assets/issue/oil-leak.png";
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
import { useLocation, useNavigate } from "react-router";
import { useContext, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import VehicleContext from "../Context/Context";
import { IoMdPrint } from "react-icons/io";
import {
  createVehicleMaintenance,
  getMaintenanceHistoryByVehicle,
  getVehicle,
  updateVehicleMaintenance,
} from "../Api/Api";
import moment from "moment";
import { set } from "react-hook-form";
import DriverCard from "../Component/DriverCard";

// #0069FF
// #F2F7FE
const VehicleProfile = () => {
  const location = useLocation();
  const { updateVehicle } = useContext(VehicleContext);
  const { id } = location.state || {};
  const [serviceList, setServiceList] = useState({});
  const [issueList, setIssueList] = useState([]);
  const [serviceString, setServiceString] = useState("");
  const [issueString, setIssueString] = useState("");
  const [vehicle, setVehicle] = useState({});
  const [statusLoading, setStatusLoading] = useState(false);
  const [vehicleMain, setVehicleMain] = useState([]);
  const [current, setCurrent] = useState("");
  const [UpdateCurrent, setUpdateCurrent] = useState("");
  const [next, setNext] = useState("");
  const form = useRef();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [receiveDate, setReceiveDate] = useState("");
  const [comment, setComment] = useState("");
  const [updateNext, setUpdateNext] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [issueOtherString, setIssueOtherString] = useState("");

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

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
      logo: oilLeak,
      name: "Oil Leakage",
    },
    {
      id: 14,
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
    {
      id: 5,
      logo: serviceLogo,
      name: "5000",
    },
  ];
  useEffect(() => {
    fetchVehicle();
    fetchVehicleMaintenance();
  }, []);
  const fetchVehicle = async () => {
    try {
      await getVehicle(id)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setVehicle(data);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchVehicleMaintenance = async () => {
    try {
      await getMaintenanceHistoryByVehicle(id)
        .then((res) => res.json())
        .then((data) => {
          // setVehicleMain();
          setVehicleMain(data);
          const validEntry = data
            .reverse()
            .find((item) => item.current !== null);
          setCurrent(validEntry ? validEntry.current : null);
          setNext(validEntry ? validEntry.next : null);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSelectService = (service) => {
    // setServiceList((prevList) => {
    //   const isSelected = prevList.some((s) => s.id === service.id);

    //   if (isSelected) {
    //     return prevList.filter((s) => s.id !== service.id);
    //   } else {
    //     return [...prevList, service];
    //   }
    // });
    if (serviceList.id === service.id) {
      setServiceList({});
    } else setServiceList(service);
  };
  const handleSelectIssue = (issue) => {
    setIssueList((prevList) => {
      const isSelected = prevList.some((s) => s.id === issue.id);

      if (isSelected) {
        return prevList.filter((s) => s.id !== issue.id);
      } else return [...prevList, issue];
    });
  };
  const handleRequestList = () => {
    if (serviceList.id) {
      setServiceString(serviceList.name);
    }
    if (issueList.length > 0) {
      setIssueString(issueList.map((issue) => issue.name).join(", "));
    }
  };
  const handleSendEmail = async (e) => {
    e.preventDefault();

    const value = {
      req_date: moment().format("YYYY-MM-DD"),
      ...(issueString && { issue_parts: issueString }),
      ...(serviceString && { services: serviceString }),
      ...(UpdateCurrent && { current: UpdateCurrent }),
      status: "pending",
      vehicle: id,
    };
    await createVehicleMaintenance(value)
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        emailjs
          .sendForm("service_bgo9fec", "template_6offxym", form.current, {
            publicKey: "wkye0fjFnJ-WHjmQs",
          })
          .then(
            () => {
              console.log("SUCCESS!");
              setSuccess("Email Sent");
              fetchVehicleMaintenance();

              setIssueList([]);
              setIssueString("");
              setServiceList({});
              setServiceString();
              setUpdateCurrent("");
              setEmail("");
              setError("");
            },
            (error) => {
              console.log("FAILED...", error.text);
              setError(error.text);
            }
          );
      });
  };
  const handleToggle = async (id, currentStatus) => {
    try {
      const updatedStatus = !currentStatus;
      setStatusLoading(true);

      await updateVehicle(id, { status: updatedStatus });
      await fetchVehicle();
      setStatusLoading(false);

      // await updateTicketStatus(token, id, );
    } catch (error) {
      console.error("Error updating ticket status:", error);
    }
  };

  const handleReceive = async (e, id) => {
    e.preventDefault();
    console.log(id);

    const formData = new FormData();
    formData.append("receive_date", receiveDate);
    comment && formData.append("comment", comment);
    updateNext && formData.append("next", updateNext);
    formData.append("status", "received");

    // Dynamically assign images to required field names
    if (images[0]) formData.append("photo_main", images[0].file);
    if (images[1]) formData.append("photo_additional_1", images[1].file);
    if (images[2]) formData.append("photo_additional_2", images[2].file);
    if (images[3]) formData.append("photo_additional_3", images[3].file);
    if (images[4]) formData.append("photo_additional_4", images[4].file);
    try {
      await updateVehicleMaintenance(id, formData)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          fetchVehicleMaintenance();
          setReceiveDate("");
          setComment("");
          setUpdateNext("");
          setImages([]);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    if (images.length + files.length > 5) {
      alert("You can only upload up to 5 photos.");
      return;
    }

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages([...images, ...newImages]);

    // Manually update react-hook-form (optional)
    // setValue(
    //   "photos",
    //   [...images, ...newImages].map((img) => img.file)
    // );
  };

  const removeImage = (e, index) => {
    e.preventDefault();

    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    // setValue(
    //   "photos",
    //   updatedImages.map((img) => img.file)
    // );
  };
  const getEmailHtmlBody = (
    vehicle,
    issueString,
    serviceString,
    UpdateCurrent
  ) => {
    return `
    <p>Dear Sir</p>
    <p style="font-weight:600; font-size:14px; color:#458d "  >Good Day.We would like to inform you that the following vehicle is due for inspection.</p>
    <table style="
      border-collapse: collapse;
      width: 100%;
      overflow-x: auto;
      font-family: Arial, sans-serif;
      font-size: 14px;
      border: 1px solid #000;
    ">
      <thead>
      <tr>
      <td colspan="6" style="border: 1px solid #000; padding: 8px;   "> <strong>Kindly arrange to service/repair the subject machine on your ${
        vehicle.contract === "media" ? "TAL AL WATHBA" : "Galadari"
      } support</strong> </td>
      </tr>
        <tr style="background-color: #f2f2f2;">
          <th style="border: 1px solid #000; padding: 8px;">PLATE NO:</th>
          <th style="border: 1px solid #000; padding: 8px;">MODEL</th>
          <th style="border: 1px solid #000; padding: 8px;">SERIAL NO:</th>
          <th style="border: 1px solid #000; padding: 8px; background-color: #99ff99;">Current Hours meter</th>
          <th style="border: 1px solid #000; padding: 8px;">LOCATION</th>
          <th style="border: 1px solid #000; padding: 8px;">CONTACT NO:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">${
            vehicle.plate_number || ""
          }</td>
          <td style="border: 1px solid #000; padding: 8px;">${
            vehicle.name || ""
          }</td>
          <td style="border: 1px solid #000; padding: 8px;">${
            vehicle.chassis_number || ""
          }</td>
          <td style="border: 1px solid #000; padding: 8px; background-color: #99ff99;">${
            UpdateCurrent || ""
          }</td>
          <td style="border: 1px solid #000; padding: 8px;">${vehicle.site}</td>
          <td style="border: 1px solid #000; padding: 8px;">N/A</td>
        </tr>
        <tr>
          <td colspan="6" style="border: 1px solid #000; padding: 8px; "><strong>The Complaint:</strong> ${
            issueString ? `<strong>Issues:</strong> ${issueString} ` : ""
          }${
      serviceString
        ? `<strong>Service required for:</strong> ${serviceString} Hours/Km`
        : ""
    }
          </td>
        </tr>
      </tbody>
    </table>
    
    
  `;
  };

  return (
    <div className=''>
      <div className=' p-4 bg-base-200'>
        <button
          onClick={() => navigate(-1)}
          className=' font-bold btn btn-ghost'>
          {"<"} Previous Page
        </button>
      </div>
      <div className='hero bg-base-200 '>
        <div className=' hero-content flex-col  lg:flex-row-reverse'>
          <img src={vehicle.photo} className='lg:max-w-sm rounded-lg ' />
          <div>
            <div className='w-[250px]  border-2 border-red-600 rounded-xl p-2  items-center'>
              <div className='text-lg opacity-50'>
                Current: {current} Hours/Km
              </div>
              <div className='text-lg font-bold '>
                Next : {next ? next + " Hours/Km" : "Under Service"}
              </div>
            </div>
            <h1 className='text-3xl font-bold'>
              Plate No: {vehicle.plate_number}
            </h1>
            <p className='font-bold'>{vehicle.name}</p>
            <p className='font-bold'>
              CHASSIS DETAIL: {vehicle.chassis_number}
            </p>
            <p className=''>Model: {vehicle.model}</p>
            <p className=''>Vehicle Type: {vehicle.class_name}</p>
            <div className='font-bold flex flex-row items-center gap-2 '>
              <span> Status:</span>
              <span className='flex justify-center items-center gap-2'>
                <span
                  className={`text-2xl flex items-center gap-2 ${
                    vehicle.status ? "text-success" : "text-error"
                  } font-bold`}>
                  {" "}
                  <div
                    aria-label='status'
                    className={`status mt-0.5 ${
                      vehicle.status ? "status-success" : "status-error"
                    }  status-xl`}></div>{" "}
                  <strong> {vehicle.status ? "Active" : "Inactive"}</strong>
                </span>
                <input
                  type='checkbox'
                  checked={vehicle.status}
                  onChange={() => handleToggle(vehicle.id, vehicle.status)}
                  className='toggle mt-2 border-error bg-error checked:bg-success checked:text-green-950 checked:border-success'
                />
                <span
                  className={`loading mt-2 loading-ring loading-xl ${
                    !statusLoading && "hidden"
                  }`}></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex md:flex-row flex-col bg-base-200 pb-6 items-center justify-center gap-4'>
        {vehicle && (
          <DriverCard
            title='Driver 1'
            fetchVehicle={fetchVehicle}
            id={vehicle.id}
            driver={{
              name: vehicle.driver,
              photo: vehicle.driver_photo,
              contact: vehicle.driver_phone,
              shift: vehicle.driver_shift,
            }}
          />
        )}
        {vehicle && (
          <DriverCard
            title='Driver 2'
            fetchVehicle={fetchVehicle}
            id={vehicle.id}
            driver={{
              name: vehicle.driver1,
              photo: vehicle.driver1_photo,
              contact: vehicle.driver1_phone,
              shift: vehicle.driver1_shift,
            }}
          />
        )}
      </div>

      <div className='flex m-8 justify-between items-center'>
        <div>
          <p className='text-2xl  font-bold'>Vehicle Maintenance :</p>
        </div>
        <div>
          <div
            className={`${
              !(issueList.length > 0 || serviceList.id) && "hidden"
            }`}>
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
          <p className='text-xl ps-10 font-bold mb-4 '>Issues: </p>

          <div className='grid grid-cols-2 gap-4 lg:ms-20 ms-8 '>
            {issues.map((issue, index) => (
              <div key={index} className='flex items-center gap-3'>
                <input
                  checked={issueList.some((item) => item.id === issue.id)}
                  onChange={() => handleSelectIssue(issue)}
                  type='checkbox'
                  className='checkbox'
                />

                <div className='flex items-center gap-3'>
                  <img
                    className='avatar mask mask-squircle lg:h-12 lg:w-12 h-8 w-8'
                    src={issue.logo}
                  />

                  <p className='font-bold lg:text-xl text-m '>{issue.name}</p>
                  {/* {issueList.some((item) => item.id === 14) && (
                    <input
                      type='text'
                      value={issueOtherString}
                      onChange={(e) => {
                        setIssueOtherString(e.target.value);
                      }}
                      onBlur={(e) => {
                        handleSelectIssue({
                          image: "",
                          id: 14,
                          name: e.target.value,
                        });
                      }}
                      placeholder='Enter Issue'
                      className={`input input-sm  ${
                        issue.id !== 14 ? "hidden" : ""
                      }`}
                    />
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='lg:w-1/2   '>
          <div className='flex mb-4  items-center'>
            <p className='text-xl ps-10 font-bold '>Services: </p>

            <div className='mx-auto  items-center'>
              <div className='text-sm opacity-50'>Current: {current} Km</div>
              <div className='text-sm font-bold '>
                Next : {next ? next + "Km" : "Under Service"}
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 lg:ms-20 ms-8'>
            {services.map((service, index) => (
              <div key={index} className='flex items-center gap-3'>
                <div>
                  <label>
                    <input
                      type='checkbox'
                      checked={service.id === serviceList.id}
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
        <div className='flex justify-between m-8'>
          <p className='text-2xl  font-bold'>Maintenance History: </p>
          <button className='btn-primary font-bold btn'>
            {" "}
            <span className=' text-lg'>
              <IoMdPrint />
            </span>
            Print
          </button>
        </div>
        <div>
          <div className='m-4 grid gap-4 '>
            {vehicleMain.map((m) => (
              <div
                key={m.id}
                className='  collapse collapse-arrow join-item shadow-sm bg-[#F2F7FE] '>
                <input type='radio' name='my-accordion-4' />
                <div className=' collapse-title lg:flex  justify-around py-4 items-center '>
                  <div>
                    <h2 className='card-title'>Repair Request</h2>
                    {m.issue_parts && (
                      <p>
                        <span className='font-bold text-sm'>Issue:</span>{" "}
                        <strong>{m.issue_parts}</strong>
                      </p>
                    )}
                    {m.services && (
                      <p>
                        <span className='font-bold text-sm'>Services:</span>{" "}
                        <strong>{m.services}</strong>
                      </p>
                    )}
                  </div>
                  <div className='flex justify-between lg:justify-between lg:w-2/3 mt-2'>
                    <div className=' flex flex-col  justify-center  items-center '>
                      <p> Request Date:</p>
                      <p> {m.req_date}</p>
                    </div>
                    {m.receive_date && (
                      <div className=' flex flex-col  justify-center  items-center '>
                        <p> Received Date:</p>
                        <p> {m.receive_date}</p>
                      </div>
                    )}
                    <div className=' flex lg:flex-col flex-row justify-center  items-center '>
                      <div className='hidden lg:block'>Status</div>
                      <div
                        className={`badge text-xs font-bold ${
                          m.status === "pending"
                            ? "badge-warning text-yellow-900"
                            : "badge-success text-green-800"
                        }`}>
                        {m.status}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='collapse-content text-sm'>
                  <div className='flex lg:flex-row flex-col gap-2 justify-around  '>
                    {m.status === "pending" ? (
                      <div className='flex flex-col gap-4'>
                        <label className='input'>
                          <span className='label'>Receive Date</span>
                          <input
                            onChange={(e) => setReceiveDate(e.target.value)}
                            value={receiveDate}
                            required
                            type='date'
                          />
                        </label>

                        <label className='input '>
                          <span className='label  '> Comment</span>
                          <input
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                            type='text'
                          />
                        </label>
                      </div>
                    ) : (
                      <div className='flex flex-col gap-4'>
                        <div>
                          {" "}
                          <span>Receive Date:</span>{" "}
                          <strong>{m.receive_date}</strong>{" "}
                        </div>

                        <div>
                          {" "}
                          <span>Comment</span>{" "}
                          <strong>
                            {m.comment ? m.comment : "No Comment"}
                          </strong>{" "}
                        </div>
                      </div>
                    )}

                    {m.services &&
                      (m.status === "pending" ? (
                        <label className='input'>
                          <span className='label'> Next</span>
                          <input
                            onChange={(e) => setUpdateNext(e.target.value)}
                            value={updateNext}
                            type='number'
                          />
                        </label>
                      ) : (
                        <div>
                          {" "}
                          <span>Next</span>{" "}
                          <strong>{m.next ? m.next : "No Next"}</strong>{" "}
                        </div>
                      ))}

                    {m.status === "pending" && (
                      <div>
                        <label>Upload Photos (Max 5)</label>
                        <input
                          type='file'
                          multiple
                          accept='image/*'
                          onChange={handleImageUpload}
                          className=' file-input'
                        />

                        <div className='flex flex-wrap gap-2 mt-2'>
                          {images.map((image, index) => (
                            <div key={index} className='relative'>
                              <img
                                src={image.preview}
                                alt='Preview'
                                className='w-20 h-20 object-cover rounded-md'
                              />
                              <button
                                type='button'
                                onClick={(e) => removeImage(e, index)}
                                className='absolute top-0 right-0 bg-red-500 text-white rounded-full px-2'>
                                X
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {m.status === "pending" && (
                      <button
                        className='btn btn-primary'
                        onClick={(e) => handleReceive(e, m.id)}>
                        Receive
                      </button>
                    )}
                  </div>
                  <div>
                    {m.status === "received" && (
                      <div>
                        {m.photo_main && (
                          <h3 className='font-bold text-lg'>Photos: </h3>
                        )}
                        <div className='flex gap-3'>
                          {[
                            m.photo_main,
                            m.photo_additional_1,
                            m.photo_additional_2,
                            m.photo_additional_3,
                            m.photo_additional_4,
                          ]
                            .filter(Boolean)
                            .map((photo, index) => (
                              <img
                                key={index}
                                src={`https://ncmeq.pythonanywhere.com${photo}`}
                                alt={`Photo ${index + 1}`}
                                className='w-[50px] h-[50px] rounded cursor-pointer'
                                onClick={() =>
                                  handleImageClick(
                                    `https://ncmeq.pythonanywhere.com${photo}`
                                  )
                                }
                              />
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                  {selectedImage && (
                    <div
                      className='fixed inset-0 flex items-center justify-center bg-transparent/50  bg-opacity-80 z-50'
                      onClick={() => setSelectedImage(null)}>
                      <div className='relative'>
                        <img
                          src={selectedImage}
                          alt='Enlarged'
                          className='rounded-md shadow-lg'
                        />
                        <button
                          className='absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1'
                          onClick={() => setSelectedImage(null)}>
                          ✕
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* modal-bottom lg:modal-middle */}
      <dialog id='my_modal_5' className='modal    '>
        <div className='modal-box w-11/12 max-w-5xl  '>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={() => {
                setIssueList([]);
                setIssueString("");
                setServiceList({});
                setServiceString();
                setUpdateCurrent("");
                setEmail("");
                setSuccess("");
                setError("");
              }}
              className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <h1 className='font-bold  text-lg'>Send for Maintenance</h1>
          <div>
            <p className='text-xs'>
              {" "}
              <span className='font-bold '>Issues:</span>{" "}
              {issueString ? issueString : "No Issue Selected"}
            </p>
            <p className='text-xs'>
              <span className='font-bold '>Service:</span>{" "}
              {serviceString ? serviceString : "No Service Selected"}
            </p>
            {serviceString && (
              <label className='input input-primary input-xs w-[40%] font-bold text-black'>
                <span className='label'>Current</span>
                <input
                  type='number'
                  onBlur={(e) => setUpdateCurrent(e.target.value)}
                  placeholder='Current KM '
                />
              </label>
            )}

            <div>
              <h2 className='font-bold text-primary text-xl my-3'>
                Send Email:
              </h2>
              <div>
                <form
                  ref={form}
                  onSubmit={handleSendEmail}
                  className='flex flex-col gap-4 mx-12'>
                  <label className='floating-label'>
                    <span>Your Email</span>
                    <input
                      type='email'
                      name='user_email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='mail@site.com'
                      className='input  w-full '
                      required
                    />
                  </label>

                  <label className='floating-label'>
                    <span>Subject</span>
                    <input
                      type='text'
                      readOnly
                      name='title'
                      className='input w-full validator '
                      value={`Vehicle Maintenance Request – ${vehicle.name} (Plate No: ${vehicle.plate_number})`}
                    />
                  </label>
                  {/* Hidden input for EmailJS with raw HTML body */}
                  <input
                    type='hidden'
                    name='message'
                    value={getEmailHtmlBody(
                      vehicle,
                      issueString,
                      serviceString,
                      UpdateCurrent
                    )}
                  />

                  {/* Show Email Preview */}
                  <div
                    className='border  rounded p-2 bg-gray-100 text-xs'
                    dangerouslySetInnerHTML={{
                      __html: getEmailHtmlBody(
                        vehicle,
                        issueString,
                        serviceString,
                        UpdateCurrent
                      ),
                    }}
                  />

                  {/* <label className='floating-label'>
                    <span>Body</span>
                    <textarea
                      type='text'
                      readOnly
                      name='message'
                      className=' w-full textarea textarea-neutral validator'
                      value={`Please check the following vehicle for maintenance: ${
                        vehicle.name
                      } (Plate No: ${vehicle.plate_number}, Chassis No: ${
                        vehicle.chassis_number
                      }).  ${
                        issueString ? `Reported issues:${issueString}.` : ""
                      } ${
                        serviceString
                          ? `Service need for: ${serviceString} Km.`
                          : ""
                      } ${
                        UpdateCurrent && "Current : " + UpdateCurrent + " Km."
                      }  Kindly schedule the necessary service.`}
                    />
                  </label> */}
                  {success && (
                    <div className='p-2 bg-success text-green-950 text-center font-bold text-xs rounded-lg '>
                      <p>{success}</p>
                    </div>
                  )}
                  {error && (
                    <div className='p-2 bg-error text-rose-950 text-center font-bold text-xs rounded-lg '>
                      <p>{error}</p>
                    </div>
                  )}

                  <input
                    type='submit'
                    value='Send Email'
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
