import React from 'react'
import pic1 from '../Assets/240_F_277304950_m2UpW5QJmsTNDoEylhBmG3rljuBtYUGA.jpg'
import pic2 from '../Assets/240_F_679658169_1WS6B1vKp02TUW6dm0JDHaYVYamOxnEs.jpg'
import pic3 from '../Assets/240_F_68533066_PYa50hMrSVJQvU5nkjVOQAK1judrFf5U.jpg'
import pic4 from '../Assets/Seasons of Scent - A Lovely Inconsequence.jpeg'
import './Imgsec.css'

const imgsec = () => {
  return (
    <div className='imgsec-wrapper'>
        <div className="img1">
            <img src={pic1} alt="" srcset="" />
            <h4>Seasonal Scents</h4>
        </div>
        <div className="img2">
            <img src={pic2} alt="" srcset="" />
            <h4>Travel With Creed</h4>
        </div>
        <div className="img3">
            <img src={pic3} alt="" srcset="" />
            <h4>24/7</h4>
        </div>
        <div className="img4">
            <img src={pic4} alt="" srcset="" />
            <h4>One Spray <br /> Wonder</h4>
        </div>
    </div>
  )
}

export default imgsec

