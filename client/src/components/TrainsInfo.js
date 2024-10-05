import React from 'react';

const TrainsInfo = ({ trainNumber, trainName, fromStation, departureTime, toStation, arrivalTime, duration, halts, distance, runsOn, classesAvailable }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-4 max-w-5xl">
      
      {/* Train Number, Name, Running Days, and Classes */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="text-gray-600 font-bold text-lg">{trainNumber}</div>
          <div className="text-xl font-semibold text-blue-900">{trainName}</div>
        </div>
        <div className="text-right text-gray-600 text-sm font-semibold">
          <div>Runs on: {runsOn}</div>
          <div>Classes: {classesAvailable.join(' ')}</div>
        </div>
      </div>

 
      <div className="flex items-center justify-between">
        {/* From Station */}
        <div className="text-left">
          <div className="text-lg font-bold text-black">{fromStation}</div>
          <div className="text-sm text-gray-500">{departureTime}</div>
        </div>

        {/* Line with Duration, Halts, and Distance */}
        <div className="flex-grow flex items-center justify-center mx-4">
          <div className="h-px bg-gray-300 flex-grow"></div>
          <div className="px-4 text-gray-500 text-center">
            <div className="font-semibold">{duration}</div>
            <div className="text-sm">
              {halts} halts | {distance} kms
            </div>
          </div>
          <div className="h-px bg-gray-300 flex-grow"></div>
        </div>

        {/* To Station */}
        <div className="text-right">
          <div className="text-lg font-bold text-black">{toStation}</div>
          <div className="text-sm text-gray-500">{arrivalTime}</div>
        </div>
      </div>
    </div>
  );
};

export default TrainsInfo;
