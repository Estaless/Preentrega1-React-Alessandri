import './estilos.css';
import React,{useEffect ,useState} from 'react';


export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const disminuir = () => {
        setCount(count - 1);
        
    }

    const aumentar = () => {
        setCount(count + 1);
    }

    useEffect(()=> {
        setCount(parseInt(initial))
    }, [initial])

    return(
        <div className='Contador'>
            <button disabled={count <= 0} onClick={disminuir}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={aumentar}>+</button>
            <div>
                <button disabled={stock <=0} onClick={() => onAdd(count)}> Agregar al carrito </button>
            </div>
        </div>
    )
}

export default ItemCount;