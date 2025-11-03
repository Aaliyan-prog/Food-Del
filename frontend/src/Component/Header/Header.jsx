import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className='absolute flex flex-col items-start gap-[1.5vw] xl:max-w-[50%] lg:max-w-[55%] md:max-w-[55%] sm:max-w-[55%] xs:max-w-[60%] xss:max-w-[65%] bottom-[10%] left-[6vw] animate-[fadeIn_3s]'>
        <h2 className='font-[500] text-white text-[max(4.5vw,22px)]'>Order your favourite food here</h2>
        <p className='text-white text-[1vw] xl:block lg:block md:hidden sm:hidden xs:hidden xss:hidden'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and elevate your dining experience, one delicious meal at a time</p>
        <button className='border-none text-[#747474] font-[500] xl:py-[1vw]! xl:px-[2.3vw]! lg:py-[1vw]! lg:px-[2.3vw]! md:py-[2vw]! md:px-[4vw]! sm:py-[2vw]! sm:px-[4vw]! xs:py-[2vw]! xs:px-[4vw]! xss:py-[2vw]! xss:px-[4vw]! bg-white text-[max(1vw,13px)] rounded-[50px]'>View Menu</button>
      </div>
    </div>
  )
}

export default Header