/** @format */
import car from "../assets/transport/3ton.png";
import ac from "../assets/Services/fan.png";
import others from "../assets/Services/application.png";
import engine from "../assets/Services/car-engine.png";
import dynamo from "../assets/Services/electric-motor.png";
import gear from "../assets/Services/gear.png";
import light from "../assets/Services/headlight.png";
import hydraulic from "../assets/Services/hydraulic-ram.png";
import tyre from "../assets/Services/wheels.png";
import carBreak from "../assets/Services/break.png";
import engineOil from "../assets/issue/engine-oil.png";
import coolingWater from "../assets/issue/coolingWater.png";
import gearOil from "../assets/issue/gearOil.png";
import hydraulicOil from "../assets/issue/hydraulicOil.png";
import radiator from "../assets/issue/radiator.png";

const VehicleProfile = () => {
  return (
    <div>
      <div className='hero bg-base-200 '>
        <div className=' hero-content flex-col  lg:flex-row-reverse'>
          <img src={car} className='lg:max-w-sm rounded-lg ' />
          <div>
            <h1 className='text-3xl font-bold'>Plate No: 294889</h1>
            <p className='font-bold'>ISUZU, NPR, PICK UP CARGO</p>
            <p className='font-bold'>CHASSIS DETAIL: WMA34WZZ9NM893049</p>
            <p className=''>Model: 2012</p>
            <p className=''>Vehicle Type: PASSENGER VEHICLE</p>
            <p className='font-bold '>
              Status:{" "}
              <span className='text-2xl text-success font-bold'>
                {" "}
                <div
                  aria-label='status'
                  className='status status-success status-xl '></div>{" "}
                Active
              </span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className='text-2xl m-8 font-bold'>Vehicle Maintenance :</p>
      </div>
      <div className='lg:flex  '>
        <div className='lg:w-1/2 '>
          <div>
            <p className='text-xl ps-10 font-bold mb-4 '>Issues: </p>
          </div>
          <div className='grid grid-cols-2 gap-4 lg:ms-20 ms-8 '>
            <div className='flex items-center gap-3'>
              <div>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </div>
              <div>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle lg:h-12 lg:w-12 h-8 w-8'>
                      <img src={ac} alt='Avatar Tailwind CSS Component' />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold lg:text-xl text-m '>
                      Air Condition
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </div>
              <div>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle lg:h-12 lg:w-12 h-8 w-8'>
                      <img src={engine} alt='Avatar Tailwind CSS Component' />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold lg:text-xl text-m '>Engine</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </div>
              <div>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle lg:h-12 lg:w-12 h-8 w-8'>
                      <img src={gear} alt='Avatar Tailwind CSS Component' />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold lg:text-xl text-m '>Gear</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </div>
              <div>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle lg:h-12 lg:w-12 h-8 w-8'>
                      <img
                        src={hydraulic}
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold lg:text-xl text-m '>
                      Hydraulic
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </div>
              <div>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle lg:h-12 lg:w-12 h-8 w-8'>
                      <img src={tyre} alt='Avatar Tailwind CSS Component' />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold lg:text-xl text-m '>Tyre</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </div>
              <div>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle lg:h-12 lg:w-12 h-8 w-8'>
                      <img src={dynamo} alt='Avatar Tailwind CSS Component' />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold lg:text-xl text-m '>Dynamo</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </div>
              <div>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle lg:h-12 lg:w-12 h-8 w-8'>
                      <img src={light} alt='Avatar Tailwind CSS Component' />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold lg:text-xl text-m '>Light</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </div>
              <div>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle lg:h-12 lg:w-12 h-8 w-8'>
                      <img src={carBreak} alt='Avatar Tailwind CSS Component' />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold lg:text-xl text-m '>Break</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </div>
              <div>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle lg:h-12 lg:w-12 h-8 w-8'>
                      <img src={others} alt='Avatar Tailwind CSS Component' />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold lg:text-xl text-m '>Others</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 mt-8 '>
          <div>
            <p className='text-xl ps-10 font-bold mb-4'>Services: </p>
          </div>
          <div className='grid lg:grid-cols-2 gap-4 lg:ms-20 ms-8'>
            <div className='flex items-center gap-3'>
              <div>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </div>
              <div>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle lg:h-12 lg:w-12 h-8 w-8'>
                      <img
                        src={engineOil}
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold lg:text-xl text-m '>
                      Engine Oil
                    </div>
                    <div className='text-sm opacity-50'>Current: 77601 km</div>
                    <div className='text-sm '>Next Service: 87601 km</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </div>
              <div>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle lg:h-12 lg:w-12 h-8 w-8'>
                      <img src={gearOil} alt='Avatar Tailwind CSS Component' />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold lg:text-xl text-m '>Gear Oil</div>
                    <div className='text-sm opacity-50'>Current: 77601 km</div>
                    <div className='text-sm '>Next Service: 87601 km</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </div>
              <div>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle lg:h-12 lg:w-12 h-8 w-8'>
                      <img
                        src={hydraulicOil}
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold lg:text-xl text-m '>
                      Hydraulic Oil
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <div>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </div>
              <div>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle lg:h-12 lg:w-12 h-8 w-8'>
                      <img src={radiator} alt='Avatar Tailwind CSS Component' />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold lg:text-xl text-m '>Radiator</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </div>
              <div>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle lg:h-12 lg:w-12 h-8 w-8'>
                      <img
                        src={coolingWater}
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold lg:text-xl text-m '>
                      Cooling Water
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </div>
              <div>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle lg:h-12 lg:w-12 h-8 w-8'>
                      <img src={others} alt='Avatar Tailwind CSS Component' />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold lg:text-xl text-m '>Others</div>
                  </div>
                </div>
              </div>
            </div>
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
              <div className=' flex justify-around py-4 items-center '>
                <div>
                  <h2 className='card-title'>New movie is released!</h2>
                  <p>Click the button to watch on Jetflix app.</p>
                </div>
                <div className=' flex flex-col justify-center  items-center '>
                  <p> Request Date:</p>
                  <p> 20/01/2025</p>
                </div>
                <div className=' flex flex-col justify-center  items-center '>
                  <div>Status</div>
                  <div className='badge badge-warning'>Pending</div>
                </div>
              </div>
            </div>
            <div className='card  shadow-sm bg-[#F2F7FE] '>
              <div className=' flex justify-around py-4 items-center '>
                <div>
                  <h2 className='card-title'>New movie is released!</h2>
                  <p>Click the button to watch on Jetflix app.</p>
                </div>
                <div className=' flex flex-col justify-center  items-center '>
                  <p> Request Date:</p>
                  <p> 20/01/2025</p>
                </div>
                <div className=' flex flex-col justify-center  items-center '>
                  <p> Received Date:</p>
                  <p> 20/01/2025</p>
                </div>
                <div className=' flex flex-col justify-center  items-center '>
                  <div>Status</div>
                  <div className='badge badge-success'>Received</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleProfile;
