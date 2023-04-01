import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore} from "firebase/firestore";
import ItemCart from "../ItemCart"
import "../Cart/estilos.css"



const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const order = {
      buyer: {
        name: "Esteban",
        email: "esteban@gmail.com",
        phone: "15161718",
        address: "av. siempreviva"
      },
      items: cart.map(productos => ({ id: productos.id, nombre: productos.nombre, precio: productos.precio, cantidad: productos.cantidad })),
      total: totalPrice(),
    }

    const handleClick = () => {

      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order)
      .then(({id}) => console.log(id))

    }



    if (cart.length === 0) {
  
      return (
            <>
            <p>No hay productos en el carrito</p>
            <Link to="/" className="link">Realizar compra</Link>
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

        <button className="buttongenerarcompra" onClick={handleClick}  >Generar compra</button>
          </>    
        
        
       
        
    ) 
  
}


export default Cart;