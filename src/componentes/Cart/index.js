import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

import ItemCart from "../ItemCart"



const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if (cart.length === 0) {
        return (
            <>
            <p>No hay productos en el carrito</p>
            <Link to="/">Realizar compra</Link>
            </>
        )
    }
    return(

          <>
          {
            cart.map(productos => <ItemCart key={productos.id} productos={productos}/>)
          }
          
        <p>
            Total: {totalPrice()}
        </p>
          </>    
        
        
           
        
    )
}


export default Cart;