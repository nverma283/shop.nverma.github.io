import React, { useContext } from "react";   //* this file is created by me this is html of productdisplay*/ 
import './ProductDisplay.css';
import star_icon from '../Assets/Assets/star_icon.png';
import star_dull_icon from '../Assets/Assets/star_dull_icon.png'; 
import { ShopContext } from "../../context/ShopContext";
   //kisi bhi image pr click karne pr 4 image pic dikhe 4 star dikhe niche jo fill h


const ProductDisplay = (props)=>{
  const{product} = props;
  const {addToCart} = useContext(ShopContext);

    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/> 
                </div>

                <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt=""/> 
                    </div>               
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_dull_icon} alt=""/>
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdiplay-right-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and with a round 
                    neckline and short sleeves, worn as an undershirt or outer garment.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    </div>
                    <div className="productdisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
            
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
               <p className="productdisplay-right-category"><span>Category :</span>Women , T-shirt Crop Top</p>
               <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
                </div>
        
        </div>
    )
}



export default ProductDisplay

