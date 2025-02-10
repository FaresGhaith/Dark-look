import './Cart.css'
import { spcificCat } from '../Projson'
import { Link } from 'react-router-dom'
import { CiCircleRemove } from "react-icons/ci";
import cat_img from '../../assets/images/left1.jpg'

import { useRef } from 'react';

function Cart({GetSpaCatofpro , GetSpurl , cat , cart , delpro , delall ,  Changeamount}) {
  console.log(cart);
  
  let total = 0

  return (
    <div className='Cart container'>
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
                  <img src={cat_img} alt="" className='w-100 mt-4' />

      </div>
      <div className="col-9">
        {cart.length>0?

    <>
    <table className='mt-5'>
    <thead>
      <tr>
        <th>Image</th>
        <th>Product Name</th>
        <th>Catagory</th>
        <th>Quantity</th>
        <th>Unit Price</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
        {cart.map((val , i)=>{
          total += val.price * val.amount
          return(
      <tr key={i}>
          
        <td class="image-col">
          <img src={val.img || val.thumbnail} alt="" />
        </td>
        <td class="product-name-col">{val.title?.split('  ').slice(0 , 2).join(' ')}</td>
        <td class="category-col">{val.category}</td>
        <td class="quantity-col flex w-100">
        <input type="number" onChange={ e =>  Changeamount(e , val)} defaultValue={val.amount} min={1} />
        <div onClick={()=>delpro(i , val)}>
          <CiCircleRemove/>
        </div>
        </td>
        <td class="unit-price-col">${val.price}</td>
        <td class="total-col">${val.price * val.amount}</td>
      </tr>

          )
})}
    </tbody>
  </table>
  <button onClick={delall} className='btn btn-danger mt-2 py-2 px-5'>Remove All</button>
  <div className="total d-flex mt-5">
    <div>
    <span>Total:</span>
    <span>${total.toFixed(2)}</span>
    </div>
  </div>
    </>
    :
    <div className='text-danger fs-3 text-uppercase text-center'>There is No Proudct in your Cart</div>
        }
      </div>
    </div>
  </div>
  )
}

export default Cart
