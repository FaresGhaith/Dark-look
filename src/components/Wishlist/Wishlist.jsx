import './Wishlist.css'
import { spcificCat } from '../Projson'
import { Link } from 'react-router-dom'
import cat_img from '../../assets/images/left1.jpg'
import pro1 from '../../assets/images/product/product1.jpg'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";

function Wishlist({GetSpaCatofpro , GetSpurl , cat , Addtocart , wish , delWish}) {
  return (
    <div className='Wishlist container'>
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
        <div className="col-9 mt-5">
          <div className="container">
            {wish.length>0?
<>
{wish.map((val , i)=>(

<div className="cardd mt-2">
  <img src={val.img || val.thumbnail} alt="" className='w-100' />
  <div><span>{val.title}</span></div>
  <div className='mt-4'>
    <button onClick={()=>delWish(i , val)}><IoMdCloseCircleOutline/></button>
    <button onClick={()=>Addtocart(val)}><FaCartFlatbedSuitcase/></button>
  </div>
</div>
))}
</>
            :
            <div className='text-danger fs-3 text-uppercase text-center'>There is No Proudct in your WishList</div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist
