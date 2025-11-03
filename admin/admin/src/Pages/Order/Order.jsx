import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { assets } from '../../assets/admin_assets/assets';

const Order = ({url}) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url+"/api/order/list");
    if(response.data.success){
      setOrders(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url+"/api/order/status",{orderId,status:event.target.value});
    if(response.data.success){
      await fetchAllOrders();
    }
  }

  useEffect(() =>{
    fetchAllOrders();
  },[])

  return (
    <div className='w-[70%] ml-[max(5vw,25px)]! mt-[50px]! order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order,index) => (
          <div className="grid lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] md:grid-cols-[0.5fr_2fr_1fr] sm:grid-cols-[0.5fr_2fr_1fr] xs:grid-cols-[0.5fr_2fr_1fr] xss:grid-cols-[0.5fr_2fr_1fr] items-start gap-[30px] border border-tomato lg:p-[20px]! md:p-[20px]! sm:p-[15px]! xs:p-[15px]! xss:p-[15px]! my-[30px]! mx-[0px]! lg:text-[14px] md:text-[14px] sm:text-[12px] xs:text-[12px] xss:text-[12px]">
            <img src={assets.parcel_icon} alt="" className='w-[50px]'/>
            <div>
              <p className='font-[600]'>{order.items.map((item,index) => {
                if(index === order.items.length-1){
                  return item.name + " x " + item.quantity
                }
                else{
                  return item.name + " x " + item.quantity + ", "
                }
              })}</p>
              <p className='font-[600] mt-[5px]! mb-[5px]!'>{order.address.firstName + " " + order.address.lastName}</p>
              <div>
                <p className='mb-[10px]!'>{order.address.street + ", "}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode + ", "}</p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event) => statusHandler(event,order._id)} value={order.status} className='bg-[#ffe8e4] border border-tomato w-[max(10vw,120px)] p-[10px] outline-none'>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order