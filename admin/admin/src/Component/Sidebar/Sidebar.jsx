import React from 'react'
import { assets } from '../../assets/admin_assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-[100vh] border-[1.5px] border-[#a9a9a9] border-t-0 text-[max(1vw,10px)]'>
      <div className="pt-[50px]! pl-[20%]! flex flex-col gap-[20px]">
        <NavLink to="/add" className="flex items-center gap-[20px] border-1 border-[#a9a9a9] border-r-0 py-[8px]! px-[10px]! rounded-tl-[3px] rounded-bl-[3px] cursor-pointer">
          <img src={assets.add_icon} alt="" />
          <p className='xl:flex lg:flex md:hidden sm:hidden xs:hidden xss:hidden'>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="flex items-center gap-[20px] border-1 border-[#a9a9a9] border-r-0 py-[8px]! px-[10px]! rounded-tl-[3px] rounded-bl-[3px] cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p className='xl:flex lg:flex md:hidden sm:hidden xs:hidden xss:hidden'>List Items</p>
        </NavLink>
        <NavLink to="/order" className="flex items-center gap-[20px] border-1 border-[#a9a9a9] border-r-0 py-[8px]! px-[10px]! rounded-tl-[3px] rounded-bl-[3px] cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p className='xl:flex lg:flex md:hidden sm:hidden xs:hidden xss:hidden'>Order</p>
        </NavLink>
      </div >
    </div>
  )
}

export default Sidebar