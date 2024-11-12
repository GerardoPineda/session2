import React, { useState } from 'react';

function ListaNombres(){
    const [lista, setLista] = useState([]);

    const [nuevoNombre, setNuevoNombre] = useState('');

    const agregarNombre = (e) => {
        setNuevoNombre(e.target.value);
    };
    
    const guardarNombre =() =>{
        if(nuevoNombre.trim()){
            setLista([...lista, nuevoNombre]);
            setNuevoNombre('');
        }
    };

    return (
        <div>
          <h2>Lista de Tareas</h2>
          <input
            type="text"
            value={nuevoNombre}
            onChange={agregarNombre}
            placeholder="Escriba una tarea"
          />
          <button onClick={guardarNombre}>Agregar a la lista</button>
          <ul>
            {lista.map((elemento, index) => (
              <li key={index}>{elemento}</li>
            ))}
          </ul>
        </div>
      );

}
export default ListaNombres;