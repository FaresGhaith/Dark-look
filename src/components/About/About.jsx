import img from '../../assets/images/about-page-gaando.jpg'
import cat_img from '../../assets/images/left1.jpg'
import './About.css'
import { spcificCat } from '../Projson'
import { Link } from 'react-router-dom'
import {Swiper , SwiperSlide} from 'swiper/react'
import Sectitl from '../Sectitle'
import user1 from '../../assets/images/user1.jpg'
import user2 from '../../assets/images/user2.jpg'
import user3 from '../../assets/images/user3.jpg'
import user4 from '../../assets/images/user4.jpg'
import user5 from '../../assets/images/user5.jpg'
import user6 from '../../assets/images/user6.jpg'
import user7 from '../../assets/images/user7.jpg'
import user8 from '../../assets/images/user8.jpg'

import {  Autoplay, Navigation, Pagination  } from 'swiper/modules'

function About({GetSpaCatofpro , GetSpurl , cat}) {
  return (
    <div className='About'>
      <div className="container">
      <div className="row">
         <div className="col-3">
                  <b className='ti'>Top Category</b>
                  <div class="cat-list">
                    {spcificCat.map((el,index)=>(
                                        <Link  to={'/shop'} key={index} onClick={e=>GetSpaCatofpro(index)}>{el.category} </Link>
                                       ))}
                                       {cat.map((el,index)=>(
                                        <Link to={'/shop'} key={index} onClick={e=>GetSpurl(el.url)}>{el.name}</Link>
                                       ))}
                  </div>
                  <img src={cat_img} alt="" className='w-100  mt-5'/>
                  <div className='mt-4'>
                  <b className='ti '>Top Brands</b>
                  <a href="#">brand-1</a>
                  <a href="#">brand-2</a>
                  <a href="#">brand-3</a>
                  <a href="#">brand-4</a>
                  <a href="#">brand-5</a>
                  <a href="#">brand-6</a>
                  </div>
         </div>
         <div className="col-lg-9">
          <div>
            <div>
              <img src={img} alt="" className='w-100' />
            </div>
            <b style={{textTransform : 'uppercase' , display : 'inline-block'}}className='fs-5 mt-3'>themini Design is Best Part of my Life</b>
            <p className='mt-3'style={{opacity : '0.5'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            <button className='btn1'>Hire Me</button>
          </div>

          <div class="skills-container mt-4">
        <h2>- Skills ..</h2>
        <div class="skill">
            <div class="skill-bar html"></div>
            <div class="skill-text">Html -80%</div>
        </div>
        <div class="skill">
            <div class="skill-bar css"></div>
            <div class="skill-text">Css - 90%</div>
        </div>
        <div class="skill">
            <div class="skill-bar javascript"></div>
            <div class="skill-text">JavaScript - 65%</div>
        </div>
        <div class="skill">
            <div class="skill-bar jquery"></div>
            <div class="skill-text">jQuery - 50%</div>
        </div>
        <div class="skill">
            <div class="skill-bar bootstrap"></div>
            <div class="skill-text">Bootstrap - 95%</div>
        </div>
        <div class="skill">
            <div class="skill-bar reactjs"></div>
            <div class="skill-text">React.js - 75%</div>
        </div>
           </div>

           <div className="swip container mt-5">
            <Sectitl sectitle={'Our Creative Team'}/>
            <Swiper className='mt-3 '
            slidesPerView={3}
            breakpoints={{
              // عندما يكون العرض أقل من 768 بكسل، اعرض شريحتين فقط
              15000000: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              // عندما يكون العرض أقل من 480 بكسل، اعرض شريحة واحدة فقط
              480: {
                slidesPerView: 1,
              },
            }}
            modules={[Autoplay , Pagination , Navigation ]}
            autoplay={{
             delay: 4000,
            }}
            navigation={{
             prevEl:' .Slide-left',
             nextEl:' .Slide-right'
            }}
            >
            <SwiperSlide >
            <div class="card">
            <div className="img">
            <img className='w-100' src={user1} alt="" />
            </div>
<div class="card-content mt-3">
<p class="card-subtitle">JavaScript Developer</p>
<b class="card-title">User one</b>
<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta numquam architecto quidem nesciunt vitae cum deserunt .....</p>
</div>
</div>
            </SwiperSlide>
            <SwiperSlide >
            <div class="card">
            <div className="img">
            <img className='w-100' src={user2} alt="" />
            </div>
<div class="card-content mt-3">
<p class="card-subtitle">JavaScript Developer</p>
<b class="card-title">User two</b>
<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta numquam architecto quidem nesciunt vitae cum deserunt .....</p>
</div>
</div>
            </SwiperSlide>
            <SwiperSlide >
            <div class="card">
            <div className="img">
            <img className='w-100' src={user3} alt="" />
            </div>
<div class="card-content mt-3">
<p class="card-subtitle">JavaScript Developer</p>
<b class="card-title">User three</b>
<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta numquam architecto quidem nesciunt vitae cum deserunt .....</p>
</div>
</div>
            </SwiperSlide>
            <SwiperSlide >
            <div class="card">
            <div className="img">
            <img className='w-100' src={user4} alt="" />
            </div>
<div class="card-content mt-3">
<p class="card-subtitle">JavaScript Developer</p>
<b class="card-title">User four</b>
<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta numquam architecto quidem nesciunt vitae cum deserunt .....</p>
</div>
</div>
            </SwiperSlide>
            <SwiperSlide >
            <div class="card">
            <div className="img">
            <img className='w-100' src={user5} alt="" />
            </div>
<div class="card-content mt-3">
<p class="card-subtitle">JavaScript Developer</p>
<b class="card-title">User five</b>
<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta numquam architecto quidem nesciunt vitae cum deserunt .....</p>
</div>
</div>
            </SwiperSlide>
            <SwiperSlide >
            <div class="card">
            <div className="img">
            <img className='w-100' src={user6} alt="" />
            </div>
<div class="card-content mt-3">
<p class="card-subtitle">JavaScript Developer</p>
<b class="card-title">User six</b>
<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta numquam architecto quidem nesciunt vitae cum deserunt .....</p>
</div>
</div>
            </SwiperSlide>
            <SwiperSlide >
            <div class="card">
            <div className="img">
            <img className='w-100' src={user7} alt="" />
            </div>
<div class="card-content mt-3">
<p class="card-subtitle">JavaScript Developer</p>
<b class="card-title">User seven</b>
<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta numquam architecto quidem nesciunt vitae cum deserunt .....</p>
</div>
</div>
            </SwiperSlide>
            <SwiperSlide >
            <div class="card">
            <div className="img">
            <img className='w-100' src={user8} alt="" />
            </div>
<div class="card-content mt-3">
<p class="card-subtitle">JavaScript Developer</p>
<b class="card-title">User eight</b>
<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta numquam architecto quidem nesciunt vitae cum deserunt .....</p>
</div>
</div>
            </SwiperSlide>
           </Swiper>
           </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default About
