import { Link } from 'react-router-dom'
import './Shop.css'
import cat_img from '../../assets/images/left1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Products from '../Products'

import pro1 from '../../assets/images/product/product1.jpg'
import pro2 from '../../assets/images/product/product2.jpg'
import pro3 from '../../assets/images/product/product3.jpg'
import pro4 from '../../assets/images/product/product4.jpg'
import pro5 from '../../assets/images/product/product5.jpg'
import pro6 from '../../assets/images/product/product6.jpg'
import pro7 from '../../assets/images/product/product7.jpg'
import pro8 from '../../assets/images/product/product8.jpg'
import pro9 from '../../assets/images/product/product9.jpg'



import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";


import Shopti from '../ShopS/Shopti'
import Shoppro from '../ShopS/Shoppro'
import { useEffect, useRef, useState } from 'react'
import { spcificCat } from '../Projson'

function Shop({Changeflexd , flexd , alldata , cat , GetSpaCatofpro , GetSpurl , GetbackData , Changesoting , sort , Addtocart , AddtoWish}) {

 useEffect(()=>{
if(flexd === 'row'){
  row.current.classList.add('active')
  col.current.classList.remove('active')
  change.current.classList.remove('change')
}else{
  row.current.classList.remove('active')
  col.current.classList.add('active')
  change.current.classList.add('change')
}
 },[])


  const row = useRef(null)
  const col = useRef(null)
  const change = useRef(null)


  const ShowData = alldata.map((value , key)=>(
                 <div key={key}>
                  <Products AddtoWish={AddtoWish} Addtocart={Addtocart}  index={key} val={value}/>
                 </div>
  ));

  function ChangeFlex(state){
    if(state === 'row'){
      row.current.classList.add('active')
      col.current.classList.remove('active')
      change.current.classList.remove('change')
      Changeflexd('row')
    }else{
      row.current.classList.remove('active')
      col.current.classList.add('active')
      change.current.classList.add('change')
      Changeflexd('column')

    }
  }
  return (
    <div className='Shop container'>
      <div className="pageHeading">
        <div>
          <Link to={''} onClick={GetbackData}>Prouducts</Link>
        </div>
        <div>Home / <span>Prouducts</span></div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-3">
            <div className="cate">
              <div className="ti">
                Top Categories
              </div>
                <div class="cat-list">
                   {spcificCat.map((el,index)=>(
                    <a  href="#" key={index} onClick={e=>GetSpaCatofpro(index)}>{el.category} </a>
                   ))}
                   {cat.map((el,index)=>(
                    <a href="#" key={index} onClick={e=>GetSpurl(el.url)}>{el.name}</a>
                   ))}
                </div>
                               
            </div>
            <img src={cat_img} alt="" className='w-100 mt-3' />
            <div className="Pp">
             <Shopti/>
                  <Swiper
                   modules={[Autoplay , Pagination , Navigation ]}
                   autoplay={{
                    delay: 4000,
                   }}
                   navigation={{
                    prevEl:' .Slide-left',
                    nextEl:' .Slide-right'
                   }}
                  >
              <SwiperSlide>
              <Shoppro img={pro1} price={100}/>
              <Shoppro img={pro2} price={200}/>
              <Shoppro img={pro3} price={300}/>
              </SwiperSlide>
              <SwiperSlide>
              <Shoppro img={pro4} price={400}/>
              <Shoppro img={pro5} price={500}/>
              <Shoppro img={pro6} price={600}/>
              </SwiperSlide>
              <SwiperSlide>
              <Shoppro img={pro7} price={700}/>
              <Shoppro img={pro8} price={800}/>
              <Shoppro img={pro9} price={900}/>
              </SwiperSlide>
            </Swiper>
            </div>
          </div>
          <div className="col-9">
            <div className="sort d-flex justify-content-between py-2 px-5 border">
              <div className="flex gap-3">
                <div className='icons active 'onClick={()=>ChangeFlex('row')} ref={row}>
                <BsFillGrid3X3GapFill/>
                </div>
                <div className='icons 'onClick={()=>ChangeFlex('column')} ref={col}>
                <FaList/>
                </div>
              </div>
              <div className='flex gap-3'>
                <span style={{whiteSpace : 'nowrap'}}>Sort By:</span>
                <select defaultValue={sort} className='form-control bg-dark text-light py-1 'onChange={e=>Changesoting(e , alldata)}>
                  <option value="Default">Default</option>
                  <option value="Name(A-Z)">Name(A-Z)</option>
                  <option value="Name(Z-A)">Name(Z-A)</option>
                  <option value="Price(hight-low)">Price(hight-low)</option>
                  <option value="Price(low-hight)">Price(low-hight)</option>
                </select>
              </div>
            </div>
            <div className="container mt-3">
              <div className="row box"ref={change}>
                {ShowData}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
