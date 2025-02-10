import { Link } from 'react-router-dom'
import './Singleblog.css'
import cat_img from '../../assets/images/left1.jpg'
import blog1 from '../../assets/images/blog/blog_img_01.jpg'
import blog2 from '../../assets/images/blog/blog_img_02.jpg'
import blog3 from '../../assets/images/blog/blog_img_03.jpg'
import blog4 from '../../assets/images/blog/blog_img_04.jpg'
function Singleblog() {
  return (
    <div className='Singleblog container'>
      <div className="pageHeading">
        <div>
          <Link to={'/blog'}>Blog</Link>
        </div>
        <div>Home / <span>Blog</span> / <b style={{color : '#fff'}}>title</b></div>
      </div>
      <div className="row mt-5">
        <div className="col-3">
           <b className='ti'>Top Brands</b>
                    <div>
                      <p>brand-1</p>
                      <p>brand-2</p>
                      <p>brand-3</p>
                      <p>brand-4</p>
                      <p>brand-5</p>
                      <p>brand-6</p>
                      
                      <img src={cat_img} alt="" className='w-100' />
                    </div>
                    <b className='ti mt-3'>Top Category</b>
          <div>
            <p>Category-1</p>
            <p>Category-2</p>
            <p>Category-3</p>
            <p>Category-4</p>
            <p>Category-5</p>
            <p>Category-6</p>
            <p>Category-7</p>
            <p>Category-8</p>
            <p>Category-9</p>
            <p>Category-10</p>
          </div>

          <b className='ti mt-5'>latest post</b>
          <div className="container">
            <div className="card1  flex d-flex">
              
                <img src={blog1} alt="" />
              
              <div className='details'>
                <p>Fashions fade, style is eternal</p>
                <span>11 May 2023</span>
              </div>
            </div>
            <div className="card1 mt-4 flex d-flex">
              
                <img src={blog2} alt="" />
              
              <div className='details'>
                <p>Fashions fade, style is eternal</p>
                <span>11 May 2023</span>
              </div>
            </div>
            <div className="card1 mt-4 flex d-flex">
              
                <img src={blog3} alt="" />
              
              <div className='details'>
                <p>Fashions fade, style is eternal</p>
                <span>11 May 2023</span>
              </div>
            </div>
            <div className="card1 mt-4 flex d-flex">
              
                <img src={blog4} alt="" />
              
              <div className='details'>
                <p>Fashions fade, style is eternal</p>
                <span>11 May 2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="card">
            <div className="card-img">
              <img src={blog1} alt="" />
            </div>
            <div className="card-body">
              <b>Fashions fade, style is eternal</b>
              <span className='mt-3'>consectetur adipiscing elit. In rutrum odio urna, vitae ultrices mi malesuada ut. Praesent lacus erat, ultricies ut risus nec, pellentesque interdum purus. In mi justo, consectetur tincidunt sapien eget, venenatis volutpat risus. Maecenas eget pretium eros. Integer tincidunt aliquet ligula in vulputate. Ut ut justo facilisis, vulputate augue vel, vestibulum tortor. Nullam varius lacus non porttitor sodales. Vivamus ultricies est vitae pharetra convallis. Sed suscipit, nisi sit amet tempus mollis, mauris ante tempor risu

etur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectet</span>
            </div>
          </div>
        </div>
    </div>
    </div> 
  )
}

export default Singleblog
