import './Blog.css'
import cat_img from '../../assets/images/left1.jpg'
import blog1 from '../../assets/images/blog/blog_img_01.jpg'
import blog2 from '../../assets/images/blog/blog_img_02.jpg'
import blog3 from '../../assets/images/blog/blog_img_03.jpg'
import blog4 from '../../assets/images/blog/blog_img_04.jpg'
import blog5 from '../../assets/images/blog/blog_img_05.jpg'
import blog6 from '../../assets/images/blog/blog_img_06.jpg'
import blog7 from '../../assets/images/blog/blog_img_07.jpg'
import blog8 from '../../assets/images/blog/blog_img_08.jpg'
import Blogs from '../Blogs'
import { Link } from 'react-router-dom'
function Blog({}) {
  return (
    <div className='Blog container'>
      <div className="pageHeading">
        <div>
          <Link to={''}>Blog</Link>
        </div>
        <div>Home / <span>Blog</span></div>
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
          <div className="cont">
          <Blogs   id={0} img={blog1} day={2}/>
          <Blogs  id={1} img={blog2} day={2}/>
          <Blogs  id={2} img={blog3} day={2}/>
          <Blogs  id={3} img={blog4} day={2}/>
          <Blogs  id={4} img={blog5} day={2}/>
          <Blogs  id={5} img={blog6} day={2}/>
          <Blogs  id={6} img={blog7} day={2}/>
          <Blogs  id={7} img={blog8} day={2}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
