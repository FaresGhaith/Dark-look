import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
function Footer() {
  return (
    <footer className='Footer'>
    <div className="container ">
    <div className='top'>
      <div>
        <b>Follow Our Updates !</b>
        <p>Be the First to know about our Fresh Arrivals and much more!</p>
      </div>
      <div>
        <input type="text" placeholder='Enter Your Email'/>
        <div>
        <b>SUBSCRIBE</b>
        </div>
      </div>
     </div>

     <div className="center">
      <div className="row g-3">
        <div className="col-3">
          <b>Information</b>
          <div>
            <p>About Us</p>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="col-3">
          <b>Services</b>
          <div>
            <p>Returns</p>
            <p>Site Map</p>
            <p>Wish List</p>
            <p>My Account</p>
            <p>Order History</p>
          </div>
        </div>
        <div className="col-3">
          <b>Extras</b>
          <div>
            <p>Brands</p>
            <p>Gift Certificates</p>
            <p>Affiliates</p>
            <p>Specials</p>
            <p>Newsletter</p>
          </div>
        </div>
        <div className="col-3">
          <b>Contacts</b>
          <div>
            <p>Warehouse & Offices,</p>
            <p>12345 Street name, California USA</p>
            <p>(+024) 666 888</p>
            <p>yourid@domain.com</p>
            <p>www.yoursite.com</p>
          </div>
        </div>
      </div>
     </div>

     <div className="bottom">
      <div className="icons1">
        <FaFacebook  className='icon'/>
        <FaGoogle className='icon'/>
        <FaLinkedinIn className='icon'/>
        <FaTwitter className='icon'/>
        <FaInstagram className='icon'/>
      </div>
      <b style={{opacity:'0.6'}}>@ 2025 All Rights Reserved Darklook</b>
      <div className="icons2 flex gap-3 fs-5" style={{opacity: '0.6'}}>
        <FaCcPaypal />
        <FaCcVisa />
        <FaCcDiscover />
        <FaCcMastercard />
        <SiAmericanexpress />
      </div>
     </div>
    </div>
    </footer>
  )
}

export default Footer
