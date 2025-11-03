import React, { useState } from 'react'
import { assets } from '../../assets/admin_assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [Data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  });

  const OnChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
  }

  const OnSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", Data.name)
    formData.append("description", Data.description)
    formData.append("price", Number(Data.price))
    formData.append("category", Data.category)
    formData.append("image", image)

    const response = await axios.post(`${url}/api/food/add`, formData);
    if(response.data.success){
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad"
      });
      setImage(false)
      toast.success(response.data.message)
    } else {}
  }

  return (
    <div className='w-[70%] ml-[max(5vw,25px)]! mt-[50px]! text-[#6d6d6d] text-[16px]'>
      <form className='d-flex' onSubmit={OnSubmitHandler}>
        <div className=" add-img-upload d-flex">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img className='w-[120px]' src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>
        <div className="w-[max(40%,280px)] add-product-name d-flex">
          <p>product name</p>
          <input onChange={OnChangeHandler} value={Data.name} className='p-[10px]! border-[1px]' type="text" name='name' placeholder='Type here' />
        </div>
        <div className="w-[max(40%,280px)] add-product-description d-flex">
          <p>Product description</p>
          <textarea onChange={OnChangeHandler} value={Data.description} className='p-[10px]! border-[1px]' name="description" rows="6" placeholder='Write content here'></textarea>
        </div>
        <div className="flex gap-[30px] add-category-price">
          <div className="add-category d-flex">
            <p>product category</p>
            <select onChange={OnChangeHandler} className='max-w-[120px] p-[10px]! border-[1px]' name="category" id="">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price d-flex">
            <p>product price</p>
            <input onChange={OnChangeHandler} value={Data.price} className='max-w-[120px] p-[10px]! border-[1px]' type="number" name="price" placeholder='$20'/>
          </div>
        </div>
        <button type='submit' className='max-w-[120px] bg-black text-white cursor-pointer border-none p-[10px]! add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add