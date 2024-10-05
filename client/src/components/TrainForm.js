import React, { useState } from 'react';

const SearchTrain = () => {

  const[source,setSource] = useState('');
  const[destination,setDestination] = useState('');
  const[date,setDate] = useState(new Date());

  function handletrain(e){
    e.preventDefault();
    // console.log("button clicked"); 
   
  }
  return (
    <div className="bg-blue-800 text-white p-12 min-h-96">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:px-16 space-y-6 lg:space-y-0">
        {/* Left Side: Heading */}
        <div className="text-center lg:text-left flex-shrink-1 mr-4">
          <h1 className="text-4xl lg:text-5xl font-bold">Get All Trains Available</h1>
          <p className="text-lg lg:text-xl mt-4 text-gray-200">
    Find and book trains to your desired destination quickly and easily. Explore various options to make your journey comfortable and hassle-free.
  </p>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
          <form onClick={handletrain}>

          <div className="flex flex-col lg:flex-row justify-between items-center mb-6 space-y-6 lg:space-y-0">
            
            <div className="flex flex-col flex-grow">
              <label className="text-gray-700 text-sm font-bold mb-2">From</label>
              <input
              value={source} 
              onChange={(e)=>setSource(e.target.value)}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
                type="text"
                placeholder="Enter Source Name"
              />
            </div>

            <button  className="lg:mx-4 bg-blue-800 text-white font-bold py-3 px-4 rounded-full hover:bg-blue-900">
              &#x21C4;
            </button>

            <div className="flex flex-col flex-grow">
              <label className="text-gray-700 text-sm font-bold mb-2">To</label>
              <input
              value={destination}
              onChange={(e)=>setDestination(e.target.value)}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
                type="text"
                placeholder="Enter Destination Name"
              />
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <label className="text-gray-700 text-sm font-bold mb-2">Departure</label>
            <input
            value={date}
            onChange={(e)=>setDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
              type="date"
            />
          </div>

          <button  className="bg-blue-800 text-white font-bold py-3 px-4 rounded-full w-full hover:bg-blue-900">
            SEARCH TRAINS
          </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default SearchTrain;
