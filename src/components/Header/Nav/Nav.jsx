import './Nav.css'
import navomg from '../../../assets/images/menu-banner1.jpg'
import navomg2 from '../../../assets/images/menu-banner2.jpg'
import navomg3 from '../../../assets/images/menu-banner3.jpg'

import {Swiper , SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import 'swiper/css'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { useRef } from 'react'

function Nav({wish }) {
  let ul = useRef(null)


  function tog(){
    ul.current.classList.toggle('active')
    
  }
  return (
    <div className='Nav container'>
      <div className="men ">
        <b>Menu</b>
        <IoMenu  onClick={tog}/>
      </div>
      <ul ref={ul} className='flex g '>
        <li>
          <Link to={''}>Home</Link>
        </li>
        <li>
          <a href="#">Collection</a>
          <div className='Dropdown row'>
            <div className="col-md-3">
              <div className='d-flex flex-column gap-1'>

              <b className='d-block fs-5 mb-2'>Womens</b>
              <div className='d-flex flex-column gap-1'>
                <a href="#">Unique Feartures </a>
                <a href="#">Auto Carousel </a>
                <a href="#">Image Responsive </a>
                <a href="#">Newslitter Form </a>
                <a href="#">Four Columns </a>
                <a href="#">Unique Feartures </a>
                <a href="#">Newslitter Form </a>
                <a href="#">Good Typography </a>
              </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className='d-flex flex-column gap-1'>

              <b className='d-block fs-5 mb-2'>Men</b>
              <div className='d-flex flex-column gap-1'>
                <a href="#">Unique Feartures </a>
                <a href="#">Auto Carousel </a>
                <a href="#">Image Responsive </a>
                <a href="#">Newslitter Form </a>
                <a href="#">Four Columns </a>
                <a href="#">Unique Feartures </a>
                <a href="#">Newslitter Form </a>
                <a href="#">Good Typography </a>
              </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className='d-flex flex-column gap-1'>

              <b className='d-block fs-5 mb-2'>Kid</b>
              <div className='d-flex flex-column gap-1'>
                <a href="#">Unique Feartures </a>
                <a href="#">Auto Carousel </a>
                <a href="#">Image Responsive </a>
                <a href="#">Newslitter Form </a>
                <a href="#">Four Columns </a>
                <a href="#">Unique Feartures </a>
                <a href="#">Newslitter Form </a>
                <a href="#">Good Typography </a>
              </div>
              </div>
            </div>
            <div className="col-lg-3">
              <Swiper 
              className='slider'
              spaceBetween={10}
              modules={[ Autoplay]}
              autoplay = {{
                delay: 2000 ,
              }} 
              speed={1500}
              
              >
                <SwiperSlide>
                  <img src={navomg} alt="" className='w-100' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={navomg2} alt="" className='w-100' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={navomg3} alt="" className='w-100' />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </li>
        <li>
          <Link to={'shop'}>Shop</Link>
        </li>
        <li>
          <Link to={'blog'}>Blog</Link>
        </li>
        <li>
          <a href="#">Pages</a>
          <div className="Drop_down">
            <div>
            <Link to={'cart'}>Cart</Link>
            <Link to={'wish'}>Wishlist(<span>{wish.length}</span>)</Link>
            <Link to={'/singleproduct/0'}>Prouduct Details Page</Link>
            <Link to={'/singlepost/0'}>Singel Post</Link>
            </div>
          </div>
        </li>
        <li>
          <Link to={'about'}>About Us</Link>
        </li>
        <li>
          <Link to={'contact'}>Contact Us</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
