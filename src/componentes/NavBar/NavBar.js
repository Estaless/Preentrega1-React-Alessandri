import React from "react";
import CartWidget from "../CardWidget/CardWidget";
import './estilos.css'

export const NavBar = () => {
    return(
<header>
    <div className="NavBar">
       
        <ul className="menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
        </ul>     
        
        <div className="cart">
            <CartWidget/>
        </div>

    </div>
</header>    
    )
}

export default NavBar;
