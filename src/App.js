import './App.css';
import React from 'react';
import ItemCount from './components/itemCount';
import NavBar from './components/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h2>MagiaCakes</h2>
      <ItemCount></ItemCount>
      <h3>Productos Promocionales</h3>
      <ItemListContainer className = "itemListContainer" />
      <ItemDetailContainer className ="itemDetailContainer"/>
      
    </div>
  )
}

export default App;
