import React, { useContext, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id, name, description, price,image}) => {
  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext)

  return (
    <div className='w-[100%] mt-[30px]! rounded-[15px] shadow-[0_0_10px_#00000015] transition duration-[0.3s] animate-[fadeIn_1s]'>
      <div className='relative '>
        <img className='w-[100%] rounded-[15px_15px_0_0] ' src={url + "/images/" + image} alt="" />
        {!cartItems[id] 
          ?<img src={assets.add_icon_white} className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' onClick={()=>addToCart(id)} alt="" /> : <div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px]! rounded-[50px] bg-white'>
            <img className='w-[30px]' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img className='w-[30px]' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className='p-[20px]!'>
        <div className='flex justify-between items-center mb-[10px]!'>
          <p className='text-[20px] font-[500]'>{name}</p>
          <img className='w-[70px]' src={assets.rating_starts} alt="" />
        </div>
        <p className='text-[#676767] text-[12px]'>{description}</p>
        <p className='text-tomato text-[22px] font-[500] my-[10px]! mx-0!'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem