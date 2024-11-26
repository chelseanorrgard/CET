import React from 'react'
import { useState } from 'react';
import bannerImg from "../../assets/Banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex justify-between items-center bg-[#4A6640] rounded'>
         <div className='  bg-cover bg-center '>
            <img src={bannerImg} alt="" className='rounded'/>
        </div>
          {/*  
        <div className="flex justify-center mt-8">
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mr-4">Room types and amenities</button>
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mr-4">Dining and Restaurant</button>
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mr-4">Attractions and Services</button>
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Special Offers and Packages</button>
      </div>
       */}

      {/* Content */}
      <div className="flex flex-col md:grid-cols-2 gap-8 mt-10 px-8 pb-1">
        <div>
          {/* Welcome Text */}
          <h2 className="text-3xl font-bold mb-4  ">Welcome to Hotel CET - Your Perfect Escape Awaits</h2>
          <p className="text-gray-950 text-lg">Nestled in the heart of Las Vegas, Hotel CET offers a blend of luxury, comfort, and unique experiences tailored to make your stay unforgettable. Whether you're traveling for business, leisure, or a special occasion, our hotel provides everything you need to relax, recharge, and enjoy. </p><br />

          {/* Discover Your Stay 
          <h3 className="text-2xl font-bold mt-8">Discover Your Stay</h3>
          <ul className="list-disc ml-6 mt-4 text-gray-600">
            <li>Elegant Rooms & Suites: Experience the comfort of our stylish accommodations, equipped with premium amenities and modern decor to create a serene retreat.</li>
         </ul>
          
          <ul className="list-disc ml-6 mt-4 text-gray-600">
            <li>Delicious Dining: Savor the flavors of Your Region] at our in-house restaurant, where our chefs prepare dishes inspired by local ingredients and global cuisine.</li>
         </ul>
          
          <ul className="list-disc ml-6 mt-4 text-gray-600">
            <li>Amenities & Experiences: Unwind at our spa, take a dip in our rooftop pool, or explore the vibrant city just steps from our doors.</li>
         </ul><br /> */}
         
            </div>
           
         
            </div>
       </div>
       
  ); 
  
  
} 
      
 


export default Banner