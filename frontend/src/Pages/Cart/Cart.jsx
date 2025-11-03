import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext)
  const navigate = useNavigate();

  return (
    <div className="mt-[100px]!">
      <div className="">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-400 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className='h-[1px] border-none bg-[#e2e2e2]' />
        {food_list.map((item, index) => {
          if(cartItems[item._id] > 0){
            return (
              <div>
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1vw,12px)] my-[10px]! mx-[0px]! text-black">
                  <img className='w-[50px]' src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cursor-pointer'>x</p>
                </div>
                <hr className='h-[1px] border-none bg-[#e2e2e2]'/>
              </div>
            ) 
          }
        })}
      </div>
      <div className="mt-[80px]! flex justify-between gap-[max(12vw,20px)] xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse xss:flex-col-reverse">
        <div className="flex-1 flex flex-col gap-[20px]!">
          <h2 className='text-[22px] font-[500] '>Cart Totals</h2>
          <div className="">
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-[10px]! mx-[0px]!'/>
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className='my-[10px]! mx-[0px]!'/>
            <div className="flex justify-between text-[#555]">
              <p>Total</p>
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button onClick={() => navigate("./order")} className='border-none text-white bg-tomato w-[max(15vw,200px)] py-[12px]! px-[0px]! rounded-[4px] cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex-1 xl:justify-normal lg:justify-normal md:justify-start sm:justify-start xs:justify-start xss:justify-start">
          <div>
            <p className='text-[#555]'>If you have a promo code, Enter it here</p>
            <div className="mt-[10px]! flex justify-between items-center rounded-[4px] bg-[#eaeaea]">
              <input type="text" className='bg-transparent border-none outline-none pl-[10px]!' placeholder='promo code' />
              <button className='w-[max(10vw,150px)] py-[12px]! px-[5px]! bg-black text-white border-none rounded-[4px]'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart