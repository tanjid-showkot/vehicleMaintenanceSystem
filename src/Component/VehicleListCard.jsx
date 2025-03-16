/** @format */
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

const VehicleListCard = (props) => {
  const navigator = useNavigate();
  const { vehicle, sl } = props;

  const handleClick = () => {
    navigator("/vehicleProfile", { state: { vehicle } });
  };
  return (
    <ul className='list bg-base-100 rounded-box shadow-md'>
      <li className='list-row'>
        <div className='text-4xl font-thin opacity-30 tabular-nums '>{sl}</div>
        <div className='flex items-center bg-gray-100 p-4 rounded-2xl  '>
          <img className=' size-14 h-fit ' src={vehicle.logo} />
        </div>
        <div className='list-col-grow'>
          <div className=' font-black'>Plate No: {vehicle.plate_number} </div>
          <div className='text-xs uppercase font-semibold opacity-60'>
            {vehicle.name}
          </div>
          <div className='text-m text-accent uppercase font-bold  '>
            Site: {vehicle.site}
          </div>
          {/* <div className='text-xs items-center text-center flex justify-around uppercase font-semibold opacity-60'>
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
          </div> */}
        </div>
        <button className='btn btn-square btn-ghost'>
          <div
            aria-label='error'
            className={`status ${
              vehicle.status ? "status-success" : "status-error"
            }`}></div>
        </button>
        <button
          onClick={() => handleClick()}
          className='btn btn-square btn-ghost'>
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
VehicleListCard.propTypes = {
  vehicle: PropTypes.shape({
    logo: PropTypes.string,
    plate_number: PropTypes.string,
    name: PropTypes.string,
    site: PropTypes.string,
    status: PropTypes.bool,
  }).isRequired,
  sl: PropTypes.number.isRequired,
};
