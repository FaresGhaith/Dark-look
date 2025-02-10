import './SingleApp.css'
import { spcificCat } from '../Projson'
import { Link, Outlet, useParams } from 'react-router-dom'
import Stars from '../Stars'
import { FaHeart } from "react-icons/fa";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";

import pro1 from '../../assets/images/product/product1.jpg'
import pro2 from '../../assets/images/product/product2.jpg'
import pro3 from '../../assets/images/product/product3.jpg'
import pro4 from '../../assets/images/product/product4.jpg'
import pro5 from '../../assets/images/product/product5.jpg'
import pro6 from '../../assets/images/product/product6.jpg'
import pro7 from '../../assets/images/product/product7.jpg'
import pro8 from '../../assets/images/product/product8.jpg'
import pro9 from '../../assets/images/product/product9.jpg'
import { useRef, useState } from 'react';
import { useEffect } from 'react';

function SingleApp({GetSpaCatofpro , GetSpurl , cat , alldata , Addtocart , AddtoWish}) {
const[pro , SetPro] = useState({})
let bi = useRef(null)
let {index} = useParams()

useEffect(()=>{
SetPro(alldata[index])
})

function ChangeBack(e){
  let old = bi.current.getAttribute('src')
bi.current.setAttribute('src' , e.target.src)
e.target.setAttribute('src' , old)
}



  return (
    <div className='SingleApp'>
      <div className="container">
      <div className="pageHeading">
        <div>
          <Link to={''} >Prouducts</Link>
        </div>
        <div>Home / <Link style={{fontSize : '18px'}} to={'/shop'}>Prouducts</Link> / <b style={{color : '#fff'}}>{pro.title}</b></div>
      </div>
        <div className="row">
          <div className="col-lg-3">
          <b className='ti'>Top Category</b>
                  <div class="cat-list">
                    {spcificCat.map((el , index)=>(
                       <Link  to={'/shop'} key={index} onClick={e=>GetSpaCatofpro(index)}>{el.category} </Link>
                    ))}
                    {cat.map((el , index)=>(
                      <Link to={'/shop'} key={index} onClick={e=>GetSpurl(el.url)}>{el.name}</Link>
                    ))}
                  </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-6 mt-5">
                <div className='card'>
                  <div>
                  <img src={pro.img || pro.thumbnail} alt="" className='card-img'ref={bi} />
                  </div>
                  </div>
                  <div className="moreI mt-4">
                  {pro.images?.map((img , i)=>(
                    <div>
                     <img onClick={ChangeBack} src={img} alt="" className='' />
                    </div>

                  ))}
                  </div>
              </div>
              <div className="col lg-3">
                <div className="container">
                <div className="info1 container  ">
                  <b>{pro.title}</b>
                  <Stars/>
                  <p>${pro.price}</p>
                </div>
                <div className="info2 container mt-3">
                  <div>
                    <b>Categrory:</b>
                    <p>{pro.category}</p>
                  </div>
                  <div>
                    <b>Rating:</b>
                    <p>{pro.rating}%</p>
                  </div>
                  <div>
                    <b>Avaliablity:</b>
                    <p>avaliable</p>
                  </div>
                </div>
                <div className="info3 container mt-3">
                  <p>{pro.description}</p>
                </div>
                <div className="info4 container mt-3">
                  <button onClick={()=>Addtocart(pro)}>Add To Cart  <FaCartFlatbedSuitcase/></button>
                  <button onClick={()=>AddtoWish(pro)}>Add To Wish  <FaHeart/></button>
                </div>
                </div>

              </div>
            </div>
            <div className="more container mt-5">
              <div>
                <Link to={''} className='active'   >OverView</Link>
                <Link to={'nested-2'} >Review</Link>
                <Link to={'nested-3'} >solution</Link>
              </div>
            </div>
      <Outlet/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleApp
