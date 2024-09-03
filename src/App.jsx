import Componente1 from "./Componente1"
import Componente1Desectructurado from "./Componente1Desectructurado"
import Componente1V from "./Componente1V"
import Componente2 from "./Componente2"
import Componente2D from "./Componente2D"


function App() {
    const tarjeta_personal ={
         apellido:"Perez Martinez ",
         nombre:"Juan J." ,
         edad:"26"
    }
  return (
    <>
      <Componente1 apellido="Perez" nombre="Juan" edad="25"/>
      <Componente2 tarjeta={tarjeta_personal}/>
      <Componente1Desectructurado apellido="Perez" nombre="Juan" edad="25"/>
      <Componente2D tarjeta={tarjeta_personal}/>

      <Componente1V apellido="Perz" nombre="Juan" edad="35"/>
    </>
  )
}

export default App
