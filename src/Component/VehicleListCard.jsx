/** @format */
import { useNavigate } from "react-router";
import mercedes from "../assets/logo/mercedes.png";
const VehicleListCard = () => {
  const navigator = useNavigate();
  return (
    <ul
      onClick={() => navigator("/vehicleProfile")}
      className='list bg-base-100 rounded-box shadow-md'>
      <li className='list-row'>
        <div className='text-4xl font-thin opacity-30 tabular-nums'>01</div>
        <div>
          <img className='size-12 w-14  rounded-box' src={mercedes} />
        </div>
        <div className='list-col-grow'>
          <div className=' font-black'>Plate No: 29481 </div>
          <div className='text-xs uppercase font-semibold opacity-60'>
            TATA, LPO1618, PRIVATE TRANS. BUS
          </div>
          <div className='text-m text-accent uppercase font-bold  '>
            Site: Razeen
          </div>
          <div className='text-xs items-center text-center flex justify-around uppercase font-semibold opacity-60'>
            <p>Current</p>
            <p>Next</p>
          </div>
          <div className='text-m text-info text-center flex justify-around uppercase font-semibold  items-center'>
            <p className='text-m text-info text-center  uppercase font-semibold '>
              4475
            </p>
            <p className='text-m text-primary text-center  uppercase font-semibold '>
              4475
            </p>
          </div>
        </div>
        <button className='btn btn-square btn-ghost'>
          <div aria-label='error' className='status status-success'></div>
        </button>
        <button className='btn btn-square btn-ghost'>
          <svg
            className='size-[1.2em]'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <g
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='2'
              fill='none'
              stroke='currentColor'>
              <path d='M6 3L20 12 6 21 6 3z'></path>
            </g>
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default VehicleListCard;
