import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='flex flex-col gap-[20px]' id='explore-menu'>
      <h1 className='text-[28px] text-[#262626] font-[500]'>Explore our menu</h1>
      <p className='xl:max-w-[60%] lg:max-w-[70%] md:max-w-[100%] sm:max-w-[100%] xs:max-w-[100%] xss:max-w-[100%] explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and elevate your dining experience, one delicious meal at a time</p>
      <div className='flex justify-between items-center gap-[40px] text-center my-[20px]! mx-[0px]! overflow-x-scroll explore-menu-list'>
        {menu_list.map((items, index) => {
          return (
            <div key={index} onClick={() => setCategory(prev => prev === items.menu_name ? "All" : items.menu_name)}>
              <img className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition duration-[0.2s] ${category === items.menu_name ? "explore-active" : ""}`} src={items.menu_image} alt="" />
              <p className='text-[#747474] m-[10px]! text-[max(1.4vw,16px)] cursor-pointer'>{items.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr className='h-[1px] my-[10px]! mx-[0px]! bg-[#e2e2e2] border-none'/>
    </div>
  )
}

export default ExploreMenu