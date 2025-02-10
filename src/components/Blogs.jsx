import React from 'react'
import { FaLink } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'

function Blogs({img , day , id  }) {
  const navegate = useNavigate()

  return (
    <div className='card  ' onClick={() => navegate(`/singlepost/${id}`)}>
    <div className="card-img ">
      <img  src={img} alt="" className='w-100'/>
    </div>
    <div className="card-body">
      <b>Fashions Fade, Style Is Eternal</b>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed suscipit animi neque voluptatum eum ratione hic quisquam ad asperiores provident?</p>
      <div>
        <span>0 Comments</span>
        <span><FaLink /> read more</span>
      </div>
    </div>
    <div className="date">
      <b className='fs-4'>{day}</b>
      <span>Aug</span>
    </div>
  </div>
)
}

export default Blogs
