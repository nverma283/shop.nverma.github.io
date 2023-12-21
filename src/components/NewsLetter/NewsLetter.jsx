import React from "react";   /* this file is created by me newsletter's html*/ 
import './NewsLetter.css';


const NewsLetter = ()=>{
    return(
        <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p> Subscribe To Our News Letter And Stay Update</p>
        <div>
            <input type="email" placeholder="Your Email Id" />
            <button>Subscribed</button>
        </div>
        </div>
    )
}



export default NewsLetter
