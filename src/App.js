
import Cart from './componentes/Cart';
import React from 'react';
import NavBar from '../src/componentes/NavBar/NavBar';
import ItemListContainer from '../src/componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">


    <BrowserRouter>
      <NavBar />

      <Routes>
       
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"}/>} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={"Bienvenidos"}/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>} />
      </Routes>

    </BrowserRouter>

    </div>
  );
}

export default App;
