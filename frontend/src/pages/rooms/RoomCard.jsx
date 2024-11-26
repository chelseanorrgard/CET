import React from 'react'
import { getImgUrl } from '../../utils/getImgUrl'
import {FiShoppingCart} from 'react-icons/fi'

import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'

const RoomCard = ({room}) => {

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  return (
    <div className=" rounded-lg transition-shadow duration-300">
    <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
      <div className="sm:h-72 sm:flex-shrink-1 border rounded-md">
        <Link to={`/rooms/${room._id}`}>
        <img src={`${getImgUrl(room.photos)}`} alt="" className="w-1/2 bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"/>

        </Link>
      </div>
  
      <div>
        <Link to={`/rooms/${room._id}`}>
        <h3 className="text-xl font-semibold hover:text-green-600 mb-3">{room.room_type}</h3></Link>
        <p className="text-gray-600 mb-5">{room.amenities}</p>
        <p className="font-medium mb-5">
          ${room.price_per_night} 
        </p>
        <button 
        onClick={() => handleAddToCart(room)}
        className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
          <FiShoppingCart className="" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default RoomCard