import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io"; 

function Shoppro({img , price}) {
  return (
    <div className="products d-flex mt-3 ">
                <div className='images w-50'>
                 <img src={img} alt="" className='card-img w-100 ' />
                </div>
               <div className="card-body d-flex flex-column   justify-conrent-center">
                 <b className='mb-4'style={{opacity : '0.8'}}>New LCDScreen and HD Video Recording</b>
                 <div className='stars d-flex 'style={{color : 'var(--main-color)'}}>
                     <FaStar/>
                     <FaStar/>
                     <FaStarHalfAlt/>
                     <FaStarHalfAlt/>
                     <IoIosStarOutline/>
                   </div>
                 <p className='m-0 fw-bold' style={{opacity : '0.8'}}>${price}</p>
                </div>
               </div>
  )
}

export default Shoppro
