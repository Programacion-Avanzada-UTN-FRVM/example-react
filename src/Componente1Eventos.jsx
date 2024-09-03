import React from 'react'

function Componente1Eventos() {

    const handleClick = (name) => {
        alert(`Hola ${name}, Buenas Tardes!!`);
    };

    const handleDoubleClick = (name) => {
        alert(`Hola ${name}, Buenas Noches!!`);
    };

    return (
        <div>
            <h1> Eventos </h1>

            <hr />
            <h1> Clik </h1>

            <button onClick={() => alert("Hola Buenas Tardes!!")}
                  >Click
            </button>

            <hr />

            <button onClick={() => handleClick('Juan')}>
                Click con parametro
            </button>

            <hr />
            <h1> Doble clik </h1>

            <button onDoubleClick={() => alert("Hola Buenas Noches!!")}
            >Click
            </button>

            <hr />

            <button onDoubleClick={() => handleDoubleClick('Juan Juan')}>
                Click con parametro
            </button>
        </div>
    )
}

export default Componente1Eventos
