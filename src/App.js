import './App.css';
import React from 'react';
import ItemCount from './components/itemCount';
import NavBar from './components/navBar';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h2>MagiaCakes</h2>
      <ItemCount></ItemCount>
    
    </div>
  )
}

export default App;
