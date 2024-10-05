import React from 'react';

import Features from '../components/Features';

import BookMeal from '../components/BookMeal';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      <div className="relative w-full h-96 bg-blue-300">
        <img
          src={'/rail_banner.jpg'}
          alt="railway-banner"
          className="object-cover w-full h-96"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-100 animate-fadeIn">
            Welcome to Smart Railway
          </h1>
        </div>
      </div>
      <Features />
      <BookMeal />
     
      
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .animate-fadeIn {
            animation: fadeIn 2s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
// navbar route