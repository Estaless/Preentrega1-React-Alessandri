import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from '../ItemCount/index';


export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();


    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
        <div className="container">
            <div className="detail">
                <img className="detail_img" src={data.img} alt="" />
                <div className="content">
                    <h1>{data.nombre}</h1>
                    {
                       goToCart
                       ? <Link to="/cart">Terminar compra</Link> 
                       : <ItemCount initial={0} stock={10} onAdd={onAdd} />

                    }
                    
                </div>
            </div>

       </div>
    )
}

export default ItemDetail;