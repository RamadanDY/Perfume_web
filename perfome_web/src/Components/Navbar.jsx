import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import pic from '../Assets/creed logo.png';
import './Navbar.css'


const Navbar = () => {
  return (
    <div className="nav-wrapper">
        <div className="text-wrapper ">
            <h3>INFO</h3>
            <h3>EXPLORE</h3>
            <h3>FAQ</h3>
        </div>

        <div className="logo-wrapper">
            <img src={pic} className='logo' alt='' />
        </div>

        <div className="icons">
            <div className="info">
                <IoPersonOutline />
            </div>
            <span className='font-bold text-2xl'>|</span>
            <div className="cart">
                <TiShoppingCart />
            </div> 
        </div>
        
    </div>
  )
}

export default Navbar