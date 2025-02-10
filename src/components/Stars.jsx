import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
function Stars() {
  return (
    <div className='stars 'style={{color : 'var(--main-color)'}}>
    <FaStar/>
    <FaStar/>
    <FaStarHalfAlt/>
    <FaStarHalfAlt/>
    <IoIosStarOutline/>
  </div>
  )
}

export default Stars
