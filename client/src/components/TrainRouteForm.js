import React, { useState } from 'react'

const TrainRouteForm = () => {
  const[route,setRoute] = useState('');

  function handleroute(e){
    e.preventDefault();
   
  }
  return (
    <div className="bg-blue-800 text-white p-12 min-h-96">
    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:px-16 space-y-6 lg:space-y-0">
      {/* Left Side: Heading */}
      <div className="text-center lg:text-left flex-shrink-1 mr-4">
        <h1 className="text-4xl lg:text-5xl font-bold">Check Your Train Timetable</h1>
        <p className="text-lg lg:text-xl mt-4 text-gray-200">
          Enter your train number or name to get the latest status of train.
        </p>
      </div>

      {/* Right Side: Form */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <form onSubmit={handleroute}>

        <div className="flex flex-col space-y-6">
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-bold mb-2">Train Number</label>
            <input
            value={route}
            onChange={(e) => setRoute(e.target.value)}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
              type="text"
              placeholder="Enter train number or name"
            />
          </div>

          <button className="bg-blue-800 text-white font-bold py-3 px-4 rounded-full hover:bg-blue-900">
            CHECK TRAIN SCHEDULE
          </button>
        </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default TrainRouteForm
