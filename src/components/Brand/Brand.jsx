import './Brand.css'
import Sectitle from '../Sectitle'
import {Swiper , SwiperSlide} from 'swiper/react'
import brand1 from '../../assets/images/brand/brand1.png'
import brand2 from '../../assets/images/brand/brand2.png'
import brand3 from '../../assets/images/brand/brand3.png'
import brand4 from '../../assets/images/brand/brand4.png'
import brand5 from '../../assets/images/brand/brand5.png'
import brand6 from '../../assets/images/brand/brand6.png'
import brand7 from '../../assets/images/brand/brand7.png'
import brand8 from '../../assets/images/brand/brand8.png'
import brand9 from '../../assets/images/brand/brand9.png'
import Llogo from '../Llogo'
import { Autoplay, Navigation } from 'swiper/modules'


function Brand() {
  return (
    <section className='Brand container'>
      <Sectitle sectitle={'Brand Logo'} />
      <Swiper
      
      breakpoints={{
        430: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay ,Navigation ]}
      autoplay={{
        delay: 3000,
      }}
      navigation={{
        prevEl:'.Brand .Slide-left',
        nextEl:'.Brand .Slide-right'
      }}
      >
        <SwiperSlide>
         <Llogo brand={brand1}/>
        </SwiperSlide>
        <SwiperSlide>
         <Llogo brand={brand2}/>
        </SwiperSlide>
        <SwiperSlide>
         <Llogo brand={brand3}/>
        </SwiperSlide>
        <SwiperSlide>
         <Llogo brand={brand4}/>
        </SwiperSlide>
        <SwiperSlide>
         <Llogo brand={brand5}/>
        </SwiperSlide>
        <SwiperSlide>
         <Llogo brand={brand6}/>
        </SwiperSlide>
        <SwiperSlide>
         <Llogo brand={brand7}/>
        </SwiperSlide>
        <SwiperSlide>
         <Llogo brand={brand8}/>
        </SwiperSlide>
        <SwiperSlide>
         <Llogo brand={brand9}/>
        </SwiperSlide>
        
      </Swiper>

    </section>
  )
}

export default Brand
