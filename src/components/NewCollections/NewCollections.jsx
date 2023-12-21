import React from "react";   /* this file is created by me html of newcollections*/ 
import './NewCollections.css';
import new_collection from '../Assets/Assets/new_collections'; /* jo file assets k folder me h new_collections k name se */ 
import Item from "../Item/Item";




const NewCollections = ()=>{
    return(
        <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
            {new_collection.map((item,i)=>{
            return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>


            })}

        </div>
        </div>
    )
}



export default NewCollections

