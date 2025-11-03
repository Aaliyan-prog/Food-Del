import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const PlaceOrder = () => {
    const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)
    const [data, setData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      street:"",
      city:"",
      state:"",
      zipcode:"",
      country:"",
      phone:""
    })

    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }

    const placeOrder = async (event) => {
      event.preventDefault();
      let orderItems = [];
      food_list.map((item) => {
        if(cartItems[item._id]>0){
          let itemInfo = item;
          itemInfo["quantity"] = cartItems[item._id]
          orderItems.push(itemInfo)
        }
      })
      let orderData = {
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+2
      }
      let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
      if(response.data.success){
        const {session_url} = response.data;
        window.location.replace(session_url)
      } 
      else{
        console.log("Error")
      }
    }

    const navigate = useNavigate()
    useEffect(() => {
      if(!token){
        navigate("/cart")
      } 
      else if(getTotalCartAmount() === 0){
        navigate("/cart")
      }
    },[token])
  
  return (
    <form onSubmit={placeOrder} className='flex items-start justify-between gap-[50px] xl:mt-[100px]! lg:mt-[100px]! md:mt-[50px]! sm:mt-[50px]! xs:mt-[30px]! xss:mt-[30px]! xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col xss:flex-col'>
      <div className="w-[100%] max-w-[max(30%, 500px)]">
        <p className='text-[30px] mb-[50px]! font-[600]'>Delivery Information</p>
        <div className="flex gap-[10px]!">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" className='mb-[15px]! w-[100%] p-[10px]! border-1 border-[#c5c5c5] rounded-[4px] outline-[tomato]' placeholder='First Name'/>
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" className='mb-[15px]! w-[100%] p-[10px]! border-1 border-[#c5c5c5] rounded-[4px] outline-[tomato]' placeholder='Last Name'/>
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" className='mb-[15px]! w-[100%] p-[10px]! border-1 border-[#c5c5c5] rounded-[4px] outline-[tomato]' placeholder='Email address' />
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" className='mb-[15px]! w-[100%] p-[10px]! border-1 border-[#c5c5c5] rounded-[4px] outline-[tomato]' placeholder='Street'/>
        <div className="flex gap-[10px]! multi-feild">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" className='mb-[15px]! w-[100%] p-[10px]! border-1 border-[#c5c5c5] rounded-[4px] outline-[tomato]' placeholder='City' />
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" className='mb-[15px]! w-[100%] p-[10px]! border-1 border-[#c5c5c5] rounded-[4px] outline-[tomato]' placeholder='State' />
        </div>
        <div className="flex gap-[10px]! multi-feild">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" className='mb-[15px]! w-[100%] p-[10px]! border-1 border-[#c5c5c5] rounded-[4px] outline-[tomato]' placeholder='Zipcode' />
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" className='mb-[15px]! w-[100%] p-[10px]! border-1 border-[#c5c5c5] rounded-[4px] outline-[tomato]' placeholder='Country' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" className='mb-[15px]! w-[100%] p-[10px]! border-1 border-[#c5c5c5] rounded-[4px] outline-[tomato]' placeholder='phone' />
      </div>
      <div className="w-[100%] max-w-[max(40%, 500px)]">
        <div className="flex-1 flex flex-col gap-[20px]!">
          <h2 className='text-[22px] font-[500]'>Cart Totals</h2>
          <div className="">
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-[10px]! mx-[0px]!' />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className='my-[10px]! mx-[0px]!' />
            <div className="flex justify-between text-[#555]">
              <p>Total</p>
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button type='submit' className='border-none text-white bg-tomato w-[max(15vw,200px)] mt-[30px]! py-[12px]! px-[0px]! rounded-[4px] cursor-pointer'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder