import React from 'react'
import Stars from './Stars';
import { FaHeart } from "react-icons/fa";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'


function pro({val , index , Addtocart , AddtoWish}) {
  const navegate = useNavigate()
  return (
    <div className="product">

<div className='images' onClick={() => navegate(`/singleproduct/${index}`) }>
      <img src={val.img || val.thumbnail} alt="" className='card-img' />
      <img src={val.images[0]} alt="" className='card-img ' />
    </div>
    <div className="card-body d-flex flex-column align-items-center justify-conrent-center">
      <b>{val.title}</b>
      <Stars/>
      <p style={{display : 'none'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam eveniet provident magni dolorem blanditiis? Eveniet temporibus exercitationem eius reiciendis neque at nam! Id adipisci natus pariatur doloremque perferendis, minima nihil?</p>
      <p className='m-0 fw-bold'>${val.price}</p>
    </div>
    <div className="proces">
      <div onClick={()=>AddtoWish(val)}>
      <FaHeart/>
      </div>
      <div onClick={()=>Addtocart(val)}>
        <FaCartFlatbedSuitcase/>
      </div>
    </div>
    </div>
  )
}

export default pro
