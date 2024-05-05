import React from 'react'
import creed from '../Assets/creedPIC.jpeg'
import './Section.css'

const Section = () => {
  return (
    <div className='Section-wrapper'>
        <div className="alltex-wrapper">
            <div className="sec-wrapper">
                <div className='text-1'>Discover Timeless </div>
                <div className='text-2'> Elegance With Creed</div>
            </div>
            
            <div className='sub-wrapper'>
                elevate your essence with our signature <br/> collection of our best crafted fragrance
            </div>
            <button className='buy-btn'>Buy Now</button>
        </div>
        <div className="picture">
            <img src={creed} alt="" srcset="" />
        </div>

    </div>
  )
}

export default Section