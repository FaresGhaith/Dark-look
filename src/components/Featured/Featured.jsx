import React, { useRef } from 'react';
import './Featured.css'
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link, Outlet } from 'react-router-dom';

import fash from '../../assets/images/sub5.jpg'


function Featured(e) {

const links = useRef(null)
function Chanageactive (e){

let alllinks = links.current.querySelectorAll('li a')



alllinks.forEach(el => el.classList.remove('active'))

e.target.classList.add('active')


}

  return (
    <section className='Featured container'>
      <div className="section-title flex justify-content-between border-bottom pb-2 px-3 ">
        <div className='text-uppercase fw-bold fs-5'>Featured Prouducts</div>
        <div className='flex gap-4'>
          <ul className='flex'ref={links} >
            <li onClick={Chanageactive}>
              <Link to={''} className='active'>New Arrivals</Link>
            </li>
            <li onClick={Chanageactive}>
              <Link to={'best seller'}>Best Seller</Link>
            </li>
            <li onClick={Chanageactive}>
              <Link to={'featured'}>Featured</Link>
            </li>
          </ul>
          <div className='flex'>
            <div className='Slide-left'>
            <MdArrowBackIos />
            </div>
            <div className='Slide-right'><MdArrowForwardIos /></div>
          </div>
        </div>

      </div>

      <Outlet/>
      <div className='Fash'>
        <div>
          <img src={fash} alt="" className='w-100 mt-5' />
        </div>
      </div>
    </section>

  )
}

export default Featured
