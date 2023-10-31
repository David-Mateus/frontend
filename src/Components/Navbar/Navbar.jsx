import React from "react";
import './Navbar.css'
import { useState } from "react";

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";


const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>NOME-DA-ORG</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("lacos")}}><Link style={{textDecoration: 'none'}} to='/lacos'>Laços</Link>{menu==="lacos"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("fitas")}}><Link style={{textDecoration: 'none'}} to='/fitas'>Fitas</Link>{menu==="fitas"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("acessorios")}}><Link style={{textDecoration: 'none'}} to='/acessorios'>Acessorios</Link>{menu==="acessorios"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}
export default Navbar