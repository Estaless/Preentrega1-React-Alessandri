import './estilos.css'
import { Link } from 'react-router-dom';
import React from 'react';



const Item = ({info}) => {
    

    return(
        <Link to={`/detalle/${info.id}`} className='Prod'>
            <img src={info.img} alt=""/>
            <p>{info.nombre}</p>
        </Link>
    )
}

export default Item;