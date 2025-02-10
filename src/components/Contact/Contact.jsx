import './Contact.css'
import cat_img from '../../assets/images/left1.jpg'
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
function Contact() {
  return (
    <div className='Contact'>
     <div className="container">
      <div className="row">
        <div className="col-3">
          <b className='ti'>Top Category</b>
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
            <img src={cat_img} alt="" className='w-100' />
          </div>
        </div>
        
          <div className="col-3">
            <div>
              <b className="tit">Our Location</b>
              <span>124,Lorem Ipsum has been</span>
              <span>text ever since the 1500</span>
              <span>Office address</span>
              <span><FaPhoneVolume/>+91-9987-654-321</span>
            </div>
            <div>
              <b className="tit">Careers</b>
              <span>dummy text ever since the 1500s,

simply dummy text of the

typesetting industry.</span>
              <span><MdEmail/>careers@yourdomain.com</span>
            </div>
            <div>
              <b className="tit">Say Hello</b>
              <span>simply dummy text of the printing and typesetting industry.,</span>
              <span><MdEmail/>info@yourdomailname.com</span>
            </div>
          </div>
          <div className="col-6">
            <div>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Phone' />
            <input type="text" placeholder='Subject' />
            <input type="text" placeholder='Subject' />
            </div>
          </div>

      </div>
     </div>
    </div>
  )
}

export default Contact
