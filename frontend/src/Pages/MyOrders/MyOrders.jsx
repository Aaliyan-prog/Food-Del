import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { assets } from '../../assets/frontend_assets/assets'

const MyOrders = () => {
  const {url, token} = useContext(StoreContext)
  const [data, setData] = useState([])

  const fetchOrder = async () => {
    const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
    setData(response.data.data);
    console.log(response.data.data);
  }

  useEffect(() => {
    if(token){
      fetchOrder()
    }
  },[token])

  return (
    <div className='my-[50px]! mx-[0px]!'>
      <h2>My Orders</h2>
      <div className='flex flex-col gap-[20px] mt-[30px]!'>
        {data.map((order,index) => {
          return (
            <div key={index} className='grid lg:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] sm:grid-cols-[1fr_2fr_1fr] xs:grid-cols-[1fr_2fr_1fr] xss:grid-cols-[1fr_2fr_1fr] items-center gap-[30px] lg:text-[14px] md:text-[12px] sm:text-[12px] xs:text-[12px] xss:text-[12px] py-[10px]! px-[20px]! text-[#454545] border border-tomato md:row-gap-[5px]'>
              <img src={assets.parcel_icon} alt="" className='w-[50px]'/>
              <p>{order.items.map((item, index) => {
                if(index === order.items.length-1){
                  return item.name + " x " + item.quantity
                }
                else{
                  return item.name + " x " + item.quantity+", "
                }
              })}</p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p><span className='text-tomato'>&#x25cf;</span> <b className='text-[#454545] font-[500]'>{order.status}</b></p>
              <button onClick={fetchOrder} className='border-none py-[12px]! px-[0px]! rounded-[4px] bg-[#ffe1e1] cursor-pointer text-[#454545]'>Track Order</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders