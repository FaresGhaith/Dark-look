import './logo.css'
import { IoIosSearch } from "react-icons/io";
import logo from '../../../assets/images/logo.png'
import { FaCartPlus } from "react-icons/fa";
import pro from '../../../assets/images/product/product1-1.jpg'
import pro2 from '../../../assets/images/product/product2.jpg'
import pro3 from '../../../assets/images/product/product3.jpg'
import { MdCancel } from "react-icons/md";
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function Logo({cart , otherChangeamount , delpro}) {
 const DropCart1 = useRef(null)
 function toggledropcart(){
  DropCart1.current.classList.toggle('open')
}
let total = 0
  return (
    <div className='Logo container'>
      <div className='flex tr justify-content-between py-4 '>
        <div className=' yh position-relative'>
        <input type="text" placeholder='Search' className='form-control py-1  border border-secondery rounded-0' />
        <IoIosSearch className='icon position-absolute top-0 end-0 'style={{transform:'translate(-50% , 50%)'}} />
        </div>
        <div>
          <div>
            <img src={logo} alt="" />
          </div>
         
        </div>
        <div className='Shoppin position-relative'>
          <div className='flex gap-3' onClick={toggledropcart}>
          <FaCartPlus className='cart' />
          <div className='d-flex flex-column gap-0 'style={{lineHeight:'1.2'}}>
            <p  className='m-0  p-0'>Shopping Cart</p>
            <span className='m-0 p-0 '>items({cart.length})</span>
          </div>
          </div>
          <div className='Dropdowncart position-absolute end-0 px-3' ref={DropCart1}>
            <div className="row">
              <div className="col-12">
                {cart.length? cart.map((el , index) => {
                  total += el.price * el.amount
                  return(

                <div key={index} className="row border-bottom border-secondary py-2 ">
                  <div className="col-10">
                    <div className="row g-2">
                      <div className="col-4">
                        <div>
                          <img src={el.img || el.thumbnail} alt="" className='card-img'/>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className='d-flex flex-column gap-1'>
                          <b>{el.title}</b>
                          <p className='m-0'>${el.price * el.amount}</p>
                          <div className='d-flex gap-2'>
                            <button onClick={()=>otherChangeamount('plus' , el)} className='btn btn-dark rounded-1 btn-sm'>+</button>
                            <span>{el.amount}</span>
                            <button onClick={()=>otherChangeamount('minus' , el)} className='btn btn-dark rounded-1 btn-sm'>-</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-1">
                  <MdCancel onClick={()=>delpro(el)} className='close ' />
                  </div>
                </div>
                  )
                
                
})
                : 
                <div className='text-danger  text-center'>There is No Proudct in your Cart</div>
              }
              
              </div>
              <div className="col-12">
                <div className="flex justify-content-around">
                  <div className='text-dark fontw-bold '>Total</div>
                  <div className='text-dark fontw-bold '>${total.toFixed(2)}</div>
                </div>
              </div>
              <div className="col-12">
                <button className='btn btn-dark w-100 rounded-0 '><Link style={{textDecoration : 'none' , color : 'white'}} to={'/cart'}>Show Cart</Link></button>
              </div>
            </div>

          </div>
          </div>
      </div>
    </div>
  )
}

export default Logo
