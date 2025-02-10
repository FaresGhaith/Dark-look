import './Heading.css'
import panner1 from '../../assets/images/main_banner1.jpg'
import panner2 from '../../assets/images/main_banner2.jpg'
import heading1 from '../../assets/images/heading-1.png'
import heading2 from '../../assets/images/heading-2.png'
import heading3 from '../../assets/images/heading-3.png'
import heading4 from '../../assets/images/heading-4.png'

import {Swiper , SwiperSlide} from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css/pagination';


function Heading() {
  return (
    <div className='Heading container'>
      <Swiper   
      modules={[Pagination , Autoplay]}
      pagination={{
        clickable:true,
        
      }}
      autoplay={{
        delay: 4000,

      }}
      >
        <SwiperSlide>
          <img src={panner1} alt="" className='w-100' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={panner2} alt="" className='w-100' />
        </SwiperSlide>
      </Swiper>
      <div className="row mt-5 mm ">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='flex'>
            <div>
              <img src={heading1} alt="" />
            </div>
            <div className='d-flex flex-column'>
              <b>Free Shipping</b>
              <span>Free Dedlivery worldwide</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='flex'>
            <div>
              <img src={heading2} alt="" />
            </div>
            <div className='d-flex flex-column'>
              <b>Free Shipping</b>
              <span>Free Dedlivery worldwide</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='flex'>
            <div>
              <img src={heading3} alt="" />
            </div>
            <div className='d-flex flex-column'>
              <b>Free Shipping</b>
              <span>Free Dedlivery worldwide</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='flex'>
            <div>
              <img src={heading4} alt="" />
            </div>
            <div className='d-flex flex-column'>
              <b>Free Shipping</b>
              <span>Free Dedlivery worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heading
