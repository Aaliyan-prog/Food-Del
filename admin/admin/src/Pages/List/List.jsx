import React, { useEffect, useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'

const List = ({ url }) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    if(response.data.success){
      setList(response.data.data)
    } else {
      toast.error("Error")
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId})
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='w-[100%] p-[30px]! list add d-flex'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] py-[12px]! px-[15px]! border border-[#cacaca] text-[13px] bg-[#f9f9f9]">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((items, index) => {
          return (
            <div key={index} className="grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] py-[12px]! px-[15px]! border border-[#cacaca] text-[13px]">
              <img className='w-[50px]' src={`${url}/images/` + items.image} alt="" />
              <p>{items.name}</p>
              <p>{items.category}</p>
              <p>{items.price}</p>
              <p onClick={(e) => removeFood(items._id)} className='cursor-pointer'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List