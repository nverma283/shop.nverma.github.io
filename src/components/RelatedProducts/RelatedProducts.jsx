import React from "react";   /* this file is created by me related ka html h*/ 
import './RelatedProducts.css';
import data_product from '../Assets/Assets/data';
import Item from "../Item/Item";



const RelatedProducts = ()=>{
    return(
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr/>
            <div className="relatedproducts-item">
                {data_product.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>



                    
                })}
            </div>
        
        </div>
    )
}



export default RelatedProducts

