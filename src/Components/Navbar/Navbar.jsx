import React from "react";
import './Navbar.css'
import { useState } from "react";

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>NOME-DA-ORG</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("laços")}}>Laços{menu==="laços"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("fitas")}}>Fitas{menu==="fitas"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("acs")}}>Acessorios{menu==="acs"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}
export default Navbar