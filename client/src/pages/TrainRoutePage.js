import React from 'react';


const TrainRoutePage = () => {
    const routes = [
        { stationName: 'Station A', code: 'STA', arrival: '10:00', halt: '5 min', departure: '10:05', days: 'M T W', distance: '100 km', platform: '1' },
        { stationName: 'Station A', code: 'STA', arrival: '10:00', halt: '5 min', departure: '10:05', days: 'M T W', distance: '100 km', platform: '1' },
        { stationName: 'Station A', code: 'STA', arrival: '10:00', halt: '5 min', departure: '10:05', days: 'M T W', distance: '100 km', platform: '1' },
        { stationName: 'Station A', code: 'STA', arrival: '10:00', halt: '5 min', departure: '10:05', days: 'M T W', distance: '100 km', platform: '1' },
        { stationName: 'Station A', code: 'STA', arrival: '10:00', halt: '5 min', departure: '10:05', days: 'M T W', distance: '100 km', platform: '1' },
        { stationName: 'Station A', code: 'STA', arrival: '10:00', halt: '5 min', departure: '10:05', days: 'M T W', distance: '100 km', platform: '1' },
        { stationName: 'Station A', code: 'STA', arrival: '10:00', halt: '5 min', departure: '10:05', days: 'M T W', distance: '100 km', platform: '1' },
        { stationName: 'Station A', code: 'STA', arrival: '10:00', halt: '5 min', departure: '10:05', days: 'M T W', distance: '100 km', platform: '1' },
        { stationName: 'Station A', code: 'STA', arrival: '10:00', halt: '5 min', departure: '10:05', days: 'M T W', distance: '100 km', platform: '1' },
        { stationName: 'Station A', code: 'STA', arrival: '10:00', halt: '5 min', departure: '10:05', days: 'M T W', distance: '100 km', platform: '1' },
        { stationName: 'Station A', code: 'STA', arrival: '10:00', halt: '5 min', departure: '10:05', days: 'M T W', distance: '100 km', platform: '1' },
        { stationName: 'Station A', code: 'STA', arrival: '10:00', halt: '5 min', departure: '10:05', days: 'M T W', distance: '100 km', platform: '1' },
        { stationName: 'Station A', code: 'STA', arrival: '10:00', halt: '5 min', departure: '10:05', days: 'M T W', distance: '100 km', platform: '1' },
        { stationName: 'Station A', code: 'STA', arrival: '10:00', halt: '5 min', departure: '10:05', days: 'M T W', distance: '100 km', platform: '1' },
        { stationName: 'Station A', code: 'STA', arrival: '10:00', halt: '5 min', departure: '10:05', days: 'M T W', distance: '100 km', platform: '1' },
        { stationName: 'Station A', code: 'STA', arrival: '10:00', halt: '5 min', departure: '10:05', days: 'M T W', distance: '100 km', platform: '1' },
        // Add more route objects here...
      ];
      
     
      
  return (
    <div className="overflow-x-auto">
       
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="py-2 px-4">S No.</th>
            <th className="py-2 px-4">Station Name</th>
            <th className="py-2 px-4">Code</th>
            <th className="py-2 px-4">Arrival</th>
            <th className="py-2 px-4">Halt</th>
            <th className="py-2 px-4">Departure</th>
            <th className="py-2 px-4">Days</th>
            <th className="py-2 px-4">Distance</th>
            <th className="py-2 px-4">Platform</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((route, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4 text-center">{index + 1}</td>
              <td className="py-2 px-4">{route.stationName}</td>
              <td className="py-2 px-4 text-center">{route.code}</td>
              <td className="py-2 px-4 text-center">{route.arrival}</td>
              <td className="py-2 px-4 text-center">{route.halt}</td>
              <td className="py-2 px-4 text-center">{route.departure}</td>
              <td className="py-2 px-4 text-center">{route.days}</td>
              <td className="py-2 px-4 text-center">{route.distance}</td>
              <td className="py-2 px-4 text-center">{route.platform}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainRoutePage;
