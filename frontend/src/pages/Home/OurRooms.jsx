import React, { useEffect, useState } from 'react'
import RoomCard from '../rooms/RoomCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { useFetchAllRoomsQuery } from '../../redux/features/rooms/roomApi';



const categories =["Choose a room type", "Single", "Double", "Suite"]



const OurRooms = () => {
    const [selectedCategory, setselectedCategory] = useState("Choose a room type");

    const {data: rooms = []} = useFetchAllRoomsQuery()
    

    const filteredRooms = selectedCategory === "Choose a room type" ? rooms : rooms.filter(room => room.room_type.toLowerCase() === selectedCategory.toLowerCase());


    console.log(filteredRooms)

  return (
    <div className='py-10 '>
    <h2 className='text-3xl font-semibold mb-6'>Our Rooms</h2>

    <div className='mb-8 flex items-center'>
    <select onChange={(e) => setselectedCategory(e.target.value)} 
    name="category" id="category" className='border bg-[#EAEAEA] border-gray-100 rounded-md px-4  py-2 '>
    {
        categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
        ))
    }
    </select>
    </div>

    <Swiper
    slidesPerView={1}
    spaceBetween={30}
    navigation={true} 
    
    breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }}
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >


    {
        filteredRooms.length > 0 && filteredRooms.map((room,index) => (
            <SwiperSlide key={index} >
                <RoomCard room={room} /> 
            </SwiperSlide>
         
        )) 
     }

     </Swiper>
    </div>
  )
}

export default OurRooms