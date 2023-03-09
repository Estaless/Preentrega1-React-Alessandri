import ItemCount from '../ItemCount/index';
import productos from '../../stock';
import './estilos.css'
import ItemList from '../ItemList/ItemList';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';



function ItemListContainer ({greeting}) {

    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });
        if(categoriaId){
            getData.then(res => setData(res.filter(producto => producto.categoria === categoriaId)));
        } else{
            getData.then(res => setData(res)) 
        }

    
       

    }, [categoriaId])


    

  
    return(
        <div className="listcontainer">
            <h3>{greeting}</h3>
           
            <ItemList data={data} />
        </div>

    )
}




export default ItemListContainer;


