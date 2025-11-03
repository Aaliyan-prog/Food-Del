import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div className='my-auto! mx-auto! mt-[100px]! text-[maxmin(3vw,20px)] flex flex-col items-center text-center font-[500]' id='app-download'>
      <p className='text-[max(3vw,20px)] text-center font-500'>For better experience Download <br />Tomato App</p>
      <div className=" flex flex-row justify-center gap-[max(2vw,10px)] mt-[40px]! items-center">
        <img className='w-[max(30vw,120px)] max-w-[180px] transition duration-[0.5s] cursor-pointer hover:scale-[1.05]' src={assets.play_store} alt="" />
        <img className='w-[max(30vw,120px)] max-w-[180px] transition duration-[0.5s] cursor-pointer hover:scale-[1.05]' src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload