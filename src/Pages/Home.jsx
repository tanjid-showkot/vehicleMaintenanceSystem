/** @format */

import TransportCard from "../Component/TransportCard";

const Home = () => {
  return (
    <div className=' m-6'>
      <h1 className='text-center font-bold text-2xl text-primary '>
        Equipment List
      </h1>
      <div
        className=' lg:grid lg:grid-cols-3 lg:gap-4
       '>
        <TransportCard></TransportCard>
        <TransportCard></TransportCard>
        <TransportCard></TransportCard>
      </div>
    </div>
  );
};

export default Home;
