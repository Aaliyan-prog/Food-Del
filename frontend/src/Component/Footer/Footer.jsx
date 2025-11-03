import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px]! px-[8vw]! pt-[80px]! mt-[100px]!' id='contact-us'>
      <div className='w-[100%] xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:flex md:flex-col sm:flex sm:flex-col xs:flex xs:flex-col xss:flex xss:flex-col gap-[80px]'>
        <div className="flex flex-col items-start gap-[20px]">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem esse deserunt delectus aperiam assumenda? Ut, incidunt impedit. Saepe laborum aliquid dolorum quasi harum cum iste, numquam, eaque exercitationem error ipsam!</p>
          <div className='flex'>
            <img className='w-[40px] mr-[15px]!' src={assets.facebook_icon} alt="" />
            <img className='w-[40px] mr-[15px]!' src={assets.twitter_icon} alt="" />
            <img className='w-[40px] mr-[15px]!' src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <h2 className='text-[22px] font-bold text-white'>COMPANY</h2>
          <ul>
            <li className='list-none mb-[10px]! cursor-pointer'>Home</li>
            <li className='list-none mb-[10px]! cursor-pointer'>About us</li>
            <li className='list-none mb-[10px]! cursor-pointer'>Delivery</li>
            <li className='list-none mb-[10px]! cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <h2 className='text-[22px] font-bold text-white'>GET IN TOUCH</h2>
          <ul>
            <li className='list-none mb-[10px]! cursor-pointer'>+1-234-456-789</li>
            <li className='list-none mb-[10px]! cursor-pointer'>contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className='w-[100%] h-[2px] my-[20px]! mx-[0px]! bg-gray-400 border-none' />
      <p>Copyright 2024 @ Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer