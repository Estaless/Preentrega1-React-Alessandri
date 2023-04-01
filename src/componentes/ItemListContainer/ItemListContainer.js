import ItemCount from '../ItemCount/index';
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore"
import './estilos.css'
import ItemList from '../ItemList/ItemList';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';



function ItemListContainer ({greeting}) {

    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
       
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "productos");
        
         if(categoriaId){
           const queryFilter = query(queryCollection, where("categoria", "==", categoriaId))
           getDocs(queryFilter)
                .then(res => setData(res.docs.map(productos => ({id: productos.id, ...productos.data() }))))
        } else{
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(productos => ({id: productos.id, ...productos.data() }))))
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


