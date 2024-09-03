import React from 'react'
import PropTypes from "prop-types";

function Componente1V({apellido, nombre,edad}) {
    return (
        <div>
            <div className="Componente1V">

                <h1>Comunicacion entre componentes utilizando proptypes </h1>
                <ul>
                    <li> Apellido : {apellido}  </li>
                    <li> Nombre   : {nombre}  </li>
                    <li> Edad     : {edad}  </li>
                </ul>

            </div>
        </div>
    )
}

Componente1V.propTypes = {
    apellido: PropTypes.string.isRequired, 
    nombre: PropTypes.string, 
    edad: PropTypes.number
}


export default Componente1V

