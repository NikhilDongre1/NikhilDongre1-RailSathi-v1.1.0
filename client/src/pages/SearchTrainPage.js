import React from 'react';
import TrainForm from '../components/TrainForm';

import Features from '../components/Features';

import BookMeal from '../components/BookMeal';


const SearchTrainPage = () => {
 
  return (
    <div className="min-h-screen bg-white">
  
    <TrainForm />
    <Features />
    <BookMeal />
 
   </div>
  );
}

export default SearchTrainPage;
