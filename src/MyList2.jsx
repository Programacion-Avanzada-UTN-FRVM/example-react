import React from 'react'

function MyList2() {
    const lista = ["Rojo", "Azul", "Amarillo", "Negro"]
 
    return (
        <div>MyList2

        <p> Opción Lista2</p>
            <hr />
            <p> empezamos recorrer la lista con map</p>
            <ul>
                 {lista.map((color, index) => 
                        <li key={index}>{color}</li>)}

            </ul>


    </div>
  )
}

export default MyList2