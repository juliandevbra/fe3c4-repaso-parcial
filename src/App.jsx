import { useState } from "react";
import "./App.css";
import Espectaculo from "./Components/Espectaculo";
import { espectaculos } from "./espectaculos";
import Form from "./Components/Form";

function App() {
  const [isSelected, setIsSelected] = useState({
    artista: null,
    status: false,
  });

  return (
    <div>
      {isSelected.status ? <Form artista={isSelected.artista} /> : null}
      {espectaculos.map((espectaculo) => (
        <Espectaculo
          key={espectaculo.id}
          setIsSelected={setIsSelected}
          espectaculo={espectaculo}
        />
      ))}
    </div>
  );
}

export default App;

//Componentes
//Props
//Estados
//Eventos
//Map
//Formularios
