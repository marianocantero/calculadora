import React, { useState, useEffect } from 'react';
import { Formulario } from './componets/Formulario';
import { Header } from './componets/Header';
import { Listado } from './componets/Listado';
import { Total } from './componets/Total';


function App() {


  

  




  return (
    <div className="App">
      <Header />
      <div className="container">
        <Formulario  />
        <Listado />
      </div>
      <Total />
    </div>
  );
}

export default App;
