import React from 'react'

function MyList1() {
    const lista = ["Rojo", "Azul", "Amarillo", "Negro"]

    return (
        <div>MyList1
            <p> Opción Lista1</p>
            <p> empezamos recorrer la lista </p>
            <hr />
            <ul>
                <li> {lista[0]}</li>
                <li> {lista[1]}</li>
                <li> {lista[2]}</li>
                <li> {lista[3]}</li>
            </ul>



        </div>
    )
}

export default MyList1