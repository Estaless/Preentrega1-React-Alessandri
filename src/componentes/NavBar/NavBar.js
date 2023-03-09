import React from "react";
import CartWidget from "../CardWidget/CardWidget";
import './estilos.css'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import productos from "../../stock";

export const NavBar = () => {
    return(
<header>
    <div className="NavBar">
    
        <ul className="menu">

        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/categoria/tortas">Tortas</NavLink></li>
        <li><NavLink to="/categoria/alfajores">Alfajores</NavLink></li>
        <li><NavLink to="cart">Carrito</NavLink></li>
        
        </ul>     
        
        <div className="cart">
            <CartWidget/>
        </div>

    </div>
</header>    
    )
}

export default NavBar;
