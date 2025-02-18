/** @format */
import { useNavigate } from "react-router";
import vehicle from "../assets/transport/passanger.png";
const TransportCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/vehicle")}
      className='card card-side bg-base-100 shadow-sm'>
      <div className='card-body lg:w-3/4 w-4/5'>
        <h2 className=' font-bold text-lg lg:card-title'>Passenger Vehicle</h2>
        <div className='flex justify-around items-center'>
          <div>
            <p className='font-bold text-center text-m'> Hameem</p>

            <p className='font-bold  text-center text-m'>3</p>
          </div>
          <div>
            <p className='font-bold text-center text-m'>Razeen</p>
            <p className='font-bold text-center text-m'>3</p>
          </div>
        </div>
        <div>
          <p className=' text-center font-bold text-m'>Total: 6</p>
        </div>
      </div>
      <figure className='w-40'>
        <img src={vehicle} className='h-28' alt='Movie' />
      </figure>
    </div>
  );
};

export default TransportCard;
