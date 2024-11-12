import React, { useState } from 'react';


function MiSegundoEstado (){
    
    const [nombre, setNombre] = useState('');

    const handleChange =(e) =>{
        setNombre(e.target.value);
    };

    return(
        <div>
            <h1>Formulario de Nombre</h1>
            <input
                type='text'
                placeholder='Escriba su nombre'
                value={nombre}
                onChange={handleChange}
            
            ></input>
            <p>Hola, {nombre ? nombre: "extraño"}</p>
        </div>

    )
}
export default MiSegundoEstado;