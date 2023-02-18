
import React from 'react';
import NavBar from '../src/componentes/NavBar/NavBar';
import ItemListContainer from '../src/componentes/ItemListContainer/ItemListContainer';




function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"}/>
    </div>
  );
}

export default App;
