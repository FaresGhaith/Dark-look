import './Latest.css'

import {Swiper , SwiperSlide} from 'swiper/react'


import { Autoplay, Navigation }from 'swiper/modules'

import blog1 from '../../assets/images/blog/blog_img_01.jpg'
import blog2 from '../../assets/images/blog/blog_img_02.jpg'
import blog3 from '../../assets/images/blog/blog_img_03.jpg'
import blog4 from '../../assets/images/blog/blog_img_04.jpg'
import blog5 from '../../assets/images/blog/blog_img_05.jpg'
import blog6 from '../../assets/images/blog/blog_img_06.jpg'
import blog7 from '../../assets/images/blog/blog_img_07.jpg'
import blog8 from '../../assets/images/blog/blog_img_08.jpg'
import Blogs from '../Blogs';
import Sectitle from '../Sectitle'

function Latest() {
  return (
    <section className='Latest container'>
      <Sectitle sectitle={'Latest News'}/>
      
      <Swiper
       breakpoints={{
        768: {
          slidesPerView: 1,
        },
      }}
      spaceBetween={50}
      modules={[Autoplay , Navigation]}
      autoplay={{
        delay: 4000,
      }}
      navigation={{
        prevEl:'.Latest .Slide-left',
        nextEl:'.Latest .Slide-right'
       }}
      >
        <SwiperSlide className='mt-3'>
          <Blogs img={blog1} day={8} />
        </SwiperSlide>
        <SwiperSlide className='mt-3'>
          <Blogs img={blog2} day={9}/>
        </SwiperSlide>
        <SwiperSlide className='mt-3'>
          <Blogs img={blog3}  day={10}/>
        </SwiperSlide>
        <SwiperSlide className='mt-3'>
          <Blogs img={blog4} day={11}/>
        </SwiperSlide>
        <SwiperSlide className='mt-3'>
          <Blogs img={blog5}  day={12}/>
        </SwiperSlide>
        <SwiperSlide className='mt-3'>
          <Blogs img={blog6}  day={13}/>
        </SwiperSlide>
        <SwiperSlide className='mt-3'>
          <Blogs img={blog7} day={15}/>
        </SwiperSlide>
        <SwiperSlide className='mt-3'>
          <Blogs img={blog8}  day={16}/>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Latest
