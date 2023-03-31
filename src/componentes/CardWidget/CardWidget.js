
import {FaShoppingCart} from 'react-icons/fa';

import './estilos.css'
import React from 'react';
import { useCartContext } from '../../context/CartContext';



export const CartWidget = () => {
const {totalProducts} = useCartContext();

return(
    <div>

    
        <div>
            <i  className='CartW'>
                <FaShoppingCart className="icono" />
                <span className='span'> {totalProducts() || "0"}  </span> 
             </i>
        </div>
       
    
    </div>
    )
}



export default CartWidget;