import React from 'react'
import { Link } from 'react-router-dom'
const BookMeal = () => {
  return (
    <div>
        <section className="bg-gray-100 py-12 flex justify-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center p-8 rounded-lg shadow-md max-w-4xl">
          
          {/* Image Section */}
          <div className="w-full md:w-1/4 flex justify-center md:justify-start mb-4 md:mb-0">
            <img src={`/food.png`} alt="Book Meals" className="h-20 w-20" />
          </div>
          
          {/* Text Section */}
          <div className="w-full md:w-3/4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-extrabold">Book Meals for Train Journey</h3>
              <p className="text-lg font-bold text-gray-600">Order now & get food delivered at your seat</p>
            </div>
            
            {/* Button Section */}
            <div className="text-center md:text-right">
              <Link to={"https://www.ecatering.irctc.co.in/"} target='_blank' rel="noopener noreferrer">
                <button className="bg-blue-800 text-white font-extrabold text-lg py-2 px-6 rounded hover:bg-blue-900">
                  Book Meals Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default BookMeal
