import React from 'react';
import TrainsInfo from '../components/TrainsInfo';

const trains = [
  {
    trainNumber: '11906',
    trainName: 'Hoshiarpur - Agra Cantt Express',
    fromStation: 'JUC',
    departureTime: '23:45',
    toStation: 'NDLS',
    arrivalTime: '07:10',
    duration: '07 h 25 m',
    halts: 7,
    distance: 435,
    runsOn: 'M T W T F S S', 
    classesAvailable: ['GN', 'SL', '3A', '2A'], 
  },
  {
    trainNumber: '11906',
    trainName: 'Hoshiarpur - Agra Cantt Express',
    fromStation: 'JUC',
    departureTime: '23:45',
    toStation: 'NDLS',
    arrivalTime: '07:10',
    duration: '07 h 25 m',
    halts: 7,
    distance: 435,
    runsOn: 'M T W T F S S', 
    classesAvailable: ['GN', 'SL', '3A', '2A'], 
  },
  {
    trainNumber: '11906',
    trainName: 'Hoshiarpur - Agra Cantt Express',
    fromStation: 'JUC',
    departureTime: '23:45',
    toStation: 'NDLS',
    arrivalTime: '07:10',
    duration: '07 h 25 m',
    halts: 7,
    distance: 435,
    runsOn: 'M T W T F S S', 
    classesAvailable: ['GN', 'SL', '3A', '2A'], 
  },
  {
    trainNumber: '11906',
    trainName: 'Hoshiarpur - Agra Cantt Express',
    fromStation: 'JUC',
    departureTime: '23:45',
    toStation: 'NDLS',
    arrivalTime: '07:10',
    duration: '07 h 25 m',
    halts: 7,
    distance: 435,
    runsOn: 'M T W T F S S', 
    classesAvailable: ['GN', 'SL', '3A', '2A'], 
  },
  {
    trainNumber: '11906',
    trainName: 'Hoshiarpur - Agra Cantt Express',
    fromStation: 'JUC',
    departureTime: '23:45',
    toStation: 'NDLS',
    arrivalTime: '07:10',
    duration: '07 h 25 m',
    halts: 7,
    distance: 435,
    runsOn: 'M T W T F S S', 
    classesAvailable: ['GN', 'SL', '3A', '2A'], 
  },
  {
    trainNumber: '11906',
    trainName: 'Hoshiarpur - Agra Cantt Express',
    fromStation: 'JUC',
    departureTime: '23:45',
    toStation: 'NDLS',
    arrivalTime: '07:10',
    duration: '07 h 25 m',
    halts: 7,
    distance: 435,
    runsOn: 'M T W T F S S', 
    classesAvailable: ['GN', 'SL', '3A', '2A'], 
  },
  {
    trainNumber: '11906',
    trainName: 'Hoshiarpur - Agra Cantt Express',
    fromStation: 'JUC',
    departureTime: '23:45',
    toStation: 'NDLS',
    arrivalTime: '07:10',
    duration: '07 h 25 m',
    halts: 7,
    distance: 435,
    runsOn: 'M T W T F S S', 
    classesAvailable: ['GN', 'SL', '3A', '2A'], 
  },
  {
    trainNumber: '11906',
    trainName: 'Hoshiarpur - Agra Cantt Express',
    fromStation: 'JUC',
    departureTime: '23:45',
    toStation: 'NDLS',
    arrivalTime: '07:10',
    duration: '07 h 25 m',
    halts: 7,
    distance: 435,
    runsOn: 'M T W T F S S', 
    classesAvailable: ['GN', 'SL', '3A', '2A'], 
  },
  {
    trainNumber: '11906',
    trainName: 'Hoshiarpur - Agra Cantt Express',
    fromStation: 'JUC',
    departureTime: '23:45',
    toStation: 'NDLS',
    arrivalTime: '07:10',
    duration: '07 h 25 m',
    halts: 7,
    distance: 435,
    runsOn: 'M T W T F S S', 
    classesAvailable: ['GN', 'SL', '3A', '2A'], 
  },
  
];

const TrainInfoPage = () => {
  return (
    <div>
   

      <div className="container mx-auto flex flex-col items-center mt-12">
  {trains.map((train, index) => (
    <div key={index} className="w-full max-w-4xl">
      <TrainsInfo {...train} />
    </div>
  ))}
</div>
    
    </div>
  );
};

export default TrainInfoPage;
