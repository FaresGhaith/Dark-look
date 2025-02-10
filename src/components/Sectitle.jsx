import React from 'react'
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function sectitle({sectitle}) {
  return (
    <div className="section-title flex justify-content-between border-bottom pb-2 px-3 ">
    <div className='text-uppercase fw-bold fs-5'>{sectitle}</div>
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

export default sectitle
