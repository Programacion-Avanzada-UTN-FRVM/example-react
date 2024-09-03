import React from 'react'

function Componente2(props){
  return (
    <div className="Componente2">
       <hr/>  
     
       <h1>Comunicacion entre componentes con objetos</h1>
       <ul>
          <li> Apellido : {props.tarjeta.apellido}  </li>
          <li> Nombre   : {props.tarjeta.nombre}  </li>
          <li> Edad     : {props.tarjeta.edad}  </li>
       </ul>

    </div>
  )
}

export default Componente2
