import React, { useContext, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { Link, useNavigate } from "react-router-dom"
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home")
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token");
    setToken("")
    navigate("/")
  }
  
  return (
    <div className="py-[20px]! flex-bwt">
      <Link to="/"><img src={assets.logo} alt="" className='xl:w-[150px] lg:w-[140px] md:w-[120px] sm:w-[120px] xs:w-[100px] xss:w-[100px]' /></Link>
      <ul className='xl:flex lg:flex md:flex sm:hidden xs:hidden xss:hidden list-none xl:gap-[20px] lg:gap-[20px] md:gap-[15px] sm:gap-[15px] xs:gap-[15px] xss:gap-[15px] text-text xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[16px]'>
        <Link to={"/"} onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""} cursor-pointer`}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""} cursor-pointer`}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={`${menu === "mobile-app" ? "active" : ""} cursor-pointer`}>mobile-app</a>
        <a href='#contact-us' onClick={() => setMenu("contact-us")} className={`${menu === "contact-us" ? "active" : ""} cursor-pointer`}>contact us</a>
      </ul>
      <div className="flex items-center xl:gap-[40px] lg:gap-[30px] md:gap-[20px] sm:gap-[20px] xs:gap-[20px] xss:gap-[20px]">
        <img src={assets.search_icon} alt="" className='xl:w-[26px] lg:w-[22px] md:w-[20px] sm:w-[20px] xs:w-[18px] xss:w-[17px]'/>
        <div className="relative">
          <Link to="/cart" ><img src={assets.basket_icon} alt="" className='xl:w-[26px] lg:w-[22px] md:w-[20px] sm:w-[20px] xs:w-[18px] xss:w-[17px]' /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "absolute min-w-[10px] min-h-[10px] bg-tomato rounded-[5px] top-[-8px] right-[-8px]"}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)} className='bg-transparent xl:text-[16px] lg:text-[16px] md:text-[15px] text-text border border-tomato xl:py-[10px]! xl:px-[30px]! rounded-[50px] cursor-pointer hover:bg-btn-hover transition duration-[30ms] lg:py-[8px]! lg:px-[25px]! md:py-[7px]! md:px-[20px]! sm:py-[7px]! sm:px-[20px]! xs:py-[7px]! xs:px-[20px]! xss:py-[7px]! xss:px-[20px]!'>sign in</button> 
        : 
        <div className="relative nav-profile">
          <img src={assets.profile_icon} alt="" />
          <ul className='absolute hidden right-0 z-[1] nav-dropdown'>
            <li onClick={() => navigate("/myorder")} className='flex items-center justify-center gap-[10px] cursor-pointer hover:text-tomato'>
              <img className='w-[20px]' src={assets.bag_icon} alt="" />
              <p>Order</p>
            </li>
            <hr />
              <li onClick={logout} className='flex items-center justify-center gap-[10px] cursor-pointer hover:text-tomato'>
              <img className='w-[20px]' src={assets.logout_icon} alt="" />
              <p>Logout</p>
            </li>
          </ul>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar