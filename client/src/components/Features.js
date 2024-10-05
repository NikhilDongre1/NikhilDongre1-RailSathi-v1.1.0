import React from 'react'

const Features = () => {
  return (
    <section className="bg-blue-100 py-16">
  <div className="container  text-center sm:px-16 ">
    <h2 className="text-3xl font-bold mb-8">Railways inquiry just a click away!</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left mx-14">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Live Train Status</h3>
        <p className="mb-4 text-gray-600 ">Know the whereabouts of your train easily</p>
         
        <button className="bg-blue-800 text-white font-bold py-0.4 px-1 rounded-full  hover:bg-blue-900">
          →
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Coach & Seat Position</h3>
        <p className="mb-4 text-grey-600 ">View coach & seat layout of the train you wish to</p>
         
        <button className="bg-blue-800 text-white font-bold py-0.4 px-1 rounded-full  hover:bg-blue-900">
          →
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">PNR Status</h3>
        <p className="mb-4 text-grey-600 ">Check PNR Status effortlessly</p>
         
        <button className="bg-blue-800 text-white font-bold py-0.4 px-1 rounded-full  hover:bg-blue-900">
          →
        </button>
      </div>

      <div className="bg-white max-w-200 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Platform Locator</h3>
        <p className="mb-4 text-grey-600 ">Know the platform for your train</p>
        <button className="bg-blue-800 text-white font-bold py-0.4 px-1 rounded-full  hover:bg-blue-900">
          →
        </button>
        
      </div>
    </div>
  </div>
</section>
  )
}

export default Features
