/** @format */
import PropTypes from "prop-types";
const SearchVehicleCard = (props) => {
  <p>{}</p>;
  const {
    class_name,
    status,
    name,
    site,
    logo,
    photo,
    plate_number,
    chassis_number,
  } = props.vehicle;
  return (
    <div className=''>
      <div className='flex items-center shadow-md bg-base-100 p-1 '>
        <div className='p-2 w-[20%]'>
          {" "}
          <img className='w-12 h-12' src={photo} alt='' />{" "}
        </div>
        <div className='text-xs w-[65%]'>
          <p className='font-bold'>
            {" "}
            <span>Plate No:</span> <strong>{plate_number}</strong>{" "}
          </p>
          <p className='font-bold text-gray-500  whitespace-nowrap overflow-hidden text-ellipsis   '>
            {" "}
            <strong>{name}</strong>{" "}
          </p>
          <p className='font-bold'>
            {" "}
            <span>Chassis No:</span> <strong>{chassis_number}</strong>{" "}
          </p>
          <p className='font-bold'>
            {" "}
            <span>Vehicle Type:</span> <strong>{class_name}</strong>{" "}
          </p>
          <p className='font-bold'>
            {" "}
            <span>Site:</span> <strong>{site}</strong>{" "}
          </p>
        </div>
        <div className='w-[15%]'>
          <button className='btn btn-square btn-ghost'>
            <div
              aria-label='error'
              className={`status ${
                status ? "status-success" : "status-error"
              }`}></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchVehicleCard;
SearchVehicleCard.propTypes = {
  vehicle: PropTypes.shape({
    class_name: PropTypes.string,
    status: PropTypes.string,
    name: PropTypes.string,
    site: PropTypes.string,
    logo: PropTypes.string,
    photo: PropTypes.string,
    plate_number: PropTypes.string,
    chassis_number: PropTypes.string,
  }).isRequired,
};
