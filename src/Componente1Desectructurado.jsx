import React from 'react'

function Componente1Desectructurado({apellido,nombre,edad}){
  return (
    <div className="Componente1">

       <h1>Comunicacion entre componentes desectructurado </h1>
       <ul>
          <li> Apellido : {apellido}  </li>
          <li> Nombre   : {nombre}  </li>
          <li> Edad     : {edad}  </li>
       </ul>

    </div>
  )
}

export default Componente1Desectructurado
