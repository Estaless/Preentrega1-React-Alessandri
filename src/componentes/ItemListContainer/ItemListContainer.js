import './estilos.css'

function ItemListContainer ({greeting}) {
    return(
        <div className="listcontainer">
            <h3>{greeting}</h3>
        </div>
    )
}

export default ItemListContainer;