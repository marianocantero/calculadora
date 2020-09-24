import React, { useState } from 'react'

export const Formulario = () => {

  );
    

    
  
    return (
        <div  className="formulario">

            <h2>Formualrio aqui</h2>

            <form>
                <label>Nombre Factura:</label>
                <input 
                type="text" 
                name="nombre" 
                className="input" 
                placeholder="Ej. Luz, Gas"
                onChange={ e => guardarNombre(e.target.value) }
                />
                <label>Precio:</label>
                <input 
                
                type="number" 
                name="precio" 
                className="input" 
                placeholder="Ej 300"
                onChange={ e => guardarPrecio( parseInt(e.target.value, 10)) }
                />
                
                <button
                 className="btn"
                 onClick={ handleSubmit }
                 >Calcular</button>

            </form>
         </div>
    
    )
}
