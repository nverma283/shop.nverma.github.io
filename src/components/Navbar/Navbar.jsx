//this file is made by me and folder also
import React, { useContext, useState } from "react";
import './Navbar.css'   //give css direc...
import logo from '../Assets/Assets/logo.png'
import cart_icon from '../Assets/Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";


const Navbar = () =>{

    const [menu,setMenu] = useState("shop");
    
//ye cart k pas wale red color ka quantity wala h
const {getTotalCartItems} = useContext(ShopContext);


    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt=""/>
                <p>SCOTTLANE SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=> {setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=> {setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=> {setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=> {setMenu("kids")}} ><Link style={{textDecoration:'none'}} to='/kids'>Kid</Link>{menu==="kids"? <hr/>:<></>}</li>
            </ul>

            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
               <Link to='/cart'><img src={cart_icon} alt=""/></Link> 
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}





export default Navbar  // this line ritten by me