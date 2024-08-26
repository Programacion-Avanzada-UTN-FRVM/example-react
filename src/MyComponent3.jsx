import React from 'react'

function MyComponent3() {
    let usuario = {
        nombre: "juanjose",
        rol: "admin plus"
    }

    return (
        <div>MyComponent3
            <hr/>
            <p> Opción 3</p>
            <hr/>
            <ul>
                <li> nombre del usuario <strong> {usuario.nombre}  </strong>    </li>
                <li> rol <b> {usuario.rol} </b> </li>
            </ul>
        </div>
    )
}

export default MyComponent3