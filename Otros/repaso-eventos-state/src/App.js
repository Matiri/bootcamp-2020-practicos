import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const [mostrarP, setMostrarP] = useState(true);

  const mostrarAlert = (evento) => {
    alert(valorDelInput);
  };

  const mostrarTextoIngresado = (evento) => {
    setValorDelInput(evento.target.value);
  };

  const clickEnBotonOcultarP = () => {
    setMostrarP(false);
  };

  return (
    <div>
      <button onClick={mostrarAlert}>Mostrar alert</button>
      <input
        type="text"
        onChange={mostrarTextoIngresado}
        value={valorDelInput}
      />
      <button onClick={clickEnBotonOcultarP}>Ocultar p</button>
      {mostrarP === true && valorDelInput !== "" && <p>{valorDelInput}</p>}
    </div>
  );
};

export default App;
