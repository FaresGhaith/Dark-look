import './Child2.css'
import pro1 from '../../../assets/images/product/product1.jpg'
import pro1H from '../../../assets/images/product/product1-1.jpg'
import pro2 from '../../../assets/images/product/product2.jpg'
import pro2H from '../../../assets/images/product/product2-1.jpg'
import pro3 from '../../../assets/images/product/product3.jpg'
import pro3H from '../../../assets/images/product/product3-1.jpg'
import pro4 from '../../../assets/images/product/product4.jpg'
import pro4H from '../../../assets/images/product/product4-1.jpg'
import pro5 from '../../../assets/images/product/product5.jpg'
import pro5H from '../../../assets/images/product/product5-1.jpg'
import pro6 from '../../../assets/images/product/product6.jpg'
import pro6H from '../../../assets/images/product/product6-1.jpg'
import pro7 from '../../../assets/images/product/product7.jpg'
import pro7H from '../../../assets/images/product/product7-1.jpg'
import pro8 from '../../../assets/images/product/product8.jpg'
import pro8H from '../../../assets/images/product/product8-1.jpg'
import pro9 from '../../../assets/images/product/product9.jpg'
import pro9H from '../../../assets/images/product/product9-1.jpg'
import pro10 from '../../../assets/images/product/product10.jpg'
import pro10H from '../../../assets/images/product/product10-1.jpg'
import Products from '../../Products'

import {Swiper , SwiperSlide} from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'



function Child2({alldata , Addtocart , AddtoWish}) {
  return (
    <div className="container">
    <Swiper
     className="row"
     breakpoints={{
      // عندما يكون العرض أقل من 1200 بكسل، اعرض 3 شرائح فقط
      1200: {
        slidesPerView: 3,
      },
      // عندما يكون العرض أقل من 992 بكسل، اعرض شريحتين فقط
      992: {
        slidesPerView: 2,
      },
      // عندما يكون العرض أقل من 768 بكسل، اعرض شريحة واحدة فقط
      768: {
        slidesPerView: 1,
      },
    }}
     modules={[Autoplay , Pagination , Navigation ]}
     autoplay={{
      delay: 4000,
     }}
     navigation={{
      prevEl:'.Featured .Slide-left',
      nextEl:'.Featured .Slide-right'
     }}

     >
      
      {alldata.slice(10 , 20).map((val , key)=>(

<SwiperSlide key={key} >
  <Products AddtoWish={AddtoWish} Addtocart={Addtocart} index={key} val={val}/>
</SwiperSlide>
))}

      
    </Swiper>
  </div>
  )
}

export default Child2
