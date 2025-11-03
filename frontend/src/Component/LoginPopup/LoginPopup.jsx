import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setcurrentState] = useState("Sign-up");
  const { url, setToken } = useContext(StoreContext)
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({...data,[name]:value}))
  }

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if(currentState === "Login"){
      newUrl += "/api/user/login"
    } 
    else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl,data)
    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token);
      setShowLogin(false)
    } else {
      alert(response.data.message)
    }
  }
  

  return (
    <div className='absolute z-1 w-[100%] h-[100%] bg-[#00000090] grid'>
      <form onSubmit={onLogin} className='place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px]! px-[30px]! rounded-[8px] text-[14px] animate-[fadeIn_0.5s]'>
        <div className="flex justify-between items-center text-black">
          <h2 className='text-[22px] text-black font-[500]'>{currentState}</h2>
          <img className='w-[16px] cursor-pointer' onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="flex flex-col gap-[20px]">
          {currentState === "Login" ? <></> : <input type="text" placeholder='Your Name' name='name' onChange={onChangeHandler} value={data.name} className='outline-none border border-[#c9c90c9] p-[10px]! rounded-[4px]' required />}
          <input type="email" placeholder='Your Email' name='email' onChange={onChangeHandler} value={data.email} className='outline-none border border-[#c9c90c9] p-[10px]! rounded-[4px]' required/>
          <input type="password" placeholder='Password' name='password' onChange={onChangeHandler} value={data.password} className='outline-none border border-[#c9c90c9] p-[10px]! rounded-[4px]' required/>
        </div>
        <button type='submit' className=' border-none p-[10px]! text-white bg-tomato rounded-[4px] text-[15px] cursor-pointer'>{currentState === "Sign-up" ? "Create Account" : "Login"}</button>
        <div className="flex items-start gap-[8px] mt-[-15px]!">
          <input type="checkbox" className='mt-[5px]!' required/>
          <p>By continuing, I agree to the terms of use and services</p>
        </div>
        {currentState === "Sign-up" ? 
          <p>Already have an account? <span className='text-tomato font-[500] cursor-pointer' onClick={() => setcurrentState("Login")}>Click here</span></p> :
          <p>Create a new account? <span className='text-tomato font-[500] cursor-pointer' onClick={() => setcurrentState("Sign-up")}>Click here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup