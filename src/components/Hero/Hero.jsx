import React from "react";   /* this file is created by me  hero's html*/ 
import './Hero.css'
import hand_icon from '../Assets/Assets/hand_icon.png';
import arrow_icon from '../Assets/Assets/arrow.png';
import hero_image from '../Assets/Assets/hero_image.png';




const Hero = ()=>{
    return(
        <div className="hero">
            <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt=""/>
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt=""/>
            </div>
            </div>
        
            <div className="hero-right">
                <img src={hero_image} alt=""/>
            </div>
        </div>
    )
}



export default Hero
