import {FaShoppingCart} from 'react-icons/fa';
import {FcShipped} from 'react-icons/fc'
import './estilos.css'


function CartWidget () {
    return(
    <div>

    
        <div>
            <a href='#' className='CartW'>
                <FaShoppingCart className="icono" />
                <span className='span'> 0 </span> 
             </a>
        </div>
        <div> 
            <p className='parrafo'>Tenemos envio gratis</p>
            <a href='#' className='envio'>
                <FcShipped className='icono2'/>
            </a>
           
        </div>
    
    </div>
    )
}



export default CartWidget;