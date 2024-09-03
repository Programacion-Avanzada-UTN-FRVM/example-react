import React from 'react'

function Componente3Eventos() {
    return (
        <div>
            <h1>Componente3Eventos</h1>
            <br>
            </br>
            <p>
                <input type="text"
                   onFocus={() => console.log("Estas dentro del input")}
                   onBlur={() => console.log("Estas fuera del input")}
                   onChange={() => console.log("Estas cambiando el input")} 
                   placeholder='escribe algo...'     
               /> 
                

            </p>
        </div>
    )
}

export default Componente3Eventos
