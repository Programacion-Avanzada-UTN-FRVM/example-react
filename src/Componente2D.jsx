import React from 'react'

function Componente2D({tarjeta}) {
  return (
    <div className="Componente2D">
    <hr/>  
  
    <h1>Comunicacion entre componentes con objetos desectructurado</h1>
    <ul>
       <li> Apellido : {tarjeta.apellido}  </li>
       <li> Nombre   : {tarjeta.nombre}  </li>
       <li> Edad     : {tarjeta.edad}  </li>
    </ul>

 </div>
  )
}

export default Componente2D
