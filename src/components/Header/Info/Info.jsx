import { FaChevronDown } from "react-icons/fa";

import './info.css'
import { useReducer, useRef } from "react";




function Info() {

const Drop_1 = useRef(null)
const Drop_2 = useRef(null)
const Dtoggle = (state)=>{
switch (state) {
  case 'one':
    Drop_1.current.classList.toggle('open')
    Drop_2.current.classList.remove('open')
    break;

  default:
    Drop_2.current.classList.toggle('open')
    Drop_1.current.classList.remove('open')
    break;
}
}
  return (
    <div className='Info border-bottom border-secondary '>
      <div className="container hh flex justify-content-between py-2 ">
      <div className=" hi text-uppercase">Days a week from 9:00 am to 7:00 pm</div>
      <div className="flex gap-3">
        <div>My Account</div>
        <div>
          <div onClick={e => Dtoggle('one')} style={{cursor : 'pointer'}}>

          Language<FaChevronDown />
          </div>
        <div className="Drop"ref={Drop_1}>
          <p>English</p>
          <p>Arabic</p>
        </div>
        </div>
        <div>
          <div onClick={e => Dtoggle('two')} style={{cursor : 'pointer'}}>

          Currncy<FaChevronDown />
          </div>
        <div className="Drop"ref={Drop_2}>
          <p>€ Euro</p>
          <p>£ Pound </p>
          <p>$ Us Dollar</p>
        </div>
        </div>
      </div>

      </div>
     
    </div>
  )
}

export default Info
