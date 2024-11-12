import React, { useState } from 'react';


function Contador (){
    
    const [valor, setValor] = useState(0);

    const incrementarValor= e=>{
        setValor(valor+1);
    }
    const decrementarValor= e=>{
        setValor(valor-1);
    }

   
    return(
        <div>
            <h3>Contador</h3>
            <strong>{valor}</strong><br></br>
            <button onClick={incrementarValor}>Aumentar</button>
            <button onClick={decrementarValor}>Disminuir</button>
        </div>
    )
}
export default Contador;