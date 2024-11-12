import React, {useState} from 'react';

export const MiPrimerEstado =() =>{
    const [nombre, setNombre] = useState("Gerardo Pineda");

    const cambiarNombre= e=>{
        setNombre("Vinicio Garcia");
    }

    /*let nombre = "Gerardo Pineda";

    function cambiarNombre(){
        nombre= "Vinicio Garcia";
        console.log("Validacion");
    }*/
    return(
        <div>
            <h3>Componente: Mi primer estado</h3>
            <strong>{nombre}</strong><br></br>
            <button onClick={cambiarNombre}>Cambiar</button>
        </div>
    )
}
