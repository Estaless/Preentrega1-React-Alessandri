import Item from '../Item/Item'
import React from 'react';

const ItemList = ({data = []}) => {
    return (
        data.map(prod => <Item key={prod.id} info={prod}/>)
    );
}

export default ItemList;