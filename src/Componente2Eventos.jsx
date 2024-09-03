import React from 'react'

function Componente2Eventos() {
    const handleClick = (name) => {
        alert(`Hola ${name}, Buenas Tardes!!`);
    };

    const handleDoubleClick = (name) => {
        alert(`Hola ${name}, Buenas Noches!!`);
    };


    return (
        <div>
            <h1>Con Bootstrap</h1>
            <div className="d-grid gap-2 d-md-block">

                <button className="btn btn-primary" type="button"> Button </button>
                <br />

                {/* Botón para Click */}
                <button className="btn btn-primary mb-3" onClick={() => alert("Hola Buenas Tardes!!")}>
                    Click
                </button>
               
                <br />
                {/* Botón para Click con parámetro */}
                <button className="btn btn-primary mb-3" onClick={() => handleClick('Juan')}>
                    Click con parámetro
                </button>
                <br />
                {/* Botón para Doble Click */}
                <button className="btn btn-secondary mb-3" onDoubleClick={() => alert("Hola Buenas Noches!!")}>
                    Doble Click
                </button>
                <br />
                {/* Botón para Doble Click con parámetro */}
                <button className="btn btn-secondary mb-3" onDoubleClick={() => handleDoubleClick('Juan Juan')}>
                    Doble Click con parámetro
                </button>
            </div>
        </div>
    )
}

export default Componente2Eventos
