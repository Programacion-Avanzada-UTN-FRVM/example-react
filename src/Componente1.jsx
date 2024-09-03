import React from 'react'

function Componente1(props){
  return (
    <div className="Componente1">

       <h1>Comunicacion entre componentes</h1>
       <ul>
          <li> Apellido : {props.apellido}  </li>
          <li> Nombre   : {props.nombre}  </li>
          <li> Edad     : {props.edad}  </li>
       </ul>

    </div>
  )
}

export default Componente1
