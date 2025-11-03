import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const {url} = useContext(StoreContext)
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url+"/api/order/verify",{success,orderId})
    if(response.data.success){
      navigate("/myorder")
    }
    else{
      navigate("/");
    }
  }

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="min-h-[60vh] grid">
      <div className="w-[100px] h-[100px] place-self-center border-[5px] border-[#bdbdbd] border-t-tomato rounded-[50px] animate-[rotate_1s_infinite]"></div>
    </div>
  )
}

export default Verify