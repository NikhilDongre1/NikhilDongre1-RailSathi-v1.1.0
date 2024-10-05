import React from 'react'

const PnrInfoPage = ( ) => {
  const trainDetails = {
    departureTime: '17:45',
    arrivalTime: '03:45',
    fromStation: 'Delhi H Nizamuddin',
    toStation: 'Damoh',
    departureDate: 'Tue, 15 Feb',
    arrivalDate: 'Wed, 16 Feb',
    departurePlatform: '3',
    distance: '904'
  };
  
  const pnrInfo = {
    pnrNumber: '2815831822',
    class: 'SL',
    quota: 'GNWL'
  };
  
  const passengers = [
    { status: 'RAC 76', confirmationChance: 100 },
    { status: 'RAC 77', confirmationChance: 100 }
  ];
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg max-w-md mx-auto mt-12 ">
      {/* Train Timing and Station Info */}
      <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg mb-4">
        <div className="text-left">
          <div className="text-2xl font-bold">{trainDetails.departureTime}</div>
          <div className="text-sm text-gray-600">{trainDetails.fromStation}</div>
          <div className="text-sm text-gray-600">{trainDetails.departureDate}</div>
          <div className="text-sm text-gray-600">Platform - {trainDetails.departurePlatform}</div>
        </div>
        <div className="text-center text-gray-600">
          <span>⟷</span>
          <div className="text-sm">{trainDetails.distance} km</div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">{trainDetails.arrivalTime}</div>
          <div className="text-sm text-gray-600">{trainDetails.toStation}</div>
          <div className="text-sm text-gray-600">{trainDetails.arrivalDate}</div>
        </div>
      </div>

      {/* PNR Information */}
      <div className="bg-blue-50 p-4 rounded-lg mb-4">
        <div className="text-lg font-semibold">PNR - {pnrInfo.pnrNumber}</div>
        <div className="text-sm text-gray-600">Class - {pnrInfo.class}</div>
        <div className="text-sm text-gray-600">Quota - {pnrInfo.quota}</div>
      </div>

      {/* Passenger Details */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="text-lg font-semibold mb-2">Passenger Details</div>
        {passengers.map((passenger, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <div>
              <div className="text-sm text-gray-800">Passenger {index + 1}</div>
              <div className="text-sm text-gray-600">{passenger.status}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-green-600 font-bold">{passenger.confirmationChance}%</div>
              <div className="text-sm text-gray-600">confirmation chances</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PnrInfoPage
