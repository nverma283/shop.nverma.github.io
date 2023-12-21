import React from "react";   /* this file is created by me descriptionbox html. iska link product.jsx me h*/ 
import './DescriptionBox.css';


const DescriptionBox = ()=>{
    return(
        <div className="descriptionbox">
      <div className="descriptiobox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitate buying and selling of 
                products or services over the internet serves as a virtual marketplace where businesses and individual
                showcase their products, interact with customers, and conduct transactions without the need for physical
                presence. E-commerce websites have gained immense popularity due to their convenience accessibility,
                and the global reach they offer.
            </p>
            <p>
            An e-commerce website is one that allows people to buy and sell physical goods,
             services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website,
              a business can process orders,
             accept payments, manage shipping and logistics, and provide customer service.
            </p>
        </div>
        </div>
    )
}



export default DescriptionBox

