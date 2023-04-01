import React from "react";
import "../ItemCart/estilos.css";
import { useCartContext } from "../../context/CartContext";

const ItemCart = ({ productos }) => {
    const {removeProduct} = useCartContext();

    return(
        <div className="ItemCart">
            <img src={productos.img} alt={productos.nombre}/>
            <div>
                <p> Titulo: {productos.nombre}</p>
                <p>Cantidad: {productos.cantidad}</p>
                <p>Precio u.: $ {productos.precio}</p>
                <p>Subtotal: $ {productos.cantidad * productos.precio} </p>
                <button onClick={()=> removeProduct(productos.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;