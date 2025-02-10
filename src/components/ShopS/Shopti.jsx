import React from 'react'
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
function Shopti() {
  return (
    <div className="section-title flex justify-content-between border-bottom mt-3  ">
    <div className='text-uppercase fw-bold ' style={{fontSize : '15px'}}>Featured Products</div>
    <div className='flex gap-4'>
     
      <div className='flex'>
        <div className='Slide-left'>
        <MdArrowBackIos />
        </div>
        <div className='Slide-right'><MdArrowForwardIos /></div>
      </div>
    </div>
  </div>
  )
}

export default Shopti
