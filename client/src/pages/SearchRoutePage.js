import React from 'react'
import Features from '../components/Features';
import BookMeal from '../components/BookMeal';
import TrainRouteForm from '../components/TrainRouteForm';

const SearchRoutePage = () => {
  return (
    <div className="min-h-screen bg-white">

   <TrainRouteForm />
   <Features />
   <BookMeal />

  </div>
  )
}

export default SearchRoutePage
