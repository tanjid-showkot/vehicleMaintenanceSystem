/** @format */
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

const TransportCard = (props) => {
  const { class_name, transport } = props;

  const allSites = ["Hameem", "Razeen"];

  const siteCounts = transport.reduce((acc, vehicle) => {
    const site = vehicle.site;
    acc[site] = (acc[site] || 0) + 1;
    return acc;
  }, {});

  const finalSiteCounts = allSites.reduce((acc, site) => {
    acc[site] = siteCounts[site] || 0;
    return acc;
  }, {});

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/vehicle", { state: { transport } });
  };
  return (
    <div className='card card-side bg-base-100 shadow-sm'>
      <div className='card-body lg:w-3/4 w-4/5 flex flex-col justify-between'>
        <div>
          <h2 className='font-bold text-lg lg:card-title'>{class_name}</h2>

          <div className='flex justify-around items-center'>
            {Object.entries(finalSiteCounts).map(([site, count]) => (
              <div key={site}>
                <p className='font-bold text-center text-m'>{site}</p>
                <p className='font-bold text-center text-m'>{count}</p>
              </div>
            ))}
          </div>

          <div>
            <p className='text-center font-bold text-m'>
              Total: {transport.length}
            </p>
          </div>
        </div>

        <div>
          <button
            onClick={() => {
              handleClick();
            }}
            className='btn btn-ghost w-full'>
            All Transport {">>"}
          </button>
        </div>
      </div>
      <figure className='w-40'>
        <img src={transport[0].class_logo} className='p-2 h-fit' alt='' />
      </figure>
    </div>
  );
};

export default TransportCard;

TransportCard.propTypes = {
  class_name: PropTypes.string.isRequired,
  transport: PropTypes.arrayOf(
    PropTypes.shape({
      site: PropTypes.string,
      class_logo: PropTypes.string.isRequired,
    })
  ).isRequired,
};
